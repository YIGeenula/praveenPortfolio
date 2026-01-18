import {
  MessageCircle,
  Clock,
  Lightbulb,
  Brain,
  Zap,
  Users
} from "lucide-react";

const softSkills = [
  {
    icon: MessageCircle,
    title: "Communication Skills",
    description: "Clear and effective communication with team members, stakeholders, and developers.",
    examples: ["Bug reporting clarity", "Test documentation", "Team collaboration"],
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Efficiently prioritizing tasks and meeting deadlines in fast-paced environments.",
    examples: ["Sprint planning", "Task prioritization", "Meeting deadlines"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to identifying root causes and finding effective solutions.",
    examples: ["Root cause analysis", "Debugging strategies", "Creative solutions"],
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Evaluating software from multiple perspectives to identify potential issues.",
    examples: ["Edge case identification", "Risk assessment", "Test scenario design"],
  },
  {
    icon: Zap,
    title: "Fast Learning",
    description: "Quickly adapting to new tools, technologies, and testing methodologies.",
    examples: ["New tool adoption", "Technology adaptation", "Continuous learning"],
  },
  {
    icon: Users,
    title: "Teamwork & Leadership",
    description: "Collaborating effectively in teams while taking initiative when needed.",
    examples: ["Cross-team collaboration", "Mentoring", "Initiative taking"],
  },
];

const SoftSkillsSection = () => {
  return (
    <section id="soft-skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Personal Strengths
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Soft Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.examples.map((example, exIndex) => (
                  <span
                    key={exIndex}
                    className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground font-medium"
                  >
                    {example}
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

export default SoftSkillsSection;
