"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextType from "@/components/TextType";
import SoftAurora from "@/components/SoftAurora";

const techStack = [
  "Go",
  "C / C++",
  "CUDA",
  "Verilog",
  "Python",
  "OCaml",
  "TypeScript",
  "Embedded C",
  "PostgreSQL",
  "React",
  "Next.js",

];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

function ResumeDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm transition-colors hover:bg-white/20"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        View Resume
        <svg
          width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0f1a1a] shadow-xl z-20"
          >
            <a
              href="/resume-swe.pdf"
              download
              onClick={() => setDropdownOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <span className="h-2 w-2 rounded-full bg-[#33c2cc]" />
              Software Resume
            </a>
            <a
              href="/resume-hw.pdf"
              download
              onClick={() => setDropdownOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
              Hardware Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
        {/* SoftAurora WebGL background */}
        <div className="pointer-events-none absolute inset-0">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={2.1}
            color1="#012825"
            color2="#6550d3"
            noiseFrequency={4.5}
            noiseAmplitude={2.5}
            bandHeight={0.4}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.25}
          />
        </div>

        <motion.p
          className="mb-4 text-lg text-neutral-400"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          className="mb-3 text-5xl font-bold sm:text-6xl md:text-7xl"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="text-[#33c2cc]">Kamsi</span> Nwabueze
        </motion.h1>

        <motion.p
          className="mb-6 max-w-xl text-lg text-neutral-400 sm:text-xl"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Computer Engineering &amp; Computer Science @ USC
        </motion.p>

        <motion.div
          className="mb-8 text-xl font-medium text-white sm:text-2xl"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <TextType
            as="span"
            text={["Systems Engineer", "Hardware Designer", "Problem Solver"]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1800}
            showCursor
            cursorCharacter="|"
            cursorBlinkDuration={0.5}
            loop
          />
        </motion.div>

        <motion.p
          className="text-sm text-neutral-500"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Based in Los Angeles
        </motion.p>

        <motion.div
          className="mt-8 flex gap-5"
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a
            href="https://github.com/kamsinw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/kamsinw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* ── About (bento grid) ── */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-10 lg:px-16">
        <motion.h2
          className="mb-10 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <div className="grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-6">
          {/* Bio card */}
          <motion.div
            className="row-span-2 flex flex-col justify-end rounded-2xl bg-gradient-to-b from-[var(--storm)] to-[var(--indigo)] p-8 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/headshot.jpg"
              alt="Kamsi Nwabueze"
              width={260}
              height={310}
              className="mb-5 rounded-xl object-cover object-top"
            />
            <h3 className="mb-3 text-2xl font-bold">Kamsi Nwabueze</h3>
            <p className="text-neutral-400 leading-relaxed">
              Computer Engineering &amp; Computer Science student at the University of
              Southern California with a focus on systems, high-performance computing, and embedded software. I enjoy building projects that sit at the boundary of hardware and software :)
            </p>
          </motion.div>

          {/* Connect card */}
          <motion.div
            className="flex flex-col items-start justify-center rounded-2xl bg-gradient-to-b from-[var(--storm)] to-[var(--indigo)] p-8 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="mb-5 text-xl font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/kamsinw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm transition-colors hover:bg-white/20"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kamsinw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm transition-colors hover:bg-white/20"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <ResumeDropdown />
            </div>
          </motion.div>

          {/* Tech stack card */}
          <motion.div
            className="flex flex-col justify-center rounded-2xl bg-gradient-to-b from-[var(--storm)] to-[var(--indigo)] p-8 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="mb-5 text-xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Project Previews ── */}
      <section className="mx-auto max-w-6xl px-5 pb-32 pt-16 sm:px-10 lg:px-16">
        <motion.h2
          className="mb-10 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              href: "/swe",
              title: "Software Engineering",
              desc: "Distributed systems, CUDA, interpreters, networking, built from scratch.",
            },
            {
              href: "/hardware",
              title: "Hardware & Embedded",
              desc: "FPGA accelerators, SIMD processors, embedded firmware, IoT systems.",
            },
            {
              href: "/projects",
              title: "GitHub",
              desc: "All public repositories, dynamically fetched and sorted by activity.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={card.href}
                className="group flex h-full flex-col justify-between rounded-2xl bg-gradient-to-b from-[var(--storm)] to-[var(--indigo)] p-8 transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <h3 className="mb-3 text-xl font-semibold group-hover:text-[#33c2cc] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <p className="mt-6 text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  View &rarr;
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
