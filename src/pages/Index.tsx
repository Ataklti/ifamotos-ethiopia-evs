import Hero from "@/components/Hero";
import About from "@/components/About";
import Models from "@/components/Models";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Models />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
