"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function About() {
  const stats = [{ label: "Years Experience", value: "2+" }];

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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Story
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 text-foreground/80 leading-relaxed"
        >
          <motion.p variants={itemVariants}>
            I started my journey with a Physics background, combining analytical
            thinking with a passion for technology. This unique perspective
            helped me approach engineering problems with both theoretical rigor
            and practical creativity.
          </motion.p>

          <motion.p variants={itemVariants}>
            My transition into technology led me to become a Software Engineer
            at Source Microfinance Bank, where I architect scalable financial
            systems handling millions of transactions. My expertise spans
            backend engineering, system design, and team leadership.
          </motion.p>

          <motion.p variants={itemVariants}>
            Beyond coding, I'm passionate about mentoring the next generation of
            developers. I believe in knowledge sharing and creating environments
            where teams can grow and innovate together. Whether it's designing
            robust APIs or leading technical initiatives, I focus on creating
            systems that scale and code that matters.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
