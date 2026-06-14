import Image from "next/image";
import Link from "next/link";

type InfrastructureItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  points: string[];
};

type HighlightItem = {
  value: string;
  label: string;
};

const highlights: HighlightItem[] = [
  {
    value: "২৪/৭",
    label: "নিরাপত্তা ব্যবস্থা",
  },
  {
    value: "ডিজিটাল",
    label: "ক্লাসরুম সুবিধা",
  },
  {
    value: "পরিচ্ছন্ন",
    label: "স্বাস্থ্যকর ক্যাম্পাস",
  },
  {
    value: "সবুজ",
    label: "পরিবেশবান্ধব এলাকা",
  },
];

const infrastructureItems: InfrastructureItem[] = [
  {
    id: "০১",
    title: "আধুনিক শ্রেণিকক্ষ",
    subtitle: "Smart & Comfortable Classrooms",
    image: "/assets/3.jpg",
    description:
      "শিক্ষার্থীদের মনোযোগ, অংশগ্রহণ ও শেখার আগ্রহ বৃদ্ধির জন্য আমাদের শ্রেণিকক্ষগুলো আলো-বাতাসপূর্ণ, পরিচ্ছন্ন এবং শিক্ষাবান্ধবভাবে সাজানো।",
    points: [
      "প্রশস্ত বসার ব্যবস্থা",
      "পর্যাপ্ত আলো ও বায়ু চলাচল",
      "মাল্টিমিডিয়া ও স্মার্ট বোর্ড সুবিধা",
      "শিক্ষার্থী-কেন্দ্রিক ক্লাসরুম পরিবেশ",
    ],
  },
  {
    id: "০২",
    title: "বিজ্ঞান ল্যাবরেটরি",
    subtitle: "Science Laboratory",
    image: "/assets/4.jpg",
    description:
      "বিজ্ঞান শিক্ষাকে বাস্তবভিত্তিক করতে নিরাপদ, পরিচ্ছন্ন ও প্রয়োজনীয় যন্ত্রপাতিসম্পন্ন বিজ্ঞান ল্যাবরেটরি রাখা হয়েছে।",
    points: [
      "পদার্থ, রসায়ন ও জীববিজ্ঞান ব্যবহারিক শিক্ষা",
      "নিরাপদ পরীক্ষণ ব্যবস্থা",
      "শিক্ষকের তত্ত্বাবধানে ল্যাব কার্যক্রম",
      "প্রজেক্টভিত্তিক শেখার সুযোগ",
    ],
  },
  {
    id: "০৩",
    title: "কম্পিউটার ও আইসিটি ল্যাব",
    subtitle: "Computer & ICT Lab",
    image: "/assets/3.jpg",
    description:
      "ডিজিটাল যুগের দক্ষতা অর্জনের জন্য কম্পিউটার ল্যাব, বেসিক কোডিং, ডিজিটাল লিটারেসি এবং প্রযুক্তিনির্ভর শিক্ষার ব্যবস্থা রাখা হয়েছে।",
    points: [
      "কম্পিউটার ব্যবহার শেখার সুযোগ",
      "ইন্টারনেট ও ডিজিটাল রিসোর্স",
      "বেসিক কোডিং ও প্রেজেন্টেশন স্কিল",
      "আইসিটি ব্যবহারিক ক্লাস",
    ],
  },
  {
    id: "০৪",
    title: "সমৃদ্ধ লাইব্রেরি",
    subtitle: "Library & Reading Corner",
    image: "/assets/4.jpg",
    description:
      "পাঠাভ্যাস, গবেষণা মনোভাব ও জ্ঞানচর্চা বৃদ্ধির জন্য একটি শান্ত, পরিচ্ছন্ন ও সমৃদ্ধ লাইব্রেরি শিক্ষার্থীদের জন্য উন্মুক্ত।",
    points: [
      "পাঠ্যবই ও রেফারেন্স বই",
      "সাহিত্য ও সাধারণ জ্ঞান কর্নার",
      "শান্ত পাঠের পরিবেশ",
      "নিয়মিত বইপাঠ কার্যক্রম",
    ],
  },
  {
    id: "০৫",
    title: "নিরাপদ ক্যাম্পাস",
    subtitle: "Safety & Security",
    image: "/assets/3.jpg",
    description:
      "বিশেষ করে গার্লস স্কুলের জন্য নিরাপত্তা সবচেয়ে গুরুত্বপূর্ণ। তাই নিয়ন্ত্রিত প্রবেশদ্বার, পর্যবেক্ষণ ও জরুরি নিরাপত্তা ব্যবস্থা রাখা হয়েছে।",
    points: [
      "নিয়ন্ত্রিত প্রবেশ ও প্রস্থান",
      "সিসিটিভি নজরদারি",
      "নিরাপত্তা কর্মী",
      "জরুরি বহির্গমন ব্যবস্থা",
    ],
  },
  {
    id: "০৬",
    title: "স্বাস্থ্য ও স্যানিটেশন",
    subtitle: "Health, Hygiene & Sanitation",
    image: "/assets/4.jpg",
    description:
      "ছাত্রীদের স্বাস্থ্য, পরিচ্ছন্নতা ও ব্যক্তিগত নিরাপত্তার জন্য স্বাস্থ্যসম্মত স্যানিটেশন, বিশুদ্ধ পানি এবং ফার্স্ট এইড সুবিধা নিশ্চিত করা হয়েছে।",
    points: [
      "স্বাস্থ্যসম্মত টয়লেট ব্যবস্থা",
      "বিশুদ্ধ পানীয় জল",
      "ফার্স্ট এইড কর্নার",
      "স্যানিটারি হাইজিন সচেতনতা",
    ],
  },
  {
    id: "০৭",
    title: "খেলার মাঠ ও সহশিক্ষা",
    subtitle: "Playground & Co-curricular Activities",
    image: "/assets/3.jpg",
    description:
      "শারীরিক, মানসিক ও সামাজিক বিকাশের জন্য খেলাধুলা, সাংস্কৃতিক কার্যক্রম, বিতর্ক এবং ক্লাব কার্যক্রমের জন্য প্রয়োজনীয় পরিবেশ রাখা হয়েছে।",
    points: [
      "খেলার মাঠ",
      "ইনডোর ও আউটডোর গেমস",
      "সাংস্কৃতিক কার্যক্রম",
      "নেতৃত্ব বিকাশের সুযোগ",
    ],
  },
  {
    id: "০৮",
    title: "সবুজ ও পরিচ্ছন্ন ক্যাম্পাস",
    subtitle: "Green & Clean Campus",
    image: "/assets/4.jpg",
    description:
      "শিক্ষার্থীদের জন্য স্বাস্থ্যকর ও মনোরম পরিবেশ নিশ্চিত করতে সবুজায়ন, বাগান, পরিচ্ছন্নতা ও পরিবেশবান্ধব উদ্যোগ গ্রহণ করা হয়েছে।",
    points: [
      "বৃক্ষরোপণ ও বাগান",
      "পরিচ্ছন্ন ক্যাম্পাস",
      "বর্জ্য ব্যবস্থাপনা",
      "পরিবেশ সচেতনতা কার্যক্রম",
    ],
  },
];

