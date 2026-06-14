"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

type SubLinkItem = {
  name: string;
  link: string;
};

type NavItem = {
  name: string;
  link: string;
  subLink?: SubLinkItem[];
};

const logoSrc = "/assets/images/logo-mane.png";

const navList: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/message-from-chairman",
    subLink: [
      { name: "Message from Chairman", link: "/message-from-chairman" },
      { name: "Message from Principal", link: "/message-from-principal" },
      { name: "Governing Body", link: "/governing-body" },
      { name: "Master Plan", link: "/master-plan" },
      { name: "History", link: "/history" },
      { name: "Vision and Objectives", link: "/vision-and-objectives" },
      { name: "Infrastructure", link: "/infrastructure" },
    ],
  },
  {
    name: "Academic",
    link: "/academic",
    subLink: [
      { name: "Code of Conducts", link: "/code-of-conducts" },
      { name: "Guideline for Parents", link: "/guideline-for-parents" },
      { name: "Dress Code", link: "/dress-code" },
      {
        name: "HomeWork And Class Lecture Documents",
        link: "/homework-and-class-lecture-documents",
      },
      { name: "Lesson Plan", link: "/lesson-plan" },
      { name: "Academic calendar", link: "/academic-calendar" },
      { name: "Syllabus", link: "/syllabus" },
      { name: "Class Routine", link: "/class-routine" },
      { name: "Co-curricular Activities", link: "/co-curricular-activities" },
    ],
  },
  {
    name: "Information",
    link: "/information",
    subLink: [
      { name: "Notice Board", link: "/notice-board" },
      { name: "Payment Procedure", link: "/payment-procedure" },
      { name: "Facilities", link: "/facilities" },
      { name: "News and Events", link: "/news-and-events" },
      { name: "Our Achievements", link: "/our-achievements" },
      { name: "List of Holidays", link: "/list-of-holidays" },
      { name: "Teachers Info", link: "/teachers-info" },
      { name: "Student Info", link: "/student-info" },
      { name: "Policies & Guidelines", link: "/policies-and-guidelines" },
      { name: "Library", link: "/library" },
      {
        name: "Health and Environmental Awareness Info",
        link: "/health-and-environmental-awareness-info",
      },
    ],
  },
  {
    name: "Admission",
    link: "/admission",
    subLink: [
      { name: "Apply Now", link: "/apply-now" },
      { name: "Fast Facts", link: "/fast-facts" },
      { name: "Fees & Payment", link: "/fees-and-payment" },
      { name: "Scholarships", link: "/scholarships" },
      { name: "Transfer Procedures", link: "/transfer-procedures" },
    ],
  },
  {
    name: "Campus Life",
    link: "/gallery",
    subLink: [
      { name: "Photo Gallery", link: "/gallery" },
      { name: "Video Gallery", link: "/video-gallery" },
    ],
  },
  {
    name: "Employment",
    link: "/employment",
    subLink: [
      { name: "At a Glance", link: "/at-a-glance" },
      { name: "Employment Circulars", link: "/employment-circulars" },
      { name: "Recruitment Exam Results", link: "/recruitment-exam-results" },
    ],
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "স্বাধীনতা কর্নার",
    link: "/freedomcorner",
    subLink: [
      { name: "নোটিশ", link: "/freedomcorner/notices" },
      { name: "ছবির গ্যালারী", link: "/gallery" },
      { name: "ভিডিও গ্যালারী", link: "/video-gallery" },
    ],
  },
];

const MenuIcon = () => {
  return <FaBars className="text-lg" />;
};

const CloseIcon = () => {
  return <FaTimes className="text-lg" />;
};

const DownIcon = ({ open = false }: { open?: boolean }) => {
  return (
    <FaChevronDown
      className={`text-[10px] transition-transform duration-300 ease-out ${
        open ? "rotate-180" : ""
      }`}
    />
  );
};

