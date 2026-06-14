"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "../ParticleBackground";
import { Typewriter } from "../Typewriter";
import { Button } from "../ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

const techBadges = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", "AI", "Docker"
];

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "10+" },
  { label: "Commits", value: "150+" },
  { label: "Months Exp.", value: "2" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-background/50 to-background pointer-events-none z-10" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 glass px-3 py-1 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Available for work</span>
            </motion.div>

            <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-4">
              <span className="text-gradient">Prakhar Shukla</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-[40px]">
              <Typewriter 
                words={[
                  "Full Stack Developer",
                  "AI Engineer",
                  "Software Builder",
                  "Problem Solver",
                  "Backend Architect",
                  "Startup Enthusiast"
                ]} 
              />
            </div>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              I build intelligent software systems, scalable web applications, AI-powered products, and modern digital experiences that solve meaningful real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all">
                <Link href="#contact" className="flex items-center">
                  Hire Me <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full glass">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full">
                <a href="https://drive.google.com/file/d/1bx372EogXtmAM40YFefn0N1XleesAX-h/view" target="_blank" rel="noreferrer" className="flex items-center">
                  Resume <Download className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-lg border-t border-white/10 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center hidden lg:flex"
          >
            {/* Profile Image container */}
            <div className="absolute inset-0 glass-card rounded-[40px] flex items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="absolute inset-0 mesh-bg opacity-30 mix-blend-overlay z-10 pointer-events-none" />
              <Image 
                src="/hero-image.png" 
                alt="Prakhar Shukla Profile" 
                fill
                unoptimized={true}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badges */}
            {techBadges.map((badge, idx) => {
              const angle = (idx / techBadges.length) * Math.PI * 2;
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={badge}
                  className="absolute z-30"
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ 
                    x, 
                    y, 
                    opacity: 1,
                    y: [y - 10, y + 10, y - 10]
                  }}
                  transition={{ 
                    opacity: { duration: 0.8, delay: 0.5 + idx * 0.1 },
                    x: { duration: 0.8, ease: "easeOut", delay: 0.5 + idx * 0.1 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
                  }}
                >
                  <Badge variant="secondary" className="glass px-4 py-2 text-sm shadow-lg backdrop-blur-xl border-white/20 text-foreground">
                    {badge}
                  </Badge>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
