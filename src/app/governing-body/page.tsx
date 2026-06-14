"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SocialLinks = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  whatsapp?: string;
};

type GoverningMember = {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  slug: string;
  details?: string;
  socials?: SocialLinks;
};

const defaultSocials: SocialLinks = {
  facebook: "#",
  twitter: "#",
  linkedin: "#",
  whatsapp: "#",
};

const members: GoverningMember[] = [
  {
    id: 1,
    name: "ড. মোহাম্মদ রফিকুল আমীন",
    title: "চেয়ারম্যান",
    image: "/assets/images/managing-director.avif",
    bio: "মানসম্মত শিক্ষা, নৈতিক মূল্যবোধ ও সুনাগরিক গঠনে অঙ্গীকারবদ্ধ নেতৃত্ব।",
    slug: "chairman",
    socials: defaultSocials,
    details:
      "ড. মোহাম্মদ রফিকুল আমীন প্রতিষ্ঠানের চেয়ারম্যান হিসেবে শিক্ষার মানোন্নয়ন, শৃঙ্খলা, আধুনিক ক্যাম্পাস পরিকল্পনা এবং শিক্ষার্থীদের মানবিক ও নৈতিক বিকাশে কাজ করে যাচ্ছেন।",
  },
  {
    id: 2,
    name: "Mohammad Hossain",
    title: "Vice Chairman",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের উন্নয়ন, প্রশাসনিক সমন্বয় ও শিক্ষাবান্ধব পরিবেশ গঠনে সহায়ক ভূমিকা পালন করেন।",
    slug: "mohammad-hossain",
    socials: defaultSocials,
  },
  {
    id: 3,
    name: "মোঃ হারিসুল আলম",
    title: "ব্যবস্থাপনা পরিচালক",
    image: "/assets/images/managing-director.avif",
    bio: "শিক্ষা ব্যবস্থাপনা, পরিকল্পনা বাস্তবায়ন ও প্রশাসনিক কার্যক্রমে নেতৃত্ব প্রদান করেন।",
    slug: "harisul-alam",
    socials: defaultSocials,
  },
  {
    id: 4,
    name: "Tipu Alam Milon",
    title: "Deputy Managing Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের কার্যক্রম, উন্নয়ন পরিকল্পনা ও একাডেমিক সহায়তায় সক্রিয় ভূমিকা রাখেন।",
    slug: "tipu-alam",
    socials: defaultSocials,
  },
  {
    id: 5,
    name: "Arif Hossain",
    title: "Finance Director",
    image: "/assets/images/managing-director.avif",
    bio: "আর্থিক ব্যবস্থাপনা, বাজেট পরিকল্পনা ও স্বচ্ছতা নিশ্চিতকরণে দায়িত্ব পালন করেন।",
    slug: "arif-hossain",
    socials: defaultSocials,
  },
  {
    id: 6,
    name: "Syed Momin Hossain",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের সামগ্রিক উন্নয়ন ও শিক্ষার্থী কল্যাণমূলক কার্যক্রমে যুক্ত।",
    slug: "syed-momin",
    socials: defaultSocials,
  },
  {
    id: 7,
    name: "Shahidul Islam",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রশাসনিক সহায়তা, উন্নয়ন কার্যক্রম ও শিক্ষার মানোন্নয়নে অবদান রাখেন।",
    slug: "shahidul-islam",
    socials: defaultSocials,
  },
  {
    id: 8,
    name: "Parimal Kar",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "শৃঙ্খলা, পরিচালনা ও প্রতিষ্ঠানের দীর্ঘমেয়াদি পরিকল্পনায় সহায়তা করেন।",
    slug: "parimal-kar",
    socials: defaultSocials,
  },
  {
    id: 9,
    name: "Md Abul Hasan",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "শিক্ষার্থীদের কল্যাণ, অভিভাবক সমন্বয় এবং উন্নয়নমূলক কাজে সম্পৃক্ত।",
    slug: "abul-hasan",
    socials: defaultSocials,
  },
  {
    id: 10,
    name: "Md. Shariful Islam Gazi",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের পরিকল্পনা, পরিচালনা ও সেবা কার্যক্রমে দায়িত্বশীল ভূমিকা পালন করেন।",
    slug: "shariful-islam",
    socials: defaultSocials,
  },
  {
    id: 11,
    name: "Md Marazul Islam",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "আধুনিক শিক্ষা পরিবেশ ও প্রতিষ্ঠান উন্নয়নে সহযোগী ভূমিকা রাখেন।",
    slug: "marazul-islam",
    socials: defaultSocials,
  },
  {
    id: 12,
    name: "Mosaraf Hossain",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের শৃঙ্খলা, পরিকল্পনা এবং শিক্ষার্থী সহায়ক কাজে যুক্ত।",
    slug: "mosaraf-hossain",
    socials: defaultSocials,
  },
  {
    id: 13,
    name: "Md. Masud Parvej",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রশাসনিক উন্নয়ন ও শিক্ষা কার্যক্রমের মানোন্নয়নে ভূমিকা রাখেন।",
    slug: "masud-parvej",
    socials: defaultSocials,
  },
  {
    id: 14,
    name: "Md. Yousuf Ali",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "শিক্ষা, সংস্কৃতি ও সহশিক্ষা কার্যক্রম উন্নয়নে সহায়তা করেন।",
    slug: "yousuf-ali",
    socials: defaultSocials,
  },
  {
    id: 15,
    name: "Kajal Kumar Saha",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের উন্নয়ন পরিকল্পনা ও একাডেমিক পরিবেশ উন্নত করতে কাজ করেন।",
    slug: "kajal-kumar",
    socials: defaultSocials,
  },
  {
    id: 16,
    name: "Md. Shajalal Ansari",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "শিক্ষার্থী কল্যাণ ও প্রতিষ্ঠান পরিচালনায় সহযোগী দায়িত্ব পালন করেন।",
    slug: "shajalal-ansari",
    socials: defaultSocials,
  },
  {
    id: 17,
    name: "A. T. M. Gausul Wajet",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের সার্বিক অগ্রগতি, শৃঙ্খলা ও পরিকল্পনায় সম্পৃক্ত।",
    slug: "gausul-wajet",
    socials: defaultSocials,
  },
  {
    id: 18,
    name: "A.T.M. Khurshid Alam",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "প্রতিষ্ঠানের মানোন্নয়ন ও কার্যকর পরিচালনায় দায়িত্বশীল ভূমিকা রাখেন।",
    slug: "khurshid-alam",
    socials: defaultSocials,
  },
  {
    id: 19,
    name: "Shukdeb Chandra Das",
    title: "Director",
    image: "/assets/images/managing-director.avif",
    bio: "শিক্ষা, প্রশাসন ও উন্নয়ন কার্যক্রমে গুরুত্বপূর্ণ সহযোগিতা প্রদান করেন।",
    slug: "shukdeb-das",
    socials: defaultSocials,
  },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.23 0-1.62.77-1.62 1.56v1.9h2.76l-.44 2.91h-2.32V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M18.9 2.5h3.1l-6.8 7.8 8 11.2h-6.3l-4.9-6.8-5.7 6.8H3.2l7.3-8.7L2.8 2.5h6.5l4.5 6.1 5.1-6.1Zm-1.1 17h1.7L8.4 4.4H6.6l11.2 15.1Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4v13h-4V8Zm7 0h3.84v1.78h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-6.33c0-1.51-.03-3.45-2.1-3.45-2.1 0-2.43 1.64-2.43 3.34V21h-4V8Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.32.22 11.88c0 2.1.55 4.15 1.6 5.95L.12 24l6.33-1.66a11.9 11.9 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.32 11.88-11.88 0-3.17-1.24-6.15-3.47-8.42ZM12.1 21.78h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.82 9.82 0 0 1-1.5-5.26C2.2 6.43 6.65 2 12.1 2a9.8 9.8 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.89 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.88 8.88 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href || "#"}
      aria-label={label}
      onClick={(event) => event.stopPropagation()}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-soft bg-page-secondary text-brand-primary transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-md"
    >
      {children}
    </Link>
  );
}

