"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["Go/Golang", "Node.js", "NestJS", "Express", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "DynamoDB"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-all h-full">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80 text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
