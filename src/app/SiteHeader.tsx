"use client";

import { usePathname } from "next/navigation";
import BannerSlider from "@/Home Components/BannerSlider";
import Navbar from "@/Home Components/Navbar";

const SiteHeader = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {isHomePage && <BannerSlider />}
      <Navbar />
    </>
  );
};

export default SiteHeader;
