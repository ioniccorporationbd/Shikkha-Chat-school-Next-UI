import Image from "next/image";
import Link from "next/link";

interface Director {
  name: string;
  title: string;
  image: string;
  bio: string;
  slug: string;
}

const chairman: Director = {
  name: "ড. মোহাম্মদ রফিকুল আমীন",
  title: "চেয়ারম্যান",
  image: "/directors/chairman.jpg",
  bio: "সবার জন্য সুন্দর আবাসন—এই বিশ্বাসের কারণ করেছি খন্...",
  slug: "chairman",
};

const directors: Director[] = [
  {
    name: "Mohammad Hossain",
    title: "Vice Chairman",
    image: "/directors/mohammad-hossain.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "mohammad-hossain",
  },
  {
    name: "মো হারিসুল হালম",
    title: "ব্যবস্থাপনা পরিচালক",
    image: "/directors/harisul-alam.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "harisul-alam",
  },
  {
    name: "Tipu Alam Milon",
    title: "Deputy Managing Director",
    image: "/directors/tipu-alam.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "tipu-alam",
  },
  {
    name: "Arif Hossain",
    title: "Finance Director",
    image: "/directors/arif-hossain.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "arif-hossain",
  },
  {
    name: "Syed Momin Hossain",
    title: "Director",
    image: "/directors/syed-momin.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "syed-momin",
  },
  {
    name: "Shahidul Islam",
    title: "Director",
    image: "/directors/shahidul-islam.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "shahidul-islam",
  },
  {
    name: "Parimal Kar",
    title: "Director",
    image: "/directors/parimal-kar.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "parimal-kar",
  },
  {
    name: "Md Abul Hasan",
    title: "Director",
    image: "/directors/abul-hasan.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "abul-hasan",
  },
  {
    name: "Md. Shariful Islam Gazi",
    title: "Director",
    image: "/directors/shariful-islam.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "shariful-islam",
  },
  {
    name: "Md Marazul Islam",
    title: "Director",
    image: "/directors/marazul-islam.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "marazul-islam",
  },
  {
    name: "Mosaraf Hossain",
    title: "Director",
    image: "/directors/mosaraf-hossain.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "mosaraf-hossain",
  },
  {
    name: "Md. Masud Parvej",
    title: "Director",
    image: "/directors/masud-parvej.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "masud-parvej",
  },
  {
    name: "Md. Yousuf Ali",
    title: "Director",
    image: "/directors/yousuf-ali.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "yousuf-ali",
  },
  {
    name: "Kajal Kumar Saha",
    title: "Director",
    image: "/directors/kajal-kumar.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "kajal-kumar",
  },
  {
    name: "Md. Shajalal Ansari",
    title: "Director",
    image: "/directors/shajalal-ansari.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "shajalal-ansari",
  },
  {
    name: "A. T. M. Gausul Wajet",
    title: "Director",
    image: "/directors/gausul-wajet.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "gausul-wajet",
  },
  {
    name: "A.T.M. Khurshid Alam",
    title: "Director",
    image: "/directors/khurshid-alam.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "khurshid-alam",
  },
  {
    name: "Shukdeb Chandra Das",
    title: "Director",
    image: "/directors/shukdeb-das.jpg",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপনি ডিজাইন ও যান্...",
    slug: "shukdeb-das",
  },
];

function DirectorCard({ director, large = false }: { director: Director; large?: boolean }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative pt-${large ? "14" : "12"} pb-5 px-5`}
    >
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-[#1a5c3a] via-[#c8a84b] to-[#1a5c3a]" />
      </div>

      <div
        className={`${large ? "w-24 h-24" : "w-20 h-20"} rounded-full overflow-hidden border-4 border-white shadow-md absolute ${large ? "-top-12" : "-top-10"} left-1/2 -translate-x-1/2`}
      >
        <Image
          src={director.image}
          alt={director.name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className={`font-bold text-gray-800 mt-2 ${large ? "text-base" : "text-sm"}`}>
        {director.name}
      </h3>
      <p className={`text-[#1a5c3a] ${large ? "text-sm" : "text-xs"} mb-2`}>
        {director.title}
      </p>
      <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">
        {director.bio}
      </p>
      <Link
        href={`/directors/${director.slug}`}
        className="text-xs text-gray-600 hover:text-[#1a5c3a] transition-colors font-medium"
      >
        read more +
      </Link>
    </div>
  );
}

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen bg-[#f0f0f5] font-sans pb-16">
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
          Board Of Directors
        </h1>
        <div className="flex justify-center mb-12">
          <div className="w-12 h-[3px] bg-gray-800 rounded" />
        </div>

        <div className="flex justify-center mb-16">
          <div className="w-full max-w-xs mt-14">
            <DirectorCard director={chairman} large />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-16">
          {directors.map((director) => (
            <div key={director.slug} className="mt-10">
              <DirectorCard director={director} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-2 bg-[#c8a84b]" />
    </div>
  );
}