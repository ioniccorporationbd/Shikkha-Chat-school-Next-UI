import Link from "next/link";

type MasterPlanItem = {
  title: string;
  description: string;
};

type PhaseItem = {
  phase: string;
  title: string;
  description: string;
};

type HighlightItem = {
  title: string;
  subtitle: string;
};

const masterPlanItems: MasterPlanItem[] = [
  {
    title: "একাডেমিক ভবন ও শ্রেণিকক্ষ পরিকল্পনা",
    description:
      "প্রতিটি শ্রেণির জন্য পর্যাপ্ত আলো-বাতাসযুক্ত, পরিচ্ছন্ন, প্রশস্ত ও শিক্ষাবান্ধব শ্রেণিকক্ষ তৈরি করা হবে। প্রাথমিক, নিম্ন মাধ্যমিক ও মাধ্যমিক স্তরের জন্য বয়সভিত্তিক আলাদা একাডেমিক জোন রাখা হবে।",
  },
  {
    title: "স্মার্ট ক্লাসরুম ও ডিজিটাল শিক্ষা ব্যবস্থা",
    description:
      "মাল্টিমিডিয়া ক্লাসরুম, ডিজিটাল কনটেন্ট, প্রজেক্টর, স্মার্ট বোর্ড এবং অনলাইন লার্নিং সাপোর্টের মাধ্যমে শিক্ষার্থীদের আধুনিক ও অংশগ্রহণমূলক শিক্ষা নিশ্চিত করা হবে।",
  },
  {
    title: "বিজ্ঞান, আইসিটি ও ইনোভেশন ল্যাব",
    description:
      "পদার্থ, রসায়ন, জীববিজ্ঞান, কম্পিউটার, কোডিং, রোবোটিক্স ও প্রজেক্টভিত্তিক শিক্ষার জন্য নিরাপদ ও আধুনিক ল্যাব স্থাপন করা হবে।",
  },
  {
    title: "লাইব্রেরি ও রিডিং কালচার উন্নয়ন",
    description:
      "নীরব পাঠাগার, রিডিং কর্নার, রেফারেন্স বই, সাহিত্য কর্নার, ই-বুক সুবিধা এবং নিয়মিত বইপাঠ কার্যক্রমের মাধ্যমে শিক্ষার্থীদের জ্ঞানচর্চার পরিবেশ তৈরি করা হবে।",
  },
  {
    title: "নিরাপত্তা ও জরুরি ব্যবস্থাপনা",
    description:
      "ক্যাম্পাসে নিয়ন্ত্রিত প্রবেশদ্বার, ভিজিটর রেজিস্ট্রেশন, সিসিটিভি নজরদারি, নিরাপত্তা কর্মী, অগ্নি নির্বাপণ ব্যবস্থা এবং জরুরি বহির্গমন পথ নিশ্চিত করা হবে।",
  },
  {
    title: "স্বাস্থ্য, পরিচ্ছন্নতা ও স্যানিটেশন",
    description:
      "বিশুদ্ধ পানি, স্বাস্থ্যসম্মত টয়লেট, হাত ধোয়ার স্থান, ফার্স্ট এইড কর্নার, নিয়মিত পরিচ্ছন্নতা এবং স্বাস্থ্য সচেতনতা কার্যক্রম পরিচালনা করা হবে।",
  },
  {
    title: "খেলাধুলা ও সহশিক্ষা কার্যক্রম",
    description:
      "শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশের জন্য খেলার মাঠ, ইনডোর গেমস, সাংস্কৃতিক কার্যক্রম, বিতর্ক, স্কাউটিং ও ক্লাব কার্যক্রমের ব্যবস্থা রাখা হবে।",
  },
  {
    title: "গ্রিন ক্যাম্পাস ও পরিবেশবান্ধব অবকাঠামো",
    description:
      "বৃক্ষরোপণ, বাগান, বর্জ্য ব্যবস্থাপনা, প্লাস্টিকমুক্ত ক্যাম্পাস, সৌরবিদ্যুৎ ব্যবহার এবং বৃষ্টির পানি সংরক্ষণের মাধ্যমে পরিবেশবান্ধব ক্যাম্পাস গড়ে তোলা হবে।",
  },
];

