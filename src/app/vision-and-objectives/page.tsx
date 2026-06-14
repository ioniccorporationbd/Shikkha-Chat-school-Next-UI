import Image from "next/image";
import Link from "next/link";

type MissionItem = {
  title: string;
  description: string;
};

type HighlightItem = {
  title: string;
  subtitle: string;
};

const missionItems: MissionItem[] = [
  {
    title: "নিরাপদ ও মর্যাদাপূর্ণ শিক্ষার পরিবেশ নিশ্চিতকরণ",
    description:
      "ছাত্রীদের জন্য নিরাপদ, পরিচ্ছন্ন, শৃঙ্খলাবদ্ধ ও সম্মানজনক ক্যাম্পাস পরিবেশ তৈরি করা, যেখানে তারা আত্মবিশ্বাসের সাথে শিক্ষা গ্রহণ করতে পারে।",
  },
  {
    title: "আধুনিক ও মানসম্মত একাডেমিক শিক্ষা প্রদান",
    description:
      "বাংলা, ইংরেজি, গণিত, বিজ্ঞান, আইসিটি ও মানবিক শিক্ষার সমন্বয়ে যুগোপযোগী পাঠদান, নিয়মিত মূল্যায়ন এবং দক্ষ শিক্ষক-শিক্ষিকার মাধ্যমে শিক্ষার মান নিশ্চিত করা।",
  },
  {
    title: "নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধ গঠন",
    description:
      "ছাত্রীদের মধ্যে ভদ্রতা, সময়নিষ্ঠা, আত্মসম্মান, পারস্পরিক শ্রদ্ধা, দেশপ্রেম, সততা ও মানবিক আচরণ গড়ে তুলতে নিয়মিত নৈতিক শিক্ষা ও সহশিক্ষা কার্যক্রম পরিচালনা করা।",
  },
  {
    title: "বিজ্ঞান, আইসিটি ও জীবনদক্ষতা উন্নয়ন",
    description:
      "বিজ্ঞানাগার, কম্পিউটার ল্যাব, ডিজিটাল কনটেন্ট, বেসিক কোডিং, প্রেজেন্টেশন স্কিল ও সমস্যা সমাধানভিত্তিক শিক্ষার মাধ্যমে ছাত্রীদের ভবিষ্যৎ দক্ষতা বৃদ্ধি করা।",
  },
  {
    title: "স্বাস্থ্য, পরিচ্ছন্নতা ও মানসিক সহায়তা",
    description:
      "ছাত্রীদের জন্য স্বাস্থ্যসম্মত স্যানিটেশন, বিশুদ্ধ পানি, স্যানিটারি হাইজিন সচেতনতা, ফার্স্ট এইড, কাউন্সেলিং এবং কৈশোরকালীন স্বাস্থ্য সহায়তা নিশ্চিত করা।",
  },
  {
    title: "অভিভাবক যোগাযোগ ও শিক্ষার্থী অগ্রগতি পর্যবেক্ষণ",
    description:
      "উপস্থিতি, ফলাফল, আচরণ, সহশিক্ষা অংশগ্রহণ ও শিক্ষার অগ্রগতি নিয়মিত পর্যবেক্ষণ করে অভিভাবকদের সাথে কার্যকর যোগাযোগ বজায় রাখা।",
  },
];

