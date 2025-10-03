import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to go electric? Contact us today to learn more about our models
            </p>
          </div>

          <Card className="p-8 md:p-12 border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
                <p className="text-muted-foreground">+251 XXX XXX XXX</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground">info@ifamotors.com</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Location</h3>
                <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-border">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 transition-all duration-300 hover:scale-105"
              >
                Schedule a Test Ride
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
