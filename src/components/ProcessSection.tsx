import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Lightbulb, Zap, BarChart3 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consultation & Strategy",
      description: "We start with a comprehensive consultation to understand your business goals, target audience, and campaign objectives.",
      details: [
        "Business goal analysis",
        "Target audience research", 
        "Competitive landscape review",
        "Budget planning & optimization"
      ]
    },
    {
      number: "02", 
      icon: Lightbulb,
      title: "Campaign Design & Planning",
      description: "Our creative team designs compelling visual content and develops a strategic campaign plan tailored to your needs.",
      details: [
        "Creative concept development",
        "Visual design & messaging",
        "Route planning & scheduling",
        "Content approval process"
      ]
    },
    {
      number: "03",
      icon: Zap,
      title: "Execution & Monitoring", 
      description: "We execute your campaign with precision while providing real-time monitoring and live tracking of all advertising activities.",
      details: [
        "Campaign launch coordination",
        "Real-time GPS tracking",
        "Live performance monitoring",
        "Quality assurance checks"
      ]
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Analysis & Optimization",
      description: "Comprehensive analysis of campaign performance with detailed reporting and recommendations for future optimization.",
      details: [
        "Performance analytics review",
        "ROI measurement & reporting",
        "Optimization recommendations",
        "Future strategy planning"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="process">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-accent mr-2" />
            <span className="text-accent font-semibold uppercase tracking-wide">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Deliver Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process ensures your digital advertising campaign delivers 
            maximum impact and measurable results from conception to completion.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className={`overflow-hidden shadow-card border-l-4 animate-fade-in-up ${
                index % 2 === 0 ? 'border-l-primary lg:mr-8' : 'border-l-secondary lg:ml-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 p-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold text-muted-foreground/20">
                      {step.number}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div 
                        key={detail}
                        className="flex items-center gap-2 animate-fade-in"
                        style={{ animationDelay: `${(index * 200) + (detailIndex * 100)}ms` }}
                      >
                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-hero ${
                    index % 2 === 0 ? 'bg-gradient-to-br from-primary to-primary-hover' : 'bg-gradient-to-br from-secondary to-secondary-hover'
                  }`}>
                    <step.icon className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-background to-muted border-2 border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Campaign?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your advertising goals and create a customized strategy that delivers results.
            </p>
            <Button variant="cta" size="lg">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;