const highlightItems: HighlightItem[] = [
  {
    title: "নিরাপদ",
    subtitle: "শিক্ষাবান্ধব ক্যাম্পাস",
  },
  {
    title: "আধুনিক",
    subtitle: "ডিজিটাল শিক্ষা ব্যবস্থা",
  },
  {
    title: "সৃজনশীল",
    subtitle: "সহশিক্ষা ও নেতৃত্ব বিকাশ",
  },
  {
    title: "সবুজ",
    subtitle: "পরিবেশবান্ধব অবকাঠামো",
  },
];

const phaseItems: PhaseItem[] = [
  {
    phase: "প্রথম ধাপ",
    title: "প্রাথমিক অবকাঠামো উন্নয়ন",
    description:
      "শ্রেণিকক্ষ, অফিস, নিরাপত্তা গেট, টয়লেট, বিশুদ্ধ পানি, বিদ্যুৎ, আসবাবপত্র এবং মৌলিক ক্যাম্পাস সুবিধা নিশ্চিত করা।",
  },
  {
    phase: "দ্বিতীয় ধাপ",
    title: "একাডেমিক ও প্রযুক্তি সুবিধা সম্প্রসারণ",
    description:
      "স্মার্ট ক্লাসরুম, বিজ্ঞান ল্যাব, কম্পিউটার ল্যাব, লাইব্রেরি, কাউন্সেলিং রুম এবং শিক্ষার্থী পর্যবেক্ষণ ব্যবস্থা চালু করা।",
  },
  {
    phase: "তৃতীয় ধাপ",
    title: "পূর্ণাঙ্গ ক্যাম্পাস উন্নয়ন",
    description:
      "খেলার মাঠ, অডিটোরিয়াম, গ্রিন ক্যাম্পাস, ডিজিটাল ম্যানেজমেন্ট, পরিবহন সুবিধা এবং ভবিষ্যৎ সম্প্রসারণ পরিকল্পনা বাস্তবায়ন।",
  },
];

