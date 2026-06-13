import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#333333]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Back to Home Button */}
        <div className="flex justify-center mb-6">
          <Link
            href="/"
            className="bg-[#0f2d24] text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-[#163f33] transition-colors shadow-sm"
          >
            Back to Home
          </Link>
        </div>

        {/* Main Title Section */}
        <h1 className="text-center text-3xl font-extrabold tracking-wide text-gray-900 mb-2">
          History
        </h1>
        <div className="flex justify-center mb-12">
          <div className="w-12 h-[2px] bg-gray-900" />
        </div>

        {/* Two Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start text-[15px] leading-relaxed text-gray-700 font-normal">
          
          {/* Left Column (Bengali Version) */}
          <div className="space-y-5 text-justify">
            <h2 className="text-[#0f2d24] text-xl font-bold mb-4 border-b pb-2">
            ইতিহাস
            </h2>
            <p>
              একটি সুশৃঙ্খল, সুন্দর ও শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠান একটি জাতির আত্মোন্নয়নের অপরিহার্য অঙ্গ। একটি যথার্থ বিদ্যালয়ই পারে জাতির মানুষ তৈরির স্বপ্নকে বাস্তবায়ন করতে। বাংলাদেশের যে কয়টি বিদ্যালয় এই মহান দায়িত্বকে মাথা পেতে নিয়েছে ভিকারুননিসা নূন স্কুল ও কলেজ তার মধ্যে একটি।
            </p>
            <p>
              ভিকারুননিসা নূন স্কুলটি বাংলাদেশের রাজধানী ঢাকার কেন্দ্রস্থলে রমনা থানাধীন ১/এ নিউ বেইলী রোডে অবস্থিত। ঢাকার গুলিস্তানের জিরো পয়েন্ট থেকে এর দূরত্ব আনুমানিক এক কিলোমিটার এবং ঢাকা জিয়া বিমান বন্দর থেকে দূরত্ব আনুমানিক দশ কিলোমিটার।
            </p>
            <p>
              এই স্কুলটির বীজ সর্বপ্রথম প্রোথিত হয়েছিল ১৯৪৭ সালে যা ‘রমনা প্রিপারেটরি স্কুল’ নামে রমনা জিমখানায় স্থাপিত হয়েছিল। পরবর্তীতে ১৯৫০ সালে তৎকালীন পূর্ব পাকিস্তানের গভর্নর জনাব ফিরোজ খান নূনের বিদেশী পত্নী বেগম ভিকারুননিসা নূন স্কুলটি পরিদর্শনে এসে এর ব্যবস্থাপনা, শিক্ষাপদ্ধতি, নিয়মশৃঙ্খলা দেখে মুগ্ধ হন এবং বেইলী রোডে ১৯৫২ সালের ১৪ জানুয়ারী ভিকারুননিসা নূন স্কুলটি প্রতিষ্ঠিত করেন। স্কুলটি পর্যায়ক্রমে ভিকারুননিসা সিনিয়র কেমব্রিজ স্কুল হিসাবে পরিবর্তিত হয়।
            </p>
            <p>
              ১৯৭২ সালে বাংলাদেশের স্বাধীনতা উত্তরকালে একটি সম্পূর্ণরুপে বাংলা মাধ্যম স্কুল হিসাবে পরিচিত হয়। ১৯৭৮ সালে স্কুলটি মাধ্যমিক পর্যায় থেকে উচ্চ মাধ্যমিক পর্যায়ে উন্নীত করা হয়। ক্রমান্বয়ে ছাত্রীভর্তির চাপে ১৯৮৬ সালে স্কুলের একটি বৈকালিক শাখা খোলা হয় এবং আরও সম্প্রসারণের লক্ষ্যে ১৯৯৫ সালে ধানমন্ডি এলাকায় স্কুলের একটি ব্রাঞ্চ বৃদ্ধি করা হয়। সেখানেও প্রভাতী ও বৈকালীন দুটি শাখা চালু হয়ে যায়।
            </p>
            <p>
              ১৯৯৫ সালে মূল ভবনে ষষ্ঠ শ্রেণী থেকে ইংরেজি মাধ্যম শুরু হয় যা পর্যায়ক্রমে উচ্চ মাধ্যমিক পর্যন্ত উন্নীত হয়। ২০০৫ সালে ইংরেজি মাধ্যমে প্রথম শ্রেণী খোলা হয় এবং ২০০৬ সালে তা চতুর্থ শ্রেণী পর্যন্ত বর্ধিত করা হয়। ২০০০ শিক্ষাবর্ষে ক্রমাগত ছাত্রীভর্তির চাহিদা ও নারী শিক্ষা সম্প্রসারণের উদ্দেশ্যে বসুন্ধরায় প্রভাতী ও বৈকালিক শাখায় প্রথম থেকে ষষ্ঠ শ্রেণী পর্যন্ত দুটি শাখা সম্প্রসারণ করা হয় যা পরবর্তীতে ক্রমপর্যায়ে দ্বাদশ শ্রেণী পর্যন্ত উন্নীত করা হবে।
            </p>
            <p>
              ২০০৪ সালে ভিকারুননিসা নূন স্কুলের সম্প্রসারণ ও অগ্রগতির আরও একটি বার্তা বয়ে এনেছে সরকারি অনুকূলে প্রাপ্ত আজিমপুরে একখন্ড জমি প্রাপ্তি। যেখানে ধানমন্ডি শাখাকে স্থানান্তরের উদ্দেশ্যে মাননীয়প্রধানমন্ত্রী কর্তৃক ভিত্তিপ্রস্তর স্থাপন করা হয়েছিল। 
            </p>
            <p>
              ধানমন্ডি শাখার অভিভাবকদের আবেদনের পরিপ্রেক্ষিতে ধানমন্ডি শাখাকে স্থানান্তরিত না করে আজিমপুরে প্রাপ্ত জমিতে নতুন একটি শাখা আজিমপুর শাখা নামে খোলা হয়। ২০০৬ সালের শিক্ষাবর্ষে এর কার্যক্রম শুরু হয়েছে। গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের মাননীয় প্রধানমন্ত্রী ২০০৬ সালের ৪ মে আনুষ্ঠানিক ভাবে এর উদ্বোধন ঘোষণা করেছেন। বর্তমানে মূল শাখার প্রভাতী ও দিবা শাখা, ইংরেজি শাখা ছাড়া বসুন্ধরা, আজিমপুর, ধানমন্ডি এই তিনটি শাখার দিবা ও প্রভাতী শাখা রয়েছে।
            </p>
          </div>

          {/* Right Column (English Version / Conceptual Translation) */}
          <div className="space-y-5 text-justify">
            <h2 className="text-[#0f2d24] text-xl font-bold mb-4 border-b pb-2">
                History
            </h2>
            <p>
              A disciplined, beautiful, and excellent educational institution is an essential part of a nation's self-development. Viqarunnisa Noon School & College is proudly recognized as one of the pioneer institutions in Bangladesh that has undertaken this noble responsibility of shaping future generations.
            </p>
            <p>
              Located at 1/A New Bailey Road under Ramna Thana, in the heart of Dhaka, the campus stands approximately one kilometer away from Gulistan Zero Point and ten kilometers from Dhaka International Airport.
            </p>
            <p>
              The roots of this school were planted back in 1947 as 'Ramna Preparatory School' at Ramna Gymkhana. In 1950, Begum Viqarunnisa Noon, wife of the then Governor of East Pakistan Sir Feroz Khan Noon, visited the school and was deeply impressed by its system. Consequently, the institution was established at its permanent site on Bailey Road on January 14, 1952.
            </p>
            <p>
              Post-independence in 1972, it transformed into a fully functioning Bengali medium school and was later upgraded to the Higher Secondary level in 1978. Meeting the increasing demands for female education, the Dhanmondi branch was opened in 1995 with both morning and day shifts.
            </p>
            <p>
              The English version curriculum began in 1995 from class VI and sequentially upgraded to college levels. Expanding horizons further, the Bashundhara branch was launched in the 2000 academic year, serving students from primary up to higher secondary stages.
            </p>
            <p>
              In 2004, land allotment in Azimpur marked another milestone. Though originally planned to relocate the Dhanmondi branch, due to guardians' requests, it was inaugurated as a completely new individual branch in 2006. 
            </p>
            <p>
              The Azimpur branch was formally inaugurated by the Honorable Prime Minister on May 4, 2006. Currently, the institution flawlessly operates multiple morning and day shifts across its main campus, English version, Bashundhara, Azimpur, and Dhanmondi branches.
            </p>
          </div>

        </div>

        

      </div>
    </div>
  );
}