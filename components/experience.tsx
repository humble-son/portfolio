"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Source Microfinance Bank",
    period: "May 2025 - Present",
    description:
      "Joined as a Software Engineer to enhance backend systems and optimize performance",
    achievements: [
      "Design and maintain scalable web applications providing core banking services to external customers and internal operations using NestJS and React.",
      `Engineered backend services and data integration layers, ensuring strict adherence to
financial industry standards for data protection and authorization.`,
      `Optimize complex database schemas and implement efficient data access layers, significantly improving data retrieval speeds for transaction history.`,
      `Resolve critical production incidents related to backend services, minimizing downtime
and ensuring high availability for banking operations`,
    ],
  },
  {
    title: "Backend Team Lead",
    company: "Intern Pulse",
    period: "Jan 2025 -April 2025",
    description: "Led backend development and team coordination",
    achievements: [
      `Spearheaded the development of a high-throughput payment gateway system capable of
processing over 1 million transactions per day.`,
      `Reduced API response times by 40% by implementing database query optimizations and
aggressive caching strategies using Redis.`,
      `Coordinated a team of 17 backend engineers, driving agile development practices, conducting code reviews, and mentoring junior developers on system design best practices`,
    ],
  },
  {
    title: "Backend Engineer",
    company: "Zulfah Academy",
    period: "January 2024 -October 2024",
    description: "Developed robust backend systems for educational platform",
    achievements: [
      `Designed RESTful APIs to support complex business logic, improving overall backend
efficiency by 55%.`,
      `Implemented robust authentication/authorization mechanisms (JWT/OAuth), ensuring
compliance with security standards.`,
      `Integrated third-party services (Payment Gateways, Analytics) using Sequelize and MySQL
to expand application functionality.`,
      `Collaborated with frontend developers to optimize data flow between client and server,
enhancing user experience and reducing latency.`,
    ],
  },
];

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Collapsible>
                <Card className="border-primary/20 hover:border-primary/50 transition-all bg-card/50 overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 hover:bg-background/50 transition-colors flex items-center justify-between group">
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-foreground/60 mt-1">
                        {exp.period}
                      </p>
                    </div>
                    <ChevronDown
                      size={20}
                      className="text-foreground/60 group-data-[state=open]:rotate-180 transition-transform"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6 pt-0 border-t border-border">
                    <p className="text-foreground/70 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-foreground/70 text-sm"
                        >
                          <span className="text-primary font-bold">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
