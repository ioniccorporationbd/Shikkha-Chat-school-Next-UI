import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans antialiased text-[#333333]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Back to Home Button */}
        <div className="flex justify-center mb-10">
          <Link
            href="/"
            className="bg-[#0f2d24] text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-[#163f33] transition-colors shadow"
          >
            Back to Home
          </Link>
        </div>

        {/* Main Title Section */}
        <h1 className="text-center text-4xl font-black tracking-wide text-gray-900 mb-4">
          চেয়ারম্যান ও পরিচালকের বাণী
        </h1>
        <div className="flex justify-center mb-16">
          <div className="w-24 h-[4px] bg-gray-900" />
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
          {/* Profile Sidebar */}
          <div className="flex flex-col items-center flex-shrink-0 mx-auto lg:mx-0">
            <div className="w-[340px] h-[410px] relative overflow-hidden rounded-xl shadow-md border border-gray-100 bg-black">
              <Image
                src="/assets/images/Rofiqil-Islam.avif"
                alt="ড. মোহাম্মদ রফিকুল আমীন"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-xl font-bold text-gray-800 mt-6 text-center tracking-wide">
              ড. মোহাম্মদ রফিকুল আমীন 
            </p>
          </div>

          {/* Message Text Content */}
          <div className="flex-1 text-xl leading-[1.9] text-[#222222] font-normal">
            <p className="text-sm text-gray-400 mb-3 font-semibold tracking-wider">চেয়ারম্যান ও পরিচালকের বাণী</p>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 tracking-wide">
              &quot;মানসম্মত শিক্ষা ও সুনাগরিক গঠন – আমাদের মূল অঙ্গীকার&quot;
            </h2>

            <p className="mb-6">প্রিয় অভিভাবক, শিক্ষার্থীবৃন্দ ও শুভানুধ্যায়ীগণ,</p>

            <p className="mb-6">
              আমাদের এই শিক্ষা প্রতিষ্ঠান প্রতিষ্ঠার পেছনে রয়েছে একটি সুদূরপ্রসারী সামাজিক দায়বদ্ধতা ও গুণগত শিক্ষার প্রসার ঘটানোর সুদৃঢ় প্রত্যয়।
            </p>

            {/* Section A - Blue Highlighted Paragraph */}
            <p className="mb-6 text-[#1d4ed8] font-semibold">
              ক. দ্রুত পরিবর্তনশীল বিশ্বের চ্যালেঞ্জ মোকাবেলায় এবং আমাদের ভবিষ্যৎ প্রজন্মকে যোগ্য করে গড়ে তুলতে মানসম্মত শিক্ষার কোনো বিকল্প নেই। এই লক্ষ্য অর্জনে আমরা একটি যুগান্তকারী মহাপরিকল্পনা হাতে নিয়েছি; আগামী এক দশকে আন্তর্জাতিক মানের আধুনিক সুযোগ-সুবিধা সম্বলিত শিক্ষা ক্যাম্পাস সম্প্রসারণের মাধ্যমে দেশজুড়ে ১০ লক্ষ শিক্ষার্থীর আধুনিক ও নৈতিক শিক্ষার সুযোগ নিশ্চিতকরণ।
            </p>

            <p className="mb-6">
              আমরা বিশ্বাস করি, প্রতিটি শিশুর সুপ্ত প্রতিভা বিকাশ করা এবং তাদের সুনাগরিক হিসেবে গড়ে তোলা আমাদের মৌলিক দায়িত্ব। একটি শিক্ষার্থী যখন সুশিক্ষা ও নৈতিক মূল্যবোধ পায়, তখনই সে সমাজ ও জাতি গঠনে কার্যকর অবদান রাখতে সক্ষম হয়। আমাদের এই প্রতিষ্ঠান শুধুমাত্র একটি প্রাতিষ্ঠানিক রূপ নয়, বরং এটি একটি আদর্শ মানুষ গড়ার সামাজিক আন্দোলন।
            </p>

            <p className="mb-6">
              আমরা গড়ে তুলতে চাই এমন একটি আদর্শ ও আধুনিক শিক্ষার্থীবান্ধব পরিবেশ, যেখানে প্রতিটি শিক্ষার্থী পাবে:
            </p>

            {/* Green Bullet Points */}
            <ul className="mb-8 space-y-4 pl-2 font-bold text-xl">
              {[
                "পরিকল্পিত, মনোরম ও প্রযুক্তিনির্ভর ক্যাম্পাস পরিবেশ",
                "আধুনিক ল্যাবরেটরি ও সমৃদ্ধ লাইব্রেরি সুবিধা",
                "মেধা অন্বেষণ ও সৃজনশীল সহ-শিক্ষা কার্যক্রম",
                "নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধের চর্চা",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-[#16a34a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] flex-shrink-0" />
                  <span className="text-[#16a34a]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Section B - Blue Highlighted Paragraph */}
            <p className="mb-6 text-[#1d4ed8] font-semibold">
              খ. এই শিক্ষামূলক কার্যক্রমকে আরও বেগবান করতে এবং তরুণ শিক্ষিত সমাজের কর্মসংস্থানের সুযোগ সৃষ্টিতে আমরা দেশব্যাপী মেধাবী, দক্ষ ও উদ্যমী শিক্ষক-শিক্ষিকা ও শিক্ষা কর্মকর্তা নিয়োগের উদ্যোগ নিয়েছি। যেখানে যোগ্যতার ভিত্তিতে আকর্ষণীয় ও সন্তোষজনক ক্যারিয়ার গড়ার সুযোগ থাকবে।
            </p>

            <p className="mb-6">
              আমাদের চূড়ান্ত লক্ষ্য হলো এমন একটি শিক্ষিত ও স্বাবলম্বী সমাজ গড়ে তোলা, যেখানে প্রতিটি শিক্ষার্থী তার মেধা ও যোগ্যতার পূর্ণ বিকাশ ঘটিয়ে বিশ্বমঞ্চে দেশের গৌরব উজ্জ্বল করতে পারে।
            </p>

            <p className="mb-6">
              আমরা চাই আমাদের ভবিষ্যৎ প্রজন্ম যেন একটি সুন্দর, সুশৃঙ্খল ও জ্ঞানভিত্তিক পরিবেশে বিকশিত হতে পারে।
            </p>

            <p className="mb-6">
              এই মহতী ও গৌরবময় যাত্রায় আমরা সকল অভিভাবক ও শুভাকাঙ্ক্ষীর আন্তরিক সহযোগিতা এবং সুদৃঢ় আস্থা কামনা করছি।
            </p>

            <p className="mb-12">
              আসুন, আমরা সবাই মিলে আমাদের সন্তানদের জন্য এক নিরাপদ, সমৃদ্ধ ও সম্ভাবনাময় আলোকিত ভবিষ্যৎ গড়ে তুলি।
            </p>

            {/* Signature Block */}
            <div className="mt-12 pt-4 border-t border-gray-100">
              <p className="font-black text-gray-900 text-2xl mb-1">চেয়ারম্যান ও গভর্নিং বডি পরিচালক</p>
              <p className="text-gray-600 text-lg font-medium">আইডিয়াল মডেল স্কুল অ্যান্ড কলেজ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Golden/Beige Footer Accent Bar */}
      <div className="h-6 bg-[#f0e3bc] mt-24 w-full" />
    </div>
  );
}

