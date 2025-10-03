import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import motorcycleDisplay from "@/assets/motorcycle-display.jpg";

const Models = () => {
  const models = [
    { name: "ZP990C", type: "Commuter", available: true },
    { name: "ZP18L", type: "Sport", available: true },
    { name: "ZP208K", type: "Cruiser", available: true },
    { name: "ZPEM99XTV", type: "Premium", available: true },
    { name: "ZP20X", type: "Urban", available: true },
    { name: "ZP20Y", type: "Adventure", available: true }
  ];

  return (
    <section id="models" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Models
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of electric motorcycles, all available with full spare parts support
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model) => (
            <Card 
              key={model.name}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="relative overflow-hidden bg-secondary/30 h-56">
                <img 
                  src={motorcycleDisplay} 
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {model.available && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-0">
                    In Stock
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{model.name}</h3>
                <p className="text-muted-foreground mb-4">{model.type} Series</p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-accent/10 border-accent/20">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Spare Parts Available</h3>
            <p className="text-muted-foreground max-w-md">
              All models come with comprehensive spare parts support to keep your motorcycle running smoothly
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Models;
