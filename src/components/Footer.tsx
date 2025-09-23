import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const services = [
    "City-Wide Campaigns",
    "LED Truck Advertising", 
    "Custom Packages",
    "Flexible Scheduling",
    "Route Optimization",
    "Analytics & Reporting"
  ];

  const serviceAreas = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
    "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Coverage Areas", href: "/coverage" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" }
  ];

  const handleNewsletterClick = () => {
    alert("Newsletter subscription coming soon! Stay tuned for updates.");
  };

  const handleSocialClick = (platform: string) => {
    alert(`${platform} page coming soon! Follow us for updates.`);
  };

  const handleQuoteClick = () => {
    window.location.href = '/contact';
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-32 -translate-x-32" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Jayalakshmi <span className="text-secondary">Digital Ads</span>
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-responsive">
                Transforming brands with innovative digital advertising solutions. 
                Your trusted partner for city-wide campaigns and mobile LED advertising.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover-lift">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Head Office</p>
                  <p className="text-sm text-primary-foreground/80">
                    123 Business District, Electronic City<br />
                    Bangalore, Karnataka 560100
                  </p>
                </div>
              </div>
              
              <a href="tel:+919876543210" className="flex items-center gap-3 group hover-lift">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-sm sm:text-base">+91 98765 43210</p>
                  <p className="text-sm text-primary-foreground/80">24/7 Support Available</p>
                </div>
              </a>
              
              <a href="mailto:info@jayalakshmids.com" className="flex items-center gap-3 group hover-lift">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-sm sm:text-base">info@jayalakshmids.com</p>
                  <p className="text-sm text-primary-foreground/80">Get Quote via Email</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 group">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Business Hours</p>
                  <p className="text-sm text-primary-foreground/80">Mon-Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="/services" 
                    className="text-primary-foreground/80 hover:text-secondary transition-all duration-300 flex items-center group text-responsive hover-lift"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-all duration-300 flex items-center group text-responsive hover-lift"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Service Areas</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.slice(0, 8).map((city) => (
                  <span 
                    key={city} 
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300 cursor-pointer hover-lift"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 w-full border-primary-foreground/20 text-primary-foreground hover:bg-secondary hover:text-primary hover:border-secondary"
                onClick={() => window.location.href = '/coverage'}
              >
                View All Cities
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <span className="text-primary-foreground/80">Follow us on:</span>
              <div className="flex items-center gap-4">
                {[
                  { icon: Facebook, name: "Facebook" },
                  { icon: Twitter, name: "Twitter" },
                  { icon: Instagram, name: "Instagram" },
                  { icon: Linkedin, name: "LinkedIn" }
                ].map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.name)}
                    className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110 hover-lift"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={handleNewsletterClick}
                className="hover:bg-secondary-hover"
              >
                Subscribe Newsletter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="accent" 
                size="sm"
                onClick={handleQuoteClick}
                className="animate-glow"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 bg-primary/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm text-center sm:text-left">
              © 2025 Jayalakshmi Digital Ads. All rights reserved. Designed with ❤️ for success.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors hover-lift">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/80 hover:text-secondary transition-colors hover-lift">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-primary-foreground/80 hover:text-secondary transition-colors hover-lift">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;