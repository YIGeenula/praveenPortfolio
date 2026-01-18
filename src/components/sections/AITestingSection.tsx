import {
  Brain,
  Sparkles,
  Target,
  Shield,
  Eye,
  Database,
  Lock,
  Wand2,
  Search,
  CheckCircle
} from "lucide-react";

const aiCapabilities = [
  {
    icon: Sparkles,
    title: "AI-Powered Test Case Generation",
    description: "Leveraging AI to automatically generate comprehensive test cases from requirements.",
  },
  {
    icon: Target,
    title: "AI-Based Test Prioritization",
    description: "Using ML algorithms to prioritize tests based on risk and code changes.",
  },
  {
    icon: Wand2,
    title: "Self-Healing Test Automation",
    description: "Tests that automatically adapt to UI changes without manual updates.",
  },
  {
    icon: Brain,
    title: "Predictive Defect Analytics",
    description: "Predicting potential defects using historical data and patterns.",
  },
  {
    icon: Eye,
    title: "Visual Testing with AI",
    description: "AI-powered visual regression testing for UI consistency.",
  },
  {
    icon: Database,
    title: "AI-Driven Test Data Generation",
    description: "Intelligent generation of realistic test data for various scenarios.",
  },
  {
    icon: Lock,
    title: "AI for Security & Ethical Testing",
    description: "Automated security vulnerability detection and ethical testing.",
  },
  {
    icon: Sparkles,
    title: "Generative AI for QA",
    description: "Using LLMs to assist in test script creation and documentation.",
  },
  {
    icon: Search,
    title: "AI-Assisted Exploratory Testing",
    description: "AI suggestions for exploring edge cases and untested paths.",
  },
  {
    icon: CheckCircle,
    title: "AI Testing & Validation",
    description: "Validating AI/ML models for accuracy, bias, and reliability.",
  },
];

const AITestingSection = () => {
  return (
    <section id="ai-testing" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Differentiator
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            AI in Software Testing
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring the cutting-edge intersection of Artificial Intelligence and Quality Assurance
            to revolutionize how I approach software testing.
          </p>
        </div>

        {/* AI Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">
              Active Interest in AI-Driven QA Practices
            </span>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {aiCapabilities.map((capability, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-sm font-semibold mb-2 leading-tight">{capability.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default AITestingSection;
