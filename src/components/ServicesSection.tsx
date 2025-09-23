import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Package, Calendar, Truck, Zap, CheckCircle2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "City-Wide Campaigns",
      description: "Reach your entire target market with strategic city-wide advertising campaigns that maximize brand visibility and engagement across multiple touchpoints.",
      features: ["Multi-location coverage", "Strategic placement", "Real-time analytics", "Audience targeting"],
      gradient: "from-primary to-secondary"
    },
    {
      icon: Package,
      title: "Custom Advertising Packages",
      description: "Tailored advertising solutions designed specifically for your business goals, budget, and target demographics with flexible pricing options.",
      features: ["Personalized strategy", "Flexible budgeting", "Custom creative", "ROI optimization"],
      gradient: "from-secondary to-accent"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose your ideal timing with our flexible campaign scheduling options that align with your business cycles and marketing objectives.",
      features: ["Time-slot booking", "Peak hour optimization", "Seasonal campaigns", "Emergency slots"],
      gradient: "from-accent to-primary"
    },
    {
      icon: Truck,
      title: "Digital LED Truck Ads",
      description: "Mobile LED advertising that brings your message directly to your audience with high-impact visual displays and strategic route planning.",
      features: ["Mobile advertising", "HD LED displays", "Route optimization", "Live tracking"],
      gradient: "from-primary to-accent"
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    alert(`Learn more about ${serviceName} - Contact us for detailed information!`);
  };

  const handleQuoteClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="section-padding bg-background" id="services">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-accent mr-2 animate-pulse" />
            <span className="text-accent font-semibold uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Digital Advertising Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From city-wide campaigns to mobile LED advertising, we deliver innovative solutions 
            that drive real results for your business growth and brand visibility.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-hero transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-card animate-fade-in-up hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleServiceClick(service.title)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button animate-glow`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-responsive">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center text-sm text-foreground animate-fade-in"
                      style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20 hover:border-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service.title);
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Advertising Strategy?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Join hundreds of successful brands who have revolutionized their marketing with our innovative digital advertising solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={handleQuoteClick}
                  className="animate-bounce-gentle"
                >
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-primary"
                  onClick={() => window.location.href = '/portfolio'}
                >
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;