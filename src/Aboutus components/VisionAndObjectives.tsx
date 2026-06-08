type ObjectiveItem = {
  id: number;
  title: string;
  description: string;
};

type VisionCard = {
  id: number;
  title: string;
  description: string;
};

const visionCards: VisionCard[] = [
  {
    id: 1,
    title: "Quality Education",
    description:
      "To ensure modern, disciplined, and student-centered education for every learner.",
  },
  {
    id: 2,
    title: "Moral Development",
    description:
      "To build honest, responsible, respectful, and value-based citizens for the nation.",
  },
  {
    id: 3,
    title: "Future Ready Students",
    description:
      "To prepare students with knowledge, creativity, confidence, technology skills, and leadership ability.",
  },
];

const objectives: ObjectiveItem[] = [
  {
    id: 1,
    title: "Academic Excellence",
    description:
      "Maintain high-quality teaching, regular evaluation, result analysis, and continuous improvement in academic performance.",
  },
  {
    id: 2,
    title: "Discipline and Responsibility",
    description:
      "Develop disciplined students with good behavior, punctuality, social responsibility, and respect for others.",
  },
  {
    id: 3,
    title: "Digital Learning Environment",
    description:
      "Use technology, smart classrooms, digital content, and online communication to improve learning quality.",
  },
  {
    id: 4,
    title: "Co-curricular Development",
    description:
      "Encourage sports, debate, cultural programs, science club, ICT activities, leadership programs, and creativity.",
  },
  {
    id: 5,
    title: "Safe Campus",
    description:
      "Ensure a safe, clean, healthy, and student-friendly campus for effective learning and personal growth.",
  },
  {
    id: 6,
    title: "Inclusive Education",
    description:
      "Create an inclusive learning environment where every student gets equal care, support, and opportunity.",
  },
];

const VisionObjectives = () => {
  return (
    <section className="mx-2 lg:mx-0">
      <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-7 lg:p-8">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF0000]">
            Our Direction
          </p>

          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
            Vision and Objectives
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base lg:mx-0 lg:leading-8">
            Our vision is to create a modern, disciplined, creative, and
            technology-based educational environment where students can grow with
            knowledge, values, confidence, and leadership qualities.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {visionCards.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#E2EDF7] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-[#FF0000] transition-all duration-500 group-hover:bg-[#FF0000] group-hover:text-white group-hover:scale-110">
                {item.id}
              </div>

              <h2 className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-[#FF0000]">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Vision Statement */}
        <div className="mb-10 rounded-2xl border-l-4 border-[#FF0000] bg-[#E2EDF7]/70 p-5 transition-all duration-500 hover:bg-[#E2EDF7] hover:shadow-md sm:p-6">
          <h2 className="text-xl font-bold text-[#FF0000]">Our Vision</h2>

          <p className="mt-3 text-justify text-sm leading-8 text-gray-700 sm:text-base sm:leading-9">
            To become a leading educational institution by ensuring quality
            education, moral values, discipline, creativity, technology-based
            learning, and all-round development of students.
          </p>
        </div>

        {/* Objectives */}
        <div>
          <div className="mb-7 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-black">Our Objectives</h2>
            <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {objectives.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-[#E2EDF7] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#FF0000]/30 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E2EDF7] text-sm font-bold text-[#FF0000] transition-all duration-500 group-hover:bg-[#FF0000] group-hover:text-white">
                    {item.id}
                  </div>

                  <h3 className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-[#FF0000]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 rounded-2xl bg-[#E2EDF7] p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
          <p className="text-sm font-semibold leading-7 text-gray-700 sm:text-base">
            Education is not only about academic success. It is about building
            confidence, character, creativity, discipline, and responsibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionObjectives;