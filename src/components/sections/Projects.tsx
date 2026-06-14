"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../SectionWrapper";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const projects = [
  {
    title: "Smart-Tutor",
    category: "AI & Machine Learning",
    description: "AI Interview Bot using fine-tuned transformers for resume-based mock interviews, answer scoring, and feedback.",
    tech: ["Python", "Transformers", "HTML"],
    metrics: ["Automated mock interviews", "Resume-based questioning"],
    github: "https://github.com/Iamprakharshukla/Smart-Tutor",
    live: "#",
    image: "/projects/smart-tutor.png"
  },
  {
    title: "face-attendance-system",
    category: "Computer Vision",
    description: "A facial recognition attendance system to automate attendance tracking using advanced computer vision techniques.",
    tech: ["Python", "OpenCV", "HTML"],
    metrics: ["Automated tracking", "High accuracy recognition"],
    github: "https://github.com/Iamprakharshukla/face-attendance-system",
    live: "#",
    image: "/projects/face-attendance.png"
  },
  {
    title: "myntraclone",
    category: "Frontend Web Dev",
    description: "A responsive Myntra Clone built with HTML, CSS, and JavaScript. It replicates Myntra's UI with a navbar, search bar, banner, and product grid. Features interactive buttons, modern design, and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    metrics: ["Responsive Design", "Pixel-perfect UI"],
    github: "https://github.com/Iamprakharshukla/myntraclone",
    live: "#",
    image: "/projects/myntraclone.png"
  },
  {
    title: "global-heatmap-dashboard",
    category: "Data Visualization",
    description: "An interactive data visualization dashboard for displaying global heatmaps, metrics, and geolocation data.",
    tech: ["Data Visualization", "JavaScript", "HTML"],
    metrics: ["Interactive maps", "Global data rendering"],
    github: "https://github.com/Iamprakharshukla/global-heatmap-dashboard",
    live: "#",
    image: "/projects/global-heatmap.png"
  },
  {
    title: "Code-crushers",
    category: "Real Estate Platform",
    description: "A premium real estate property listing platform. Features an elegant UI for browsing luxury homes, interactive map views, and detailed property pages.",
    tech: ["HTML", "CSS", "JavaScript"],
    metrics: ["Property search", "Interactive UI"],
    github: "https://github.com/Iamprakharshukla/Code-crushers",
    live: "#",
    image: "/projects/code-crushers-v2.png"
  }
];

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            A selection of my best work, showcasing my ability to build complex, scalable systems and AI-powered applications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group block"
          >
            <div className="glass-card overflow-hidden h-full flex flex-col border border-white/5 hover:border-primary/30 transition-colors">
              {/* Project Image */}
              <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-white/5 border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={project.github} target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                      <FaGithub className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </Link>
                    <Link href={project.live} target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </Link>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 border-white/5 text-xs text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button variant="outline" size="lg" className="rounded-full glass">
          <Link href="https://github.com/Iamprakharshukla" target="_blank" className="flex items-center">
            View More on GitHub <FaGithub className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
