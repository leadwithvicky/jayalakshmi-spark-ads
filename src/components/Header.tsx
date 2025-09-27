import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Coverage Areas", href: "/coverage" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-card" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className={cn(
          "hidden md:flex justify-end items-center py-2 text-sm transition-all duration-300",
          isScrolled ? "text-muted-foreground border-b border-border/50" : "text-black/80 border-b border-white/20"
        )}>
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className={cn(
              "flex items-center gap-1 transition-colors duration-300 hover-lift",
              isScrolled ? "hover:text-primary" : "hover:text-secondary"
            )}>
              <Phone className="w-3 h-3" />
              +91 98765 43210
            </a>
            <a href="mailto:info@jayalakshmids.com" className={cn(
              "flex items-center gap-1 transition-colors duration-300 hover-lift",
              isScrolled ? "hover:text-primary" : "hover:text-secondary"
            )}>
              <Mail className="w-3 h-3" />
              info@jayalakshmids.com
            </a>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className={cn(
              "text-xl sm:text-2xl font-bold transition-all duration-300 hover-lift",
              isScrolled ? "text-primary" : "text-black/90 hover:text-secondary"
            )}>
              Jayalakshmi <span className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-secondary" : "text-accent"
              )}>Digital Ads</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-all duration-300 relative group hover-lift",
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-black/90 hover:text-black/100"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-primary" : "bg-secondary"
                )} />
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="no-underline">
              <Button 
                variant={isScrolled ? "cta" : "accent"} 
                size="default" 
                className="hidden sm:inline-flex animate-bounce-gentle"
              >
                Get Free Quote
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden p-2 transition-all duration-300 rounded-lg hover-lift",
                isScrolled 
                  ? "text-foreground hover:text-primary hover:bg-muted/50" 
                  : "text-white hover:text-secondary hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
        )}>
          <nav className="py-4 space-y-4 border-t border-border/50 bg-gradient-card rounded-lg backdrop-blur-sm">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-2 font-medium transition-all duration-300 rounded-lg hover-lift animate-fade-in",
                  isScrolled 
                    ? "text-foreground hover:text-primary hover:bg-muted/50" 
                    : "text-foreground hover:text-primary hover:bg-primary/10"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button variant="cta" size="default" className="w-full sm:hidden">
                Get Free Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;