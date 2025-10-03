import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import motorcycleDisplay from "@/assets/motorcycle-display.jpg";

const Models = () => {
  const models = [
    { 
      name: "ZP990C", 
      subtitle: "FIRE-BOLT",
      power: "3000W",
      range: "Up to 240 KM",
      description: "Wheel-motor electric motorcycle suitable for urban medium and long-distance use, delivery and passenger markets",
      available: true 
    },
    { 
      name: "ZP18L", 
      subtitle: "CITY X",
      power: "1500W",
      range: "Up to 75 KM",
      description: "Ideal wheel-motor motorcycle for urban medium-distance use",
      available: true 
    },
    { 
      name: "ZP208K", 
      subtitle: "Tricycle",
      power: "Utility",
      range: "Various",
      description: "Utility model suited for cargo and commercial applications",
      available: true 
    },
    { 
      name: "ZPEM99XTV", 
      subtitle: "Sports",
      power: "2000W",
      range: "Up to 180 KM",
      description: "Performance-oriented sport-style model with LiFePO4 battery options",
      available: true 
    },
    { 
      name: "ZP20X", 
      subtitle: "CRUISER X",
      power: "2200W",
      range: "Up to 180 KM",
      description: "Central-motor motorcycle suited for medium/long-distance and delivery",
      available: true 
    },
    { 
      name: "ZP20Y", 
      subtitle: "Delivery Pro",
      power: "2000W",
      range: "Up to 180 KM",
      description: "Central-motor model suitable for delivery and urban use",
      available: true 
    }
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
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{model.name}</h3>
                  <p className="text-lg font-semibold text-primary mb-2">{model.subtitle}</p>
                  <div className="flex gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                      {model.power}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {model.range}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                >
                  Request Details
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
