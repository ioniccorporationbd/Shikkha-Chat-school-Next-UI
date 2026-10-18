import { NextResponse } from "next/server";

import { callSite, toOpenProgram } from "@/lib/admission-api";

/** Always live: the cards say which intake is open *today*, so nothing here may be cached. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

type SitePrograms = {
  today?: string;
  open?: boolean;
  count?: number;
  total?: number;
  programs?: Record<string, unknown>[];
};

/**
 * GET /api/admission/programs — the classes a parent may actually apply to.
 *
 * The page's own list of classes is marketing copy; this one comes from the school's `Program` records
 * with the open `Admission Register` behind each card, so a class with no open intake is shown as closed
 * instead of failing only after the parent has filled in everything.
 */
export const GET = async () => {
  const result = await callSite<SitePrograms>("shikkha_chat.api.admission_public.list_open_programs");

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, message: result.message, programs: [] },
      { status: 200 }
    );
  }

  const rows = Array.isArray(result.data?.programs) ? result.data.programs : [];

  return NextResponse.json(
    {
      ok: true,
      today: result.data?.today ?? "",
      open: Boolean(result.data?.open),
      count: Number(result.data?.count ?? 0),
      total: Number(result.data?.total ?? rows.length),
      programs: rows.map(toOpenProgram),
    },
    { status: 200 }
  );
};
