"use client";

import { useMemo, useState } from "react";

type NoticeCategory =
  | "All"
  | "Academic"
  | "Admission"
  | "Exam"
  | "Holiday"
  | "Event"
  | "General";

type NoticePriority = "High" | "Medium" | "Normal";

type NoticeItem = {
  id: number;
  title: string;
  description: string;
  category: Exclude<NoticeCategory, "All">;
  date: string;
  year: string;
  priority: NoticePriority;
  isNew: boolean;
  isPinned: boolean;
  fileUrl: string;
};

const notices: NoticeItem[] = [
  {
    id: 1,
    title: "Annual Examination Routine 2026",
    description:
      "Annual examination routine for all classes has been published. Students are requested to follow the schedule carefully.",
    category: "Exam",
    date: "2026-06-10",
    year: "2026",
    priority: "High",
    isNew: true,
    isPinned: true,
    fileUrl: "/notice/annual-exam-routine-2026.pdf",
  },
  {
    id: 2,
    title: "Admission Circular 2026",
    description:
      "Admission circular for the academic session 2026 is now available. Guardians can collect details from the admission office.",
    category: "Admission",
    date: "2026-06-08",
    year: "2026",
    priority: "High",
    isNew: true,
    isPinned: true,
    fileUrl: "/notice/admission-circular-2026.pdf",
  },
  {
    id: 3,
    title: "Class Routine Updated",
    description:
      "Updated class routine has been published for all sections. Students should check the new routine before attending classes.",
    category: "Academic",
    date: "2026-05-25",
    year: "2026",
    priority: "Medium",
    isNew: false,
    isPinned: false,
    fileUrl: "/notice/class-routine.pdf",
  },
  {
    id: 4,
    title: "Holiday Notice for Eid",
    description:
      "School will remain closed during Eid vacation. Office activities will resume after the declared holiday period.",
    category: "Holiday",
    date: "2026-05-18",
    year: "2026",
    priority: "Medium",
    isNew: false,
    isPinned: false,
    fileUrl: "/notice/eid-holiday.pdf",
  },
  {
    id: 5,
    title: "Science Fair Registration Notice",
    description:
      "Students interested in participating in the science fair are requested to complete registration within the deadline.",
    category: "Event",
    date: "2025-12-14",
    year: "2025",
    priority: "Normal",
    isNew: false,
    isPinned: false,
    fileUrl: "/notice/science-fair.pdf",
  },
  {
    id: 6,
    title: "Parent Meeting Notice",
    description:
      "A parent meeting will be held to discuss student progress, academic discipline, and upcoming examination preparation.",
    category: "General",
    date: "2025-10-21",
    year: "2025",
    priority: "Normal",
    isNew: false,
    isPinned: false,
    fileUrl: "/notice/parent-meeting.pdf",
  },
  {
    id: 7,
    title: "Half Yearly Exam Result Published",
    description:
      "Half yearly examination result has been published. Students can collect result details from class teachers.",
    category: "Exam",
    date: "2025-07-09",
    year: "2025",
    priority: "High",
    isNew: false,
    isPinned: false,
    fileUrl: "/notice/half-yearly-result.pdf",
  },
  {
    id: 8,
    title: "Library Book Return Notice",
    description:
      "Students are requested to return borrowed library books before the final submission date.",
    category: "Academic",
    date: "2024-11-05",
    year: "2024",
    priority: "Normal",
    isNew: false,
    isPinned: false,
    fileUrl: "/notice/library-book-return.pdf",
  },
];

const categories: NoticeCategory[] = [
  "All",
  "Academic",
  "Admission",
  "Exam",
  "Holiday",
  "Event",
  "General",
];

const priorityConfig: Record<
  NoticePriority,
  { label: string; className: string }
> = {
  High: {
    label: "High",
    className: "bg-primary text-inverse",
  },
  Medium: {
    label: "Medium",
    className: "bg-primary/10 text-primary",
  },
  Normal: {
    label: "Normal",
    className: "bg-secondary text-primary",
  },
};

const SearchIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M11 19a8 8 0 1 1 5.29-14A8 8 0 0 1 11 19Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 20l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const NoticePage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<NoticeCategory>("All");

  const filteredNotices = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    return notices
      .filter((notice) => {
        const matchSearch =
          !search ||
          notice.title.toLowerCase().includes(search) ||
          notice.description.toLowerCase().includes(search) ||
          notice.category.toLowerCase().includes(search) ||
          notice.year.toLowerCase().includes(search);

        const matchCategory =
          selectedCategory === "All" || notice.category === selectedCategory;

        return matchSearch && matchCategory;
      })
      .sort((firstNotice, secondNotice) => {
        if (firstNotice.isPinned && !secondNotice.isPinned) return -1;
        if (!firstNotice.isPinned && secondNotice.isPinned) return 1;

        return (
          new Date(secondNotice.date).getTime() -
          new Date(firstNotice.date).getTime()
        );
      });
  }, [searchText, selectedCategory]);

  const isFiltered = searchText.trim() !== "" || selectedCategory !== "All";

  const resetFilters = () => {
    setSearchText("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-background px-3 py-6 sm:px-4 sm:py-8 lg:py-10">
      <section className="mx-auto max-w-[1280px]">
        <div className="mb-6 overflow-hidden rounded-2xl bg-bg-primary shadow-sm ring-1 ring-black/5 sm:rounded-3xl">
          <div className="relative p-5 sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/10 sm:h-36 sm:w-36" />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-secondary sm:h-28 sm:w-28" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
                Notice Board
              </p>

              <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h1 className="text-2xl font-black text-primary sm:text-4xl lg:text-5xl">
                    Latest Notices
                  </h1>

                  <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-secondary sm:text-base">
                    Academic notices, admission circulars, exam routines,
                    holiday updates, and school announcements.
                  </p>

                  <div className="mt-5 h-[3px] w-20 rounded-full bg-primary sm:w-24" />
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { value: notices.length, label: "Total" },
                    {
                      value: notices.filter((notice) => notice.isNew).length,
                      label: "New",
                    },
                    {
                      value: notices.filter((notice) => notice.isPinned).length,
                      label: "Pinned",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-secondary px-3 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-bg-primary hover:shadow-md sm:rounded-2xl sm:px-4 sm:py-4"
                    >
                      <p className="text-xl font-black text-primary sm:text-2xl">
                        {item.value}
                      </p>
                      <p className="text-[11px] font-bold text-secondary sm:text-xs">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="rounded-2xl bg-bg-primary p-4 shadow-sm ring-1 ring-black/5 sm:rounded-3xl sm:p-5 lg:sticky lg:top-24">
              <h2 className="text-lg font-black text-primary sm:text-xl">
                Filters
              </h2>

              <div className="mt-3 h-[3px] w-14 rounded-full bg-primary sm:w-16" />

              <div className="mt-5">
                <label className="mb-2 block text-sm font-bold text-primary">
                  Search
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-secondary bg-bg-primary px-4 py-3 transition-all duration-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                  <span className="text-primary">
                    <SearchIcon />
                  </span>

                  <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search notices..."
                    className="w-full border-none bg-transparent text-sm font-medium text-primary outline-none placeholder:text-text-gray"
                  />

                  {searchText && (
                    <button
                      type="button"
                      onClick={() => setSearchText("")}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-lg font-black leading-none text-gray transition-all duration-300 hover:bg-primary hover:text-inverse"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-sm font-bold text-primary">Category</p>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-xl px-3 py-2 text-center text-xs font-black transition-all duration-300 sm:px-4 sm:text-sm lg:text-left ${
                        selectedCategory === category
                          ? "bg-primary text-inverse shadow-md"
                          : "bg-secondary text-primary hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {isFiltered && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 w-full rounded-2xl border border-primary px-5 py-3 text-sm font-black text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-inverse hover:shadow-md"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          <section className="lg:col-span-8 xl:col-span-9">
            <div className="mb-4 rounded-2xl bg-bg-primary px-4 py-3 shadow-sm ring-1 ring-black/5 sm:rounded-3xl sm:px-5">
              <p className="text-sm font-bold text-secondary">
                <span className="text-primary">{filteredNotices.length}</span>{" "}
                notice{filteredNotices.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filteredNotices.length > 0 ? (
              <div className="space-y-4">
                {filteredNotices.map((notice) => {
                  const date = new Date(notice.date);
                  const day = date.getDate();
                  const month = date.toLocaleString("en-US", {
                    month: "short",
                  });
                  const year = date.getFullYear();
                  const priority = priorityConfig[notice.priority];

                  return (
                    <article
                      key={notice.id}
                      className="group overflow-hidden rounded-2xl bg-bg-primary shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/25 sm:rounded-3xl"
                    >
                      <div className="grid grid-cols-[68px_1fr] sm:grid-cols-[82px_1fr]">
                        <div className="flex items-center justify-center bg-primary p-3 text-inverse sm:p-4">
                          <div className="text-center">
                            <p className="text-2xl font-black leading-none sm:text-3xl">
                              {day}
                            </p>
                            <p className="mt-1 text-[10px] font-bold uppercase tracking-wide sm:text-xs">
                              {month}
                            </p>
                            <p className="text-[10px] font-bold opacity-80 sm:text-xs">
                              {year}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 sm:p-5">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            {notice.isPinned && (
                              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-black text-inverse sm:text-[11px]">
                                Pinned
                              </span>
                            )}

                            {notice.isNew && (
                              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-black text-primary sm:text-[11px]">
                                New
                              </span>
                            )}

                            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-black text-primary sm:text-[11px]">
                              {notice.category}
                            </span>

                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-black sm:text-[11px] ${priority.className}`}
                            >
                              {priority.label}
                            </span>
                          </div>

                          <h3 className="mt-3 text-base font-black text-primary transition-colors duration-300 group-hover:text-primary sm:text-lg lg:text-xl">
                            {notice.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-gray sm:leading-7">
                            {notice.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl bg-bg-primary p-8 text-center shadow-sm ring-1 ring-black/5 sm:rounded-3xl sm:p-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <SearchIcon />
                </div>

                <h3 className="mt-4 text-xl font-black text-primary">
                  No notices found
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray">
                  Try adjusting your category or search term.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-xl bg-primary px-6 py-2.5 text-sm font-black text-inverse transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </section>
      </section>
    </main>
  );
};

export default NoticePage;