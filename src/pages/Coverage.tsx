import Header from "@/components/Header";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";

const Coverage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Coverage Areas</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive digital advertising coverage across India's major cities and metropolitan areas. 
              Discover where your brand can make the biggest impact.
            </p>
          </div>
        </div>
        <CoverageSection />
      </main>
      <Footer />
    </div>
  );
};

export default Coverage;