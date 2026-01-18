import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Eye } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in">
          Software Engineering Undergraduate
          <span className="block text-gradient mt-2">
            Aspiring Software Quality Assurance Engineer
          </span>
        </h1>

        {/* Subtitle - Testing Types */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {["Manual Testing", "Automation Testing", "API Testing", "Performance Testing", "AI-Driven QA"].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm md:text-base font-medium rounded-full bg-card border border-border shadow-sm hover:scale-105 transition-transform duration-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Enthusiastic <span className="text-foreground font-medium"> QA Engineer </span>
          passionate about ensuring software quality through <span className="text-foreground font-medium"> manual & automated testing</span>,
          <span className="text-foreground font-medium"> bug lifecycle management</span>, and
          <span className="text-foreground font-medium"> continuous improvement</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button variant="hero" size="lg" onClick={() => scrollToSection("projects")} className="hover:scale-105 transition-transform">
            <Eye className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button variant="cta" size="lg" asChild className="hover:scale-105 transition-transform">
            <a href="/PraveenDharshanaCV.pdf" download="PraveenDharshanaCV.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="hover:scale-105 transition-transform">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
