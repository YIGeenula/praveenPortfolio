import { Play, BarChart3, Clock, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    label: "Response Time",
    description: "Analyzing request latency",
  },
  {
    icon: TrendingUp,
    label: "Throughput",
    description: "Requests per second metrics",
  },
  {
    icon: BarChart3,
    label: "Error Rate",
    description: "Monitoring failure patterns",
  },
];

const VideoSection = () => {
  return (
    <section id="video" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Demo Video
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Performance Testing in Action
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how I use Apache JMeter to conduct load testing, analyze metrics, and generate comprehensive reports.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Container */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card-hover bg-card border border-border">
              {/* Placeholder for video - replace with actual video embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
                <p className="mt-6 text-muted-foreground font-medium">
                  Performance Testing Demo
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Apache JMeter Load Testing
                </p>
              </div>
              {/* Uncomment and add your video URL when ready */}
              {/* <iframe
                className="absolute inset-0 w-full h-full"
                src="YOUR_VIDEO_URL"
                title="Performance Testing Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Metrics Analyzed</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <metric.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{metric.label}</h4>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-muted border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Reports Generated:</span>{" "}
                Summary Report, Aggregate Report, Graph Results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
