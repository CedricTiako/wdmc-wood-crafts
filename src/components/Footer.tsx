const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ets. W.D.M.C</h3>
            <p className="text-white/80 mb-4">
              Wil Dessin Bâtiments – Menuiserie – Charpente – Commerce Général
            </p>
            <p className="text-white/60 text-sm">
              NUI: Po 795 144229 20 .U
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#accueil" className="hover:text-secondary transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#realisations" className="hover:text-secondary transition-colors">Réalisations</a></li>
              <li><a href="#boutique" className="hover:text-secondary transition-colors">Boutique</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Rapide</h4>
            <ul className="space-y-2 text-white/80">
              <li>📞 +237 671 383 139</li>
              <li>💬 WhatsApp: +237 656 658 690</li>
              <li>✉️ tchaptchepnyawilfried@yahoo.fr</li>
              <li>📍 Entrée Bille - Douala</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Ets. W.D.M.C - Tous droits réservés</p>
          <p className="mt-2 text-sm italic">« Des produits et services de qualité pour vos projets »</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
