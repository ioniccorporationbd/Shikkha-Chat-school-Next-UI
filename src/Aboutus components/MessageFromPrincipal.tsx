import Image from "next/image";

type PrincipalInfo = {
  name: string;
  position: string;
  institution: string;
  image: string;
  message: string;
};

const principalInfo: PrincipalInfo = {
  name: "Mazeda Begum",
  position: "Principal (Acting)",
  institution: "Viqarunnisa Noon School & College",
  image: "/assets/oddhayan imagea/Mazeda Begum.png",
  message:
    "Viqarunnisa Noon School & College is an all-girls educational institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses and around 25,000 students. Viqarunnisa Noon School & College is one of the renowned educational institutes in Bangladesh. We consider every child as unique and so we maintain inclusive learning-teaching environment at every step in our great set-up. It is a fact now that our results are getting better in the public examinations every time. It has been made possible through our extensive and effective care stretched out to every individual student. Our students conglomerate here from multifarious backgrounds; various strata of the society. They enter the threshold of our strong and fortified home of learning and come out bearing an all-round personality.",
};

const PrincipleMessage = () => {
  return (
    <section className="mx-2 lg:mx-0">
      <div className="rounded-2xl bg-white p-4 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-6 lg:p-8">
        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="group relative h-[300px] w-full max-w-[430px] overflow-hidden rounded-xl bg-secondary shadow-sm sm:h-[360px] lg:h-[430px]">
            <Image
              src={principalInfo.image}
              alt={principalInfo.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 430px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Message */}
        <p className="py-5 text-justify text-sm leading-7 text-gray-700 sm:text-base lg:leading-8">
          {principalInfo.message}
        </p>

        {/* Signature */}
        <div className="border-l-4 border-primary bg-secondary/70 px-4 py-3 transition-all duration-500 hover:bg-secondary">
          <p className="text-lg font-bold text-black">{principalInfo.name}</p>

          <p className="font-semibold text-primary">
            {principalInfo.position}
          </p>

          <p className="font-medium text-gray-700">
            {principalInfo.institution}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrincipleMessage;