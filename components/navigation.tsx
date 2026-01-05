"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const handleResumeDownload = () => {
    // Resume download functionality
    window.open("/Abass_Ibrahim_resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"}>
            <motion.div
              className="text-xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              Big Abass
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            <span className="text-sm font-medium">Resume</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
