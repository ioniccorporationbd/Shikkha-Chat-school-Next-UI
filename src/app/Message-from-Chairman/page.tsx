import Image from "next/image";
import Link from "next/link";

const keyPoints: string[] = [
  "পরিকল্পিত, মনোরম ও প্রযুক্তিনির্ভর ক্যাম্পাস পরিবেশ",
  "আধুনিক ল্যাবরেটরি ও সমৃদ্ধ লাইব্রেরি সুবিধা",
  "মেধা অন্বেষণ ও সৃজনশীল সহ-শিক্ষা কার্যক্রম",
  "নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধের চর্চা",
];

export default function ChairmanMessage() {
  return (
    <main className="min-h-screen bg-primary font-main text-primary antialiased">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:px-8">
        {/* Back to Home Button */}
        <div className="mb-8 flex justify-center sm:mb-10">
          <Link
            href="/"
            className="rounded-full bg-[#16423C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#0f302b] hover:shadow-md sm:px-7 sm:py-3 sm:text-base"
          >
            Back to Home
          </Link>
        </div>

        {/* Main Title */}
        <header className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16">
          <h1 className="text-[26px] font-black leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-[42px]">
            চেয়ারম্যান ও পরিচালকের বাণী
          </h1>

          <div className="mx-auto mt-4 h-[4px] w-20 rounded-full bg-[#16423C] sm:w-24" />

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-secondary sm:text-base md:text-[17px]">
            শিক্ষা, নৈতিকতা ও আলোকিত ভবিষ্যৎ গঠনে আমাদের অঙ্গীকার
          </p>
        </header>

        {/* Layout Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[340px_1fr] lg:items-start lg:gap-14">
          {/* Profile Sidebar */}
          <aside className="mx-auto w-full max-w-[340px] lg:sticky lg:top-8 lg:mx-0">
            <div className="rounded-2xl border border-[#16423C]/10 bg-secondary p-4 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-black shadow-sm">
                <Image
                  src="/assets/images/Rofiqil-Islam.avif"
                  alt="ড. মোহাম্মদ রফিকুল আমীন"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                />
              </div>

              <div className="px-2 py-5 text-center">
                <h2 className="text-xl font-black leading-snug text-primary sm:text-2xl">
                  ড. মোহাম্মদ রফিকুল আমীন
                </h2>

                <p className="mt-2 text-sm font-semibold leading-6 text-secondary sm:text-base">
                  চেয়ারম্যান ও গভর্নিং বডি পরিচালক
                </p>

                <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-[#16423C]" />
              </div>
            </div>
          </aside>

          {/* Message Text Content */}
          <article className="rounded-2xl border border-[#16423C]/10 bg-white p-4 shadow-sm sm:p-6 md:p-8 lg:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red sm:text-sm">
              চেয়ারম্যান ও পরিচালকের বাণী
            </p>

            <div className="mb-7 rounded-2xl border-l-4 border-[#16423C] bg-secondary p-4 sm:p-5 md:p-6">
              <h2 className="text-[20px] font-black leading-relaxed text-primary sm:text-2xl md:text-[26px]">
                &quot;মানসম্মত শিক্ষা ও সুনাগরিক গঠন — আমাদের মূল
                অঙ্গীকার&quot;
              </h2>
            </div>

            <div className="space-y-5 text-justify text-[16px] font-medium leading-[1.9] text-primary sm:text-[17px] sm:leading-[1.95] md:text-[18px] md:leading-[2] lg:text-[19px]">
              <p className="text-left font-bold">
                প্রিয় অভিভাবক, শিক্ষার্থীবৃন্দ ও শুভানুধ্যায়ীগণ,
              </p>

              <p>
                আমাদের এই শিক্ষা প্রতিষ্ঠান প্রতিষ্ঠার পেছনে রয়েছে একটি
                সুদূরপ্রসারী সামাজিক দায়বদ্ধতা ও গুণগত শিক্ষার প্রসার ঘটানোর
                সুদৃঢ় প্রত্যয়। আমরা বিশ্বাস করি, একটি আদর্শ শিক্ষা প্রতিষ্ঠান
                শুধু পাঠদান করে না; বরং শিক্ষার্থীর চরিত্র, মেধা, মনন,
                নেতৃত্ব, আত্মবিশ্বাস এবং মানবিক মূল্যবোধ গঠনে গুরুত্বপূর্ণ
                ভূমিকা রাখে।
              </p>

              {/* Important Blue Card */}
              <div className="rounded-2xl border border-[#2563eb]/15 bg-[#eff6ff] p-4 transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-5 md:p-6">
                <p className="font-bold leading-[1.95] text-blue">
                  ক. দ্রুত পরিবর্তনশীল বিশ্বের চ্যালেঞ্জ মোকাবেলায় এবং আমাদের
                  ভবিষ্যৎ প্রজন্মকে যোগ্য করে গড়ে তুলতে মানসম্মত শিক্ষার কোনো
                  বিকল্প নেই। এই লক্ষ্য অর্জনে আমরা একটি যুগান্তকারী
                  মহাপরিকল্পনা হাতে নিয়েছি; আগামী এক দশকে আন্তর্জাতিক মানের
                  আধুনিক সুযোগ-সুবিধা সম্বলিত শিক্ষা ক্যাম্পাস সম্প্রসারণের
                  মাধ্যমে দেশজুড়ে ১০ লক্ষ শিক্ষার্থীর আধুনিক ও নৈতিক শিক্ষার
                  সুযোগ নিশ্চিতকরণ।
                </p>
              </div>

              <p>
                আমরা বিশ্বাস করি, প্রতিটি শিশুর সুপ্ত প্রতিভা বিকাশ করা এবং
                তাদের সুনাগরিক হিসেবে গড়ে তোলা আমাদের মৌলিক দায়িত্ব। একটি
                শিক্ষার্থী যখন সুশিক্ষা ও নৈতিক মূল্যবোধ পায়, তখনই সে সমাজ ও
                জাতি গঠনে কার্যকর অবদান রাখতে সক্ষম হয়।
              </p>

              <p>
                আমাদের এই প্রতিষ্ঠান শুধুমাত্র একটি প্রাতিষ্ঠানিক রূপ নয়, বরং
                এটি একটি আদর্শ মানুষ গড়ার সামাজিক আন্দোলন। আমরা গড়ে তুলতে চাই
                এমন একটি আদর্শ ও আধুনিক শিক্ষার্থীবান্ধব পরিবেশ, যেখানে প্রতিটি
                শিক্ষার্থী পাবে নিজের মেধা, মনন ও সৃজনশীলতা বিকাশের পূর্ণ
                সুযোগ।
              </p>

              <div className="rounded-2xl border border-[#16423C]/10 bg-secondary p-4 sm:p-5 md:p-6">
                <p className="mb-4 text-left text-[18px] font-black text-primary sm:text-xl">
                  আমরা গড়ে তুলতে চাই এমন একটি আদর্শ শিক্ষার পরিবেশ, যেখানে
                  প্রতিটি শিক্ষার্থী পাবে:
                </p>

                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {keyPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#16423C]" />
                      <span className="text-[15px] font-bold leading-7 text-primary sm:text-[16px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Blue Card */}
              <div className="rounded-2xl border border-[#2563eb]/15 bg-[#eff6ff] p-4 transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-5 md:p-6">
                <p className="font-bold leading-[1.95] text-blue">
                  খ. এই শিক্ষামূলক কার্যক্রমকে আরও বেগবান করতে এবং তরুণ
                  শিক্ষিত সমাজের কর্মসংস্থানের সুযোগ সৃষ্টিতে আমরা দেশব্যাপী
                  মেধাবী, দক্ষ ও উদ্যমী শিক্ষক-শিক্ষিকা ও শিক্ষা কর্মকর্তা
                  নিয়োগের উদ্যোগ নিয়েছি। যেখানে যোগ্যতার ভিত্তিতে আকর্ষণীয় ও
                  সন্তোষজনক ক্যারিয়ার গড়ার সুযোগ থাকবে।
                </p>
              </div>

              <p>
                আমাদের চূড়ান্ত লক্ষ্য হলো এমন একটি শিক্ষিত ও স্বাবলম্বী সমাজ
                গড়ে তোলা, যেখানে প্রতিটি শিক্ষার্থী তার মেধা ও যোগ্যতার পূর্ণ
                বিকাশ ঘটিয়ে বিশ্বমঞ্চে দেশের গৌরব উজ্জ্বল করতে পারে।
              </p>

              <p>
                আমরা চাই আমাদের ভবিষ্যৎ প্রজন্ম যেন একটি সুন্দর, সুশৃঙ্খল ও
                জ্ঞানভিত্তিক পরিবেশে বিকশিত হতে পারে। এই মহতী ও গৌরবময় যাত্রায়
                আমরা সকল অভিভাবক ও শুভাকাঙ্ক্ষীর আন্তরিক সহযোগিতা এবং সুদৃঢ়
                আস্থা কামনা করছি।
              </p>

              {/* Red Focus Card */}
              <div className="rounded-2xl border border-[#dc2626]/15 bg-[#fef2f2] p-4 transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-5 md:p-6">
                <p className="text-left font-black leading-[1.95] text-red">
                  আসুন, আমরা সবাই মিলে আমাদের সন্তানদের জন্য এক নিরাপদ, সমৃদ্ধ
                  ও সম্ভাবনাময় আলোকিত ভবিষ্যৎ গড়ে তুলি।
                </p>
              </div>
            </div>

            {/* Signature Block */}
            <footer className="mt-10 border-t border-[#16423C]/10 pt-6 sm:mt-12">
              <p className="text-xl font-black leading-snug text-primary sm:text-2xl">
                চেয়ারম্যান ও গভর্নিং বডি পরিচালক
              </p>

              <p className="mt-2 text-base font-semibold text-secondary sm:text-lg">
                আইডিয়াল মডেল স্কুল অ্যান্ড কলেজ
              </p>
            </footer>
          </article>
        </div>
      </section>

      {/* Footer Accent Bar */}
      <div className="mt-14 h-5 w-full bg-[#EDE6B3] sm:mt-16 lg:mt-20" />
    </main>
  );
}