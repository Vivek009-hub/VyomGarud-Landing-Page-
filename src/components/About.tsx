import { Target, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm">Who We Are</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground">
              Redefining <span className="text-gradient">Unmanned Aviation</span>
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="space-y-8">
            <p className="text-lg sm:text-xl text-muted-foreground text-center leading-relaxed">
              VyomGarud stands at the forefront of unmanned aerial vehicle innovation, delivering 
              military-grade drone systems engineered for precision, reliability, and autonomous excellence. 
              We combine cutting-edge aerospace technology with advanced AI to create UAV solutions that 
              exceed the most demanding operational requirements.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              <div className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover-scale">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Precision</h3>
                <p className="text-muted-foreground text-sm">
                  Every system designed with exacting standards for mission-critical performance
                </p>
              </div>

              <div className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover-scale">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Reliability</h3>
                <p className="text-muted-foreground text-sm">
                  Battle-tested systems that deliver consistent results in extreme conditions
                </p>
              </div>

              <div className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover-scale">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Pioneering autonomous technologies that push aerial capabilities forward
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