const highlightItems: HighlightItem[] = [
  {
    title: "নিরাপত্তা",
    subtitle: "ছাত্রীবান্ধব ক্যাম্পাস",
  },
  {
    title: "আত্মবিশ্বাস",
    subtitle: "নেতৃত্ব বিকাশ",
  },
  {
    title: "আধুনিক",
    subtitle: "শিক্ষা পদ্ধতি",
  },
  {
    title: "নৈতিকতা",
    subtitle: "মানবিক মূল্যবোধ",
  },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative h-[260px] overflow-hidden rounded-3xl border border-soft bg-page-secondary shadow-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl sm:h-[340px] lg:h-[460px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,66,60,0.45)] via-transparent to-transparent" />
    </div>
  );
}

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-primary">
            Mission & Vision
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl md:text-5xl">
            ভিশন ও মিশন
          </h1>

          <div className="mx-auto mt-5 h-[4px] w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-secondary sm:text-lg">
            নিরাপদ, আধুনিক, নৈতিক ও ছাত্রীবান্ধব শিক্ষার পরিবেশ গড়ে তোলার
            মাধ্যমে আত্মবিশ্বাসী, দক্ষ ও মানবিক মূল্যবোধসম্পন্ন প্রজন্ম তৈরি
            করাই আমাদের লক্ষ্য।
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
                Our Commitment
              </span>

              <h2 className="mt-5 text-3xl font-black leading-snug sm:text-4xl">
                নিরাপদ, আত্মবিশ্বাসী ও আলোকিত ছাত্রী গঠনের অঙ্গীকার
              </h2>

              <p className="mt-5 max-w-4xl text-justify text-base font-medium leading-8 text-white/85 sm:text-lg">
                আমরা বিশ্বাস করি, একটি বালিকা বিদ্যালয়ের প্রকৃত সফলতা শুধু
                ভালো ফলাফলের মধ্যে সীমাবদ্ধ নয়; বরং প্রতিটি ছাত্রীকে নিরাপদ,
                আত্মবিশ্বাসী, সৃজনশীল, শৃঙ্খলাবদ্ধ এবং মানবিক মানুষ হিসেবে
                গড়ে তোলাই প্রকৃত শিক্ষা। তাই আমাদের শিক্ষা কার্যক্রমে
                একাডেমিক উৎকর্ষতার পাশাপাশি নৈতিকতা, স্বাস্থ্য সচেতনতা,
                নেতৃত্ব, প্রযুক্তি দক্ষতা এবং সামাজিক দায়িত্ববোধকে বিশেষ
                গুরুত্ব দেওয়া হয়।
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

        {/* Vision Section */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="order-2 rounded-3xl border border-soft bg-page-primary p-6 shadow-xl sm:p-8 lg:order-1 lg:col-span-7">
            <span className="inline-block rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
              Vision
            </span>

            <h2 className="mt-4 text-2xl font-black text-primary sm:text-3xl">
              ভিশন
            </h2>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-color-primary" />

            <div className="mt-6 rounded-2xl border-l-4 border-brand-primary bg-page-secondary p-5">
              <p className="text-justify text-lg font-bold leading-8 text-brand-primary">
                “নিরাপদ, আধুনিক ও মূল্যবোধভিত্তিক শিক্ষার মাধ্যমে প্রতিটি
                ছাত্রীকে আত্মবিশ্বাসী, সুশিক্ষিত, দায়িত্বশীল ও মানবিক নাগরিক
                হিসেবে গড়ে তোলা।”
              </p>
            </div>

            <p className="mt-6 text-justify text-base font-medium leading-8 text-secondary sm:text-lg">
              আমাদের ভিশন হলো এমন একটি বালিকা বিদ্যালয় গড়ে তোলা, যেখানে
              শিক্ষার্থীরা নিরাপদ পরিবেশে জ্ঞান অর্জন করবে, নিজের প্রতিভা
              বিকাশ করবে এবং ভবিষ্যতের জন্য প্রয়োজনীয় দক্ষতা অর্জন করবে।
              শিক্ষার্থীদের মধ্যে আত্মসম্মান, নেতৃত্ব, নৈতিকতা, দেশপ্রেম,
              সৃজনশীলতা এবং সামাজিক দায়িত্ববোধ গড়ে তোলাই আমাদের প্রধান লক্ষ্য।
            </p>
          </article>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <SectionImage src="/assets/3.jpg" alt="Girls School Vision Image" />
          </div>
        </section>

        {/* Mission Section */}
        <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <SectionImage
              src="/assets/4.jpg"
              alt="Girls School Mission Image"
            />
          </div>

          <article className="rounded-3xl border border-soft bg-page-primary p-6 shadow-xl sm:p-8 lg:col-span-7">
            <span className="inline-block rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
              Mission
            </span>

            <h2 className="mt-4 text-2xl font-black text-primary sm:text-3xl">
              মিশন
            </h2>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-color-primary" />

            <div className="mt-6 space-y-5">
              {missionItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-soft bg-page-secondary p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-page-primary hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-primary text-sm font-black text-inverse transition-all duration-500 group-hover:bg-color-secondary group-hover:text-primary">
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
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}