function InfrastructureImage({
  src,
  alt,
  id,
}: {
  src: string;
  alt: string;
  id: string;
}) {
  return (
    <div className="group relative h-[260px] overflow-hidden rounded-3xl border border-soft bg-page-secondary shadow-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl sm:h-[340px] lg:h-full lg:min-h-[420px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,66,60,0.65)] via-[rgba(22,66,60,0.12)] to-transparent" />

      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-color-secondary text-lg font-black text-primary shadow-md transition-all duration-500 group-hover:scale-110">
        {id}
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/10 p-4 text-inverse backdrop-blur-sm transition-all duration-500 group-hover:bg-white/15">
        <p className="text-sm font-bold text-brand-secondary">
          School Infrastructure
        </p>
        <p className="mt-1 text-xl font-black leading-snug">{alt}</p>
      </div>
    </div>
  );
}

function InfrastructureCard({
  item,
  index,
}: {
  item: InfrastructureItem;
  index: number;
}) {
  const imageFirst = index % 2 !== 0;

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
      {imageFirst && (
        <InfrastructureImage src={item.image} alt={item.title} id={item.id} />
      )}

      <div className="group rounded-3xl border border-soft bg-page-primary p-6 shadow-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl sm:p-8">
        <span className="inline-flex rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
          {item.subtitle}
        </span>

        <h2 className="mt-5 text-2xl font-black leading-snug text-primary sm:text-3xl">
          {item.title}
        </h2>

        <div className="mt-4 h-[3px] w-24 rounded-full bg-color-primary" />

        <p className="mt-6 text-justify text-base font-medium leading-8 text-secondary sm:text-lg">
          {item.description}
        </p>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {item.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-soft bg-page-secondary p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-page-primary hover:shadow-md"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-xs font-black text-inverse transition-all duration-500 group-hover:bg-color-secondary group-hover:text-primary">
                ✓
              </span>

              <p className="text-sm font-bold leading-6 text-brand-primary sm:text-base">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {!imageFirst && (
        <InfrastructureImage src={item.image} alt={item.title} id={item.id} />
      )}
    </article>
  );
}

