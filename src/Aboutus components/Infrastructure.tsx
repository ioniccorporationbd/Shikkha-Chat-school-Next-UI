type InfrastructureItem = {
  id: number;
  title: string;
  description: string;
};

type FacilityItem = {
  id: number;
  name: string;
};

const infrastructureItems: InfrastructureItem[] = [
  {
    id: 1,
    title: "Modern Academic Building",
    description:
      "Well-planned academic buildings with spacious classrooms, administrative rooms, and student-friendly facilities.",
  },
  {
    id: 2,
    title: "Smart Classrooms",
    description:
      "Classrooms are designed to support modern learning with multimedia facilities, digital content, and interactive teaching.",
  },
  {
    id: 3,
    title: "Science Laboratories",
    description:
      "Laboratory facilities help students learn science through practical experiments, observation, and research-based activities.",
  },
  {
    id: 4,
    title: "Computer Lab",
    description:
      "Computer lab facilities support ICT education, digital literacy, online learning, and technology-based academic activities.",
  },
  {
    id: 5,
    title: "Library Facility",
    description:
      "A resourceful library helps students develop reading habits, research skills, creativity, and academic knowledge.",
  },
  {
    id: 6,
    title: "Safe Campus Environment",
    description:
      "The campus environment is maintained with discipline, cleanliness, security, and proper student monitoring.",
  },
];

const facilities: FacilityItem[] = [
  { id: 1, name: "Academic Building" },
  { id: 2, name: "Classrooms" },
  { id: 3, name: "Science Lab" },
  { id: 4, name: "Computer Lab" },
  { id: 5, name: "Library" },
  { id: 6, name: "Administrative Office" },
  { id: 7, name: "Common Room" },
  { id: 8, name: "Prayer Space" },
  { id: 9, name: "Playground" },
  { id: 10, name: "Clean Campus" },
  { id: 11, name: "Security System" },
  { id: 12, name: "Student Support" },
];

const Infrastructure = () => {
  return (
    <section className="mx-2 lg:mx-0">
      <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-7 lg:p-8">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF0000]">
            Campus Facilities
          </p>

          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
            Infrastructure
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base lg:mx-0 lg:leading-8">
            The institution provides a disciplined, safe, clean, and
            student-friendly campus environment with academic buildings,
            classrooms, laboratories, library facilities, and administrative
            support for quality education.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="mb-10 rounded-2xl border-l-4 border-[#FF0000] bg-[#E2EDF7]/70 p-5 transition-all duration-500 hover:bg-[#E2EDF7] hover:shadow-md sm:p-6">
          <h2 className="text-xl font-bold text-[#FF0000]">
            Infrastructure Vision
          </h2>

          <p className="mt-3 text-justify text-sm leading-8 text-gray-700 sm:text-base sm:leading-9">
            Our infrastructure plan focuses on creating a modern learning
            environment where students can study comfortably, participate in
            practical activities, use technology, and grow through academic and
            co-curricular opportunities.
          </p>
        </div>

        {/* Infrastructure Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {infrastructureItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-[#E2EDF7] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#FF0000]/30 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E2EDF7] text-lg font-bold text-[#FF0000] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF0000] group-hover:text-white">
                {item.id}
              </div>

              <h3 className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-[#FF0000]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Facility List */}
        <div className="mt-12">
          <div className="mb-7 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-black">
              Available Facilities
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[#FF0000] lg:mx-0" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="group flex items-center gap-3 rounded-xl bg-[#E2EDF7] p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#FF0000] transition-all duration-500 group-hover:bg-[#FF0000] group-hover:text-white">
                  ✓
                </div>

                <p className="text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[#FF0000]">
                  {facility.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Focus */}
        <div className="mt-12 rounded-2xl bg-[#E2EDF7] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-6">
          <h2 className="text-xl font-bold text-[#FF0000]">
            Development Focus
          </h2>

          <p className="mt-3 text-justify text-sm leading-8 text-gray-700 sm:text-base sm:leading-9">
            Continuous infrastructure development is necessary to maintain
            quality education. The institution aims to improve classroom
            facilities, digital learning tools, laboratory resources, campus
            safety, cleanliness, and student support services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;