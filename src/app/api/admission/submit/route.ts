import { NextResponse } from "next/server";

import {
  callSite,
  guardianLabel,
  toSubmittedApplication,
  type UploadPayload,
} from "@/lib/admission-api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type StudentForm = {
  studentFullName?: string;
  studentBanglaName?: string;
  dateOfBirth?: string;
  gender?: string;
  bloodGroup?: string;
  religion?: string;
  nationality?: string;
  birthRegistrationNumber?: string;
  selectedClass?: string;
  previousSchool?: string;
  previousClass?: string;
  presentAddress?: string;
  permanentAddress?: string;
};

type GuardianForm = {
  fatherName?: string;
  fatherOccupation?: string;
  fatherNid?: string;
  fatherPhone?: string;
  motherName?: string;
  motherOccupation?: string;
  motherNid?: string;
  motherPhone?: string;
  guardianName?: string;
  guardianRelation?: string;
  guardianPhone?: string;
  guardianEmail?: string;
  emergencyContact?: string;
  guardianPresentAddress?: string;
};

type SubmitBody = {
  student?: StudentForm;
  guardian?: GuardianForm;
  program?: string;
  register?: string;
  studentPhoto?: UploadPayload | null;
  guardianPhoto?: UploadPayload | null;
  documents?: UploadPayload[];
};

type SiteState = Record<string, unknown>;

/** The gender master holds English values; the form asks in Bengali. */
const GENDER_VALUES: Record<string, string> = {
  পুরুষ: "Male",
  নারী: "Female",
  অন্যান্য: "Other",
  male: "Male",
  female: "Female",
  other: "Other",
};

const text = (value: unknown) => String(value ?? "").trim();

const digits = (value: unknown) => text(value).replace(/[^\d]/g, "");

