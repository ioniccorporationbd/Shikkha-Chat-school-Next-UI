import Link from "next/link";

type InfrastructureItem = {
  id: string;
  title: string;
  description: string;
};

type FacilityItem = {
  title: string;
  description: string;
};

const infrastructureItems: InfrastructureItem[] = [
  {
    id: "১",
    title: "নিরাপদ প্রবেশদ্বার ও ক্যাম্পাস সিকিউরিটি",
    description:
      "ছাত্রীদের নিরাপত্তা নিশ্চিত করতে নিয়ন্ত্রিত প্রধান প্রবেশদ্বার, ভিজিটর রেজিস্ট্রেশন, আইডি কার্ডভিত্তিক প্রবেশ ব্যবস্থা, নারী নিরাপত্তা কর্মী, সিসিটিভি নজরদারি এবং নিরাপদ পিকআপ-ড্রপ জোন রাখা হবে।",
  },
  {
    id: "২",
    title: "আধুনিক শ্রেণিকক্ষ ও একাডেমিক ব্লক",
    description:
      "প্রতিটি শ্রেণিকক্ষ হবে পর্যাপ্ত আলো-বাতাসযুক্ত, পরিচ্ছন্ন, প্রশস্ত এবং শিক্ষাবান্ধব। স্মার্ট বোর্ড, মাল্টিমিডিয়া, আরামদায়ক বেঞ্চ, শিক্ষক পর্যবেক্ষণ ব্যবস্থা এবং শিক্ষার্থীবান্ধব seating arrangement নিশ্চিত করা হবে।",
  },
  {
    id: "৩",
    title: "বিজ্ঞানাগার ও ব্যবহারিক শিক্ষা ব্যবস্থা",
    description:
      "পদার্থ, রসায়ন ও জীববিজ্ঞানের জন্য নিরাপদ ও সুসজ্জিত পৃথক ল্যাব থাকবে। প্রয়োজনীয় ল্যাব সরঞ্জাম, নিরাপত্তা নির্দেশিকা, ফায়ার সেফটি, ওয়াশিং স্টেশন এবং শিক্ষক তত্ত্বাবধানে হাতে-কলমে শিক্ষা নিশ্চিত করা হবে।",
  },
  {
    id: "৪",
    title: "আইসিটি ল্যাব ও ডিজিটাল লার্নিং সেন্টার",
    description:
      "কম্পিউটার ল্যাব, ইন্টারনেট সংযোগ, প্রজেক্টর, ডিজিটাল কনটেন্ট, অনলাইন ক্লাস সুবিধা, বেসিক কোডিং, গ্রাফিক্স, প্রেজেন্টেশন স্কিল এবং প্রযুক্তিনির্ভর শিক্ষার পরিবেশ তৈরি করা হবে।",
  },
  {
    id: "৫",
    title: "লাইব্রেরি ও রিডিং কর্নার",
    description:
      "ছাত্রীদের পাঠাভ্যাস ও জ্ঞানচর্চা বৃদ্ধির জন্য নীরব লাইব্রেরি, রিডিং কর্নার, রেফারেন্স বই, গল্প-উপন্যাস, ম্যাগাজিন, সংবাদপত্র, ই-বুক সুবিধা এবং গ্রুপ স্টাডি স্পেস রাখা হবে।",
  },
  {
    id: "৬",
    title: "নারীবান্ধব স্বাস্থ্য ও স্যানিটেশন সুবিধা",
    description:
      "পরিচ্ছন্ন ও নিরাপদ টয়লেট, বিশুদ্ধ পানি, হাত ধোয়ার ব্যবস্থা, স্যানিটারি ন্যাপকিন কর্নার, ইনসিনারেটর, নিয়মিত পরিষ্কার-পরিচ্ছন্নতা এবং ছাত্রীদের স্বাস্থ্য সচেতনতার জন্য আলাদা ব্যবস্থা থাকবে।",
  },
  {
    id: "৭",
    title: "স্বাস্থ্য কক্ষ ও কাউন্সেলিং সেন্টার",
    description:
      "ফার্স্ট এইড, বিশ্রাম কক্ষ, প্রাথমিক চিকিৎসা, স্বাস্থ্য পর্যবেক্ষণ, কৈশোরকালীন স্বাস্থ্য শিক্ষা, মানসিক স্বাস্থ্য সহায়তা এবং ক্যারিয়ার কাউন্সেলিংয়ের জন্য নির্দিষ্ট কক্ষ থাকবে।",
  },
  {
    id: "৮",
    title: "খেলার মাঠ ও ইনডোর স্পোর্টস সুবিধা",
    description:
      "ছাত্রীদের শারীরিক বিকাশের জন্য খোলা মাঠ, অ্যাসেম্বলি গ্রাউন্ড, ব্যাডমিন্টন, ভলিবল, ইনডোর গেমস, যোগব্যায়াম, পিটি ক্লাস এবং বার্ষিক ক্রীড়া আয়োজনের উপযোগী অবকাঠামো থাকবে।",
  },
  {
    id: "৯",
    title: "অডিটোরিয়াম ও সাংস্কৃতিক কার্যক্রম এলাকা",
    description:
      "আবৃত্তি, বিতর্ক, সংগীত, নৃত্য, নাটক, বিজ্ঞান মেলা, পুরস্কার বিতরণী, অভিভাবক সভা এবং বিভিন্ন জাতীয় দিবস পালনের জন্য আধুনিক অডিটোরিয়াম বা মাল্টিপারপাস হল থাকবে।",
  },
  {
    id: "১০",
    title: "পরিবেশবান্ধব গ্রিন ক্যাম্পাস",
    description:
      "বৃক্ষরোপণ, ফুলের বাগান, পরিচ্ছন্ন walkway, বৃষ্টির পানি সংরক্ষণ, সৌরবিদ্যুৎ ব্যবহার, বর্জ্য ব্যবস্থাপনা এবং প্লাস্টিকমুক্ত ক্যাম্পাস গড়ে তোলার পরিকল্পনা থাকবে।",
  },
];

