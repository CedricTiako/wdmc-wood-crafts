import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jean-Marc Nkotto",
    location: "Douala, Bonapriso",
    rating: 5,
    text: "Travail exceptionnel sur notre charpente. L'équipe est professionnelle et respecte les délais. Je recommande vivement !",
    project: "Charpente résidentielle",
  },
  {
    name: "Marie-Claire Essomba",
    location: "Yaoundé, Bastos",
    rating: 5,
    text: "Des portes en bois massif magnifiques et des finitions impeccables. Un vrai savoir-faire artisanal. Merci W.D.M.C !",
    project: "Portes sur mesure",
  },
  {
    name: "Daniel Fotso",
    location: "Douala, Bépanda",
    rating: 5,
    text: "Mobilier sur mesure de très haute qualité. Le service client est excellent et les prix sont justes. Parfait !",
    project: "Ameublement complet",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-wood transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-secondary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Étoiles */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Témoignage */}
                <p className="text-foreground/90 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Type de projet */}
                <div className="pt-4 border-t border-secondary/20">
                  <p className="text-sm text-primary font-semibold mb-2">
                    {testimonial.project}
                  </p>
                  
                  {/* Client */}
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA pour Google Reviews */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous avez travaillé avec nous ?
          </p>
          <a
            href="https://wa.me/237656658690?text=Bonjour%20W.D.M.C,%20j'aimerais%20laisser%20un%20avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-lg transition-all duration-300 hover:shadow-wood font-semibold"
          >
            <Star className="w-5 h-5" />
            Laissez votre avis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