/** "Rahim Uddin Ahmed" → first name plus the rest; a Bengali name stays whole and goes to its own cell. */
const splitName = (fullName: string) => {
  const parts = fullName.split(/\s+/).filter(Boolean);

  if (!parts.length) {
    return { firstName: "", lastName: "" };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
};

const valuesOf = (body: SubmitBody) => {
  const student = body.student ?? {};
  const guardian = body.guardian ?? {};

  const mobile = digits(guardian.guardianPhone) || digits(guardian.fatherPhone);
  const { firstName, lastName } = splitName(text(student.studentFullName));

  return {
    // who the applicant is
    first_name: firstName,
    last_name: lastName,
    student_name_bn: text(student.studentBanglaName),
    date_of_birth: text(student.dateOfBirth),
    gender: GENDER_VALUES[text(student.gender).toLowerCase()] ?? GENDER_VALUES[text(student.gender)] ?? "",
    blood_group: text(student.bloodGroup),
    religion: text(student.religion),
    nationality: text(student.nationality),
    birth_registration_no: text(student.birthRegistrationNumber),
    previous_school: text(student.previousSchool),
    previous_class: text(student.previousClass),
    address_line_1: text(student.presentAddress),
    address_line_2: text(student.permanentAddress),
    // how the school reaches the family — the form has no separate student phone or email
    student_mobile_number: mobile,
    mobile,
    guardian_mobile: mobile,
    email: text(guardian.guardianEmail),
    guardian_email: text(guardian.guardianEmail),
    emergency_contact: digits(guardian.emergencyContact),
    // the guardians
    father_name: text(guardian.fatherName),
    father_phone: digits(guardian.fatherPhone),
    father_nid: digits(guardian.fatherNid),
    father_occupation: text(guardian.fatherOccupation),
    mother_name: text(guardian.motherName),
    mother_phone: digits(guardian.motherPhone),
    mother_nid: digits(guardian.motherNid),
    mother_occupation: text(guardian.motherOccupation),
    guardian_name: text(guardian.guardianName),
    guardian_relation: text(guardian.guardianRelation),
    guardian_phone: digits(guardian.guardianPhone),
    guardian_address: text(guardian.guardianPresentAddress),
    // which intake this is against
    program: text(body.program),
    admission_register: text(body.register),
  };
};

const FALLBACK_MESSAGE = "আবেদন জমা দেওয়া যায়নি। আবার চেষ্টা করুন।";

/**
 * POST /api/admission/submit — file the application on the school's site, then attach the papers.
 *
 * Two steps on purpose. The applicant is filed first and the scans are posted afterwards, because a
 * file the school cannot open is worth less than an application it can read: if an attachment fails the
 * parent still gets a real application number and a list of what to send again, instead of losing the
 * whole form. Nothing here fakes success — the number shown on the page is the site's own record name.
 */
export const POST = async (request: Request) => {
  let body: SubmitBody;

  try {
    body = (await request.json()) as SubmitBody;
  } catch {
    return NextResponse.json({ ok: false, message: FALLBACK_MESSAGE }, { status: 200 });
  }

  const values = valuesOf(body);

  if (!values.first_name) {
    return NextResponse.json(
      { ok: false, message: "শিক্ষার্থীর পূর্ণ নাম আবশ্যক।" },
      { status: 200 }
    );
  }

  if (values.student_mobile_number.length < 10) {
    return NextResponse.json(
      { ok: false, message: "অভিভাবকের সঠিক মোবাইল নম্বর আবশ্যক।" },
      { status: 200 }
    );
  }

  if (!values.program) {
    return NextResponse.json(
      { ok: false, message: "ভর্তির শ্রেণি নির্বাচন করা আবশ্যক।" },
      { status: 200 }
    );
  }

  let filed = await callSite<SiteState>("shikkha_chat.api.admission_public.submit_application", {
    values,
  });

  // A site whose Gender master holds different values would refuse the whole application over one
  // cell; the applicant is worth more than that cell, so it is dropped and filed once more.
  if (!filed.ok && /gender/i.test(filed.message)) {
    const withoutGender: Record<string, string> = { ...values };
    delete withoutGender.gender;

    filed = await callSite<SiteState>("shikkha_chat.api.admission_public.submit_application", {
      values: withoutGender,
    });
  }

  if (!filed.ok) {
    return NextResponse.json({ ok: false, message: filed.message || FALLBACK_MESSAGE }, { status: 200 });
  }

  const applicationNo = text(filed.data.application_no);
  const mobile = values.student_mobile_number;
  const warnings: string[] = [];

  const attach = async (file: UploadPayload | null | undefined, kind: string, label: string) => {
    if (!file?.content || !file?.name || !applicationNo) {
      return;
    }

    const attached = await callSite<{ file_url?: string }>(
      "shikkha_chat.api.admission_public.attach_application_file",
      {
        application_no: applicationNo,
        mobile,
        filename: file.name,
        content: file.content,
        kind,
      }
    );

    if (!attached.ok) {
      warnings.push(`${label}: ${attached.message}`);
    }
  };

  await attach(body.studentPhoto, "photo", "শিক্ষার্থীর ছবি");

  // The guardian picture only has a home once a guardian row exists, so it is skipped when the school
  // keeps no guardian records — the answer says so rather than reporting a paper that went nowhere.
  const filedGuardians = Array.isArray(filed.data.guardians) ? filed.data.guardians : [];
  const guardians = filedGuardians.map(guardianLabel).filter((label) => Boolean(label));
  if (body.guardianPhoto?.content) {
    if (guardians.length) {
      await attach(body.guardianPhoto, "guardian_photo", "অভিভাবকের ছবি");
    } else {
      warnings.push("অভিভাবকের ছবি: অভিভাবক তথ্য সংরক্ষণ করা যায়নি, তাই ছবিটি যুক্ত হয়নি।");
    }
  }

  for (const [index, document] of (body.documents ?? []).entries()) {
    await attach(document, "document", `ডকুমেন্ট ${index + 1} (${text(document?.name)})`);
  }

  return NextResponse.json(
    {
      ok: true,
      application: toSubmittedApplication(filed.data, guardians),
      duplicate: Boolean(filed.data.duplicate),
      warnings,
    },
    { status: 200 }
  );
};
