import Image from "next/image";

const body1 = "/assets/body images/6. Siddique Nasir.jpg";
const body2 = "/assets/body images/7. Md. Ohaduj Zaman.jpg";
const body3 = "/assets/body images/8. Dr. Tajul Islam.png";
const body4 = "/assets/body images/9. Anower Kabir.jpg";
const body5 = "/assets/body images/10. Golam Benzir.jpg";
const body6 = "/assets/body images/11. Moushmi Khan.jpg";
const body7 = "/assets/body images/4. Abdur Razzak.jpg";
const body8 = "/assets/body images/5. Chaad Sultana.jpg";

const bkash = "/assets/images/bkash.png";
const rocket = "/assets/images/rocket.png";
const dbbl = "/assets/images/dbbl.jpg";
const sonali = "/assets/images/Sonali-Bank-logo.png";
const mobile = "/assets/images/mobileNexus.png";
const odhayanLogo = "/assets/images/logo_oddhoyan.png";

export default function GoverningBody() {
  return (
    <div>
      {/* Our Governing Body */}
      <div className="my-10 grid grid-cols-1 gap-5 lg:grid-cols-8">
        <div className="flex flex-col items-center justify-center text-center text-2xl font-bold text-[#FF0000] lg:col-span-3">
          <div>
            Our <br />
            Governing Body
          </div>

          <div className="mx-auto my-5 h-[2px] w-[30%] bg-[#FF0000]" />
        </div>

        <div className="flex flex-col items-center gap-5 text-center lg:col-span-5">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            <div className="flex w-36 flex-col items-center justify-center border">
              <Image
                className="h-44 w-36 object-cover"
                src={body1}
                alt="Siddiqui Nasir Uddin"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Siddiqui Nasir Uddin
                </p>
                <p className="px-1 text-xs">
                  Guardians’ Representative (College)
                </p>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center border">
              <Image
                className="h-44 w-36 object-cover"
                src={body2}
                alt="Md. Ohaduj Zaman Montu"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Md. Ohaduj Zaman Montu
                </p>
                <p className="px-1 text-xs">
                  Guardians’ Representative (College)
                </p>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center border">
              <Image
                className="h-44 w-36 object-cover"
                src={body3}
                alt="Dr. Tajul Islam"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Dr. Tajul Islam
                </p>
                <p className="px-1 text-xs">
                  Guardians’ Representative (Secondary)
                </p>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center border">
              <Image
                className="h-44 w-36 object-cover"
                src={body4}
                alt="Anwar Kabir Bhuiya Pulok"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Anwar Kabir Bhuiya (Pulok)
                </p>
                <p className="px-1 text-xs">
                  Guardians’ Representative (College)
                </p>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center border">
              <Image
                className="h-44 w-36 object-cover"
                src={body5}
                alt="Ghulam Benazir Polash"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Ghulam Benazir Polash
                </p>
                <p className="px-1 text-xs">
                  Guardians’ Representative (Primary)
                </p>
              </div>
            </div>

            {/* hidden for desktop */}
            <div className="flex w-36 flex-col items-center justify-center border md:hidden">
              <Image
                className="h-44 w-36 object-cover"
                src={body6}
                alt="Mausumi Khan"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Mausumi Khan
                </p>
                <p className="px-1 text-xs">
                  Guardians’ Representative (Reserved Female)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center justify-center gap-5 text-center md:grid-cols-3">
            <div className="hidden w-36 flex-col items-center justify-center border md:flex">
              <Image
                className="h-44 w-36 object-cover"
                src={body6}
                alt="Md. Abdur Razzaque Akando"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Md. Abdur Razzaque Akando
                </p>
                <p className="px-1 text-xs">
                  Teachers’ Representative (School)
                </p>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center border">
              <Image
                className="h-44 w-36 object-cover"
                src={body7}
                alt="Chand Sultana"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Chand Sultana
                </p>
                <p className="px-1 text-xs">
                  Teachers’ Representative (Reserved Female)
                </p>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center border">
              <Image
                className="h-44 w-36 object-cover"
                src={body8}
                alt="Siddiqui Nasir Uddin"
                width={144}
                height={176}
              />
              <div className="h-24">
                <p className="px-1 text-sm font-bold text-[#FF0000]">
                  Siddiqui Nasir Uddin
                </p>
                <p className="text-xs">
                  Guardians’ Representative (College)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our payment procedure */}
      <div className="mx-2 my-10 grid gap-10 lg:mx-5 lg:grid-cols-2">
        <div>
          <div className="py-5 pb-10 text-center lg:text-start">
            <p className="text-2xl font-semibold text-[#FF0000]">
              Online payment Procedure
            </p>
            <p className="text-2xl font-semibold text-gray-500">
              You can pay any fee through
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:place-items-center">
            <Image
              className="rounded-md border p-3 shadow-lg"
              src={bkash}
              alt="bKash"
              width={220}
              height={100}
            />

            <Image
              className="rounded-md border p-3 shadow-lg"
              src={rocket}
              alt="Rocket"
              width={220}
              height={100}
            />

            <Image
              className="rounded-md border p-3 shadow-lg"
              src={dbbl}
              alt="DBBL"
              width={220}
              height={100}
            />

            <Image
              className="rounded-md border p-3 shadow-lg"
              src={sonali}
              alt="Sonali Bank"
              width={220}
              height={100}
            />
          </div>
        </div>

        <div className="grid place-items-center gap-10 lg:grid-cols-2">
          <div>
            <Image
              src={mobile}
              alt="Mobile Nexus"
              width={320}
              height={500}
            />
          </div>

          <div className="flex flex-col items-center justify-end gap-5 lg:items-start">
            <p className="whitespace-nowrap text-2xl font-semibold text-gray-500 xl:text-xl 2xl:text-2xl">
              You can pay any fee through
            </p>

            <p className="text-2xl font-semibold text-[#FF0000] xl:text-xl 2xl:text-2xl">
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