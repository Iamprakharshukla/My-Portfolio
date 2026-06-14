"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../SectionWrapper";
import { User, Code2, GraduationCap, Target } from "lucide-react";

const aboutCards = [
  {
    title: "Who I Am",
    icon: <User className="w-6 h-6 text-primary" />,
    description: "An Engineering Student and Full Stack Developer from Ghaziabad, India. I am deeply passionate about translating complex problems into elegant, scalable software solutions."
  },
  {
    title: "Technology Philosophy",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    description: "I believe in writing clean, modular code and focusing on the end-user experience. Technology should be an invisible enabler, not a hurdle."
  },
  {
    title: "Mission Statement",
    icon: <Target className="w-6 h-6 text-primary" />,
    description: "To build impactful, AI-powered products that simplify workflows, improve accessibility, and push the boundaries of modern web applications."
  },
  {
    title: "Education",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    description: "Currently pursuing my Engineering degree with a strong focus on computer science, AI/ML algorithms, and advanced web architectures."
  }
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            A glimpse into my background, philosophy, and the drive behind my code.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
            
            <div className="mb-6 p-4 glass inline-flex rounded-2xl group-hover:bg-primary/10 transition-colors">
              {card.icon}
            </div>
            
            <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
