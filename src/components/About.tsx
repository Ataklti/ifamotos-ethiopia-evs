import { Card } from "@/components/ui/card";
import { Zap, Shield, Leaf } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Zero Emissions",
      description: "100% electric motorcycles for a cleaner Ethiopia"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Imported and assembled with the highest standards"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Contributing to a sustainable future"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About IFA Motors
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IFA Motors Plc is the leading importer and assembler of electric motorcycles in Ethiopia. 
            In partnership with ZP Motors, we bring cutting-edge electric mobility solutions to the Ethiopian market, 
            offering premium quality motorcycles with full spare parts support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
