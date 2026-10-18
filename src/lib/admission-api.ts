/**
 * Server-side bridge to the Shikkha Chat Frappe site.
 *
 * The browser never talks to Frappe directly: it posts to this app's own route handlers, which run on
 * the server and call the site's whitelisted public methods. That keeps the site URL out of the
 * bundle, keeps the guest methods off a cross-origin path, and gives one place to normalise whatever
 * the site answers. Only the public admission methods live here — nothing that needs a session.
 */

export type OpenProgram = {
  program: string;
  label: string;
  abbreviation: string;
  available: boolean;
  register: string;
  fee: number;
  currency: string;
  endsOn: string;
  academicYear: string;
};

export type SubmittedApplication = {
  applicationNo: string;
  status: string;
  statusLabel: string;
  program: string;
  register: string;
  fee: number;
  currency: string;
  submittedOn: string;
  guardians: string[];
};

export type AdmissionResult<T> =
  | { ok: true; data: T }
  | { ok: false; message: string };

/** What one attachment looks like on the wire: the file's own name plus base64 of its bytes. */
export type UploadPayload = { name: string; content: string };

const DEFAULT_SITE = "https://erp.shikkhachat.com";
const TIMEOUT_MS = 45_000;

export const siteUrl = () =>
  (
    process.env.FRAPPE_SITE_URL ||
    process.env.NEXT_PUBLIC_FRAPPE_SITE_URL ||
    DEFAULT_SITE
  ).replace(/\/+$/, "");

/**
 * Frappe answers a failed call with HTTP 4xx/5xx (or 200 with `exc`), and the human sentence lives in
 * `_server_messages` as JSON-in-JSON with HTML in it. Pull out the first real sentence and strip the
 * markup, because the page shows it to a parent, not to a developer.
 */
const readableError = (payload: unknown, fallback: string) => {
  const body = payload as
    | { _server_messages?: string; exc?: string; exception?: string; message?: string }
    | undefined;

  if (typeof body?._server_messages === "string") {
    try {
      const messages = JSON.parse(body._server_messages) as string[];
      const first = messages.find((item) => typeof item === "string" && item.trim());

      if (first) {
        const parsed = JSON.parse(first) as { message?: string };
        const text = String(parsed.message ?? first)
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        if (text) {
          return text;
        }
      }
    } catch {
      // Fall through to the other shapes below.
    }
  }

  for (const candidate of [body?.message, body?.exception, body?.exc]) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
  }

  return fallback;
};

/**
 * Call one whitelisted method on the site.
 *
 * `params` is posted as a JSON body, so a nested object (the application's `values`) arrives as a dict
 * on the Frappe side instead of a JSON string the backend would have to parse again.
 */
export const callSite = async <T>(
  method: string,
  params: Record<string, unknown> = {}
): Promise<AdmissionResult<T>> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${siteUrl()}/api/method/${method}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(params),
      signal: controller.signal,
      cache: "no-store",
    });

    const text = await response.text();
    let payload: unknown = null;

    try {
      payload = text ? JSON.parse(text) : null;
    } catch {
      payload = null;
    }

    const body = payload as { message?: unknown; exc?: string } | null;

    if (!response.ok || body?.exc) {
      const sentence = readableError(
        payload,
        "বিদ্যালয়ের সার্ভার এখন সাড়া দিচ্ছে না। কিছুক্ষণ পর আবার চেষ্টা করুন।"
      );
      const excType = (payload as { exc_type?: unknown } | null)?.exc_type;

      // An unhandled error on the site answers with a bare `{"exc_type": "KeyError"}`. A parent cannot
      // act on that, but dropping it leaves whoever deploys the backend with nothing to search for, so
      // the type rides along after the sentence they can read.
      return {
        ok: false,
        message:
          typeof excType === "string" && excType.trim()
            ? `${sentence} (সার্ভার ত্রুটি: ${excType.trim()})`
            : sentence,
      };
    }

    const message = (body?.message ?? payload) as T;

    if (message === null || message === undefined) {
      return {
        ok: false,
        message: "বিদ্যালয়ের সার্ভার থেকে কোনো উত্তর আসেনি। আবার চেষ্টা করুন।",
      };
    }

    return { ok: true, data: message };
  } catch (error) {
    const aborted = error instanceof Error && error.name === "AbortError";

    return {
      ok: false,
      message: aborted
        ? "সার্ভার উত্তর দিতে বেশি সময় নিচ্ছে। একটু পর আবার চেষ্টা করুন।"
        : "বিদ্যালয়ের সার্ভারের সাথে সংযোগ করা যাচ্ছে না। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।",
    };
  } finally {
    clearTimeout(timer);
  }
};

/** Normalise one card of `list_open_programs` — the site's own field names, camelCased for the UI. */
export const toOpenProgram = (row: Record<string, unknown>): OpenProgram => ({
  program: String(row.program ?? row.program_name ?? "").trim(),
  label: String(row.program_label ?? row.program ?? "").trim(),
  abbreviation: String(row.program_abbreviation ?? "").trim(),
  available: Boolean(row.available),
  register: String(row.register ?? "").trim(),
  fee: Number(row.fee ?? 0) || 0,
  currency: String(row.currency ?? "").trim(),
  endsOn: String(row.ends_on ?? "").trim(),
  academicYear: String(row.academic_year ?? "").trim(),
});

/**
 * One guardian as the school filed them, for the receipt: `"Abul Kalam (বাবা)"`.
 *
 * `submit_application` answers with `{guardian, name, relation}`; an older response (or a site whose
 * guardian child table is unavailable) can be a bare record name, which is kept rather than dropped.
 */
export const guardianLabel = (row: unknown): string => {
  if (typeof row === "string") return row.trim();
  if (!row || typeof row !== "object") return "";

  const record = row as { name?: unknown; guardian_name?: unknown; relation?: unknown };
  const name = String(record.name ?? record.guardian_name ?? "").trim();
  const relation = String(record.relation ?? "").trim();
  const relationBn = GUARDIAN_RELATION_LABELS[relation.toLowerCase()] ?? relation;

  if (!name) return "";
  return relationBn && relationBn !== "অন্যান্য" ? `${name} (${relationBn})` : name;
};

const GUARDIAN_RELATION_LABELS: Record<string, string> = {
  father: "বাবা",
  mother: "মা",
  guardian: "অভিভাবক",
  others: "অন্যান্য",
};

/** Normalise the state `submit_application` answers with. */
export const toSubmittedApplication = (
  row: Record<string, unknown>,
  guardians: string[] = []
): SubmittedApplication => ({
  applicationNo: String(row.application_no ?? row.name ?? "").trim(),
  status: String(row.status ?? "").trim(),
  statusLabel: String(row.status_label_bn ?? row.status_label ?? row.status ?? "").trim(),
  program: String(row.program ?? "").trim(),
  register: String(row.register ?? "").trim(),
  fee: Number(row.fee ?? 0) || 0,
  currency: String(row.currency ?? "").trim(),
  submittedOn: String(row.submitted_on ?? "").trim(),
  guardians: guardians.filter((name) => Boolean(name)),
});
