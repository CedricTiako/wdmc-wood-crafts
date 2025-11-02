import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import doorImage from "@/assets/door-sample.jpg";
import furnitureImage from "@/assets/furniture.jpg";

const products = [
  {
    id: 1,
    name: "Porte simple bois massif",
    price: "À partir de 85 000 FCFA",
    image: doorImage,
    description: "Porte en bois massif de qualité supérieure",
  },
  {
    id: 2,
    name: "Porte double décorative",
    price: "À partir de 150 000 FCFA",
    image: doorImage,
    description: "Porte double avec motifs sculptés",
  },
  {
    id: 3,
    name: "Meuble sur mesure",
    price: "Sur devis",
    image: furnitureImage,
    description: "Mobilier personnalisé selon vos besoins",
  },
  {
    id: 4,
    name: "Placard intégré",
    price: "À partir de 120 000 FCFA",
    image: furnitureImage,
    description: "Placard sur mesure avec finitions haut de gamme",
  },
];

const Shop = () => {
  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Bonjour W.D.M.C, je souhaite commander le produit: ${productName}`
    );
    window.open(`https://wa.me/237656658690?text=${message}`, "_blank");
  };

  return (
    <section id="boutique" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Boutique
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos produits et commandez directement via WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-primary">
                  {product.price}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="w-full bg-gradient-secondary"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Commander
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
