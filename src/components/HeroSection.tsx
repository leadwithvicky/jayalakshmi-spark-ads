import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BarChart3, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-led-truck.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="LED truck advertising in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Brand with 
            <span className="text-secondary block">Dynamic Digital Advertising</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            City-wide campaigns, LED truck advertising, and custom packages that deliver 
            measurable results across your target coverage areas
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-300">
            <Button variant="hero" size="xl" className="group">
              Start Your Campaign
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Play className="w-5 h-5" />
              View Our Work
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in delay-500">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="w-8 h-8 text-secondary mr-2" />
                <span className="text-4xl font-bold">500+</span>
              </div>
              <p className="text-white/80">Successful Campaigns</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8 text-accent mr-2" />
                <span className="text-4xl font-bold">50+</span>
              </div>
              <p className="text-white/80">Cities Covered</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-secondary mr-2" />
                <span className="text-4xl font-bold">98%</span>
              </div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;