import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Coverage Areas", href: "/coverage" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              +91 98765 43210
            </a>
            <a href="mailto:info@jayalakshmids.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              info@jayalakshmids.com
            </a>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              Jayalakshmi <span className="text-secondary">Digital Ads</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="cta" size="default" className="hidden sm:inline-flex">
              Get Free Quote
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="py-4 space-y-4 border-t border-border">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
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