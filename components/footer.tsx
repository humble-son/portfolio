"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: LuGithub, href: "https://github.com/humble-son", label: "GitHub" },
    {
      icon: TiSocialLinkedin,
      href: "https://www.linkedin.com/in/profbass",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:contact@profbass.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ibrahim Abass Tunde
            </h3>
            <p className="text-foreground/60 text-sm">
              Building scalable systems and mentoring the next generation of
              developers.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4 md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-background transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-foreground/60">
            Built with Next.js & Tailwind by Big Abass • &copy; {currentYear}{" "}
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
