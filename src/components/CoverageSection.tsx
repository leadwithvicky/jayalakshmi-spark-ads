import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Target, Globe, ArrowRight } from "lucide-react";
import coverageMap from "@/assets/coverage-map.jpg";

const CoverageSection = () => {
  const stats = [
    {
      icon: Globe,
      number: "50+",
      label: "Cities Covered",
      description: "Comprehensive coverage across major metropolitan areas"
    },
    {
      icon: Users,
      number: "10M+",
      label: "Population Reach",
      description: "Access to diverse demographics and target audiences"
    },
    {
      icon: Target,
      number: "500KM",
      label: "Coverage Radius",
      description: "Strategic positioning for maximum brand exposure"
    }
  ];

  const majorCities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
    "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur",
    "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad"
  ];

  return (
    <section className="py-20 bg-muted/30" id="coverage">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-accent mr-2" />
            <span className="text-accent font-semibold uppercase tracking-wide">Coverage Areas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nationwide Digital Advertising Reach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic coverage across India's major cities and metropolitan areas, 
            ensuring your brand reaches the right audience at the right time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="animate-fade-in-up">
            <Card className="overflow-hidden shadow-hero border-0">
              <div className="relative">
                <img 
                  src={coverageMap} 
                  alt="Digital advertising coverage areas across India"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-1">Real-time Coverage Map</h3>
                    <p className="text-sm text-muted-foreground">Active campaigns and available coverage areas</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Coverage Stats & Cities */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Statistics */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="border-l-4 border-l-secondary shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center mr-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">{stat.number}</span>
                        <span className="text-lg font-semibold text-foreground">{stat.label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Major Cities */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-5 h-5 text-accent mr-2" />
                  Major Service Cities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {majorCities.map((city) => (
                    <Badge 
                      key={city} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {city}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    Don't see your city? We're rapidly expanding our coverage areas.
                  </p>
                  <Button variant="outline" size="sm">
                    Request Coverage
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-hero text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Expand Your Reach?
            </h3>
            <p className="text-white/90 mb-6">
              Let us help you identify the best coverage areas for your target audience and campaign objectives.
            </p>
            <Button variant="hero" size="lg">
              Plan Your Coverage
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;