import Image from "next/image";

const oddhayan = "/assets/oddhayan imagea/oddoyan.png";
const chairmanImage = "/assets/oddhayan imagea/Tanvir Ahmed.jpeg";
const principalImage = "/assets/oddhayan imagea/Mazeda Begum.png";

type ProfileCardProps = {
  image: string;
  name: string;
  designation: string;
};

type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="mb-5 text-center lg:text-left">
      <h2 className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-2 h-0.75 w-24 rounded-full bg-primary lg:mx-0" />
    </div>
  );
};

const ProfileCard = ({ image, name, designation }: ProfileCardProps) => {
  return (
    <div className="group flex min-h-75 flex-col items-center justify-center rounded-2xl bg-white/95 p-5 text-center shadow-sm ring-1 ring-red-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-red-200">
      <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-xl bg-primary/10 shadow-sm">
        <Image
          src={image}
          alt={name}
          fill
          sizes="160px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <h3 className="text-base font-bold text-primary transition-colors duration-300 sm:text-lg">
        {name}
      </h3>

      <p className="mt-2 min-h-12 px-1 text-xs leading-5 text-gray-500 sm:px-4 lg:px-6 lg:text-sm">
        {designation}
      </p>
    </div>
  );
};

const Oddhayan = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft background wallpaper */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(231,179,179,0.35),transparent_40%)]" />

      <div className="relative z-10">
        <div className="my-2 h-3 bg-[#e7b3b3]" />

        {/* Top banner image */}
        <div className="relative h-55 w-full overflow-hidden sm:h-75 md:h-87.5 lg:h-100">
          <Image
            src={oddhayan}
            alt="Viqarunnisa Noon School & College"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1800 ease-out hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-white/5" />
        </div>

        <div className="mx-auto my-10 grid max-w-7xl grid-cols-1 gap-10 px-3 sm:px-5 lg:px-6 xl:grid-cols-2">
          {/* Left Content */}
          <div className="rounded-2xl bg-white/80 p-3 backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white sm:p-5 lg:p-6">
            <SectionHeading title="Viqarunnisa Noon School & College" />

            <p className="pb-4 text-justify text-sm leading-7 text-gray-700 transition-colors duration-300 lg:text-base lg:leading-8">
              Viqarunnisa Noon School & College is an all-girls educational
              institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses and
              around 25,000 students. Viqarunnisa Noon School & College is one
              of the renowned educational institutes in Bangladesh. We consider
              every child as unique and so we maintain inclusive
              learning-teaching environment at every step in our great set-up.
              It is a fact now that our results are getting better in the public
              examinations every time. It has been made possible through our
              extensive and effective care stretched out to every individual
              student. Our students conglomerate here from multifarious
              backgrounds; various strata of the society. They enter the
              threshold of our strong and fortified home of learning and come out
              bearing an all-round personality.
            </p>

            <div className="mt-4">
              <p className="text-center text-base font-medium text-primary transition-all duration-300 lg:text-left lg:text-lg">
                Tanvir Ahmed
              </p>

              <p className="text-center text-sm font-semibold text-gray-800 lg:text-left">
                Chairman, Viqarunnisa Noon School & College
              </p>
            </div>
          </div>

          {/* Right Profile Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            <ProfileCard
              image={chairmanImage}
              name="Tanvir Ahmed"
              designation="Chairman, Viqarunnisa Noon School & College"
            />

            <ProfileCard
              image={principalImage}
              name="Mazeda Begum"
              designation="Principal (Acting), Viqarunnisa Noon School & College"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oddhayan;