const Navbar = () => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState<boolean>(false);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const closeMobileMenu = () => {
    setToggle(false);
    setActiveSubIndex(null);
  };

  const handleSubToggle = (index: number) => {
    setActiveSubIndex((previousIndex) =>
      previousIndex === index ? null : index
    );
  };

  const handleMenuLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    closeMobileMenu();

    if (typeof window === "undefined") return;

    const targetUrl = new URL(link, window.location.origin);
    const currentPath = window.location.pathname;

    if (targetUrl.pathname === currentPath && targetUrl.hash) {
      event.preventDefault();

      window.history.pushState(
        null,
        "",
        `${targetUrl.pathname}${targetUrl.hash}`
      );

      window.dispatchEvent(new Event("hashchange"));
    }
  };

  const isRouteActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  const isMenuActive = (item: NavItem) => {
    if (isRouteActive(item.link)) return true;

    return Boolean(
      item.subLink?.some((subItem) => isRouteActive(subItem.link))
    );
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-primary font-main text-white">
      <div className="border-b border-primary bg-primary shadow-sm">
        <div className="relative mx-auto flex min-h-[78px] w-full items-center justify-between gap-3 px-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={(event) => handleMenuLinkClick(event, "/")}
            className="group shrink-0"
          >
            <div className="flex h-[78px] w-[136px] items-center justify-center bg-bg-primary px-3 transition-all duration-300 ease-out group-hover:shadow-md">
              <Image
                src={logoSrc}
                alt="Logo"
                width={150}
                height={70}
                priority
                className="h-[66px] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden flex-1 items-center justify-center gap-1 text-[12px] font-bold text-white xl:flex 2xl:gap-2 2xl:text-[14px]">
            {navList.map((item, index) => {
              const active = isMenuActive(item);
              const hasDropdown = Boolean(item.subLink?.length);

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="group relative z-20 flex min-h-[78px] items-center"
                >
                  <Link
                    href={item.link}
                    onClick={(event) => handleMenuLinkClick(event, item.link)}
                    className={`flex items-center gap-1 rounded-[6px] border px-3 py-2 transition-all duration-300 ease-out 2xl:px-4 ${
                      active
                        ? "border-transparent bg-primary text-text-red"
                        : "border-transparent text-white hover:bg-primary hover:text-text-red"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    {hasDropdown && <DownIcon />}
                  </Link>

                  {hasDropdown && (
                    <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-4 overflow-hidden rounded-[12px] border border-gray-200 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 2xl:w-80">
                      <div className="mb-3 rounded-[10px] bg-gray-500 px-4 py-3">
                        <p className="text-sm font-black text-white">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white/80">
                          Explore related pages
                        </p>
                      </div>

                      <div className="flex max-h-[430px] flex-col gap-2 overflow-y-auto pr-1">
                        {item.subLink?.map((subItem, subIndex) => {
                          const subActive = isRouteActive(subItem.link);

                          return (
                            <Link
                              key={`${subItem.name}-${subIndex}`}
                              href={subItem.link}
                              onClick={(event) =>
                                handleMenuLinkClick(event, subItem.link)
                              }
                              className={`group/item rounded-[10px] px-4 py-3 text-sm font-bold shadow-sm transition-all duration-300 ease-out hover:translate-x-1 ${
                                subActive
                                  ? "bg-primary text-text-red"
                                  : "bg-gray-500 text-white hover:bg-primary hover:text-text-red"
                              }`}
                            >
                              <span className="flex items-center justify-between gap-3">
                                <span>{subItem.name}</span>

                                <span
                                  className={`transition-all duration-300 ease-out group-hover/item:translate-x-1 group-hover/item:opacity-100 ${
                                    subActive
                                      ? "text-text-red opacity-100"
                                      : "text-text-red opacity-0"
                                  }`}
                                >
                                  →
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Login */}
          <div className="hidden shrink-0 xl:flex">
            <Link
              href="/login"
              onClick={(event) => handleMenuLinkClick(event, "/login")}
              className="inline-flex items-center justify-center rounded-[8px] bg-primary px-6 py-3 text-[16px] font-black text-white shadow-sm ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:text-text-red hover:shadow-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setToggle((previousValue) => !previousValue)}
            className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/20 bg-primary text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-text-red hover:shadow-md xl:hidden"
            aria-label="Toggle menu"
          >
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute left-0 top-full z-50 w-full overflow-hidden border-b border-primary bg-white shadow-2xl transition-all duration-300 ease-out xl:hidden ${
              toggle
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-4 opacity-0"
            }`}
          >
            <nav className="flex max-h-[82vh] flex-col gap-2 overflow-y-auto bg-white p-4">
              <div className="mb-2 rounded-[10px] border border-gray-200 bg-gray-100 p-4 text-center shadow-sm">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={160}
                  height={58}
                  priority
                  className="mx-auto h-[46px] w-auto object-contain"
                />

                <p className="mt-3 text-sm font-bold text-gray-600">
                  Navigate through all important pages
                </p>
              </div>

              {navList.map((item, index) => {
                const hasSubMenu = Boolean(item.subLink?.length);
                const isOpen = activeSubIndex === index;
                const isActive = isMenuActive(item);

                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="overflow-hidden rounded-[10px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-1 bg-white p-2">
                      <Link
                        href={item.link}
                        onClick={(event) =>
                          handleMenuLinkClick(event, item.link)
                        }
                        className={`w-full rounded-[8px] px-4 py-3 text-sm font-black transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-text-red"
                            : "bg-gray-500 text-white hover:bg-primary hover:text-text-red"
                        }`}
                      >
                        {item.name}
                      </Link>

                      {hasSubMenu && (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            handleSubToggle(index);
                          }}
                          className={`rounded-[8px] px-4 py-3 transition-all duration-300 ${
                            isActive || isOpen
                              ? "bg-primary text-text-red"
                              : "bg-gray-500 text-white hover:bg-primary hover:text-text-red"
                          }`}
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <DownIcon open={isOpen} />
                        </button>
                      )}
                    </div>

                    {hasSubMenu && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isOpen
                            ? "max-h-[760px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-2 border-t border-gray-200 bg-white p-3">
                          {item.subLink?.map((subItem, subIndex) => {
                            const subActive = isRouteActive(subItem.link);

                            return (
                              <Link
                                key={`${subItem.name}-${subIndex}`}
                                href={subItem.link}
                                onClick={(event) =>
                                  handleMenuLinkClick(event, subItem.link)
                                }
                                className={`group block rounded-[8px] px-4 py-3 text-sm font-bold shadow-sm transition-all duration-300 ease-out hover:translate-x-1 ${
                                  subActive
                                    ? "bg-primary text-text-red"
                                    : "bg-gray-500 text-white hover:bg-primary hover:text-text-red"
                                }`}
                              >
                                <span className="flex items-center justify-between gap-3">
                                  <span>{subItem.name}</span>

                                  <span
                                    className={`transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                                      subActive
                                        ? "text-text-red opacity-100"
                                        : "text-text-red opacity-0"
                                    }`}
                                  >
                                    →
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="mt-2 inline-flex items-center justify-center rounded-[8px] bg-primary px-4 py-3 text-center text-sm font-black text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-text-red hover:shadow-md"
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;