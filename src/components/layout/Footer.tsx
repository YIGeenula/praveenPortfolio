import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-gradient">
              Praveen Dharshana
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/praveendharshana21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-dharshana-8566a1357/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:praveendharshana21@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
