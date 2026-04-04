"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/swe", label: "Software" },
  { href: "/hardware", label: "Hardware" },
  { href: "/projects", label: "GitHub" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-[var(--primary)]/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <Link
            href="/"
            className="text-xl transition-colors text-neutral-400 hover:text-white"
          >
            Portfolio
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden sm:flex">
            <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-lg md:text-base transition-colors hover:text-white ${
                      pathname === l.href ? "text-white" : "text-neutral-400"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {open && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <ul className="flex flex-col items-center gap-4">
              {links.map((l) => (
                <li key={l.href} className="w-full px-5">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg transition-colors hover:text-white ${
                      pathname === l.href ? "text-white" : "text-neutral-400"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </div>
  );
}
