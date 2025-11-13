import { Card } from "@/components/ui/card";
import { Radar, Camera, Radio, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Radar,
    title: "ISR Systems",
    description: "Intelligence, Surveillance & Reconnaissance platforms with real-time data processing and multi-spectral imaging capabilities.",
    features: ["Long-endurance flight", "Advanced sensors", "Secure data links"],
  },
  {
    icon: Camera,
    title: "Tactical Drones",
    description: "Compact, mission-ready UAVs designed for rapid deployment in complex operational environments with autonomous navigation.",
    features: ["Quick deployment", "Terrain mapping", "Silent operation"],
  },
  {
    icon: Radio,
    title: "Communication Hub",
    description: "Aerial relay systems providing extended range communications and network coverage in challenging terrain and conditions.",
    features: ["Mesh networking", "Encrypted comms", "Multi-band support"],
  },
  {
    icon: Cpu,
    title: "AI Navigation",
    description: "Advanced autonomous flight systems with machine learning-powered obstacle avoidance and adaptive mission planning.",
    features: ["Self-navigation", "Smart waypoints", "Real-time adaptation"],
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-24 lg:py-32 bg-charcoal-dark relative">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">Our Solutions</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground">
            Advanced <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive UAV systems engineered for defense, security, and mission-critical operations
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={index}
                className="group p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale overflow-hidden relative"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
