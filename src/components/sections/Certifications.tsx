"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../SectionWrapper";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "GitHub Essential Training",
    issuer: "LinkedIn Learning",
    date: "2024"
  },
  {
    title: "Data Structures and Algorithms in C",
    issuer: "CodeChef",
    date: "2023"
  }
];

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-black/20 border-y border-white/5">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
            <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Continuous learning and validation of technical skills through industry-recognized certifications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.issuer}</p>
            </div>
            
            <div className="mt-6 border-t border-white/10 pt-4">
              <span className="text-sm font-mono text-primary font-medium">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
