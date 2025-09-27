import Header from "@/components/Header";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 mt-8">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Jayalakshmi Digital Ads</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Leading the digital advertising revolution with innovative solutions, 
              cutting-edge technology, and unmatched expertise across India's major cities.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Founded with a vision to revolutionize outdoor advertising, Jayalakshmi Digital Ads 
                has grown from a small startup to India's premier digital advertising agency. 
                We specialize in mobile LED truck advertising, city-wide campaigns, and innovative 
                digital solutions that deliver exceptional ROI for businesses of all sizes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Industry Leaders</h3>
                  <p className="text-muted-foreground">Setting new standards in digital advertising excellence</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">Passionate professionals dedicated to your success</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                  <p className="text-muted-foreground">Cutting-edge technology driving campaign results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUsSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;