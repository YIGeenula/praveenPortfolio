import { ExternalLink, Github, Mail, LogIn, Bug, Search, Server, BarChart3, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const manualProjects = [
  {
    icon: Mail,
    title: "Gmail Login Testing",
    description: "End-to-end manual testing of Gmail login functionality covering positive, negative, and boundary scenarios.",
    technologies: ["Manual Testing", "Test Case Design", "Bug Reporting"],
    scenarios: [
      "UI and functional testing",
      "Positive & negative scenarios",
      "Boundary value analysis",
      "Usability & basic security testing",
    ],
    skills: ["Test Documentation", "Defect Identification", "User Story Analysis"],
    color: "from-red-500 to-red-600",
    demoLink: "https://www.youtube.com/watch?v=4RaL9AHXJg8",
  },
  {
    icon: LogIn,
    title: "LinkedIn Login Testing",
    description: "Comprehensive manual testing of LinkedIn login page with functional, validation, and error handling scenarios.",
    technologies: ["Manual Testing", "Test Documentation", "JIRA"],
    scenarios: [
      "Functional & validation testing",
      "Boundary & negative testing",
      "Error message validation",
      "Test case documentation",
    ],
    skills: ["Test Planning", "Defect Reporting", "Regression Testing"],
    color: "from-blue-600 to-blue-700",
    demoLink: "https://www.youtube.com/watch?v=BaeRU7F7G4o",
  },
  {
    icon: Bug,
    title: "Bug Tracking with JIRA",
    description: "Real-world defect lifecycle management using JIRA including priority classification and status tracking.",
    technologies: ["JIRA", "Bug Tracking", "Defect Management"],
    scenarios: [
      "Defect lifecycle management",
      "Priority & severity classification",
      "Re-testing workflows",
      "Defect status tracking",
    ],
    skills: ["Bug Reporting", "Prioritization", "Team Collaboration"],
    color: "from-purple-500 to-purple-600",
    demoLink: "https://www.youtube.com/watch?v=scUqa1tURRE",
  },
];

const automationProjects = [
  {
    icon: Search,
    title: "Selenium Automation – YouTube Search",
    description: "Automated YouTube search functionality using Selenium WebDriver with comprehensive test scenarios.",
    technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven"],
    scenarios: [
      "Browser launch automation",
      "YouTube navigation",
      "Search functionality validation",
      "Results verification",
    ],
    skills: ["Web Automation", "Test Framework Design", "Assertions"],
    color: "from-red-500 to-orange-500",
    demoLink: "https://www.youtube.com/watch?v=gmXzGPTEpuM",
  },
  {
    icon: LogIn,
    title: "Selenium Automation – Login Page",
    description: "Automated login validation using Selenium and Java covering multiple test scenarios.",
    technologies: ["Java", "Selenium WebDriver", "Maven"],
    scenarios: [
      "Valid login automation",
      "Invalid credentials handling",
      "Empty field validation",
      "Error message verification",
    ],
    skills: ["Page Object Model", "Data-Driven Testing", "Reporting"],
    color: "from-blue-500 to-blue-600",
    demoLink: "https://www.youtube.com/watch?v=tA16d5nAOrE",
  },
];

const apiPerformanceProjects = [
  {
    icon: Server,
    title: "API Testing – DummyJSON API",
    description: "Comprehensive API testing using Postman covering CRUD operations, validation, and edge cases.",
    technologies: ["Postman", "REST API", "JSON"],
    scenarios: [
      "CRUD operations testing",
      "Data type validation",
      "Invalid ID handling",
      "Boundary testing (price/quantity)",
    ],
    skills: ["API Testing", "Request/Response Validation", "Status Code Verification"],
    color: "from-orange-500 to-amber-500",
    demoLink: "https://youtu.be/pXuURj-Wv5o",
  },
  {
    icon: BarChart3,
    title: "Performance Testing – Apache JMeter",
    description: "Load and performance testing project with test plan configuration, concurrent user simulation, and metrics analysis.",
    technologies: ["Apache JMeter", "Performance Testing", "Load Testing"],
    scenarios: [
      "Test plan & thread group config",
      "Concurrent user simulation",
      "Response time analysis",
      "Throughput & error rate metrics",
    ],
    skills: ["Performance Analysis", "Report Generation", "Bottleneck Identification"],
    color: "from-emerald-500 to-teal-500",
    demoLink: "https://www.youtube.com/watch?v=CDl9b710Ghk",
  },
];

interface Project {
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: string[];
  scenarios: string[];
  skills: string[];
  color: string;
  demoLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group flex flex-col h-full rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border overflow-hidden">
    {/* Header */}
    <div className="p-6 pb-4">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <project.icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>
    </div>

    {/* Technologies */}
    <div className="px-6 pb-4">
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Scenarios */}
    <div className="px-6 pb-4 flex-grow">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Test Scenarios
      </p>
      <ul className="space-y-2">
        {project.scenarios.map((scenario, scenarioIndex) => (
          <li
            key={scenarioIndex}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
            {scenario}
          </li>
        ))}
      </ul>
    </div>

    {/* Skills Demonstrated */}
    <div className="px-6 pb-4">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
        Skills Demonstrated
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Actions */}
    <div className="px-6 py-4 border-t border-border mt-auto">
      <div className="flex gap-3">

        <Button variant="default" size="sm" className="flex-1" asChild>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <Play className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects demonstrating my skills in manual testing, automation, API testing, and performance testing.
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="manual" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="manual">Manual Testing</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="api-performance">API & Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="manual" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {manualProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="automation" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {automationProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="api-performance" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {apiPerformanceProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
