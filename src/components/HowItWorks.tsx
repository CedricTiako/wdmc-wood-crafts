import { MessageSquare, PenTool, Hammer, Home } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Contact",
    description: "Partagez votre projet avec nous via WhatsApp ou formulaire",
    number: "01",
  },
  {
    icon: PenTool,
    title: "Dessin",
    description: "Conception technique et plans détaillés de votre ouvrage",
    number: "02",
  },
  {
    icon: Hammer,
    title: "Fabrication",
    description: "Réalisation artisanale en bois massif de qualité supérieure",
    number: "03",
  },
  {
    icon: Home,
    title: "Installation",
    description: "Pose professionnelle et finitions soignées chez vous",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent, du contact à l'installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-center space-y-4">
                  {/* Numéro */}
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300"></div>
                    <div className="relative bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-wood group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Icône */}
                  <div className="flex justify-center">
                    <div className="bg-secondary/50 p-4 rounded-xl group-hover:bg-secondary transition-all duration-300">
                      <Icon className="w-8 h-8 text-wood-dark" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Flèche de connexion (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
