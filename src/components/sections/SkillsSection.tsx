import { Code, TestTube, Settings, Wrench, Cpu, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Java", "Python", "HTML", "XML"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TestTube,
    title: "Testing Frameworks & Tools",
    skills: ["Selenium WebDriver (Java)", "TestNG", "Apache JMeter", "Postman (API Testing)", "JIRA (Bug Tracking)"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Settings,
    title: "Testing Types & Methodologies",
    skills: ["Manual Testing", "Automation Testing", "Functional Testing", "System Testing", "Agile Testing"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Wrench,
    title: "Manual Testing & QA Documentation",
    skills: ["Test Plan", "Test Case Design", "Bug Reports", "User Story Analysis", "Smoke & Regression Testing", "Boundary Value Analysis"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Cpu,
    title: "Automation & Performance Testing",
    skills: ["Web Browser Automation", "REST API Testing", "Load & Performance Testing (JMeter)"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: GitBranch,
    title: "DevOps & Version Control",
    skills: ["Git & GitHub", "CI/CD Pipeline – Jenkins"],
    color: "from-orange-500 to-orange-600",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            My Toolkit
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
