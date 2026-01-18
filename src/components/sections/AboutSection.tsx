import { CheckCircle, Target, Sparkles, TrendingUp, Briefcase, Heart } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Quality-First Mindset",
    description: "Committed to delivering high-quality software through comprehensive testing strategies.",
  },
  {
    icon: CheckCircle,
    title: "Hands-On Experience",
    description: "Practical skills in test documentation, bug tracking, Selenium automation, and API testing.",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Testing",
    description: "Strong interest in AI-powered testing tools, self-healing tests, and predictive analytics.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learner",
    description: "Actively improving skills through bootcamps, certifications, and hands-on projects.",
  },

  {
    icon: Heart,
    title: "Passionate & Committed",
    description: "Dedicated to contributing with enthusiasm and making a meaningful impact.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Passionate About Quality
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="text-foreground font-semibold">Software Engineering undergraduate</span> actively
              self-learning both manual and automation testing. I am passionate about delivering high-quality software
              and continuously improving my skills through hands-on projects and modern testing practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am dedicated to expanding my expertise in <span className="text-primary font-semibold">Software Quality Assurance (SQA)</span>, applying my testing knowledge to real-world scenarios, and contributing to software excellence with commitment and enthusiasm.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have hands-on experience in <span className="text-foreground font-medium">test documentation,
                bug tracking, Selenium automation, API testing with Postman, performance testing with JMeter,</span> and
              <span className="text-foreground font-medium"> CI/CD concepts using Jenkins</span>, with a strong
              interest in AI-driven testing trends.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
