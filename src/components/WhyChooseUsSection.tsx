import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, TrendingUp, Headphones, CheckCircle2, Star, Award } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Cpu,
      title: "Advanced Technology",
      description: "Cutting-edge LED screen technology with 4K resolution displays and real-time content management systems for maximum visual impact.",
      highlights: ["4K LED Displays", "Real-time Updates", "Weather-resistant", "GPS Tracking"]
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Data-driven campaigns with comprehensive analytics and reporting that deliver measurable ROI and business growth for our clients.",
      highlights: ["98% Client Retention", "Average 300% ROI", "Real-time Analytics", "Performance Reports"]
    },
    {
      icon: Headphones,
      title: "Full-Service Support",
      description: "End-to-end campaign management with dedicated account managers providing 24/7 support throughout your advertising journey.",
      highlights: ["24/7 Support", "Dedicated Manager", "Creative Design", "Strategy Consulting"]
    }
  ];

  const achievements = [
    { icon: Award, number: "500+", label: "Campaigns Delivered" },
    { icon: Star, number: "98%", label: "Client Satisfaction" },
    { icon: CheckCircle2, number: "50+", label: "Cities Covered" }
  ];

  return (
    <section className="py-20 bg-background" id="why-choose-us">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Why Choose Jayalakshmi Digital Ads
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry-Leading Digital Advertising Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With cutting-edge technology, proven results, and exceptional support, we're your trusted partner 
            for transformative digital advertising campaigns.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="relative overflow-hidden group hover:shadow-hero transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up border-0 bg-gradient-to-br from-card to-muted/30"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-cta opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-base">
                  {benefit.description}
                </CardDescription>
                
                <div className="space-y-3">
                  {benefit.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-white/90 text-lg">
              Trusted by businesses across India for exceptional digital advertising results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">
                  {achievement.number}
                </div>
                <p className="text-white/80 font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;