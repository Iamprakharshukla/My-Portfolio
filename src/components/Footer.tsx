import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-heading tracking-tight mb-4 inline-block">
              Prakhar<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Full Stack Developer & AI Engineer building intelligent software systems and modern digital experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Iamprakharshukla" target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/prakhar-shukla-74a9a6274/" target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:prakharshukla297@gmail.com" className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:prakharshukla297@gmail.com" className="hover:text-primary transition-colors">prakharshukla297@gmail.com</a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+91 6392348474</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Ghaziabad, UP, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prakhar Shukla. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with Next.js + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
