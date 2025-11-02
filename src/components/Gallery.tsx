import doorImage from "@/assets/door-sample.jpg";
import charpenteImage from "@/assets/charpente.jpg";
import furnitureImage from "@/assets/furniture.jpg";

const projects = [
  {
    image: doorImage,
    title: "Portes en bois massif",
    category: "Menuiserie",
  },
  {
    image: charpenteImage,
    title: "Charpente traditionnelle",
    category: "Charpente",
  },
  {
    image: furnitureImage,
    title: "Mobilier sur mesure",
    category: "Ameublement",
  },
];

const Gallery = () => {
  return (
    <section id="realisations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets réalisés avec passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-secondary mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