export default function SchoolInfrastructurePage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-primary">
            Infrastructure
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl md:text-5xl">
            স্কুল ইনফ্রাস্ট্রাকচার
          </h1>

          <div className="mx-auto mt-5 h-[4px] w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-secondary sm:text-lg">
            একটি আধুনিক, নিরাপদ, পরিচ্ছন্ন ও ছাত্রীবান্ধব শিক্ষা পরিবেশ
            নিশ্চিত করার জন্য আমাদের স্কুলের পূর্ণাঙ্গ অবকাঠামোগত সুবিধাসমূহ।
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-color-primary px-6 py-3 text-sm font-bold text-inverse shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-md"
          >
            Back to Home
          </Link>
        </header>

        {/* Hero Section */}
        <section className="mb-12 overflow-hidden rounded-3xl bg-color-primary shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-brand-secondary">
                Our Campus Facilities
              </span>

              <h2 className="mt-5 text-3xl font-black leading-snug sm:text-4xl">
                নিরাপদ, আধুনিক ও শিক্ষাবান্ধব ক্যাম্পাস
              </h2>

              <p className="mt-5 max-w-4xl text-justify text-base font-medium leading-8 text-white/85 sm:text-lg">
                একটি ভালো স্কুলের অবকাঠামো শুধু ভবন, শ্রেণিকক্ষ বা মাঠের মধ্যে
                সীমাবদ্ধ নয়। এটি শিক্ষার্থীর নিরাপত্তা, স্বাস্থ্য, শেখার
                পরিবেশ, প্রযুক্তি দক্ষতা, সহশিক্ষা কার্যক্রম এবং মানসিক
                বিকাশের সাথে সরাসরি সম্পর্কিত। তাই আমাদের স্কুলে প্রতিটি
                সুবিধা পরিকল্পিতভাবে সাজানো হয়েছে, যাতে শিক্ষার্থীরা নিরাপদ ও
                আনন্দময় পরিবেশে শিক্ষা গ্রহণ করতে পারে।
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-white/10 p-6 sm:p-8 lg:col-span-4 lg:p-10">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/10 p-5 text-center text-inverse backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-black text-brand-secondary sm:text-3xl">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-white/85">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure List */}
        <section className="space-y-10">
          {infrastructureItems.map((item, index) => (
            <InfrastructureCard key={item.id} item={item} index={index} />
          ))}
        </section>

        {/* Closing Section */}
        <section className="mt-12 rounded-3xl border border-soft bg-page-primary p-6 text-center shadow-xl sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-primary">
            Future Development
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-snug text-primary sm:text-3xl">
            আরও উন্নত, নিরাপদ ও প্রযুক্তিনির্ভর শিক্ষা পরিবেশ গড়ে তোলাই আমাদের
            ভবিষ্যৎ পরিকল্পনা
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-8 text-secondary sm:text-lg">
            ভবিষ্যতে আরও স্মার্ট ক্লাসরুম, উন্নত বিজ্ঞান ও আইসিটি ল্যাব,
            সমৃদ্ধ লাইব্রেরি, স্বাস্থ্যসেবা, পরিবহন সুবিধা এবং পরিবেশবান্ধব
            ক্যাম্পাস উন্নয়নের মাধ্যমে স্কুলকে একটি আদর্শ শিক্ষা প্রতিষ্ঠানে
            রূপান্তর করার পরিকল্পনা রয়েছে।
          </p>
        </section>
      </section>
    </main>
  );
}