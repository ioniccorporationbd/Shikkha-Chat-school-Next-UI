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
  image: "/assets/images/managing-director.avif",
  bio: "সবার জন্য সুন্দর আবাসন—এই বিশ্বাসকে ধারণ করেই রূপ...",
  slug: "chairman",
};

const directors: Director[] = [
  {
    name: "Mohammad Hossain",
    title: "Vice Chairman",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "mohammad-hossain",
  },
  {
    name: "মোঃ হারিসুল আলম",
    title: "ব্যবস্থাপনা পরিচালক",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "harisul-alam",
  },
  {
    name: "Tipu Alam Milon",
    title: "Deputy Managing Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "tipu-alam",
  },
  {
    name: "Arif Hossain",
    title: "Finance Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "arif-hossain",
  },
  {
    name: "Syed Momin Hossain",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "syed-momin",
  },
  {
    name: "Shahidul Islam",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "shahidul-islam",
  },
  {
    name: "Parimal Kar",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "parimal-kar",
  },
  {
    name: "Md Abul Hasan",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "abul-hasan",
  },
  {
    name: "Md. Shariful Islam Gazi",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "shariful-islam",
  },
  {
    name: "Md Marazul Islam",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "marazul-islam",
  },
  {
    name: "Mosaraf Hossain",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "mosaraf-hossain",
  },
  {
    name: "Md. Masud Parvej",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "masud-parvej",
  },
  {
    name: "Md. Yousuf Ali",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "yousuf-ali",
  },
  {
    name: "Kajal Kumar Saha",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "kajal-kumar",
  },
  {
    name: "Md. Shajalal Ansari",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "shajalal-ansari",
  },
  {
    name: "A. T. M. Gausul Wajet",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "gausul-wajet",
  },
  {
    name: "A.T.M. Khurshid Alam",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "khurshid-alam",
  },
  {
    name: "Shukdeb Chandra Das",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আপনার স্বপ্ন, আমাদের অঙ্গীকার—জাপানি ডিজাইন ও মান্...",
    slug: "shukdeb-das",
  },
];

function DirectorCard({ director, large = false }: { director: Director; large?: boolean }) {
  return (
    <div className={`relative w-full ${large ? "pt-[60px]" : "pt-[52px]"}`}>
      {/* Dark green horizontal banner line intersecting the avatar center */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-[#1c360a] rounded-full z-0"
        style={{
          top: large ? "29px" : "25px",
          width: "85%",
          height: "6px",
        }}
      />

      {/* Main White Card Body */}
      <div className="bg-white rounded-xl  border border-gray-100 flex flex-col items-center text-center px-6 pb-8 pt-16 relative z-10">

        {/* Circular Profile Image */}
        <div
          className="rounded-full overflow-hidden  border-white shadow-md absolute left-1/2 -translate-x-1/2 bg-gray-100"
          style={{
            width: large ? "112px" : "96px",
            height: large ? "112px" : "96px",
            top: large ? "-76px" : "-58px",
          }}
        >
          <Image
            src={director.image}
            alt={director.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Name */}
        <h3
          className={`font-black text-gray-900 leading-tight ${
            large ? "text-xl mb-1.5" : "text-base mb-1"
          }`}
        >
          {director.name}
        </h3>

        {/* Title */}
        <p
          className={`text-[#14532d] font-bold tracking-wide ${
            large ? "text-sm mb-4" : "text-xs mb-3"
          }`}
        >
          {director.title}
        </p>

        {/* Bio */}
        <p
          className={`text-gray-500 font-normal leading-relaxed mb-4 max-w-[90%] mx-auto ${
            large ? "text-sm" : "text-xs"
          }`}
        >
          {director.bio}
        </p>

        {/* Read More Link */}
        <Link
          href={`/directors/${director.slug}`}
          className="text-xs font-extrabold text-gray-800 hover:text-[#1a5c3a] transition-colors border-b border-gray-300 hover:border-[#1a5c3a] pb-0.5 tracking-wider"
        >
          read more +
        </Link>
      </div>
    </div>
  );
}

export default function BoardOfDirectors() {
  const totalDirectors = directors.length;
  const cols = 4;
  const remainder = totalDirectors % cols;
  const hasIncompleteRow = remainder !== 0;

  const fullRowDirectors = hasIncompleteRow
    ? directors.slice(0, totalDirectors - remainder)
    : directors;
  const lastRowDirectors = hasIncompleteRow
    ? directors.slice(totalDirectors - remainder)
    : [];

  return (
    <div className="min-h-screen bg-[#f4f5f9] font-sans pb-24 antialiased text-[#222222]">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Back to Home */}
        <div className="flex justify-center mb-8">
          <Link
            href="/"
            className="bg-[#0f2d24] text-white text-base font-semibold px-8 py-2.5 rounded-full hover:bg-[#163f33] transition-colors shadow-sm"
          >
            Back to Home
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-center text-4xl font-black tracking-wide text-gray-900 mb-4">
          Board Of Directors
        </h1>
        <div className="flex justify-center mb-20">
          <div className="w-20 h-[3px] bg-gray-900" />
        </div>

        {/* Chairman — centered, isolated */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[360px]">
            <DirectorCard director={chairman} large />
          </div>
        </div>

        {/* Full rows — 4 columns */}
        {fullRowDirectors.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
            {fullRowDirectors.map((director) => (
              <div key={director.slug} className="w-full">
                <DirectorCard director={director} />
              </div>
            ))}
          </div>
        )}

        {/* Last incomplete row — left-aligned to match grid gutters */}
        {lastRowDirectors.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto mt-12"
          >
            {lastRowDirectors.map((director) => (
              <div key={director.slug} className="w-full">
                <DirectorCard director={director} />
              </div>
            ))}
            {/* empty placeholders to keep alignment without stretching */}
            {Array.from({ length: cols - remainder }).map((_, i) => (
              <div key={`placeholder-${i}`} className="w-full" />
            ))}
          </div>
        )}
      </div>

      {/* Decorative Golden Bottom Bar */}
      <div className="h-4 bg-[#e0ce9b] w-full" />
    </div>
  );
}