export default function SchoolMasterPlanPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-primary">
            Master Plan
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl md:text-5xl">
            স্কুল মাস্টার প্ল্যান
          </h1>

          <div className="mx-auto mt-5 h-[4px] w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-secondary sm:text-lg">
            একটি নিরাপদ, আধুনিক, শৃঙ্খলাবদ্ধ, প্রযুক্তিনির্ভর ও
            শিক্ষাবান্ধব ক্যাম্পাস গড়ে তোলার জন্য আমাদের দীর্ঘমেয়াদী
            পরিকল্পনা।
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-color-primary px-6 py-3 text-sm font-bold text-inverse shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-md"
          >
            Back to Home
          </Link>
        </header>

        {/* Hero Highlight */}
        <section className="mb-12 overflow-hidden rounded-3xl bg-color-primary shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-brand-secondary">
                Our Planning Goal
              </span>

              <h2 className="mt-5 text-3xl font-black leading-snug sm:text-4xl">
                পরিকল্পিত ক্যাম্পাস, মানসম্মত শিক্ষা ও পূর্ণাঙ্গ শিক্ষার্থী
                বিকাশ
              </h2>

              <p className="mt-5 max-w-4xl text-justify text-base font-medium leading-8 text-white/85 sm:text-lg">
                একটি আদর্শ স্কুল মাস্টার প্ল্যান শুধু ভবন নির্মাণের পরিকল্পনা
                নয়; এটি শিক্ষার্থীদের একাডেমিক শিক্ষা, নিরাপত্তা, স্বাস্থ্য,
                প্রযুক্তি দক্ষতা, সহশিক্ষা কার্যক্রম, মানসিক বিকাশ এবং
                ভবিষ্যৎ নেতৃত্ব গঠনের একটি পূর্ণাঙ্গ উন্নয়ন পরিকল্পনা। এই
                পরিকল্পনার মাধ্যমে আমরা এমন একটি ক্যাম্পাস গড়ে তুলতে চাই,
                যেখানে প্রতিটি শিক্ষার্থী নিরাপদ, আনন্দময় ও অনুপ্রেরণামূলক
                পরিবেশে বেড়ে উঠবে।
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-white/10 p-6 sm:p-8 lg:col-span-4 lg:p-10">
              {highlightItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/10 p-5 text-center text-inverse backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/15"
                >
                  <h3 className="text-2xl font-black text-brand-secondary sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/85">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision / Planning Overview */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="rounded-3xl border border-soft bg-page-primary p-6 shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:col-span-6">
            <span className="inline-block rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
              Planning Vision
            </span>

            <h2 className="mt-4 text-2xl font-black text-primary sm:text-3xl">
              পরিকল্পনার ভিশন
            </h2>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-color-primary" />

            <div className="mt-6 rounded-2xl border-l-4 border-brand-primary bg-page-secondary p-5">
              <p className="text-justify text-lg font-bold leading-8 text-brand-primary">
                “একটি নিরাপদ, আধুনিক, পরিবেশবান্ধব ও শিক্ষাবান্ধব ক্যাম্পাস
                গড়ে তোলা, যেখানে প্রতিটি শিক্ষার্থী জ্ঞান, দক্ষতা, নৈতিকতা ও
                আত্মবিশ্বাস নিয়ে বেড়ে উঠবে।”
              </p>
            </div>

            <p className="mt-6 text-justify text-base font-medium leading-8 text-secondary sm:text-lg">
              এই মাস্টার প্ল্যানের মূল লক্ষ্য হলো স্কুলের প্রতিটি অংশকে
              পরিকল্পিতভাবে সাজানো—যেন শ্রেণিকক্ষ, ল্যাব, লাইব্রেরি, খেলার
              মাঠ, প্রশাসনিক সেবা, স্বাস্থ্য সুবিধা এবং নিরাপত্তা ব্যবস্থা
              একে অপরের সাথে সমন্বিতভাবে কাজ করে।
            </p>
          </article>

          <article className="rounded-3xl border border-soft bg-page-primary p-6 shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:col-span-6">
            <span className="inline-block rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
              Development Focus
            </span>

            <h2 className="mt-4 text-2xl font-black text-primary sm:text-3xl">
              উন্নয়নের মূল লক্ষ্য
            </h2>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-color-primary" />

            <p className="mt-6 text-justify text-base font-medium leading-8 text-secondary sm:text-lg">
              শিক্ষার্থীদের বয়স, নিরাপত্তা, পাঠদানের ধরন, মানসিক বিকাশ,
              শারীরিক সুস্থতা এবং ভবিষ্যৎ দক্ষতা বিবেচনা করে প্রতিটি
              অবকাঠামো পরিকল্পনা করা হবে। একই সঙ্গে শিক্ষক, অভিভাবক ও
              প্রশাসনের মধ্যে সমন্বিত যোগাযোগ ব্যবস্থা গড়ে তোলা হবে।
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["নিরাপত্তা", "একাডেমিক মান", "প্রযুক্তি দক্ষতা", "সহশিক্ষা"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-soft bg-page-secondary p-4 text-center font-black text-brand-primary transition-all duration-500 hover:-translate-y-1 hover:bg-page-primary hover:shadow-md"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </article>
        </section>

        {/* Master Plan Items */}
        <section className="mt-10 rounded-3xl border border-soft bg-page-primary p-6 shadow-xl sm:p-8">
          <div className="mb-8">
            <span className="inline-block rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
              Detailed Master Plan
            </span>

            <h2 className="mt-4 text-2xl font-black text-primary sm:text-3xl">
              বিস্তারিত মাস্টার প্ল্যান
            </h2>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-color-primary" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {masterPlanItems.map((item, index) => (
              <article
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-soft bg-page-secondary p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-page-primary hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-primary text-sm font-black text-inverse transition-all duration-500 group-hover:bg-color-secondary group-hover:text-primary">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-black leading-7 text-brand-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-justify text-base font-medium leading-8 text-secondary">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Phase Plan */}
        <section className="mt-10 rounded-3xl bg-color-primary p-6 text-inverse shadow-2xl sm:p-8 lg:p-10">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-brand-secondary">
            Phase-Wise Development
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
            ধাপভিত্তিক বাস্তবায়ন পরিকল্পনা
          </h2>

          <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-white/85 sm:text-lg">
            স্কুলের উন্নয়ন কার্যক্রম ধাপে ধাপে বাস্তবায়ন করা হবে, যাতে
            শিক্ষার পরিবেশ ব্যাহত না হয় এবং প্রতিটি সুবিধা পরিকল্পিতভাবে
            কার্যকর করা যায়।
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {phaseItems.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg sm:p-6"
              >
                <p className="text-sm font-black text-brand-secondary">
                  {item.phase}
                </p>

                <h3 className="mt-3 text-xl font-black leading-snug text-inverse">
                  {item.title}
                </h3>

                <p className="mt-3 text-justify text-sm font-medium leading-7 text-white/85 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}