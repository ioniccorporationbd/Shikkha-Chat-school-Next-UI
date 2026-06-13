import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage() {
  return (
    <div className="min-h-screen bg-[#f0f0f5] font-sans">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-center mb-6">
          <Link
            href="/"
            className="bg-[#1a5c3a] text-white text-sm px-5 py-2 rounded-full hover:bg-[#144d30] transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <h1 className="text-center text-2xl font-bold text-gray-800 mb-1">
          চেয়ারম্যানের বাণী
        </h1>
        <div className="flex justify-center mb-8">
          <div className="w-12 h-[3px] bg-gray-800 rounded" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-[220px] h-[260px] relative overflow-hidden rounded-sm shadow">
              <Image
                src="/chairman.jpg"
                alt="ড. মোহাম্মদ রফিকুল আমীন"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-700 mt-3 text-center">
              ড. মোহাম্মদ রফিকুল আমীন
            </p>
          </div>

          <div className="flex-1 text-[15px] leading-relaxed text-gray-700">
            <p className="text-xs text-gray-400 mb-1">চেয়ারম্যানের বাণী</p>

            <h2 className="text-lg font-bold text-gray-800 mb-4">
              &quot;সবার জন্য সুন্দর আবাসন – আমাদের জাতীয় অঙ্গীকার&quot;
            </h2>

            <p className="mb-3">প্রিয় দেশবাসী ও সম্ভাব্য গ্রাহকবৃন্দ,</p>

            <p className="mb-3">
              স্বপ্ন শহর প্রোপার্টিজ লিমিটেড প্রতিষ্ঠার পেছনে রয়েছে একটি গভীর সামাজিক
              দায়বোধ।
            </p>

            <p className="mb-3 text-[#1a5c3a]">
              ক. বাংলাদেশের দ্রুত নগরায়ণ এবং জনসংখ্যা বৃদ্ধির ফলে আবাসন সংকট দিন
              দিন তীব্রতর হচ্ছে, বিশেষ করে নিম্ন এবং নিম্ন-মধ্যবিত্ত পরিবারের জন্য। এই
              চ্যালেঞ্জ মোকাবেলায় আমরা একটি যুগান্তকারী উদ্যোগ হাতে নিয়েছি: আগামী
              দশ বছরের মধ্যে ৭৫০ বর্গফুটের – ১০ লক্ষ ফ্ল্যাট নির্মাণের মহাপরিকল্পনা।
            </p>

            <p className="mb-3">
              আমরা বিশ্বাস করি, প্রতিটি মানুষের মৌলিক অধিকারের মধ্যে যোগ্য আবাসন
              অন্যতম। একটি পরিবার যখন স্থায়ী ও নিরাপদ বাসস্থান পায়, তখনই তারা জাতি
              গঠনের মূলধারায় অবদান রাখতে সক্ষম হয়। আমাদের এই প্রকল্প শুধুমাত্র ইট-
              পাথরের নির্মাণ নয়, বরং এটি একটি সামাজিক আন্দোলন।
            </p>

            <p className="mb-3">
              আমরা গড়ে তুলতে চাই সম্পূর্ণ স্বয়ংসম্পূর্ণ আবাসন কমপ্লেক্স, যেখানে প্রতিটি
              পরিবার পাবে:
            </p>

            <ul className="mb-4 space-y-1 pl-1">
              {[
                "পরিকল্পিত ও সবুজ পরিবেশ",
                "প্রয়োজনীয় নাগরিক সুবিধাদি",
                "নিরাপদ ও স্বাস্থ্যসম্মত বসবাসের পরিবেশ",
                "সামাজিক ও ধর্মীয় প্রতিষ্ঠানের সুবিধা",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#1a5c3a]">
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#1a5c3a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-3 text-[#1a5c3a]">
              খ. এই উপলক্ষে দেশের ব্যাপক কর্ম সংস্থান এর চাহিদা পূরণে আমরা উদ্যোগ
              নিয়েছি প্রাথমিক ভাবে কমে বেশি ২০০০০ ( বিশ হাজার) বিক্রয় ও বিপণন কর্মী
              নিয়োগ দেয়ার। যেখানে থাকবে তাদের নিজ যোগ্যতা ও কর্মক্ষমতা অনুযায়ী
              সন্তোষজনক আর্থিক সুবিধা অর্জনের।
            </p>

            <p className="mb-3">
              আমাদের লক্ষ্য হলো এমন একটি বাংলাদেশ গড়ে তোলা, যেখানে আয় নির্বিশেষে
              প্রতিটি নাগরিকের জন্য নিজস্ব একটি সুন্দর বাসস্থান থাকবে।
            </p>

            <p className="mb-3">
              আমরা চাই আমাদের ভবিষ্যৎ প্রজন্ম যেন সুস্থ ও সুন্দর পরিবেশে বেড়ে উঠতে
              পারে।
            </p>

            <p className="mb-3">
              এই মহতী উদ্দেশ্যে আমরা সকলের সহযোগিতা এবং আস্থা কামনা করছি।
            </p>

            <p className="mb-6">
              আসুন, আমরা সবাই মিলে গড়ে তুলি আমাদের কাঙ্ক্ষিত বাসস্থান, স্বপ্নের বাড়ি তথা
              স্বপ্নের শহর।
            </p>

            <div>
              <p className="font-bold text-gray-800">চেয়ারম্যান</p>
              <p className="italic text-gray-500 text-sm">স্বপ্ন শহর প্রোপার্টিজ লিমিটেড</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-2 bg-[#c8a84b] mt-10" />
    </div>
  );
}