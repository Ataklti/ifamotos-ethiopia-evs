import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import zp990c from "@/assets/models/ZP990C.jpg";
import zp18l from "@/assets/models/ZP18L.jpg";
import zp208k from "@/assets/models/ZP208K.jpg";
import zpem99xtv from "@/assets/models/ZPEM99XTV.jpg";
import zp20x from "@/assets/models/ZP20X.jpg";
import zp20y from "@/assets/models/ZP20Y.jpg";

const Models = () => {
  const models = [
    { 
      name: "ZP990C", 
      subtitle: "FIRE-BOLT",
      power: "3000W",
      range: "Up to 240 KM",
      description: "3000W wheel-motor electric motorcycle, with optional max range up to 240 KM — suitable for urban medium and long-distance use and commonly used in delivery and passenger markets",
      available: true,
      image: zp990c,
      alt: "ZP990C FIRE-BOLT Electric Motorcycle - 3000W Power"
    },
    { 
      name: "ZP18L", 
      subtitle: "CITY X",
      power: "1500W",
      range: "Up to 75 KM",
      description: "1500W wheel-motor motorcycle — ideal for urban medium-distance use",
      available: true,
      image: zp18l,
      alt: "ZP18L CITY X Electric Motorcycle - 1500W Power"
    },
    { 
      name: "ZP208K", 
      subtitle: "Tricycle",
      power: "Utility",
      range: "Various",
      description: "Tricycle / utility model suited for cargo and utility applications",
      available: true,
      image: zp208k,
      alt: "ZP208K Electric Tricycle - Cargo and Utility Model"
    },
    { 
      name: "ZPEM99XTV", 
      subtitle: "Sports",
      power: "2000W",
      range: "Up to 180 KM",
      description: "Sport-style model in the EM99 family — performance-oriented with LiFePO4 battery options",
      available: true,
      image: zpem99xtv,
      alt: "ZPEM99XTV Sports Electric Motorcycle - 2000W Performance"
    },
    { 
      name: "ZP20X", 
      subtitle: "CRUISER X",
      power: "2200W",
      range: "Up to 180 KM",
      description: "2200W central-motor motorcycle; suited for medium/long-distance and delivery",
      available: true,
      image: zp20x,
      alt: "ZP20X CRUISER X Electric Motorcycle - 2200W Power"
    },
    { 
      name: "ZP20Y", 
      subtitle: "Delivery Pro",
      power: "2000W",
      range: "Up to 180 KM",
      description: "2000W central-motor model suitable for delivery and urban use",
      available: true,
      image: zp20y,
      alt: "ZP20Y Electric Motorcycle - 2000W Delivery Model"
    }
  ];

  return (
    <section id="models" className="py-20 bg-background" aria-labelledby="models-heading">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 id="models-heading" className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Electric Motorcycle Models
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of ZP Motors electric motorcycles in Ethiopia, all available with full spare parts support
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
                  src={model.image} 
                  alt={model.alt}
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
