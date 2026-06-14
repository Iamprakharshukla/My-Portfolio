"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../SectionWrapper";
import { Progress } from "../ui/progress";

const skillCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "ai", label: "AI & ML" },
  { id: "tools", label: "Tools" }
];

const skillsData = {
  frontend: [
    { name: "React 19", level: 90 },
    { name: "Next.js 15", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Next.js API Routes", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "System Architecture", level: 75 }
  ],
  databases: [
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 80 },
    { name: "SQL", level: 85 }
  ],
  ai: [
    { name: "Python", level: 85 },
    { name: "OpenAI API", level: 90 },
    { name: "LangChain", level: 75 },
    { name: "RAG Systems", level: 80 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Vercel / AWS", level: 80 },
    { name: "Postman", level: 95 }
  ]
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>("frontend");

  return (
    <SectionWrapper id="skills" className="bg-black/20">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Tabs */}
        <div className="lg:w-1/3 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as keyof typeof skillsData)}
              className={`relative px-6 py-4 text-left rounded-xl transition-all whitespace-nowrap lg:whitespace-normal font-medium text-lg ${
                activeTab === cat.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 glass rounded-xl border border-primary/20 bg-primary/5"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="lg:w-2/3 glass-card p-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8 capitalize">
                {skillCategories.find(c => c.id === activeTab)?.label}
              </h3>
              
              {skillsData[activeTab].map((skill, idx) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