const supportFacilities: FacilityItem[] = [
  {
    title: "প্রশাসনিক অফিস",
    description:
      "প্রধান শিক্ষক কক্ষ, সহকারী প্রধান শিক্ষক কক্ষ, অফিস শাখা, হিসাব শাখা ও ভর্তি তথ্য কেন্দ্র।",
  },
  {
    title: "শিক্ষক মিলনায়তন",
    description:
      "শিক্ষকদের lesson planning, meeting, training এবং academic coordination-এর জন্য আলাদা কক্ষ।",
  },
  {
    title: "অভিভাবক অপেক্ষা কর্নার",
    description:
      "অভিভাবকদের জন্য নিরাপদ waiting zone, information desk এবং parent communication support।",
  },
  {
    title: "নিরাপদ পরিবহন ব্যবস্থা",
    description:
      "স্কুল বাস/ভ্যান, নারী সহকারী, route monitoring এবং নিরাপদ pick-up/drop-off management।",
  },
];

export default function GirlsSchoolInfrastructurePage() {
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
            বালিকা বিদ্যালয়ের অবকাঠামো
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#111827]" />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-[1180px] space-y-16 sm:space-y-20 md:space-y-24">
          {/* Overview */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <article>
              <h2 className="mb-6 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
                অবকাঠামোর লক্ষ্য{" "}
                <span className="text-[#111827]">(Infrastructure Goal)</span>
              </h2>

              <div className="space-y-7 text-justify text-[18px] font-medium leading-[1.95] tracking-[-0.01em] text-[#31465d] sm:text-[19px] sm:leading-[2] md:text-[20px] md:leading-[2.05] lg:text-[21px]">
                <p>
                  &quot;একটি নিরাপদ, আধুনিক, পরিচ্ছন্ন, নারীবান্ধব ও
                  শিক্ষাবান্ধব ক্যাম্পাস গড়ে তোলা, যেখানে প্রতিটি ছাত্রী
                  আত্মবিশ্বাস, মর্যাদা ও আনন্দের সাথে শিক্ষা গ্রহণ করতে পারে।&quot;
                </p>

                <p>
                  বালিকা বিদ্যালয়ের অবকাঠামো পরিকল্পনার মূল লক্ষ্য হলো
                  শিক্ষার মান, নিরাপত্তা, স্বাস্থ্য, প্রযুক্তি, সহশিক্ষা,
                  মানসিক বিকাশ এবং ভবিষ্যৎ দক্ষতাকে একই কাঠামোর মধ্যে
                  সমন্বিত করা। তাই প্রতিটি ভবন, কক্ষ, খেলার জায়গা, স্বাস্থ্য
                  সুবিধা ও নিরাপত্তা ব্যবস্থা ছাত্রীদের বাস্তব প্রয়োজনকে
                  গুরুত্ব দিয়ে পরিকল্পনা করা হবে।
                </p>
              </div>
            </article>

            <article>
              <h2 className="mb-6 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
                পরিকল্পনার মূলনীতি{" "}
                <span className="text-[#111827]">(Core Principles)</span>
              </h2>

              <div className="space-y-7 text-justify text-[18px] font-medium leading-[1.95] tracking-[-0.01em] text-[#31465d] sm:text-[19px] sm:leading-[2] md:text-[20px] md:leading-[2.05] lg:text-[21px]">
                <p>
                  বিদ্যালয়ের প্রতিটি অবকাঠামো এমনভাবে সাজানো হবে, যাতে
                  ছাত্রীদের নিরাপদ চলাচল, স্বাস্থ্যসম্মত পরিবেশ, মানসিক
                  স্বাচ্ছন্দ্য, একাডেমিক মনোযোগ এবং সৃজনশীল বিকাশ নিশ্চিত হয়।
                </p>

                <p>
                  এই পরিকল্পনায় নিরাপত্তা, accessibility, hygiene, emergency
                  response, inclusive education, digital learning এবং green
                  campus development-কে বিশেষ অগ্রাধিকার দেওয়া হয়েছে।
                </p>
              </div>
            </article>
          </section>

          {/* Infrastructure Cards */}
          <section>
            <h2 className="mb-8 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
              প্রধান অবকাঠামো সুবিধাসমূহ{" "}
              <span className="text-[#111827]">(Main Infrastructure)</span>
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {infrastructureItems.map((item) => (
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

          {/* Support Facilities */}
          <section className="rounded-3xl border border-[#d8e2ea] bg-[#f8fbfa] p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="mb-8 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
              সহায়ক অবকাঠামো সুবিধা{" "}
              <span className="text-[#111827]">(Support Facilities)</span>
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {supportFacilities.map((facility) => (
                <article
                  key={facility.title}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="mb-3 text-xl font-extrabold text-[#0e4a43]">
                    {facility.title}
                  </h3>

                  <p className="text-justify text-[16px] font-medium leading-[1.9] text-[#31465d]">
                    {facility.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Development Standard */}
          <section className="rounded-3xl bg-[#0e4a43] p-6 text-white shadow-sm sm:p-8 md:p-10">
            <h2 className="mb-6 text-[25px] font-extrabold leading-tight sm:text-[28px] md:text-[30px]">
              উন্নয়ন মানদণ্ড{" "}
              <span className="text-white/85">(Development Standard)</span>
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-xl font-extrabold">
                  Safety First
                </h3>
                <p className="text-justify text-[16px] font-medium leading-[1.9] text-white/90">
                  প্রতিটি অবকাঠামো ছাত্রীদের নিরাপত্তা, privacy, emergency exit
                  এবং supervised movement বিবেচনায় তৈরি করা হবে।
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-xl font-extrabold">
                  Learning Friendly
                </h3>
                <p className="text-justify text-[16px] font-medium leading-[1.9] text-white/90">
                  শ্রেণিকক্ষ, ল্যাব, লাইব্রেরি ও activity zone এমনভাবে থাকবে,
                  যাতে শেখা আনন্দদায়ক ও ফলপ্রসূ হয়।
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-xl font-extrabold">
                  Future Ready
                </h3>
                <p className="text-justify text-[16px] font-medium leading-[1.9] text-white/90">
                  ভবিষ্যতে নতুন ভবন, digital system, skill lab এবং student
                  support service যুক্ত করার জন্য expansion-friendly planning
                  রাখা হবে।
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}