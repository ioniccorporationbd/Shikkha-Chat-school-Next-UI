import type { Metadata } from "next";
import "./globals.css";

import SiteHeader from "./SiteHeader";
import Footer from "@/Home Components/Footer";

export const metadata: Metadata = {
  title: "Shikkha Chat",
  description: "Shikkha Chat Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
