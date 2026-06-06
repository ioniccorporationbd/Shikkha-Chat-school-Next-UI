import Image, { type StaticImageData } from "next/image";

import body1 from "@/assets/6. Siddique Nasir.jpg";
import body2 from "@/assets/7. Md. Ohaduj Zaman.jpg";
import body3 from "@/assets/8. Dr. Tajul Islam.png";
import body4 from "@/assets/9. Anower Kabir.jpg";
import body5 from "@/assets/10. Golam Benzir.jpg";
import body6 from "@/assets/11. Moushmi Khan.jpg";
import body7 from "@/assets/4. Abdur Razzak.jpg";
import body8 from "@/assets/5. Chaad Sultana.jpg";

import bkash from "@/assets/bkash.png";
import rocket from "@/assets/rocket.png";
import dbbl from "@/assets/dbbl.jpg";
import sonali from "@/assets/Sonali-Bank-logo.png";
import mobile from "@/assets/mobileNexus.png";
import odhayanLogo from "@/assets/logo_oddhoyan.png";

type GoverningMember = {
  name: string;
  designation: string;
  image: StaticImageData;
};

type PaymentMethod = {
  name: string;
  image: StaticImageData;
};

const governingMembers: GoverningMember[] = [
  {
    name: "Siddiqui Nasir Uddin",
    designation: "Guardian Representative — College Section",
    image: body1,
  },
  {
    name: "Md. Ohaduj Zaman Montu",
    designation: "Guardian Representative — College Section",
    image: body2,
  },
  {
    name: "Dr. Tajul Islam",
    designation: "Guardian Representative — Secondary Section",
    image: body3,
  },
  {
    name: "Anwar Kabir Bhuiya Pulok",
    designation: "Guardian Representative — College Section",
    image: body4,
  },
  {
    name: "Ghulam Benazir Polash",
    designation: "Guardian Representative — Primary Section",
    image: body5,
  },
  {
    name: "Mausumi Khan",
    designation: "Guardian Representative — Reserved Female Seat",
    image: body6,
  },
  {
    name: "Md. Abdur Razzaque Akando",
    designation: "Teacher Representative — School Section",
    image: body7,
  },
  {
    name: "Chand Sultana",
    designation: "Teacher Representative — Reserved Female Seat",
    image: body8,
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    name: "bKash",
    image: bkash,
  },
  {
    name: "Rocket",
    image: rocket,
  },
  {
    name: "DBBL",
    image: dbbl,
  },
  {
    name: "Sonali Bank",
    image: sonali,
  },
];

export default function GoverningBody() {
  return (
    <section className="w-full">
      {/* Governing Body Section */}
      <div className="my-10 grid grid-cols-1 gap-8 px-3 lg:grid-cols-8 lg:px-5">
        <div className="flex flex-col items-center justify-center text-center lg:col-span-3">
          <h2 className="text-2xl font-bold leading-tight text-[#FF0000] sm:text-3xl">
            Our <br />
            Governing Body
          </h2>

          <div className="mx-auto my-5 h-[2px] w-24 bg-[#FF0000]" />

          <p className="max-w-xs text-sm font-medium leading-6 text-gray-600">
            Meet the respected members who guide and support the institution.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="grid place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {governingMembers.map((member) => (
              <article
                key={member.name}
                className="flex w-36 flex-col items-center justify-start overflow-hidden border bg-white text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={176}
                  className="h-44 w-36 object-cover"
                  sizes="144px"
                />

                <div className="flex min-h-24 flex-col justify-start px-1 py-2">
                  <h3 className="text-sm font-bold leading-5 text-[#FF0000]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-700">
                    {member.designation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Procedure Section */}
      <div className="my-10 grid gap-10 px-3 lg:grid-cols-2 lg:px-5">
        <div>
          <div className="pb-10 pt-5 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-[#FF0000]">
              Online Payment Procedure
            </h2>

            <p className="mt-1 text-xl font-semibold text-gray-500 sm:text-2xl">
              You can pay any fee through
            </p>
          </div>

          <div className="grid grid-cols-2 place-items-center gap-5">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex h-24 w-full max-w-[210px] items-center justify-center rounded-md border bg-white p-3 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={method.image}
                  alt={method.name}
                  className="max-h-16 w-auto object-contain"
                  sizes="210px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid place-items-center gap-8 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src={mobile}
              alt="Parents portal mobile payment"
              className="h-auto w-full max-w-[260px] object-contain sm:max-w-[320px]"
              sizes="(max-width: 640px) 260px, 320px"
            />
          </div>

          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <p className="whitespace-nowrap text-xl font-semibold text-gray-500 xl:text-xl 2xl:text-2xl">
              You can pay any fee through
            </p>

            <h3 className="text-2xl font-semibold text-[#FF0000]">
              Parents Portal
            </h3>

            <Image
              src={odhayanLogo}
              alt="Oddhoyan logo"
              className="h-auto w-full max-w-[190px] object-contain"
              sizes="190px"
            />

            <button
              type="button"
              className="font-medium text-blue-500 underline underline-offset-4 transition hover:text-blue-700"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}