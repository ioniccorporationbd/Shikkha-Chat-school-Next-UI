"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo-mane.png";

type SubLinkItem = {
  name: string;
  link: string;
};

type NavItem = {
  name: string;
  link: string;
  subLink?: SubLinkItem[];
};

type NavbarProps = {
  selected?: string;
  setSelected?: (value: string) => void;
};

const navList: NavItem[] = [
  { name: "Home", link: "/" },
  {
    name: "About us",
    link: "/aboutus",
    subLink: [
      { name: "Message from Chairman", link: "/aboutus#message-from-chairman" },
      { name: "Message from Principal", link: "/aboutus#message-from-principal" },
      { name: "Governing Body", link: "/aboutus#governing-body" },
      { name: "Master Plan", link: "/aboutus#master-plan" },
      { name: "History", link: "/aboutus#history" },
      { name: "Vision and Objectives", link: "/aboutus#vision-and-objectives" },
      { name: "Infrastructure", link: "/aboutus#infrastructure" },
    ],
  },
  {
    name: "Academic",
    link: "/academic",
    subLink: [
      { name: "Code of Conducts", link: "/academic" },
      { name: "Guideline for Parents", link: "/academic" },
      { name: "Dress Code", link: "/academic" },
      { name: "HomeWork And Class Lecture Documents", link: "/academic" },
      { name: "Lesson Plan", link: "/academic" },
      { name: "Academic calendar", link: "/academic" },
      { name: "Syllabus", link: "/academic" },
      { name: "Class Routine", link: "/academic" },
      { name: "Co-curricular Activities", link: "/academic" },
    ],
  },
  {
    name: "Information",
    link: "/information",
    subLink: [
      { name: "Notice Board", link: "/information" },
      { name: "Payment Procedure", link: "/information" },
      { name: "Facilities", link: "/information" },
      { name: "News and Events", link: "/information" },
      { name: "Our Achievements", link: "/information" },
      { name: "List of Holidays", link: "/information" },
      { name: "Teachers Info", link: "/information" },
      { name: "Student Info", link: "/information" },
      { name: "Policies & Guidelines", link: "/information" },
      { name: "Library", link: "/information" },
      { name: "Health and Environmental Awarness Info", link: "/information" },
    ],
  },
  {
    name: "Admission",
    link: "/admission",
    subLink: [
      { name: "Apply Now", link: "/admission" },
      { name: "Fast Facts", link: "/admission" },
      { name: "Fees & Payment", link: "/admission" },
      { name: "Scholarships", link: "/admission" },
      { name: "Transfer Procedures", link: "/admission" },
    ],
  },
  {
    name: "Campus Life",
    link: "/campuslife",
    subLink: [
      { name: "Photo Gallery", link: "/campuslife" },
      { name: "Video Gallery", link: "/campuslife" },
    ],
  },
  {
    name: "Employment",
    link: "/employment",
    subLink: [
      { name: "At a Glance", link: "/employment" },
      { name: "Employment Circulars", link: "/employment" },
      { name: "Recruitment Exam Results", link: "/employment" },
    ],
  },
  { name: "Contact", link: "/contact" },
  {
    name: "স্বাধীনতা কর্নার",
    link: "/freedomcorner",
    subLink: [
      { name: "নোটিশ", link: "/freedomcorner" },
      { name: "ছবির গ্যালারী", link: "/freedomcorner" },
      { name: "ভিডিও গ্যালারী", link: "/freedomcorner" },
    ],
  },
];

const MenuIcon = () => {
  return <span className="block text-3xl leading-none">☰</span>;
};

const CloseIcon = () => {
  return <span className="block text-3xl leading-none">×</span>;
};

