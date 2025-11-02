import { Home, Hammer, TreePine, Ruler, PenTool, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Rénovation bâtiment bois",
    description: "Portes, plafonds, escaliers et finitions bois de qualité supérieure",
  },
  {
    icon: Hammer,
    title: "Menuiserie moderne",
    description: "Meubles, placards et décorations intérieures sur mesure",
  },
  {
    icon: TreePine,
    title: "Fabrication bois massif",
    description: "Ouvrages artisanaux haut de gamme en bois massif",
  },
  {
    icon: Ruler,
    title: "Charpente & structure bois",
    description: "Toitures, pergolas et extensions en bois",
  },
  {
    icon: PenTool,
    title: "Dessin technique & conception",
    description: "Plans 2D/3D, maquettes et rendus professionnels",
  },
  {
    icon: ShoppingBag,
    title: "Commerce & installation",
    description: "Bois, accessoires, vernis et quincaillerie de qualité",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour tous vos projets en bois
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
