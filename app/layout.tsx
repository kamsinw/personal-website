import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StaggeredMenu } from "@/components/StaggeredMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamsi Nwabueze",
  description:
    "Computer Engineering & Computer Science @ USC — Systems, Distributed Systems, Hardware",
};

const navItems = [
  { label: "Home", link: "/", ariaLabel: "Go to home" },
  { label: "Software", link: "/swe", ariaLabel: "Software projects" },
  { label: "Hardware", link: "/hardware", ariaLabel: "Hardware projects" },
  { label: "Experience", link: "/experience", ariaLabel: "Experience" },
  { label: "GitHub", link: "/projects", ariaLabel: "GitHub projects" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/kamsinw" },
  { label: "LinkedIn", link: "https://linkedin.com/in/kamsinw" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen">
        <StaggeredMenu
          isFixed
          position="right"
          logoText="Kamsi."
          items={navItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          colors={["#142020", "#0f1a20", "#1c2233"]}
          accentColor="#33c2cc"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={false}
        />
        {children}
      </body>
    </html>
  );
}
