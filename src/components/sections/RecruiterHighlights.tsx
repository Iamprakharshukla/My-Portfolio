"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionWrapper } from "../SectionWrapper";

const highlights = [
  "Full Stack Development",
  "AI Engineering",
  "Backend Architecture",
  "Database Design",
  "API Development"
];

export function RecruiterHighlights() {
  return (
    <SectionWrapper className="bg-black/40 border-y border-white/5 pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground uppercase tracking-[0.2em] text-xs font-semibold mb-8 text-center"
        >
          Specialized In
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-5xl">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass px-6 py-4 rounded-xl flex items-center space-x-3 cursor-default hover:border-primary/50 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm md:text-base text-foreground">{highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
