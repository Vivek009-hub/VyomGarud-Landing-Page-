import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCapabilities = () => {
    const element = document.getElementById("capabilities");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Advanced military drone flying over terrain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 reveal">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight">
              <span className="block text-foreground">VYOM</span>
              <span className="block text-gradient">GARUD</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-muted-foreground">
              Advanced UAV Systems
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in">
            Military-grade unmanned aviation with precision engineering and autonomous intelligence. 
            Pushing the boundaries of what's possible in the skies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 glow-orange hover-scale"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={scrollToCapabilities}
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-foreground font-semibold text-lg px-8 py-6 hover-scale"
            >
              Explore Capabilities
            </Button>
          </div>

          {/* Technical Specs Overlay */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12 fade-in">
            <div className="text-center space-y-1">
              <p className="text-2xl sm:text-3xl font-display font-bold text-gradient">99.9%</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Reliability</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-2xl sm:text-3xl font-display font-bold text-gradient">24/7</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Operations</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-2xl sm:text-3xl font-display font-bold text-gradient">100+</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Missions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 fade-in">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
