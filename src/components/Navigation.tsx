import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">IFA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">IFA Motors</h1>
              <p className="text-xs text-muted-foreground">Electric Mobility</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('models')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Models
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('models')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded transition-colors"
            >
              Models
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
