import Image from "next/image";
import Link from "next/link";

type MissionItem = {
  id: string;
  title: string;
  description: string;
};

const missionItems: MissionItem[] = [
  {
    id: "১",
    title: "সাশ্রয়ী মূল্যে মানসম্মত আবাসন সরবরাহ",
    description:
      "নিম্ন ও নিম্ন-মধ্যবিত্ত মানুষের আর্থিক সামর্থ্যের মধ্যে ৭৫০ বর্গফুটের অত্যাধুনিক ফ্ল্যাট নির্মাণের মাধ্যমে ১০ লক্ষ পরিবারের স্বপ্নপূরণ।",
  },
  {
    id: "২",
    title: "সম্পূর্ণ কনডোমিনিয়াম সুবিধাসহ জীবনযাপনের পরিবেশ তৈরি",
    description:
      "শুধু ফ্ল্যাট নয়, সম্পূর্ণ প্ল্যানড সিটি কনসেপ্টের মাধ্যমে শিক্ষা, স্বাস্থ্য, বিনোদন ও নিরাপত্তার সমন্বিত সুযোগ-সুবিধা প্রদান।",
  },
  {
    id: "৩",
    title: "জাপানি প্রযুক্তি ও নির্ভুলতা নিশ্চিতকরণ",
    description:
      "আমাদের ব্যবস্থাপনা পরিচালকের জাপানি শিক্ষা ও অভিজ্ঞতাকে কাজে লাগিয়ে আন্তর্জাতিক মানের নির্মাণ প্রযুক্তি, উপকরণ ও কারিগরি দক্ষতা নিশ্চিত করা।",
  },
  {
    id: "৪",
    title: "সময়ানুবর্তিতা ও স্বচ্ছতা বজায় রাখা",
    description:
      "নির্ধারিত সময়সীমার মধ্যে প্রকল্প বাস্তবায়ন এবং গ্রাহকদের সাথে সম্পূর্ণ স্বচ্ছ ও বিশ্বাসপূর্ণ সম্পর্ক বজায় রাখা।",
  },
  {
    id: "৫",
    title: "সামাজিক দায়বদ্ধতা পালন",
    description:
      "শুধু ব্যবসায়িক লক্ষ্য নয়, দেশের অর্থনৈতিক উন্নয়ন ও সামাজিক কল্যাণে অবদান রাখা এবং পরিবেশবান্ধব নির্মাণ পদ্ধতি অনুসরণ করা।",
  },
];

export default function SchoolMasterPlanPage() {
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
            ভিশন ও মিশন
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#111827]" />
        </div>

        {/* Content Wrapper */}
        <div className="mx-auto max-w-[1280px] space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
          {/* Vision Section */}
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Vision Text */}
            <article className="order-2 md:order-1">
              <h2 className="mb-6 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
                ভিশন <span className="text-[#111827]">(Vision)</span>
              </h2>

              <div className="space-y-7 text-justify text-[18px] font-medium leading-[1.95] tracking-[-0.01em] text-[#31465d] sm:text-[19px] sm:leading-[2] md:text-[20px] md:leading-[2.05] lg:text-[21px]">
                <p>
                  &quot;নিম্ন ও নিম্ন-মধ্যবিত্ত প্রতিটি বাংলাদেশীর জন্য
                  আধুনিক, সাশ্রয়ী ও গুণগতমানের আবাসন নিশ্চিত করে একটি সমৃদ্ধ
                  ও সুন্দর বাংলাদেশ গড়ে তোলা।&quot;
                </p>

                <p>
                  আমরা বিশ্বাস করি, প্রতিটি মানুষেরই যোগ্য ও নিরাপদ আবাসনের
                  অধিকার রয়েছে। বাংলাদেশের শহরাঞ্চলে ক্রমবর্ধমান আবাসন সংকটের
                  প্রেক্ষাপটে, আমরা স্বপ্ন দেখি এমন একটি বাংলাদেশের যেখানে আয়
                  নির্বিশেষে প্রতিটি পরিবার তাদের নিজস্ব একটি আধুনিক ফ্ল্যাটের
                  মালিক হবে। আমাদের লক্ষ্য জমির সীমাবদ্ধতা ও উচ্চমূল্যের
                  চ্যালেঞ্জ মোকাবিলা করে সবার জন্য সুস্থ, সুন্দর ও টেকসই
                  আবাসনের ব্যবস্থা করা।
                </p>
              </div>
            </article>

            {/* Vision Image */}
            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-[16/9] w-full max-w-[610px] overflow-hidden rounded-[18px] shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.22)] md:max-w-none">
                <Image
                  src="/assets/3.jpg"
                  alt="Modern residential building vision"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Mission Image */}
            <div className="order-1">
              <div className="relative mx-auto aspect-[16/9] w-full max-w-[610px] overflow-hidden rounded-[18px] shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.22)] md:max-w-none">
                <Image
                  src="/assets/4.jpg"
                  alt="Modern residential building mission"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Mission Text */}
            <article className="order-2">
              <h2 className="mb-7 text-[25px] font-extrabold leading-tight text-[#10283f] sm:text-[28px] md:text-[30px]">
                মিশন <span className="text-[#111827]">(Mission)</span>
              </h2>

              <div className="space-y-7 text-[18px] leading-[1.9] text-[#31465d] sm:text-[19px] sm:leading-[2] md:text-[20px] md:leading-[2.05] lg:text-[21px]">
                {missionItems.map((item) => (
                  <div key={item.id} className="group">
                    <h3 className="font-extrabold text-[#26384d] transition-colors duration-300 group-hover:text-[#0e4a43]">
                      {item.id}. {item.title}
                    </h3>

                    <p className="mt-1 font-medium">
                      <span className="mr-1">.</span>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}