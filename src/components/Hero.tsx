import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-motorcycle.jpg";

const Hero = () => {
  const scrollToModels = () => {
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white animate-fade-in">
          Ethiopian Electric Motorcycles
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          IFA Motors - Leading importer and assembler of premium ZP Motors electric motorcycles in Ethiopia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToModels}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Models
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToContact}
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
