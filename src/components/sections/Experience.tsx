"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../SectionWrapper";
import { Briefcase, Cpu } from "lucide-react";

const experiences = [
  {
    title: "AI & Full Stack Projects",
    role: "Independent Builder",
    date: "2025 - Present",
    description: "Architected and built various AI-powered applications. Integrated LLMs, vector databases, and modern frontend frameworks to create scalable, production-ready applications.",
    icon: <Cpu className="w-5 h-5 text-primary" />
  },
  {
    title: "Engineering Student",
    role: "Academics",
    date: "2023 - Present",
    description: "Pursuing a comprehensive engineering curriculum with a focus on computer science, algorithms, data structures, and advanced software engineering principles. Active participant in coding competitions and hackathons.",
    icon: <Briefcase className="w-5 h-5 text-primary" />
  }
];

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-black/20">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
            Experience & <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            A timeline of my professional, academic, and project-based experience.
          </p>
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-12 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-[1.35rem] top-1.5 w-8 h-8 rounded-full glass border border-primary/50 flex items-center justify-center bg-background shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                {exp.icon}
              </div>

              <div className="glass-card p-6 md:p-8 relative group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground mt-2 md:mt-0 glass px-3 py-1 rounded-full inline-block w-fit">
                    {exp.date}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
