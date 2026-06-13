import Link from "next/link";

type PlanItem = {
  id: string;
  title: string;
  description: string;
};

const planItems: PlanItem[] = [
  {
    id: "১",
    title: "নিরাপদ ও সুরক্ষিত ক্যাম্পাস পরিকল্পনা",
    description:
      "ছাত্রীদের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিয়ে প্রধান প্রবেশদ্বার নিয়ন্ত্রণ, ভিজিটর রেজিস্ট্রেশন, নারী নিরাপত্তা কর্মী, সিসিটিভি নজরদারি, আইডি কার্ডভিত্তিক প্রবেশ ব্যবস্থা এবং ক্যাম্পাসের প্রতিটি গুরুত্বপূর্ণ স্থানে পর্যাপ্ত আলোর ব্যবস্থা রাখা হবে।",
  },
  {
    id: "২",
    title: "শ্রেণিকক্ষ ও একাডেমিক ব্লক পরিকল্পনা",
    description:
      "প্রতিটি শ্রেণির জন্য পর্যাপ্ত আলো-বাতাসযুক্ত, পরিচ্ছন্ন, আরামদায়ক ও শিক্ষাবান্ধব শ্রেণিকক্ষ তৈরি করা হবে। প্রাথমিক, নিম্ন মাধ্যমিক ও মাধ্যমিক স্তরের জন্য আলাদা একাডেমিক জোন রাখা হবে, যাতে বয়সভিত্তিক শিক্ষার পরিবেশ সুন্দরভাবে নিশ্চিত হয়।",
  },
  {
    id: "৩",
    title: "নারীবান্ধব স্বাস্থ্য ও পরিচ্ছন্নতা ব্যবস্থা",
    description:
      "ছাত্রীদের জন্য নিরাপদ ও স্বাস্থ্যসম্মত টয়লেট, বিশুদ্ধ পানি, হাত ধোয়ার স্থান, স্যানিটারি ন্যাপকিন কর্নার, ইনসিনারেটর, পরিচ্ছন্নতা পর্যবেক্ষণ ব্যবস্থা এবং নিয়মিত স্বাস্থ্য সচেতনতা কার্যক্রম পরিচালনা করা হবে।",
  },
  {
    id: "৪",
    title: "বিজ্ঞান ল্যাব ও ব্যবহারিক শিক্ষা",
    description:
      "পদার্থ, রসায়ন ও জীববিজ্ঞানের জন্য পৃথক নিরাপদ বিজ্ঞানাগার স্থাপন করা হবে। ব্যবহারিক ক্লাসের জন্য প্রয়োজনীয় যন্ত্রপাতি, নিরাপত্তা নির্দেশনা, শিক্ষক তত্ত্বাবধান এবং হাতে-কলমে শেখার পরিবেশ নিশ্চিত করা হবে।",
  },
  {
    id: "৫",
    title: "আইসিটি, ডিজিটাল লার্নিং ও স্কিল ডেভেলপমেন্ট",
    description:
      "আধুনিক কম্পিউটার ল্যাব, ইন্টারনেট সুবিধা, ডিজিটাল কনটেন্ট, বেসিক কোডিং, গ্রাফিক্স, প্রেজেন্টেশন, অনলাইন লার্নিং এবং প্রযুক্তিনির্ভর দক্ষতা উন্নয়নের ব্যবস্থা রাখা হবে, যাতে ছাত্রীরা ভবিষ্যতের কর্মজীবনের জন্য প্রস্তুত হতে পারে।",
  },
  {
    id: "৬",
    title: "লাইব্রেরি ও রিডিং কালচার উন্নয়ন",
    description:
      "ছাত্রীদের পাঠাভ্যাস গড়ে তুলতে নীরব পাঠাগার, রিডিং কর্নার, সাহিত্য কর্নার, রেফারেন্স বই, সংবাদপত্র, ম্যাগাজিন, ই-বুক সুবিধা এবং নিয়মিত বইপাঠ প্রতিযোগিতা আয়োজন করা হবে।",
  },
  {
    id: "৭",
    title: "কাউন্সেলিং, মেন্টরিং ও মানসিক স্বাস্থ্য সহায়তা",
    description:
      "কৈশোরকালীন মানসিক পরিবর্তন, আত্মবিশ্বাস, ক্যারিয়ার পরিকল্পনা, ব্যক্তিগত সমস্যা ও পড়াশোনার চাপ মোকাবেলায় প্রশিক্ষিত শিক্ষক/কাউন্সেলরের মাধ্যমে নিয়মিত কাউন্সেলিং ও মেন্টরিং সাপোর্ট প্রদান করা হবে।",
  },
  {
    id: "৮",
    title: "খেলাধুলা ও শারীরিক বিকাশ",
    description:
      "ছাত্রীদের শারীরিক সুস্থতার জন্য ইনডোর ও আউটডোর খেলাধুলার ব্যবস্থা, ব্যাডমিন্টন, ভলিবল, অ্যাথলেটিক্স, যোগব্যায়াম, নিয়মিত পিটি ক্লাস এবং বার্ষিক ক্রীড়া প্রতিযোগিতার পরিকল্পনা রাখা হবে।",
  },
  {
    id: "৯",
    title: "সহশিক্ষা, সংস্কৃতি ও নেতৃত্ব বিকাশ",
    description:
      "বিতর্ক, আবৃত্তি, সংগীত, নৃত্য, চিত্রাঙ্কন, বিজ্ঞান মেলা, ভাষা প্রতিযোগিতা, গার্লস গাইড, রেড ক্রিসেন্ট, ক্লাব কার্যক্রম এবং নেতৃত্ব উন্নয়নমূলক প্রোগ্রামের মাধ্যমে ছাত্রীদের আত্মপ্রকাশের সুযোগ তৈরি করা হবে।",
  },
  {
    id: "১০",
    title: "অভিভাবক যোগাযোগ ও শিক্ষার্থী পর্যবেক্ষণ ব্যবস্থা",
    description:
      "শিক্ষার্থী উপস্থিতি, ফলাফল, আচরণ, অগ্রগতি ও বিশেষ প্রয়োজন সম্পর্কে অভিভাবকদের নিয়মিত জানাতে SMS/অনলাইন পোর্টাল, অভিভাবক সভা, শিক্ষক-অভিভাবক পরামর্শ এবং প্রগ্রেস রিপোর্টিং ব্যবস্থা চালু করা হবে।",
  },
  {
    id: "১১",
    title: "পরিবহন ও নিরাপদ যাতায়াত ব্যবস্থা",
    description:
      "ছাত্রীদের নিরাপদ যাতায়াতের জন্য নির্দিষ্ট স্কুল বাস/ভ্যান ব্যবস্থাপনা, নারী সহকারী, রুট মনিটরিং, অভিভাবক অনুমোদিত পিকআপ ব্যবস্থা এবং স্কুল গেটের সামনে নিরাপদ ড্রপ-অফ ও পিকআপ জোন রাখা হবে।",
  },
  {
    id: "১২",
    title: "পরিবেশবান্ধব ও পরিচ্ছন্ন ক্যাম্পাস",
    description:
      "সবুজায়ন, ফুলের বাগান, বৃক্ষরোপণ, বর্জ্য ব্যবস্থাপনা, প্লাস্টিক ব্যবহার কমানো, বিশুদ্ধ পানির ব্যবস্থা, সৌরবিদ্যুৎ ব্যবহার এবং নিয়মিত পরিচ্ছন্নতা কার্যক্রমের মাধ্যমে সুন্দর ও স্বাস্থ্যকর ক্যাম্পাস গড়ে তোলা হবে।",
  },
];

export default function GirlsSchoolMasterPlanPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1f3347] antialiased">
      <section className="mx-auto w-full max-w-[1320px] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 xl:px-6">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16 md:mb-20 lg:mb-24">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#0e4a43] px-5 py-2 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a3833] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0e4a43]/30"
          >
            Back to Home
          </Link>

          <h1 className="mt-5 text-[28px] font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-[34px]">
            বালিকা বিদ্যালয় মাস্টার প্ল্যান
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#111827]" />
        </div>

        {/* Content Wrapper */}
        <div className="mx-auto max-w-[1180px] space-y-16 sm:space-y-20 md:space-y-24">
          {/* Overview Section */}
          <section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <article>
              <h2 className="mb-6 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
                পরিকল্পনার লক্ষ্য{" "}
                <span className="text-[#111827]">(Planning Goal)</span>
              </h2>

              <div className="space-y-7 text-justify text-[18px] font-medium leading-[1.95] tracking-[-0.01em] text-[#31465d] sm:text-[19px] sm:leading-[2] md:text-[20px] md:leading-[2.05] lg:text-[21px]">
                <p>
                  &quot;একটি নিরাপদ, আধুনিক, মর্যাদাপূর্ণ ও শিক্ষাবান্ধব
                  বালিকা বিদ্যালয় গড়ে তোলা, যেখানে প্রতিটি ছাত্রী জ্ঞান,
                  নৈতিকতা, আত্মবিশ্বাস, নেতৃত্ব ও জীবনদক্ষতার সমন্বয়ে
                  ভবিষ্যতের জন্য প্রস্তুত হবে।&quot;
                </p>

                <p>
                  বালিকা বিদ্যালয়ের মাস্টার প্ল্যান শুধু ভবন নির্মাণের
                  পরিকল্পনা নয়; এটি ছাত্রীদের শিক্ষা, নিরাপত্তা, স্বাস্থ্য,
                  মানসিক বিকাশ, নেতৃত্ব, প্রযুক্তি দক্ষতা এবং সামাজিক
                  সচেতনতার একটি পূর্ণাঙ্গ উন্নয়ন পরিকল্পনা। এই পরিকল্পনায়
                  মেয়েদের বয়সভিত্তিক প্রয়োজন, নিরাপদ চলাচল, স্বাস্থ্যসম্মত
                  পরিবেশ, আত্মসম্মান, শৃঙ্খলা ও ভবিষ্যৎ ক্যারিয়ার প্রস্তুতিকে
                  বিশেষভাবে গুরুত্ব দেওয়া হয়েছে।
                </p>
              </div>
            </article>

            <article>
              <h2 className="mb-6 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
                মূল দৃষ্টিভঙ্গি{" "}
                <span className="text-[#111827]">(Core Vision)</span>
              </h2>

              <div className="space-y-7 text-justify text-[18px] font-medium leading-[1.95] tracking-[-0.01em] text-[#31465d] sm:text-[19px] sm:leading-[2] md:text-[20px] md:leading-[2.05] lg:text-[21px]">
                <p>
                  বিদ্যালয়টি এমনভাবে পরিকল্পনা করা হবে, যেন ছাত্রীরা
                  নিরাপদভাবে শেখে, প্রশ্ন করে, গবেষণা করে, খেলাধুলা করে,
                  সংস্কৃতিচর্চা করে এবং নিজের প্রতিভাকে আত্মবিশ্বাসের সাথে
                  প্রকাশ করতে পারে।
                </p>

                <p>
                  একাডেমিক উৎকর্ষতার পাশাপাশি শারীরিক সুস্থতা, মানসিক
                  স্বাস্থ্য, নৈতিক শিক্ষা, ডিজিটাল দক্ষতা, সামাজিক দায়িত্ববোধ
                  ও নেতৃত্ব বিকাশ হবে এই মাস্টার প্ল্যানের প্রধান ভিত্তি।
                </p>
              </div>
            </article>
          </section>

          {/* Master Plan Details */}
          <section>
            <h2 className="mb-8 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
              বিস্তারিত বাস্তবায়ন পরিকল্পনা{" "}
              <span className="text-[#111827]">(Detailed Master Plan)</span>
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {planItems.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-2xl border border-[#d8e2ea] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0e4a43]/40 hover:shadow-[0_14px_35px_rgba(15,45,36,0.12)] sm:p-7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0e4a43] text-lg font-extrabold text-white shadow-sm">
                    {item.id}
                  </div>

                  <h3 className="mb-3 text-[20px] font-extrabold leading-snug text-[#26384d] transition-colors duration-300 group-hover:text-[#0e4a43] sm:text-[21px]">
                    {item.title}
                  </h3>

                  <p className="text-justify text-[16px] font-medium leading-[1.9] text-[#31465d] sm:text-[17px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Phase Plan */}
          <section className="rounded-3xl border border-[#d8e2ea] bg-[#f8fbfa] p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="mb-6 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
              ধাপভিত্তিক উন্নয়ন পরিকল্পনা{" "}
              <span className="text-[#111827]">(Phase-Wise Development)</span>
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-extrabold text-[#0e4a43]">
                  প্রথম ধাপ
                </h3>
                <p className="text-justify text-[16px] font-medium leading-[1.9] text-[#31465d]">
                  শ্রেণিকক্ষ, অফিস, নিরাপত্তা গেট, টয়লেট, বিশুদ্ধ পানি,
                  বিদ্যুৎ, প্রাথমিক লাইব্রেরি এবং প্রয়োজনীয় আসবাবপত্র স্থাপন।
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-extrabold text-[#0e4a43]">
                  দ্বিতীয় ধাপ
                </h3>
                <p className="text-justify text-[16px] font-medium leading-[1.9] text-[#31465d]">
                  বিজ্ঞান ল্যাব, কম্পিউটার ল্যাব, কাউন্সেলিং রুম, স্বাস্থ্য
                  কক্ষ, সহশিক্ষা ক্লাব এবং অভিভাবক যোগাযোগ ব্যবস্থা চালু।
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-extrabold text-[#0e4a43]">
                  তৃতীয় ধাপ
                </h3>
                <p className="text-justify text-[16px] font-medium leading-[1.9] text-[#31465d]">
                  পূর্ণাঙ্গ খেলার মাঠ, অডিটোরিয়াম, ডিজিটাল ক্যাম্পাস ম্যানেজমেন্ট,
                  পরিবেশবান্ধব অবকাঠামো এবং ভবিষ্যৎ সম্প্রসারণ বাস্তবায়ন।
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}