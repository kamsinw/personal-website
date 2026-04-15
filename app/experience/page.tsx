"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ShapeGrid from "@/components/ShapeGrid";

interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
  color?: string;
}

const workExperience: Role[] = [
  {
    company: "Lenovo",
    title: "XCC Firmware Engineering Intern (Incoming)",
    location: "Morrisville, NC",
    period: "Upcoming",
    color: "#22c55e",
    bullets: [
      "Developing embedded firmware in C/C++ for server management controllers, supporting communication across 10+ hardware peripherals including sensors, EEPROM, and power-management devices",
      "Implementing low-level hardware interfaces using I²C, SPI, and UART for reliable device initialization and hardware monitoring across enterprise server systems",
      "Building Python-based automation tools to support firmware regression testing and log analysis workflows across hundreds of validation cycles",
      "Collaborating with firmware and hardware engineers on platform bring-up and debugging, supporting validation of next-generation server hardware prototypes",
    ],
  },
  {
    company: "SEO Tech Developers",
    title: "Software Engineering Intern (Incoming)",
    location: "New York, NY",
    period: "Upcoming",
    color: "#33c2cc",
    bullets: [
      "Building full-stack applications using React, JavaScript/TypeScript, Python, and Flask, with REST APIs and SQL/NoSQL databases",
      "Collaborating in Agile teams using Git and GitHub, contributing to code reviews, feature development, and iterative product improvements",
      "Strengthening data structures and algorithms through structured problem-solving practice alongside hands-on project development and 300+ hours of practice",
    ],
  },
  {
    company: "Vitel Wireless Limited",
    title: "Software Engineering Intern",
    location: "Los Angeles, CA",
    period: "June 2025 – August 2025",
    color: "#6b7280",
    bullets: [
      "Built Veye, a modular ONVIF-compatible home security platform integrating 4G IP cameras with cloud processing for large-scale remote monitoring",
      "Integrated Shinobi open-source NVR via Node.js and Docker to manage 10,000+ concurrent video streams",
      "Built backend infrastructure enabling secure remote access across 50,000 deployed VITEL 4G SIM cards",
    ],
  },
  {
    company: "GistMe Inc",
    title: "Software Engineering Intern",
    location: "Los Angeles, CA",
    period: "June 2024 – August 2024",
    color: "#6b7280",
    bullets: [
      "Developed a RESTful API using Flask for a web-based trivia platform supporting 2,000+ concurrent users",
      "Designed scalable NoSQL data storage, reducing average data retrieval latency by 30%",
    ],
  },
];

const research: Role[] = [
  {
    company: "USC QED Lab",
    title: "Undergraduate Research Assistant",
    location: "Los Angeles, CA",
    period: "Jan 2026 – Present",
    color: "#7c3aed",
    bullets: [
      "Analyzing CNN inference latency using the Mobile ML Benchmark (TFLite) dataset across mobile CPU platforms",
      "Designed feature pipelines for conv2d and fully connected layers; evaluated accuracy with MAPE",
      "Investigating transfer learning approaches for cross-platform latency prediction",
    ],
  },
];

const leadership: Role[] = [
  {
    company: "Advanced Robotics Combat",
    title: "Project Lead",
    location: "Los Angeles, CA",
    period: "September – December 2025",
    color: "#f59e0b",
    bullets: [
      "Led a team of five engineers designing and building a combat robot competing against 50+ teams",
      "Oversaw subsystem integration, testing, and engineering workflow; managed resource allocation and competition strategy",
    ],
  },
];

const RoleCard = ({ role, index }: { role: Role; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const color = role.color ?? "#6b7280";

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative w-full rounded-2xl overflow-hidden cursor-default"
      style={{
        backgroundColor: "#18181b",
        border: `1px solid ${isHovered ? color + "55" : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.3s",
        boxShadow: isHovered ? `0 20px 40px ${color}18` : "none",
      }}
    >
      {/* Animated top bar */}
      <motion.div
        className="h-0.5 w-full"
        style={{ backgroundColor: color }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="p-6">
        {/* Icon badge */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}22`, border: `1px solid ${color}44` }}
        >
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ scale: isHovered ? 1.3 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
          <div>
            <h3 className="text-base font-bold text-white">{role.company}</h3>
            <p className="text-sm font-medium" style={{ color }}>
              {role.title}
            </p>
          </div>
          <p className="text-xs text-zinc-500 shrink-0 sm:text-right">
            {role.period}
            <br />
            <span className="text-zinc-600">{role.location}</span>
          </p>
        </div>

        {/* Bullets — expand on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="pt-4 border-t space-y-2"
                style={{ borderColor: `${color}33` }}
              >
                {role.bullets.map((b, i) => (
                  <p key={i} className="flex gap-2 text-sm text-zinc-300 leading-relaxed">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    {b}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isHovered && (
          <p className="text-xs text-zinc-600 mt-1">Hover to expand</p>
        )}
      </div>
    </motion.div>
  );
};

const SectionLabel = ({ label, delay = 0 }: { label: string; delay?: number }) => (
  <motion.p
    className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    {label}
  </motion.p>
);

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen">
      {/* ShapeGrid background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <ShapeGrid
          speed={0.26}
          squareSize={40}
          direction="diagonal"
          borderColor="#271E37"
          hoverFillColor="#222222"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 pt-28 pb-24 sm:px-10 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Experience</h1>
          <p className="text-neutral-400">
            Where I&apos;ve worked, researched, and led.
          </p>
        </motion.div>

        {/* Work */}
        <section className="mb-14">
          <SectionLabel label="Work" />
          <div className="flex flex-col gap-4">
            {workExperience.map((r, i) => (
              <RoleCard key={r.company + r.period} role={r} index={i} />
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-14">
          <SectionLabel label="Research" delay={0.1} />
          <div className="flex flex-col gap-4">
            {research.map((r, i) => (
              <RoleCard key={r.company} role={r} index={i} />
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <SectionLabel label="Leadership" delay={0.2} />
          <div className="flex flex-col gap-4">
            {leadership.map((r, i) => (
              <RoleCard key={r.company} role={r} index={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
