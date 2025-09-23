import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Package, Calendar, Truck, ArrowRight, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "City-Wide Campaigns",
      description: "Reach your entire target market with strategic city-wide advertising campaigns that maximize brand visibility and engagement across multiple touchpoints.",
      features: ["Multi-location coverage", "Strategic placement", "Real-time analytics", "Audience targeting"]
    },
    {
      icon: Package,
      title: "Custom Advertising Packages",
      description: "Tailored advertising solutions designed specifically for your business goals, budget, and target demographics with flexible pricing options.",
      features: ["Personalized strategy", "Flexible budgeting", "Custom creative", "ROI optimization"]
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose your ideal timing with our flexible campaign scheduling options that align with your business cycles and marketing objectives.",
      features: ["Time-slot booking", "Peak hour optimization", "Seasonal campaigns", "Emergency slots"]
    },
    {
      icon: Truck,
      title: "Digital LED Truck Ads",
      description: "Mobile LED advertising that brings your message directly to your audience with high-impact visual displays and strategic route planning.",
      features: ["Mobile advertising", "HD LED displays", "Route optimization", "Live tracking"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-secondary mr-2" />
            <span className="text-secondary font-semibold uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Digital Advertising Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From city-wide campaigns to mobile LED advertising, we deliver innovative solutions 
            that drive real results for your business growth and brand visibility.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-card transition-all duration-500 transform hover:-translate-y-2 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your advertising strategy?
          </p>
          <Button variant="cta" size="lg">
            Get Custom Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;