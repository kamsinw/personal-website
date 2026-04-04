"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  stack: string;
  bullets: string[];
  highlight: string;
  github?: string;
  index: number;
  color?: string;
  speed?: number;
}

export default function ProjectCard({
  title,
  stack,
  bullets,
  highlight,
  github,
  index,
  color = "#6b7280",
  speed = 0.3,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="relative w-full rounded-2xl overflow-hidden cursor-default"
      style={{
        backgroundColor: "#18181b",
        border: `1px solid ${isHovered ? color + "66" : "rgba(255,255,255,0.05)"}`,
        transition: "border-color 0.3s",
        boxShadow: isHovered ? `0 20px 40px ${color}22` : "none",
      }}
    >
      {/* Top color bar */}
      <motion.div
        className="h-1 w-full"
        style={{ backgroundColor: color }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: speed }}
      />

      <div className="p-6">
        {/* Icon badge */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}22`, border: `1px solid ${color}44` }}
        >
          <motion.div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ scale: isHovered ? 1.3 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        {/* Header */}
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-zinc-500 mb-3">{stack}</p>

        {/* Highlight — always visible */}
        <p className="text-sm text-zinc-400 leading-relaxed">{highlight}</p>

        {/* Expanded bullets — on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: speed, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="pt-4 border-t space-y-2"
                style={{ borderColor: `${color}33` }}
              >
                {bullets.map((b, i) => (
                  <p key={i} className="flex gap-2 text-sm text-zinc-300 leading-relaxed">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    {b}
                  </p>
                ))}
              </div>

              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub →
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
