import Image from "next/image";
import type { ReactNode } from "react";

type Member = {
  id: number;
  name: string;
  designation: string;
  image: string;
  roleColor: string;
};

type StatItem = {
  id: number;
  value: string;
  label: string;
};

const members: Member[] = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    designation: "Chairman",
    image: "/assets/body images/5. Chaad -1.jpg",
    roleColor: "bg-[#FF0000]",
  },
  {
    id: 2,
    name: "Mazeda Begum",
    designation: "Principal (Acting)",
    image: "/assets/body images/5. Chaad -1.jpg",
    roleColor: "bg-[#1267B1]",
  },
  {
    id: 3,
    name: "Siddiqui Nasir Uddin",
    designation: "Guardians’ Representative (College)",
    image: "/assets/body images/Abdur Razzak.jpg",
    roleColor: "bg-[#5358B2]",
  },
  {
    id: 4,
    name: "Md. Ohaduj Zaman Montu",
    designation: "Guardians’ Representative (College)",
    image: "/assets/body images/Md. Ohaduj Zaman.jpg",
    roleColor: "bg-[#5358B2]",
  },
  {
    id: 5,
    name: "Dr. Tajul Islam",
    designation: "Guardians’ Representative (Secondary)",
    image: "/assets/body images/Dr. Tajul Islam.png",
    roleColor: "bg-[#5358B2]",
  },
  {
    id: 6,
    name: "Anwar Kabir Bhuiya (Pulok)",
    designation: "Guardians’ Representative (Secondary)",
    image: "/assets/body images/Anower Kabir.jpg",
    roleColor: "bg-[#5358B2]",
  },
  {
    id: 7,
    name: "Ghulam Benazir Polash",
    designation: "Guardians’ Representative (Primary)",
    image: "/assets/body images/Golam Benzir.jpg",
    roleColor: "bg-[#5358B2]",
  },
  {
    id: 8,
    name: "Mausumi Khan",
    designation: "Guardians’ Representative (Reserved Female)",
    image: "/assets/body images/Moushmi Khan.jpg",
    roleColor: "bg-[#FF5E4E]",
  },
  {
    id: 9,
    name: "Md. Abdur Razzaque Akando",
    designation: "Teachers’ Representative (School)",
    image: "/assets/body images/Abdur Razzak.jpg",
    roleColor: "bg-[#1267B1]",
  },
  {
    id: 10,
    name: "Chand Sultana",
    designation: "Teachers’ Representative (Reserved Female)",
    image: "/assets/body images/Chaad Sultana.jpg",
    roleColor: "bg-[#FF5E4E]",
  },
];

const stats: StatItem[] = [
  { id: 1, value: "10", label: "Members" },
  { id: 2, value: "4", label: "Representative Groups" },
  { id: 3, value: "1", label: "Chairman" },
  { id: 4, value: "1", label: "Principal" },
];

const FacebookIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M18.9 3H22l-6.76 7.72L23.2 21h-6.23l-4.88-6.38L6.5 21H3.4l7.23-8.26L3 3h6.39l4.41 5.83L18.9 3Zm-1.09 16.19h1.72L8.45 4.72H6.6l11.21 14.47Z" />
    </svg>
  );
};

const InstagramIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
};

const SocialButton = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FF0000] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000] hover:text-white"
    >
      {children}
    </button>
  );
};

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <article className="group w-full max-w-[300px] overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#E2EDF7] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:ring-[#FF0000]/30">
      <div className="relative mx-auto mt-5 h-[310px] w-[230px] overflow-hidden rounded-2xl bg-[#E2EDF7]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="230px"
          className="object-cover object-top transition-transform duration-[1600ms] ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-4 flex translate-y-12 justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <SocialButton label="Facebook">
            <FacebookIcon />
          </SocialButton>

          <SocialButton label="Twitter">
            <TwitterIcon />
          </SocialButton>

          <SocialButton label="Instagram">
            <InstagramIcon />
          </SocialButton>
        </div>

        <div
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md ${member.roleColor}`}
        >
          #{member.id}
        </div>
      </div>

      <div className="px-5 pb-6 pt-4 text-center">
        <h3 className="text-base font-bold text-[#5358B2] transition-colors duration-300 group-hover:text-[#FF0000]">
          {member.name}
        </h3>

        <p className="mx-auto mt-2 min-h-[42px] max-w-[240px] text-xs font-semibold leading-5 text-gray-700">
          {member.designation}
        </p>

        <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#FF0000] transition-all duration-500 group-hover:w-24" />
      </div>
    </article>
  );
};

const GoverningBodyPage = () => {
  return (
    <section className="mx-2 lg:mx-0">
      <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-7 lg:p-8">
        {/* Header */}
        <div className="relative mb-10 text-center lg:text-left">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E2EDF7] blur-2xl" />
          <div className="absolute -left-10 top-12 h-24 w-24 rounded-full bg-[#FF0000]/10 blur-2xl" />

          <p className="relative text-sm font-semibold uppercase tracking-[0.25em] text-[#FF0000]">
            Leadership Team
          </p>

          <h1 className="relative mt-2 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
            Governing Body
          </h1>

          <div className="relative mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />

          <p className="relative mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base lg:mx-0 lg:leading-8">
            The governing body provides leadership, guidance, academic
            direction, administrative support, and institutional development
            planning for the school and college.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#E2EDF7] p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <p className="text-3xl font-bold text-[#FF0000] transition-transform duration-500 group-hover:scale-110">
                {item.value}
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Member Grid - Only 2 Images Per Row */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoverningBodyPage;