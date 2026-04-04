"use client";

import { hardwareProjects } from "@/data/hardware-projects";
import ProjectCard from "@/components/ProjectCard";
import ShapeGrid from "@/components/ShapeGrid";
import { motion } from "framer-motion";

export default function HardwarePage() {
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

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-28 pb-24 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            Hardware &amp; Embedded
          </h1>
          <p className="mb-10 text-neutral-400">
            FPGA accelerators, processor design, embedded firmware, and IoT systems.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {hardwareProjects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
