import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary" aria-labelledby="contact-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Contact IFA Motors
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to go electric? Contact us today to learn more about Ethiopian electric motorcycles
            </p>
          </div>

          <Card className="p-8 md:p-12 border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Phone & WhatsApp</h3>
                <a href="tel:+251909482271" className="text-muted-foreground hover:text-primary transition-colors block">
                  +251 909 482 271
                </a>
                <a 
                  href="https://wa.me/251909482271" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/80 transition-colors inline-block mt-1"
                >
                  Chat on WhatsApp
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                <a href="mailto:info@ifatrade.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@ifatrade.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Location</h3>
                <p className="text-muted-foreground">IFA Trading PLC</p>
                <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="bg-accent/5 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-3 text-center text-foreground">Business Hours</h3>
              <div className="text-center text-muted-foreground space-y-1">
                <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Sunday: Closed</p>
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