const DownIcon = ({ open = false }: { open?: boolean }) => {
  return (
    <span
      className={`inline-block text-[10px] text-[#FF0000] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  );
};

const Navbar = ({ selected, setSelected }: NavbarProps) => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState<boolean>(false);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);
  const [internalSelected, setInternalSelected] = useState<string>("");

  const activeSelected = selected ?? internalSelected;

  const handleSubToggle = (index: number) => {
    setActiveSubIndex((prev) => (prev === index ? null : index));
  };

  const handleSelect = (value: string) => {
    setInternalSelected(value);
    setSelected?.(value);
    setToggle(false);
    setActiveSubIndex(null);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setToggle(false);
        setActiveSubIndex(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#EBEBEB] shadow-sm">
      <div className="relative mx-auto flex h-15 max-w-7xl items-center justify-between gap-3 px-4">
        {/* Logo */}
        <Link href="/" onClick={() => handleSelect("Home")} className="shrink-0">
          <Image
            src = {logo}
            alt="Logo"
            width={150}
            height={52}
            priority
            className="h-12.5 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden flex-1 items-center justify-center gap-3 text-[13px] font-semibold xl:flex 2xl:gap-4 2xl:text-[14px]">
          {navList.map((item, index) => {
            const isActive =
              activeSelected === item.name ||
              pathname === item.link ||
              (item.link !== "/" && pathname.startsWith(`${item.link}/`));

            return (
              <div
                key={`${item.name}-${index}`}
                className={`group relative z-20 flex h-15 items-center gap-1 border-b-4 font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#FF0000]"
                    : "border-transparent hover:border-[#FF0000]"
                }`}
              >
                <Link
                  href={item.link}
                  onClick={() => handleSelect(item.name)}
                  className="whitespace-nowrap text-black transition-colors duration-300 hover:text-[#FF0000]"
                >
                  {item.name}
                </Link>

                {item.subLink && <DownIcon />}

                {item.subLink && (
                  <div className="invisible absolute top-full left-0 w-72 translate-y-3 rounded-b-md bg-white p-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex flex-col gap-1">
                      {item.subLink.map((subItem, subIndex) => (
                        <Link
                          key={`${subItem.name}-${subIndex}`}
                          href={subItem.link}
                          onClick={() => handleSelect(subItem.name)}
                          className="rounded-md px-2 py-2 text-sm text-black transition-all duration-300 hover:bg-red-50 hover:pl-4 hover:text-[#FF0000]"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Parents Login */}
        <div className="hidden shrink-0 xl:block">
          <Link
            href="https://education.ionicerp.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-[#FF0000] px-5 py-2 text-base font-bold text-white transition-all duration-300 hover:-translate-y-px hover:bg-red-700 hover:shadow-md"
          >
            Parents Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#FF0000] text-[#FF0000] transition-all duration-300 hover:bg-red-50 xl:hidden"
          type="button"
          aria-label="Toggle menu"
        >
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Navbar */}
        <div
          className={`absolute top-full right-0 left-0 z-50 overflow-hidden bg-white shadow-xl transition-all duration-300 xl:hidden ${
            toggle
              ? "max-h-[82vh] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <nav className="flex max-h-[82vh] flex-col gap-1 overflow-y-auto p-3">
            {navList.map((item, index) => {
              const hasSubMenu = Boolean(item.subLink?.length);
              const isOpen = activeSubIndex === index;
              const isActive =
                activeSelected === item.name ||
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(`${item.link}/`));

              return (
                <div key={`${item.name}-${index}`} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between rounded-md transition-all duration-300 ${
                      isActive ? "bg-red-50" : "bg-white"
                    }`}
                  >
                    <Link
                      href={item.link}
                      onClick={() => handleSelect(item.name)}
                      className="w-full px-3 py-3 font-semibold text-black transition-colors duration-300 hover:text-[#FF0000]"
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
                        className="px-4 py-3 text-[#FF0000]"
                        aria-label="Open submenu"
                      >
                        <DownIcon open={isOpen} />
                      </button>
                    )}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.subLink && (
                      <div className="ml-4 flex flex-col gap-1 py-2 pl-3">
                        {item.subLink.map((subItem, subIndex) => (
                          <Link
                            key={`${subItem.name}-${subIndex}`}
                            href={subItem.link}
                            onClick={() => handleSelect(subItem.name)}
                            className="rounded-md px-3 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-red-50 hover:pl-5 hover:text-[#FF0000]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            <Link
              href="https://education.ionicerp.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-lg bg-[#FF0000] px-4 py-3 text-center font-bold text-white transition-all duration-300 hover:bg-red-700"
            >
              Parents Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;