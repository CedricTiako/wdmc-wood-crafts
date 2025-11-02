import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Entrée Bille - Axe Lourd\nDouala-Yaoundé, Cameroun",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+237 671 383 139\nWhatsApp: +237 656 658 690",
  },
  {
    icon: Mail,
    title: "Email",
    content: "tchaptchepnyawilfried@yahoo.fr",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Sam: 8h00 - 18h00\nDimanche: Fermé",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{info.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line text-sm">
                  {info.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-2xl overflow-hidden shadow-strong h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127327.82415919598!2d9.616928!3d4.0510563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d3d17729e0b%3A0x3e12f31c7f0d0a7f!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localisation W.D.M.C"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
