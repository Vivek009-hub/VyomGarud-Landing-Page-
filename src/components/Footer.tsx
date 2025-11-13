import { Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-foreground">
              Vyom<span className="text-gradient">Garud</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Leading the future of unmanned aviation with military-grade precision and advanced autonomous systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
            <div className="pt-4 space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} VyomGarud. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed for mission-critical excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
