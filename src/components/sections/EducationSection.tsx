import { GraduationCap, Award, BookOpen, Brain } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "BSc in Software Engineering",
    institution: "National Institute of Business Management (NIBM)",
    location: "Sri Lanka",
    period: "2024 – 2028",
    type: "education",
  },
];

const certifications = [
  {
    icon: Award,
    title: "Certificate of Software Test Automation",
    status: "Completed",
    color: "bg-secondary",
  },
  {
    icon: BookOpen,
    title: "Manual Testing Bootcamp",
    status: "Completed",
    color: "bg-secondary",
  },
  {
    icon: Brain,
    title: "ISTQB Foundation Level",
    status: "Reading",
    color: "bg-primary",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-primary/30">
              {education.map((item, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="p-6 rounded-xl bg-card shadow-card border border-border hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              Certifications & Learning
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold">{cert.title}</h4>
                    <span className={`text-sm ${cert.status === 'Completed' ? 'text-secondary' : 'text-primary'} font-medium`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
