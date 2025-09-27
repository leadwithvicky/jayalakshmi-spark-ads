import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              Transform Your Brand with 
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Dynamic Digital Advertising
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
              City-wide campaigns, LED truck advertising, and custom packages that deliver 
              measurable results across your target coverage areas
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact" className="no-underline">
              <Button variant="hero" size="xl" className="group min-w-[200px]">
                Start Your Campaign
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/portfolio" className="no-underline">
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary min-w-[200px] backdrop-blur-sm">
                <Play className="w-5 h-5" />
                View Our Work
              </Button>
            </Link>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { icon: BarChart3, number: "500+", label: "Successful Campaigns", color: "text-secondary" },
              { icon: MapPin, number: "50+", label: "Cities Covered", color: "text-accent" },
              { icon: Users, number: "98%", label: "Client Satisfaction", color: "text-secondary" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-scale-in hover-lift bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
                style={{ animationDelay: `${0.9 + (index * 0.2)}s` }}
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mr-2`} />
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{stat.number}</span>
                </div>
                <p className="text-white/80 text-sm sm:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        {/* <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer hover:border-secondary transition-colors">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;