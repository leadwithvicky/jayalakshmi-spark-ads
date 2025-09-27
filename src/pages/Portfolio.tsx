import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Play, BarChart3 } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Festival Campaign",
      client: "Major Retail Chain", 
      category: "City-Wide Campaign",
      results: "300% increase in foot traffic",
      description: "Multi-city LED truck campaign during festival season reaching 2M+ impressions",
      metrics: { impressions: "2M+", cities: "15", duration: "30 days" }
    },
    {
      title: "Tech Product Launch",
      client: "Leading Technology Company",
      category: "Mobile LED Advertising", 
      results: "45% brand awareness boost",
      description: "Strategic mobile advertising across tech hubs with interactive LED displays",
      metrics: { impressions: "1.5M+", cities: "8", duration: "21 days" }
    },
    {
      title: "Healthcare Awareness Drive",
      client: "Healthcare Institution",
      category: "Social Impact Campaign",
      results: "500K people reached",
      description: "Public awareness campaign promoting health services across rural and urban areas",
      metrics: { impressions: "800K+", cities: "12", duration: "45 days" }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 mt-8">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our successful campaigns and see how we've helped brands 
              achieve exceptional results through innovative digital advertising solutions.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="group hover:shadow-hero transition-all duration-500 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Client: {project.client}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-foreground mb-4">{project.description}</p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <BarChart3 className="w-4 h-4 text-accent mr-2" />
                        <span className="font-semibold text-accent">Key Results</span>
                      </div>
                      <p className="text-lg font-bold text-primary">{project.results}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-bold text-primary">{project.metrics.impressions}</div>
                        <div className="text-sm text-muted-foreground">Impressions</div>
                      </div>
                      <div>
                        <div className="font-bold text-secondary">{project.metrics.cities}</div>
                        <div className="text-sm text-muted-foreground">Cities</div>
                      </div>
                      <div>
                        <div className="font-bold text-accent">{project.metrics.duration}</div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="cta" size="lg">
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;