type PlanCard = {
  id: number;
  title: string;
  description: string;
};

type PhaseItem = {
  id: number;
  year: string;
  title: string;
  details: string;
};

const planCards: PlanCard[] = [
  {
    id: 1,
    title: "Smart Classroom Development",
    description:
      "Introduce digital boards, multimedia learning, online class materials, and modern teaching tools for interactive education.",
  },
  {
    id: 2,
    title: "Digital Academic Management",
    description:
      "Use a centralized education platform for student information, attendance, result, notices, fees, and communication.",
  },
  {
    id: 3,
    title: "Laboratory & Library Modernization",
    description:
      "Upgrade science labs, computer labs, and library facilities with modern resources and digital access.",
  },
  {
    id: 4,
    title: "Student Safety & Discipline",
    description:
      "Improve campus monitoring, entry control, emergency response, student guidance, and safe learning environment.",
  },
  {
    id: 5,
    title: "Co-curricular Growth",
    description:
      "Develop cultural activities, debate, sports, ICT club, science club, leadership programs, and student creativity.",
  },
  {
    id: 6,
    title: "Green & Clean Campus",
    description:
      "Create a clean, eco-friendly, healthy campus with proper waste management, plantation, and awareness programs.",
  },
];

const phases: PhaseItem[] = [
  {
    id: 1,
    year: "Phase 01",
    title: "Foundation Development",
    details:
      "Build strong academic discipline, digital record system, teacher training, and basic infrastructure improvement.",
  },
  {
    id: 2,
    year: "Phase 02",
    title: "Technology Integration",
    details:
      "Implement smart classroom, online notice, result publication, attendance system, and digital communication.",
  },
  {
    id: 3,
    year: "Phase 03",
    title: "Quality Education Expansion",
    details:
      "Improve curriculum support, student mentoring, exam performance analysis, and co-curricular development.",
  },
  {
    id: 4,
    year: "Phase 04",
    title: "Sustainable Campus Model",
    details:
      "Ensure long-term maintenance, safety, green campus, innovation, and continuous institutional improvement.",
  },
];

const MasterPlan = () => {
  return (
    <section className="mx-2 lg:mx-0">
      <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-7 lg:p-8">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF0000]">
            Institutional Development
          </p>

          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
            Master Plan
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base lg:mx-0 lg:leading-8">
            The master plan focuses on building a modern, disciplined,
            technology-enabled, safe, and student-friendly education environment.
            The goal is to improve academic quality, digital management,
            infrastructure, student development, and long-term institutional
            sustainability.
          </p>
        </div>

        {/* Vision Box */}
        <div className="mb-10 rounded-2xl bg-[#E2EDF7] p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-md sm:p-6">
          <h2 className="text-xl font-bold text-[#FF0000]">Core Vision</h2>

          <p className="mt-3 text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
            To establish a modern educational institution where students can
            learn with confidence, discipline, creativity, technology, and moral
            values. The institution will combine traditional academic excellence
            with modern digital learning systems.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {planCards.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-[#E2EDF7] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#FF0000]/30 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E2EDF7] text-lg font-bold text-[#FF0000] transition-all duration-500 group-hover:bg-[#FF0000] group-hover:text-white">
                {item.id}
              </div>

              <h3 className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-[#FF0000]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12">
          <div className="mb-7 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-black">
              Implementation Roadmap
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />
          </div>

          <div className="space-y-5">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className="group flex flex-col gap-4 rounded-2xl bg-[#E2EDF7] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:flex-row sm:items-start"
              >
                <div className="shrink-0 rounded-xl bg-[#FF0000] px-5 py-3 text-center font-bold text-white shadow-sm">
                  {phase.year}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-[#FF0000]">
                    {phase.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-700 sm:text-base">
                    {phase.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-12 rounded-2xl border-l-4 border-[#FF0000] bg-[#E2EDF7]/70 p-5">
          <h2 className="text-xl font-bold text-[#FF0000]">Expected Outcome</h2>

          <p className="mt-3 text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
            Through this master plan, the institution will become more
            organized, technology-friendly, student-centered, and future-ready.
            It will support academic excellence, discipline, safety, creativity,
            and sustainable educational growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;