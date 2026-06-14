"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HistoryTab = "বাংলা ইতিহাস" | "English History" | "অগ্রযাত্রা";

type ButtonItem = {
  name: HistoryTab;
};

type HistorySection = {
  image: string;
  alt: string;
  paragraphs: string[];
  imageFirst?: boolean;
};

type HistoryContent = {
  badge: string;
  title: string;
  description: string;
  sections: HistorySection[];
};

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const buttons: ButtonItem[] = [
  { name: "বাংলা ইতিহাস" },
  { name: "English History" },
  { name: "অগ্রযাত্রা" },
];

const timelineItems: TimelineItem[] = [
  {
    year: "১৯৯৮",
    title: "প্রতিষ্ঠার সূচনা",
    description:
      "শিক্ষানুরাগী, সমাজসেবী ও অভিভাবকদের সম্মিলিত উদ্যোগে বিদ্যালয়ের যাত্রা শুরু হয়।",
  },
  {
    year: "২০০৫",
    title: "অবকাঠামো সম্প্রসারণ",
    description:
      "নতুন শ্রেণিকক্ষ, পাঠাগার, অফিস কক্ষ ও প্রয়োজনীয় শিক্ষা উপকরণ যুক্ত করা হয়।",
  },
  {
    year: "২০১৫",
    title: "আধুনিক শিক্ষা ব্যবস্থা",
    description:
      "ডিজিটাল ক্লাসরুম, বিজ্ঞান শিক্ষা, আইসিটি সুবিধা ও সহশিক্ষা কার্যক্রম চালু হয়।",
  },
  {
    year: "বর্তমান",
    title: "মানসম্মত শিক্ষার অঙ্গীকার",
    description:
      "বর্তমানে বিদ্যালয়টি নিরাপদ, শৃঙ্খলাবদ্ধ ও মূল্যবোধভিত্তিক শিক্ষা নিশ্চিত করছে।",
  },
];

const historyContent: Record<HistoryTab, HistoryContent> = {
  "বাংলা ইতিহাস": {
    badge: "School History",
    title: "আমাদের বিদ্যালয়ের ইতিহাস",
    description:
      "প্রতিষ্ঠার শুরু থেকে আজ পর্যন্ত আমাদের বিদ্যালয়ের অগ্রযাত্রা, মূল্যবোধ, শিক্ষা-মান এবং ভবিষ্যৎ লক্ষ্য।",
    sections: [
      {
        image: "/assets/3.jpg",
        alt: "School history",
        paragraphs: [
          "আমাদের বিদ্যালয় প্রতিষ্ঠিত হয় একটি মহৎ লক্ষ্যকে সামনে রেখে—এলাকার শিক্ষার্থীদের জন্য মানসম্মত, শৃঙ্খলাবদ্ধ ও মূল্যবোধভিত্তিক শিক্ষা নিশ্চিত করা। প্রতিষ্ঠার শুরুতে সীমিত শ্রেণিকক্ষ, অল্প সংখ্যক শিক্ষার্থী এবং স্বল্প সুযোগ-সুবিধা নিয়ে যাত্রা শুরু হলেও, শিক্ষক-শিক্ষিকা, অভিভাবক ও স্থানীয় শিক্ষানুরাগীদের আন্তরিক সহযোগিতায় বিদ্যালয়টি ধীরে ধীরে একটি আদর্শ শিক্ষা প্রতিষ্ঠানে রূপ নেয়।",
          "বিদ্যালয় প্রতিষ্ঠার প্রধান উদ্দেশ্য ছিল শিক্ষার্থীদের শুধু পরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রস্তুত করা নয়; বরং তাদের নৈতিকতা, শৃঙ্খলা, মানবিকতা, আত্মবিশ্বাস এবং দেশপ্রেমে উদ্বুদ্ধ করে একজন আদর্শ নাগরিক হিসেবে গড়ে তোলা।",
          "শুরুতে বিদ্যালয়ের অবকাঠামো সীমিত হলেও শিক্ষার পরিবেশ ছিল আন্তরিক, শৃঙ্খলাবদ্ধ এবং শিক্ষার্থী-কেন্দ্রিক। শিক্ষকদের নিষ্ঠা, অভিভাবকদের সহযোগিতা এবং পরিচালনা পর্ষদের পরিকল্পিত উদ্যোগ বিদ্যালয়ের অগ্রযাত্রাকে শক্তিশালী করে।",
        ],
      },
      {
        image: "/assets/4.jpg",
        alt: "School development",
        imageFirst: true,
        paragraphs: [
          "সময়ের সাথে সাথে বিদ্যালয়ে আধুনিক শ্রেণিকক্ষ, পাঠাগার, বিজ্ঞান শিক্ষা, আইসিটি সুবিধা, সহশিক্ষা কার্যক্রম এবং শিক্ষার্থীদের নিরাপদ পরিবেশ নিশ্চিত করার উদ্যোগ গ্রহণ করা হয়। শিক্ষার্থীদের মেধা বিকাশের পাশাপাশি খেলাধুলা, সাংস্কৃতিক কার্যক্রম, বিতর্ক, স্কাউটিং এবং সামাজিক সচেতনতামূলক কার্যক্রমেও গুরুত্ব দেওয়া হয়।",
          "আজ আমাদের বিদ্যালয় জ্ঞান, নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধের সমন্বয়ে শিক্ষার্থীদের আলোকিত ভবিষ্যৎ গঠনে অঙ্গীকারবদ্ধ। ভবিষ্যতে আরও উন্নত শিক্ষা ব্যবস্থা, প্রযুক্তিনির্ভর পাঠদান এবং শিক্ষার্থী কল্যাণমূলক কার্যক্রম সম্প্রসারণের পরিকল্পনা রয়েছে।",
        ],
      },
    ],
  },

  "English History": {
    badge: "History of Our School",
    title: "A Journey of Education, Discipline and Values",
    description:
      "A brief story of our school’s establishment, development, achievements and commitment to quality education.",
    sections: [
      {
        image: "/assets/3.jpg",
        alt: "History of our school",
        paragraphs: [
          "Our school was established with a noble vision: to provide quality, disciplined, and value-based education for the students of the community. In the beginning, the school started its journey with limited classrooms, a small number of students, and modest facilities. With the sincere support of teachers, guardians, and education-loving members of the community, it gradually developed into a respected educational institution.",
          "The main objective of the school was not only to prepare students for academic success, but also to develop their morality, discipline, humanity, confidence, and sense of responsibility. From the very beginning, the school focused on creating a learning environment where students could grow intellectually and ethically.",
          "Although the early infrastructure was limited, the dedication of teachers, cooperation of guardians, and the planned initiatives of the management helped the school move forward with confidence.",
        ],
      },
      {
        image: "/assets/4.jpg",
        alt: "School development journey",
        imageFirst: true,
        paragraphs: [
          "Over the years, the school has expanded its facilities by introducing modern classrooms, a library, science education, ICT support, co-curricular activities, and a safe learning environment. Special attention has also been given to sports, cultural programs, debate, scouting, and social awareness activities.",
          "Today, our school remains committed to building a bright future for students through knowledge, discipline, morality, and human values. In the coming years, the school aims to expand modern teaching methods, technology-based learning, and student welfare programs.",
        ],
      },
    ],
  },

  অগ্রযাত্রা: {
    badge: "Journey Timeline",
    title: "আমাদের অগ্রযাত্রার ধাপসমূহ",
    description:
      "বিদ্যালয়ের প্রতিষ্ঠা থেকে বর্তমান পর্যন্ত গুরুত্বপূর্ণ উন্নয়ন ধাপসমূহ এক নজরে।",
    sections: [
      {
        image: "/assets/3.jpg",
        alt: "School timeline",
        paragraphs: [
          "বিদ্যালয়ের অগ্রযাত্রা শুরু হয় একটি ছোট কিন্তু মহৎ উদ্যোগের মাধ্যমে। সময়ের সাথে সাথে এই প্রতিষ্ঠান শিক্ষার্থী, শিক্ষক, অভিভাবক ও সমাজের মানুষের আস্থার জায়গায় পরিণত হয়েছে।",
          "প্রতিটি ধাপে বিদ্যালয় শিক্ষা, শৃঙ্খলা, অবকাঠামো, প্রযুক্তি এবং সহশিক্ষা কার্যক্রমে উন্নয়ন সাধন করেছে। আজ এটি একটি আধুনিক, নিরাপদ ও মূল্যবোধভিত্তিক শিক্ষাপ্রতিষ্ঠান হিসেবে এগিয়ে যাচ্ছে।",
        ],
      },
    ],
  },
};

function HistoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative h-[300px] overflow-hidden rounded-3xl border border-soft bg-page-secondary shadow-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl sm:h-[380px] lg:h-full lg:min-h-[430px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,66,60,0.55)] via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary shadow-sm">
        School Legacy
      </div>
    </div>
  );
}

function TextBlock({
  paragraphs,
  index,
}: {
  paragraphs: string[];
  index: number;
}) {
  return (
    <div className="rounded-3xl border border-soft bg-page-primary p-6 shadow-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl sm:p-8">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-color-primary text-lg font-black text-inverse transition-all duration-500 hover:bg-color-secondary hover:text-primary">
          {index + 1}
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
            Details
          </p>
          <div className="mt-2 h-[3px] w-20 rounded-full bg-color-primary" />
        </div>
      </div>

      <div className="space-y-4 text-justify text-base font-medium leading-8 text-secondary sm:text-lg">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function TimelineSection() {
  return (
    <div className="rounded-3xl border border-soft bg-page-primary p-6 shadow-xl sm:p-8">
      <div className="mb-8 text-center">
        <span className="inline-flex rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
          Journey Timeline
        </span>

        <h3 className="mt-4 text-2xl font-black text-primary sm:text-3xl">
          আমাদের অগ্রযাত্রার ধাপসমূহ
        </h3>

        <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-color-primary" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {timelineItems.map((item) => (
          <article
            key={item.year}
            className="group relative overflow-hidden rounded-2xl border border-soft bg-page-secondary p-5 transition-all duration-700 ease-out hover:-translate-y-2 hover:bg-page-primary hover:shadow-xl"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-color-secondary opacity-60 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-color-primary text-sm font-black text-inverse shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-color-secondary group-hover:text-primary">
                {item.year}
              </div>

              <h4 className="mt-5 text-lg font-black leading-7 text-brand-primary">
                {item.title}
              </h4>

              <p className="mt-2 text-sm font-medium leading-7 text-secondary">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function SchoolHistoryPage() {
  const [selected, setSelected] = useState<HistoryTab>("বাংলা ইতিহাস");
  const activeContent = historyContent[selected];

  return (
    <main className="min-h-screen bg-page-secondary py-12 font-main text-primary">
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-primary">
            Our Institution
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl md:text-5xl">
            স্কুলের ইতিহাস
          </h1>

          <div className="mx-auto mt-5 h-[4px] w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-secondary sm:text-lg">
            আমাদের বিদ্যালয়ের প্রতিষ্ঠা, অগ্রযাত্রা, মূল্যবোধ এবং মানসম্মত
            শিক্ষার দীর্ঘদিনের অঙ্গীকার।
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-color-primary px-6 py-3 text-sm font-bold text-inverse shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-md"
          >
            Back to Home
          </Link>
        </div>

        {/* Tab Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 rounded-3xl border border-soft bg-page-primary p-4 shadow-lg">
          {buttons.map((item) => (
            <button
              type="button"
              onClick={() => setSelected(item.name)}
              key={item.name}
              className={`rounded-full border px-5 py-3 text-sm font-black shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 sm:px-6 sm:text-base ${
                selected === item.name
                  ? "border-brand-primary bg-color-primary text-inverse"
                  : "border-soft bg-page-secondary text-brand-primary hover:bg-color-primary hover:text-inverse"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Highlight Header */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-color-primary shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-brand-secondary">
                {activeContent.badge}
              </span>

              <h2 className="mt-5 text-3xl font-black leading-snug sm:text-4xl">
                {activeContent.title}
              </h2>

              <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-white/85">
                {activeContent.description}
              </p>
            </div>

            <div className="flex items-center justify-center bg-white/10 p-6 sm:p-8 lg:col-span-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center text-inverse backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/15">
                <h3 className="text-4xl font-black text-brand-secondary">
                  {buttons.findIndex((item) => item.name === selected) + 1}
                </h3>

                <p className="mt-3 text-sm font-black uppercase tracking-[0.25em]">
                  History
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {selected === "অগ্রযাত্রা" && <TimelineSection />}

          {activeContent.sections.map((section, index) => (
            <div
              key={`${section.alt}-${index}`}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch"
            >
              {section.imageFirst ? (
                <>
                  <HistoryImage src={section.image} alt={section.alt} />
                  <TextBlock paragraphs={section.paragraphs} index={index} />
                </>
              ) : (
                <>
                  <TextBlock paragraphs={section.paragraphs} index={index} />
                  <HistoryImage src={section.image} alt={section.alt} />
                </>
              )}
            </div>
          ))}

          {selected !== "অগ্রযাত্রা" && <TimelineSection />}
        </div>
      </section>
    </main>
  );
}