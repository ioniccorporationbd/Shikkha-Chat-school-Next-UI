type HistorySection = {
  id: number;
  year: string;
  title: string;
  description: string;
};

const historySections: HistorySection[] = [
  {
    id: 1,
    year: "ভূমিকা",
    title: "শিক্ষা প্রতিষ্ঠানের গুরুত্ব",
    description:
      "একটি সুশৃঙ্খল, সুন্দর ও শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠান একটি জাতির আত্মোন্নয়নের অপরিহার্য অঙ্গ। একটি যথার্থ বিদ্যালয়ই পারে জাতির মানুষ তৈরির স্বপ্নকে বাস্তবায়ন করতে। বাংলাদেশের যে কয়টি বিদ্যালয় এই মহান দায়িত্বকে মাথা পেতে নিয়েছে ভিকারুননিসা নূন স্কুল ও কলেজ তার মধ্যে একটি। ভিকারুননিসা নূন স্কুলটি বাংলাদেশের রাজধানী ঢাকার কেন্দ্রস্থলে রমনা থানাধীন ১/এ নিউ বেইলী রোডে অবস্থিত। ঢাকার গুলিস্তানের জিরো পয়েন্ট থেকে এর দূরত্ব আনুমানিক এক কিলোমিটার এবং ঢাকা জিয়া বিমান বন্দর থেকে দূরত্ব আনুমানিক দশ কিলোমিটার।",
  },
  {
    id: 2,
    year: "১৯৪৭ - ১৯৫২",
    title: "প্রতিষ্ঠার সূচনা",
    description:
      "এই স্কুলটির বীজ সর্বপ্রথম প্রোথিত হয়েছিল ১৯৪৭ সালে যা ‘রমনা প্রিপারেটরি স্কুল’ নামে রমনা জিমখানায় স্থাপিত হয়েছিল। পরবর্তীতে ১৯৫০ সালে তৎকালীন পূর্ব পাকিস্তানের গভর্নর জনাব ফিরোজ খান নূনের বিদেশী পত্নী বেগম ভিকারুননিসা নূন স্কুলটি পরিদর্শনে এসে এর ব্যবস্থাপনা, শিক্ষাপদ্ধতি, নিয়মশৃঙ্খলা দেখে মুগ্ধ হন এবং বেইলী রোডে ১৯৫২ সালের ১৪ জানুয়ারী ভিকারুননিসা নূন স্কুলটি প্রতিষ্ঠিত করেন। স্কুলটি পর্যায়ক্রমে ভিকারুননিসা সিনিয়র কেমব্রিজ স্কুল হিসাবে পরিবর্তিত হয়।",
  },
  {
    id: 3,
    year: "১৯৭২ - ২০০০",
    title: "শিক্ষা কার্যক্রমের সম্প্রসারণ",
    description:
      "১৯৭২ সালে বাংলাদেশের স্বাধীনতা উত্তরকালে একটি সম্পূর্ণরুপে বাংলা মাধ্যম স্কুল হিসাবে পরিচিত হয়। ১৯৭৮ সালে স্কুলটি মাধ্যমিক পর্যায় থেকে উচ্চ মাধ্যমিক পর্যায়ে উন্নীত করা হয়। ক্রমান্বয়ে ছাত্রীভর্তির চাপে ১৯৮৬ সালে স্কুলের একটি বৈকালিক শাখা খোলা হয় এবং আরো সম্প্রসারণের লক্ষ্যে ১৯৯৫ সালে ধানমন্ডি এলাকায় স্কুলের একটি ব্রাঞ্চ বৃদ্ধি করা হয়। সেখানেও প্রভাতী ও বৈকালীন দুটি শাখা চালু হয়ে যায়। ১৯৯৫ সালে মূল ভবনে ষষ্ঠ শ্রেণী থেকে ইংরেজি মাধ্যম শুরু হয় যা পর্যায়ক্রমে উচ্চ মাধ্যমিক পর্যন্ত উন্নীত হয়। ২০০৫ সালে ইংরেজি মাধ্যমে প্রথম শ্রেণী খোলা হয় এবং ২০০৬ সালে তা চতুর্থ শ্রেণী পর্যন্ত বর্ধিত করা হয়। ২০০০ শিক্ষাবর্ষে ক্রমাগত ছাত্রীভর্তির চাহিদা ও নারী শিক্ষা সম্প্রসারণের উদ্দেশ্যে বসুন্ধরায় প্রভাতী ও বৈকালিক শাখায় প্রথম থেকে ষষ্ঠ শ্রেণী পর্যন্ত দুটি শাখা সম্প্রসারণ করা হয় যা পরবর্তীতে ক্রমপর্যায়ে দ্বাদশ শ্রেণী পর্যন্ত উন্নীত করা হবে।",
  },
  {
    id: 4,
    year: "২০০৪ - ২০০৬",
    title: "নতুন শাখা ও আধুনিক অগ্রগতি",
    description:
      "২০০৪ সালে ভিকারুননিসা নূন স্কুলের সম্প্রসারণ ও অগ্রগতির আরও একটি বার্তা বয়ে এনেছে সরকারি অনুকূলে প্রাপ্ত আজিমপুরে একখন্ড জমি প্রাপ্তি। যেখানে ধানমন্ডি শাখাকে স্থানান্তরের উদ্দেশ্যে মাননীয় প্রধানমন্ত্রী কর্তৃক ভিত্তিপ্রস্তর স্থাপন করা হয়েছিল। ধানমন্ডি শাখার অভিভাবকদের আবেদনের পরিপ্রেক্ষিতে ধানমন্ডি শাখাকে স্থানান্তরিত না করে আজিমপুরে প্রাপ্ত জমিতে নতুন একটি শাখা আজিমপুর শাখা নামে খোলা হয়। ২০০৬ সালের শিক্ষাবর্ষে এর কার্যক্রম শুরু হয়েছে। গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের মাননীয় প্রধানমন্ত্রী ২০০৬ সালের ৪ মে আনুষ্ঠানিক ভাবে এর উদ্বোধন ঘোষণা করেছেন। বর্তমানে মূল শাখার প্রভাতী ও দিবা শাখা, ইংরেজি শাখা ছাড়া বসুন্ধরা, আজিমপুর, ধানমন্ডি এই তিনটি শাখার দিবা ও প্রভাতী শাখা রয়েছে।",
  },
];

