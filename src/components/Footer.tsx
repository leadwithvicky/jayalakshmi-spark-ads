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

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Jayalakshmi <span className="text-secondary">Digital Ads</span>
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Transforming brands with innovative digital advertising solutions. 
                Your trusted partner for city-wide campaigns and mobile LED advertising.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-sm text-primary-foreground/80">
                    123 Business District, Electronic City<br />
                    Bangalore, Karnataka 560100
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-medium">+91 98765 43210</p>
                  <p className="text-sm text-primary-foreground/80">24/7 Support Available</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-medium">info@jayalakshmids.com</p>
                  <p className="text-sm text-primary-foreground/80">Get Quote via Email</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-medium">Business Hours</p>
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
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
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
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
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
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300 cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="mt-4 w-full">
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
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-3">
              <span className="text-primary-foreground/80">Stay updated:</span>
              <Button variant="secondary" size="sm">
                Subscribe to Newsletter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Jayalakshmi Digital Ads. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-primary-foreground/80 hover:text-secondary transition-colors">
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