"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import TechTicker from "@/components/tech-ticker";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="about"
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Ibrahim Abass Tunde
              </h1>
              <p className="text-xl text-primary font-semibold mt-2">
                Architecting Scalable Systems
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 leading-relaxed max-w-xl"
            >
              A Software Engineer specializing in backend performance and
              distributed systems. I leverage my background in Physics to
              deconstruct complex problems, optimizing high-volume payment
              gateways and multi-tenant SaaS platforms. Passionate about clean
              code, mentorship, and building software that scales.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href={"#projects"}>
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href={"#contact"}>
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {[
                {
                  icon: LuGithub,
                  label: "GitHub",
                  link: "https://github.com/humble-son",
                },
                {
                  icon: Mail,
                  label: "Email",
                  link: "mailto:abassibrahimtunde@gmail.com",
                },
                {
                  icon: TiSocialLinkedin,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/profbass",
                },
              ].map(({ icon: Icon, label, link }) => (
                <motion.a
                  key={label}
                  href={link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-card/80 text-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side: Code block visualization */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
            <div className="relative h-full p-6 font-mono text-sm text-foreground/80 space-y-2">
              <div className="text-primary">
                {"const"} engineer = {"{"}
              </div>
              <div className="ml-4">
                name:{" "}
                <span className="text-primary">'Ibrahim Abass Tunde'</span>,
              </div>
              <div className="ml-4">
                role: <span className="text-primary">'Software Engineer'</span>,
              </div>
              <div className="ml-4">
                experience: <span className="text-primary">2+</span> years,
              </div>
              <div className="ml-4">
                languages:{" "}
                <span className="text-primary">
                  ['JavaScript', 'TypeScript', 'Python', 'Go']
                </span>
                ,
              </div>
              <div className="ml-4">
                focus:{" "}
                <span className="text-primary">
                  ['scalability', 'mentorship', 'systems']
                </span>
                ,
              </div>
              <div>{"}"}</div>
            </div>
          </motion.div>
        </div>

        {/* Tech Ticker */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-16"
        >
          <p className="text-sm text-foreground/60 mb-6 text-center">
            Tech Stack & Expertise
          </p>
          <TechTicker />
        </motion.div>
      </div>
    </section>
  );
}