const summaryItems = [
  {
    value: "১৯৪৭",
    label: "প্রাথমিক সূচনা",
  },
  {
    value: "১৯৫২",
    label: "প্রতিষ্ঠা",
  },
  {
    value: "৪+",
    label: "ক্যাম্পাস",
  },
  {
    value: "২৫,০০০+",
    label: "শিক্ষার্থী",
  },
];

const History = () => {
  return (
    <section className="mx-2 lg:mx-0">
      <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-7 lg:p-8">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF0000]">
            Our Legacy
          </p>

          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
            প্রতিষ্ঠানের ইতিহাস
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base lg:mx-0 lg:leading-8">
            ভিকারুননিসা নূন স্কুল ও কলেজ বাংলাদেশের অন্যতম ঐতিহ্যবাহী শিক্ষা
            প্রতিষ্ঠান। প্রতিষ্ঠালগ্ন থেকে প্রতিষ্ঠানটি শিক্ষা, শৃঙ্খলা,
            সংস্কৃতি ও নারী শিক্ষার প্রসারে গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {summaryItems.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl bg-[#E2EDF7] p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <p className="text-2xl font-bold text-[#FF0000] transition-transform duration-500 group-hover:scale-110 sm:text-3xl">
                {item.value}
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative space-y-7">
          <div className="absolute bottom-0 left-5 top-0 hidden w-[2px] bg-[#E2EDF7] sm:block" />

          {historySections.map((section) => (
            <article
              key={section.id}
              className="group relative rounded-2xl border border-[#E2EDF7] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#FF0000]/40 hover:shadow-xl sm:ml-12 sm:p-6"
            >
              <div className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-sm font-bold text-white shadow-md transition-all duration-500 group-hover:scale-110 sm:flex">
                {section.id}
              </div>

              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-[#FF0000] sm:text-xl">
                  {section.title}
                </h2>

                <span className="w-fit rounded-full bg-[#E2EDF7] px-4 py-1 text-sm font-bold text-[#FF0000] transition-all duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                  {section.year}
                </span>
              </div>

              <p className="text-justify text-sm leading-8 text-gray-700 sm:text-base sm:leading-9">
                {section.description}
              </p>
            </article>
          ))}
        </div>

        {/* Final Note */}
        <div className="mt-10 rounded-2xl border-l-4 border-[#FF0000] bg-[#E2EDF7]/70 p-5 transition-all duration-500 hover:bg-[#E2EDF7] hover:shadow-md">
          <h3 className="text-xl font-bold text-[#FF0000]">
            ঐতিহ্য ও অগ্রযাত্রা
          </h3>

          <p className="mt-3 text-justify text-sm leading-8 text-gray-700 sm:text-base sm:leading-9">
            দীর্ঘ পথচলায় প্রতিষ্ঠানটি শিক্ষা বিস্তার, শৃঙ্খলা, নারী শিক্ষা,
            সাংস্কৃতিক বিকাশ এবং জাতীয় পর্যায়ে মেধাবী শিক্ষার্থী গঠনে
            ধারাবাহিক ভূমিকা রেখে চলেছে।
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;