import Image from "next/image";
import Link from "next/link";

export default function PrincipalMessage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans antialiased text-[#333333]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Back to Home Button (Bigger text and padding) */}
        <div className="flex justify-center mb-10">
          <Link
            href="/"
            className="bg-[#0f2d24] text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-[#163f33] transition-colors shadow"
          >
            Back to Home
          </Link>
        </div>

        {/* Main Title Section (Enlarged text and spacing) */}
        <h1 className="text-center text-4xl font-black tracking-wide text-gray-900 mb-4">
          অধ্যক্ষের বাণী
        </h1>
        <div className="flex justify-center mb-16">
          <div className="w-24 h-[4px] bg-gray-900" />
        </div>

        {/* Layout Grid (Expanded maximum layout space) */}
        <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
          {/* Profile Sidebar (Significantly enlarged image container) */}
          <div className="flex flex-col items-center flex-shrink-0 mx-auto lg:mx-0">
            <div className="w-[340px] h-[410px] relative overflow-hidden rounded-xl shadow-md border border-gray-100 bg-black">
              <Image
                src="/assets/images/managing-director.avif"
                alt="অধ্যক্ষের নাম"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-xl font-bold text-gray-800 mt-6 text-center tracking-wide">
              [অধ্যক্ষের নাম এখানে লিখুন]
            </p>
          </div>

          {/* Message Text Content (Enlarged text size and paragraph layout) */}
          <div className="flex-1 text-xl leading-[1.9] text-[#222222] font-normal">
            <p className="text-sm text-gray-400 mb-3 font-semibold tracking-wider">অধ্যক্ষের বাণী</p>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 tracking-wide">
              &quot;মানসম্মত শিক্ষা ও নৈতিক চরিত্র গঠন – আমাদের মূল অঙ্গীকার&quot;
            </h2>

            <p className="mb-6">প্রিয় অভিভাবক, শিক্ষার্থীবৃন্দ ও সুধীজন,</p>

            <p className="mb-6">
              আমাদের এই শিক্ষাপ্রতিষ্ঠান প্রতিষ্ঠার পেছনে রয়েছে একটি সুদূরপ্রসারী সামাজিক ও শিক্ষাগত দায়বোধ।
            </p>

            {/* Section A - Blue Highlighted Paragraph (Bigger text weight and size) */}
            <p className="mb-6 text-[#1d4ed8] font-semibold">
              ক. একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় শিক্ষার্থীদের দক্ষ ও যোগ্য নাগরিক হিসেবে গড়ে তোলাই আমাদের লক্ষ্য। এই মহৎ উদ্দেশ্য সফল করতে আমরা আগামী শিক্ষাবর্ষগুলোতে সর্বাধুনিক ডিজিটাল ক্লাসরুম, বিশ্বমানের ল্যাবরেটরি এবং যুগোপযোগী পাঠ্যক্রম বাস্তবায়নের একটি মহাপরিকল্পনা হাতে নিয়েছি।
            </p>

            <p className="mb-6">
              আমরা বিশ্বাস করি, প্রতিটি শিশুর সুপ্ত প্রতিভা বিকাশের মৌলিক অধিকার রয়েছে। একজন শিক্ষার্থী যখন একটি নিরাপদ, বৈষম্যহীন এবং অনুপ্রেরণামূলক পরিবেশ পায়, তখনই সে তার মেধার পূর্ণ বিকাশ ঘটাতে পারে। আমাদের এই প্রচেষ্টা শুধুমাত্র পুঁথিগত শিক্ষা প্রদানের মধ্যে সীমাবদ্ধ নয়, এটি একটি আদর্শ প্রজন্ম গড়ার আন্দোলন।
            </p>

            <p className="mb-6">
              আমরা গড়ে তুলতে চাই একটি আদর্শ ও আধুনিক শিক্ষাঙ্গন, যেখানে প্রতিটি শিক্ষার্থী পাবে:
            </p>

            {/* Green Bullet Points (Enlarged markers and layout spacing) */}
            <ul className="mb-8 space-y-4 pl-2 font-bold text-xl">
              {[
                "পরিকল্পিত, মনোরম ও সবুজ ক্যাম্পাস",
                "আধুনিক প্রযুক্তিভিত্তিক শিক্ষা ও মাল্টিমিডিয়া ক্লাসরুম",
                "সহ-শিক্ষা কার্যক্রম ও ক্রীড়া চর্চার সুবর্ণ সুযোগ",
                "নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধের শিক্ষা",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-[#16a34a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] flex-shrink-0" />
                  <span className="text-[#16a34a]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Section B - Blue Highlighted Paragraph */}
            <p className="mb-6 text-[#1d4ed8] font-semibold">
              খ. শিক্ষক ও শিক্ষার্থীদের মানোন্নয়ন নিশ্চিত করতে আমরা নিয়মিত শিক্ষক প্রশিক্ষণ কর্মশালা এবং মেধা অন্বেষণ কর্মসূচির উদ্যোগ নিয়েছি। মেধার সঠিক মূল্যায়ন এবং যোগ্য শিক্ষক মন্ডলীর পরিচর্যায় শিক্ষার্থীরা যেন তাদের কাঙ্ক্ষিত লক্ষ্যে পৌঁছাতে পারে, আমরা সেই পরিবেশ নিশ্চিত করছি।
            </p>

            <p className="mb-6">
              আমাদের মূল লক্ষ্য হলো এমন একটি শিক্ষিত সমাজ গড়ে তোলা, যেখানে প্রতিটি শিক্ষার্থী দেশপ্রেম ও সততার আদর্শে উজ্জীবিত হয়ে দেশ ও দশের কল্যাণে কাজ করবে।
            </p>

            <p className="mb-6">
              আমরা চাই আমাদের ভবিষ্যৎ প্রজন্ম যেন একটি সুন্দর, সুস্থ ও জ্ঞানভিত্তিক পরিবেশে বিকশিত হতে পারে।
            </p>

            <p className="mb-6">
              এই মহতী ও গৌরবোজ্জ্বল যাত্রায় আমরা সম্মানিত অভিভাবক এবং সংশ্লিষ্ট সকলের আন্তরিক সহযোগিতা ও সুচিন্তিত মতামত কামনা করছি।
            </p>

            <p className="mb-12">
              আসুন, আমরা সবাই মিলে আমাদের সন্তানদের জন্য একটি উজ্জ্বল ভবিষ্যৎ এবং সমৃদ্ধ দেশ গড়ে তুলি।
            </p>

            {/* Signature Block (Enlarged) */}
            <div className="mt-12 pt-4 border-t border-gray-100">
              <p className="font-black text-gray-900 text-2xl mb-1">অধ্যক্ষ</p>
              <p className="text-gray-600 text-lg font-medium">[প্রতিষ্ঠানের নাম এখানে লিখুন]</p>
            </div>
          </div>
        </div>
      </div>

      {/* Golden/Beige Footer Accent Bar (Thicker bar) */}
      <div className="h-6 bg-[#f0e3bc] mt-24 w-full" />
    </div>
  );
};

