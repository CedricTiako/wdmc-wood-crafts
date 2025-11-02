import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/237656658690?text=Bonjour%20W.D.M.C,%20j'aimerais%20avoir%20des%20informations", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-wood flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-subtle group"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
};

export default WhatsAppButton;
