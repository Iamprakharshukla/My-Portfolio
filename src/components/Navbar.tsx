"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-300",
        isScrolled ? "glass" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-xl font-bold font-heading tracking-tight">
        Prakhar<span className="text-primary">.</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="https://github.com/Iamprakharshukla" target="_blank" rel="noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <FaGithub className="w-5 h-5" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/prakhar-shukla-74a9a6274/" target="_blank" rel="noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <FaLinkedin className="w-5 h-5" />
          </Button>
        </Link>
        <Link href="mailto:prakharshukla297@gmail.com">
          <Button className="rounded-full px-6">Hire Me</Button>
        </Link>
      </div>

      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass flex flex-col items-center py-6 space-y-4 border-b border-white/10 shadow-xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link href="mailto:prakharshukla297@gmail.com" onClick={() => setMobileMenuOpen(false)}>
            <Button className="mt-4">Hire Me</Button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
