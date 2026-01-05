"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";

interface Project {
  id: number;
  title: string;
  highlight: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  size: "large" | "small";
}

const projects: Project[] = [
  {
    id: 1,
    title: "SchoolHubX",
    highlight: "Multi-tenant SaaS, Go Fiber, MongoDB Transactions",
    description:
      "A comprehensive school management platform with real-time communication, grade management, and parent-teacher interaction.",
    tags: ["Go", "Fiber", "MongoDB", "React", "Docker"],
    github: "#",
    live: "#",
    size: "small",
  },
  {
    id: 2,
    title: "StudyBuddy AI",
    highlight: "Node.js, Next.Js, Tailwind CSS, Gemini API",
    description:
      "An intelligent, AI-powered homework assistant and learning companion designed to help students master complex subjects. Simply paste a question, and StudyBuddy instantly provides a step-by-step solution, relevant practice problems, real-world applications, and curated video tutorials to deepen understanding. It transforms homework from a chore into a personalized learning experience.",
    tags: ["Node.js", "Express", "PostgreSQL", "TypeScript"],
    github: "https://github.com/humble-son/studyBuddy",
    live: "https://study-buddy-blush-phi.vercel.app/",
    size: "small",
  },
  {
    id: 3,
    title: "ScriptVision AI",
    highlight: "React, Chart.js, State Management",
    description:
      "This application streamlines the pre-production process for filmmakers by automating the tedious task of script breakdowns. Users simply paste a scene from their screenplay, and the application leverages Google Gemini to analyze the text contextually. It extracts and categorizes key production elements—including Characters, Props, Locations, Actions, and Time of Day—returning a structured JSON response.",
    tags: ["Next", "TypeScript", "Express", "Google Gemini API"],
    github: "https://github.com/humble-son/ScriptAIClient",
    live: "https://script-ai-client.vercel.app/",
    size: "small",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={
                project.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""
              }
            >
              <Card className="h-full p-6 bg-gradient-to-br from-card/80 to-card/40 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-pointer overflow-hidden">
                <div className="space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-4">
                      {project.highlight}
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-background/50 border border-primary/30 text-primary text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <LuGithub size={16} />
                          Code
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          Live
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
