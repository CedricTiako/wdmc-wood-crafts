import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">W.D.M.C</h1>
              <p className="text-xs text-muted-foreground">Bois & Menuiserie</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("accueil")} className="text-foreground hover:text-primary transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("realisations")} className="text-foreground hover:text-primary transition-colors">
              Réalisations
            </button>
            <button onClick={() => scrollToSection("boutique")} className="text-foreground hover:text-primary transition-colors">
              Boutique
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("devis")} className="bg-gradient-primary">
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 space-y-4">
            <button onClick={() => scrollToSection("accueil")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted">
              Accueil
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted">
              Services
            </button>
            <button onClick={() => scrollToSection("realisations")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted">
              Réalisations
            </button>
            <button onClick={() => scrollToSection("boutique")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted">
              Boutique
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted">
              Contact
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection("devis")} className="w-full bg-gradient-primary">
                Demander un devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
