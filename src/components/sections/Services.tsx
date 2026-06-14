"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../SectionWrapper";
import { Server, Database, Code, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using modern frameworks like Next.js, React, and Node.js. Focus on performance, SEO, and scalable architecture.",
    icon: <Code className="w-8 h-8 text-primary" />
  },
  {
    title: "AI Integration",
    description: "Embedding intelligence into applications using LLMs, LangChain, and custom machine learning models to automate tasks and improve user experience.",
    icon: <BrainCircuit className="w-8 h-8 text-primary" />
  },
  {
    title: "Backend & API Architecture",
    description: "Designing robust, secure, and scalable REST and GraphQL APIs. Implementing microservices and optimizing server performance.",
    icon: <Server className="w-8 h-8 text-primary" />
  },
  {
    title: "Database Design",
    description: "Architecting efficient database schemas for SQL (PostgreSQL) and NoSQL (MongoDB) databases. Query optimization and data modeling.",
    icon: <Database className="w-8 h-8 text-primary" />
  }
];

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          I offer a range of specialized services to help you build, scale, and optimize your digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 group flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground flex-1 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
