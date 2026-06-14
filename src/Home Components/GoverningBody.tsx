import Image from "next/image";

type GoverningMember = {
  name: string;
  designation: string;
  image: string;
  alt: string;
};

type PaymentMethod = {
  name: string;
  image: string;
};

const governingMembers: GoverningMember[] = [
  {
    name: "Siddiqui Nasir Uddin",
    designation: "Guardians’ Representative (College)",
    image: "/assets/body%20images/Siddique%20Nasir.jpg",
    alt: "Siddiqui Nasir Uddin",
  },
  {
    name: "Md. Ohaduj Zaman Montu",
    designation: "Guardians’ Representative (College)",
    image: "/assets/body%20images/Md.%20Ohaduj%20Zaman.jpg",
    alt: "Md. Ohaduj Zaman Montu",
  },
  {
    name: "Dr. Tajul Islam",
    designation: "Guardians’ Representative (Secondary)",
    image: "/assets/body%20images/Dr.%20Tajul%20Islam.png",
    alt: "Dr. Tajul Islam",
  },
  {
    name: "Anwar Kabir Bhuiya (Pulok)",
    designation: "Guardians’ Representative (College)",
    image: "/assets/body%20images/Anower%20Kabir.jpg",
    alt: "Anwar Kabir Bhuiya Pulok",
  },
  {
    name: "Ghulam Benazir Polash",
    designation: "Guardians’ Representative (Primary)",
    image: "/assets/body%20images/Golam%20Benzir.jpg",
    alt: "Ghulam Benazir Polash",
  },
  {
    name: "Mausumi Khan",
    designation: "Guardians’ Representative (Reserved Female)",
    image: "/assets/body%20images/Moushmi%20Khan.jpg",
    alt: "Mausumi Khan",
  },
  {
    name: "Md. Abdur Razzaque Akando",
    designation: "Teachers’ Representative (School)",
    image: "/assets/body%20images/Abdur%20Razzak.jpg",
    alt: "Md. Abdur Razzaque Akando",
  },
  {
    name: "Chand Sultana",
    designation: "Teachers’ Representative (Reserved Female)",
    image: "/assets/body%20images/Chaad%20Sultana.jpg",
    alt: "Chand Sultana",
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    name: "bKash",
    image: "/assets/images/bkash.png",
  },
  {
    name: "Rocket",
    image: "/assets/images/rocket%20.png",
  },
  {
    name: "DBBL",
    image: "/assets/images/dbbl%20.jpg",
  },
  {
    name: "Sonali Bank",
    image: "/assets/images/Sonali-Bank-logo-.png",
  },
];

const mobile = "/assets/images/mobileNexus%20.png";
const odhayanLogo = "/assets/images/logo-mane.png";

function GoverningMemberCard({ member }: { member: GoverningMember }) {
  return (
    <div className="flex w-36 flex-col items-center justify-center overflow-hidden rounded-md bg-bg-primary shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Image
        className="h-44 w-36 object-cover object-top"
        src={member.image}
        alt={member.alt}
        width={144}
        height={176}
      />

      <div className="h-24 px-1 py-2">
        <p className="text-sm font-bold text-primary">{member.name}</p>
        <p className="text-xs">{member.designation}</p>
      </div>
    </div>
  );
}

export default function GoverningBody() {
  const firstRowMembers = governingMembers.slice(0, 5);
  const lastRowMembers = governingMembers.slice(5);

  return (
    <div>
      {/* Our Governing Body */}
      <div className="my-10 grid grid-cols-1 gap-5 lg:grid-cols-8">
        <div className="flex flex-col items-center justify-center text-center text-2xl font-bold text-primary lg:col-span-3">
          <div>
            Our <br />
            Governing Body
          </div>

          <div className="mx-auto my-5 h-0.5 w-[30%] bg-primary" />
        </div>

        <div className="flex flex-col items-center gap-5 text-center lg:col-span-5">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {firstRowMembers.map((member) => (
              <GoverningMemberCard key={member.name} member={member} />
            ))}

            {/* hidden for desktop */}
            <div className="md:hidden">
              <GoverningMemberCard member={governingMembers[5]} />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center justify-center gap-5 text-center md:grid-cols-3">
            {lastRowMembers.map((member, index) => (
              <div
                key={member.name}
                className={index === 0 ? "hidden md:block" : "block"}
              >
                <GoverningMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* our payment procedure */}
      <div className="mx-2 my-10 grid gap-10 lg:mx-5 lg:grid-cols-2">
        <div>
          <div className="py-5 pb-10 text-center lg:text-start">
            <p className="text-2xl font-semibold text-primary">
              Online payment Procedure
            </p>
            <p className="text-2xl font-semibold text-gray">
              You can pay any fee through
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:place-items-center">
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                className="rounded-md p-3 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                src={method.image}
                alt={method.name}
                width={220}
                height={100}
              />
            ))}
          </div>
        </div>

        <div className="grid place-items-center gap-10 lg:grid-cols-2">
          <div>
            <Image src={mobile} alt="Mobile Nexus" width={320} height={500} />
          </div>

          <div className="flex flex-col items-center justify-end gap-5 lg:items-start">
            <p className="whitespace-nowrap text-2xl font-semibold text-gray xl:text-xl 2xl:text-2xl">
              You can pay any fee through
            </p>

            <p className="text-2xl font-semibold text-primary xl:text-xl 2xl:text-2xl">
              Parents Portal
            </p>

            <Image
              src={odhayanLogo}
              alt="Oddhoyan Logo"
              width={200}
              height={100}
            />

            <button type="button" className="text-blue-500 underline">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