function GoverningCard({
  member,
  featured = false,
  onClick,
}: {
  member: GoverningMember;
  featured?: boolean;
  onClick: () => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClick();
        }
      }}
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-soft bg-page-primary shadow-sm outline-none transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl focus:ring-4 focus:ring-[rgba(22,66,60,0.16)] ${
        featured ? "mx-auto w-full max-w-[430px]" : "w-full"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-page-secondary ${
          featured ? "h-[380px]" : "h-[300px]"
        }`}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(22,66,60,0.95)] to-transparent p-5">
          <span className="inline-flex rounded-full bg-color-secondary px-4 py-1.5 text-xs font-black text-primary shadow-sm">
            {member.title}
          </span>
        </div>
      </div>

      <div className="p-5 text-center">
        <h2 className="text-xl font-black leading-snug text-primary">
          {member.name}
        </h2>

        <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-color-primary" />

        <p className="mx-auto mt-4 line-clamp-3 max-w-[92%] text-sm font-medium leading-6 text-secondary">
          {member.bio}
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <SocialButton href={member.socials?.facebook} label="Facebook">
            <FacebookIcon />
          </SocialButton>
          <SocialButton href={member.socials?.twitter} label="Twitter">
            <TwitterIcon />
          </SocialButton>
          <SocialButton href={member.socials?.linkedin} label="LinkedIn">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton href={member.socials?.whatsapp} label="WhatsApp">
            <WhatsAppIcon />
          </SocialButton>
        </div>

        <button
          type="button"
          className="mt-6 rounded-full bg-color-primary px-5 py-2.5 text-sm font-bold text-inverse shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function GoverningDetailsModal({
  member,
  onClose,
}: {
  member: GoverningMember | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!member) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-page-primary shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-color-primary text-2xl font-black text-inverse transition-all duration-500 hover:scale-105 hover:shadow-md"
        >
          ×
        </button>

        <div className="grid max-h-[90vh] grid-cols-1 md:grid-cols-12 md:items-start">
          <div className="relative h-[320px] overflow-hidden bg-page-secondary md:col-span-5 md:h-[90vh] md:max-h-[620px]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>

          <div className="max-h-[calc(90vh-320px)] overflow-y-auto p-6 md:col-span-7 md:max-h-[90vh] md:p-8">
            <span className="inline-flex rounded-full bg-color-secondary px-4 py-1 text-sm font-black text-primary">
              {member.title}
            </span>

            <h2 className="mt-4 pr-12 text-3xl font-black leading-tight text-primary">
              {member.name}
            </h2>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-color-primary" />

            <p className="mt-6 whitespace-pre-line text-justify text-base font-medium leading-8 text-secondary">
              {member.details || member.bio}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <SocialButton href={member.socials?.facebook} label="Facebook">
                <FacebookIcon />
              </SocialButton>
              <SocialButton href={member.socials?.twitter} label="Twitter">
                <TwitterIcon />
              </SocialButton>
              <SocialButton href={member.socials?.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </SocialButton>
              <SocialButton href={member.socials?.whatsapp} label="WhatsApp">
                <WhatsAppIcon />
              </SocialButton>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-color-primary px-6 py-3 text-sm font-bold text-inverse transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GoverningBodyPage() {
  const [selectedMember, setSelectedMember] =
    useState<GoverningMember | null>(null);

  const chairman = members[0];
  const otherMembers = members.slice(1);

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <header className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-primary">
            Governing Body
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight text-primary md:text-5xl">
            গভর্নিং বডি
          </h1>

          <div className="mx-auto mt-5 h-[4px] w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-secondary">
            প্রতিষ্ঠানের সার্বিক উন্নয়ন, শৃঙ্খলা, মানসম্মত শিক্ষা ও
            শিক্ষার্থীদের কল্যাণে নিবেদিত সম্মানিত গভর্নিং বডির সদস্যবৃন্দ।
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-color-primary px-6 py-3 text-sm font-bold text-inverse shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
          >
            Back to Home
          </Link>
        </header>

        <div className="mb-16 flex justify-center">
          <GoverningCard
            member={chairman}
            featured
            onClick={() => setSelectedMember(chairman)}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {otherMembers.map((member) => (
            <GoverningCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </section>

      <div className="h-5 w-full bg-color-secondary" />

      <GoverningDetailsModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  );
}