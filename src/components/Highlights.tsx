import { Clock, Lock, Crosshair } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "Extended Endurance",
    description: "Long-duration flight operations with hot-swap battery systems for continuous 24/7 missions",
  },
  {
    icon: Lock,
    title: "Military-Grade Security",
    description: "AES-256 encrypted communications with multi-layer authentication and secure data transmission",
  },
  {
    icon: Crosshair,
    title: "Precision Targeting",
    description: "Sub-meter accuracy with advanced GPS/INS fusion and real-time target tracking capabilities",
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">Key Features</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground">
            Engineered for <span className="text-gradient">Excellence</span>
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover-scale">
                  {/* Icon with glow effect */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <p className="text-3xl sm:text-4xl font-display font-bold text-gradient">50km+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Range</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-3xl sm:text-4xl font-display font-bold text-gradient">8hrs</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Flight Time</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-3xl sm:text-4xl font-display font-bold text-gradient">4K</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Video</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-3xl sm:text-4xl font-display font-bold text-gradient">IP67</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
