"use client";

import { motion } from "framer-motion";

const technologies = [
  "Go",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export default function TechTicker() {
  const repeatedTechs = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border bg-card/30 backdrop-blur-sm p-4">
      <motion.div
        className="flex gap-8"
        animate={{ x: [0, -1200] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {repeatedTechs.map((tech, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-4 py-2 rounded-full bg-background/50 border border-primary/20 text-primary whitespace-nowrap text-sm font-medium"
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
