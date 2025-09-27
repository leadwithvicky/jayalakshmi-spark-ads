import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-hero text-white py-20 mt-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto  leading-relaxed">
              Comprehensive digital advertising solutions designed to transform your brand presence 
              and drive measurable business growth across all major cities.
            </p>
          </div>
        </div>
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;