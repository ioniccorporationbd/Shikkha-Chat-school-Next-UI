import Image from "next/image";
import Link from "next/link";

const facilities: string[] = [
  "পরিকল্পিত, মনোরম ও সবুজ ক্যাম্পাস",
  "আধুনিক প্রযুক্তিভিত্তিক শিক্ষা ও মাল্টিমিডিয়া ক্লাসরুম",
  "সহ-শিক্ষা কার্যক্রম ও ক্রীড়া চর্চার সুবর্ণ সুযোগ",
  "নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধের শিক্ষা",
];

export default function PrincipalMessage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="mx-auto w-full max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-14">
        {/* Page Header */}
        <header className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-brand-primary">
            Message
          </p>

          <h1 className="mt-3 text-[28px] font-black leading-tight text-primary sm:text-4xl md:text-5xl">
            অধ্যক্ষের বাণী
          </h1>

          <div className="mx-auto mt-5 h-[4px] w-24 rounded-full bg-color-primary sm:w-28" />

          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-color-primary px-6 py-3 text-sm font-bold text-inverse shadow-md transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[rgba(22,66,60,0.18)] sm:px-8"
          >
            Back to Home
          </Link>
        </header>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[28px] border border-soft bg-page-primary shadow-[0_20px_70px_rgba(17,24,39,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Profile Area */}
            <aside className="bg-color-primary p-5 sm:p-7 md:p-8 lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <div className="group overflow-hidden rounded-[22px] border-4 border-[rgba(237,230,179,0.8)] bg-page-secondary shadow-2xl">
                  <Image
                    src="/assets/images/managing-director.avif"
                    alt="অধ্যক্ষের ছবি"
                    width={700}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="h-[390px] w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 sm:h-[500px] lg:h-[680px]"
                  />
                </div>

                <div className="mt-6 rounded-[22px] border border-white/20 bg-white/10 p-5 text-center text-inverse shadow-sm backdrop-blur-sm sm:p-6">
                  <h2 className="text-xl font-black leading-snug sm:text-2xl">
                    [অধ্যক্ষের নাম এখানে লিখুন]
                  </h2>

                  <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-color-secondary" />

                  <p className="mt-4 text-sm font-bold leading-6 text-white/90 sm:text-base">
                    অধ্যক্ষ
                  </p>

                  <p className="mt-1 text-sm font-medium text-white/75">
                    [প্রতিষ্ঠানের নাম এখানে লিখুন]
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Content Area */}
            <article className="p-5 sm:p-7 md:p-9 lg:col-span-7 lg:p-10 xl:p-12">
              {/* Quote Box */}
              <div className="mb-8 rounded-[24px] border border-soft bg-page-secondary p-5 sm:p-6 md:p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-primary sm:text-sm">
                  অধ্যক্ষের বাণী
                </p>

                <h2 className="mt-3 text-[24px] font-black leading-snug text-primary sm:text-3xl lg:text-4xl">
                  “মানসম্মত শিক্ষা ও নৈতিক চরিত্র গঠন — আমাদের মূল অঙ্গীকার”
                </h2>
              </div>

              <div className="space-y-5 text-justify text-[16px] font-medium leading-[1.9] text-primary sm:text-[17px] sm:leading-[1.95] md:text-lg md:leading-9">
                <p className="text-left font-bold text-primary">
                  প্রিয় অভিভাবক, শিক্ষার্থীবৃন্দ ও সুধীজন,
                </p>

                <p>
                  আমাদের এই শিক্ষাপ্রতিষ্ঠান প্রতিষ্ঠার পেছনে রয়েছে একটি
                  সুদূরপ্রসারী সামাজিক ও শিক্ষাগত দায়বোধ। আমরা বিশ্বাস করি,
                  একটি আদর্শ শিক্ষাপ্রতিষ্ঠান কেবল পাঠ্যবই নির্ভর শিক্ষা দেয়
                  না; বরং শিক্ষার্থীর মেধা, মনন, চরিত্র, আত্মবিশ্বাস এবং
                  মানবিক মূল্যবোধ গঠনে গুরুত্বপূর্ণ ভূমিকা রাখে।
                </p>

                {/* Focus Card 1 */}
                <div className="rounded-[22px] border-l-4 border-brand-primary bg-page-secondary p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <p className="font-bold leading-8 text-brand-primary">
                    ক. একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় শিক্ষার্থীদের দক্ষ
                    ও যোগ্য নাগরিক হিসেবে গড়ে তোলাই আমাদের লক্ষ্য। এই মহৎ
                    উদ্দেশ্য সফল করতে আমরা আগামী শিক্ষাবর্ষগুলোতে সর্বাধুনিক
                    ডিজিটাল ক্লাসরুম, বিশ্বমানের ল্যাবরেটরি এবং যুগোপযোগী
                    পাঠ্যক্রম বাস্তবায়নের একটি মহাপরিকল্পনা হাতে নিয়েছি।
                  </p>
                </div>

                <p>
                  আমরা বিশ্বাস করি, প্রতিটি শিশুর সুপ্ত প্রতিভা বিকাশের মৌলিক
                  অধিকার রয়েছে। একজন শিক্ষার্থী যখন একটি নিরাপদ, বৈষম্যহীন
                  এবং অনুপ্রেরণামূলক পরিবেশ পায়, তখনই সে তার মেধার পূর্ণ
                  বিকাশ ঘটাতে পারে। আমাদের এই প্রচেষ্টা শুধুমাত্র পুঁথিগত
                  শিক্ষা প্রদানের মধ্যে সীমাবদ্ধ নয়; এটি একটি আদর্শ প্রজন্ম
                  গড়ার আন্দোলন।
                </p>

                <p>
                  আমরা গড়ে তুলতে চাই একটি আদর্শ ও আধুনিক শিক্ষাঙ্গন, যেখানে
                  প্রতিটি শিক্ষার্থী জ্ঞান, শৃঙ্খলা, সৃজনশীলতা এবং নৈতিকতার
                  সমন্বয়ে ভবিষ্যতের জন্য প্রস্তুত হবে।
                </p>

                {/* Facilities */}
                <div className="rounded-[24px] border border-soft bg-page-secondary p-5 sm:p-6">
                  <p className="mb-4 text-left text-lg font-black text-primary sm:text-xl">
                    আমরা গড়ে তুলতে চাই একটি আদর্শ শিক্ষাঙ্গন, যেখানে প্রতিটি
                    শিক্ষার্থী পাবে:
                  </p>

                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {facilities.map((item, index) => (
                      <li
                        key={item}
                        className="group flex items-start gap-3 rounded-2xl border border-soft bg-page-primary p-4 font-bold leading-7 text-brand-primary shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-md"
                      >
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-color-primary text-sm font-black text-inverse transition-transform duration-500 group-hover:scale-110">
                          {index + 1}
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Focus Card 2 */}
                <div className="rounded-[22px] border-l-4 border-brand-primary bg-page-secondary p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <p className="font-bold leading-8 text-primary">
                    খ. শিক্ষক ও শিক্ষার্থীদের মানোন্নয়ন নিশ্চিত করতে আমরা
                    নিয়মিত শিক্ষক প্রশিক্ষণ কর্মশালা এবং মেধা অন্বেষণ
                    কর্মসূচির উদ্যোগ নিয়েছি। মেধার সঠিক মূল্যায়ন এবং যোগ্য
                    শিক্ষক মন্ডলীর পরিচর্যায় শিক্ষার্থীরা যেন তাদের কাঙ্ক্ষিত
                    লক্ষ্যে পৌঁছাতে পারে, আমরা সেই পরিবেশ নিশ্চিত করছি।
                  </p>
                </div>

                <p>
                  আমাদের মূল লক্ষ্য হলো এমন একটি শিক্ষিত সমাজ গড়ে তোলা,
                  যেখানে প্রতিটি শিক্ষার্থী দেশপ্রেম, সততা, শৃঙ্খলা এবং
                  মানবিকতার আদর্শে উজ্জীবিত হয়ে দেশ ও মানুষের কল্যাণে কাজ
                  করবে।
                </p>

                <p>
                  আমরা চাই আমাদের ভবিষ্যৎ প্রজন্ম যেন একটি সুন্দর, সুস্থ,
                  নিরাপদ এবং জ্ঞানভিত্তিক পরিবেশে বিকশিত হতে পারে।
                </p>

                <p>
                  এই মহতী ও গৌরবোজ্জ্বল যাত্রায় আমরা সম্মানিত অভিভাবক,
                  শিক্ষক-শিক্ষার্থী এবং সংশ্লিষ্ট সকলের আন্তরিক সহযোগিতা ও
                  সুচিন্তিত মতামত কামনা করছি।
                </p>

                {/* Closing Card */}
                <div className="rounded-[22px] bg-color-primary p-5 text-inverse shadow-md transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <p className="text-left font-black leading-8">
                    আসুন, আমরা সবাই মিলে আমাদের সন্তানদের জন্য একটি উজ্জ্বল
                    ভবিষ্যৎ এবং সমৃদ্ধ দেশ গড়ে তুলি।
                  </p>
                </div>
              </div>

              {/* Signature */}
              <footer className="mt-10 rounded-[24px] border border-soft bg-page-secondary p-6 sm:p-7">
                <p className="text-xl font-black leading-snug text-primary sm:text-2xl">
                  অধ্যক্ষ
                </p>

                <p className="mt-2 text-sm font-semibold text-secondary sm:text-base">
                  [প্রতিষ্ঠানের নাম এখানে লিখুন]
                </p>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}