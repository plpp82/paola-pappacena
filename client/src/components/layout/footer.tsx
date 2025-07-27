import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

const quickLinks = [
  { href: "/portfolio", label: "Portfolio", type: "link" },
  { href: "/libri", label: "Libri", type: "link" },
  { href: "/illustrazioni", label: "Illustrazioni", type: "link" },
  { href: "/news", label: "News & Ideas", type: "link" },
  { href: "#contatti", label: "Contatti", type: "scroll" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Newsletter subscription");
  };

  return (
    <footer className="bg-dark-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-sans font-bold text-xl mb-4">Paola Pappacena</h3>
            <p className="text-gray-300 mb-4">
              Illustratrice specializzata in natura, educazione e infanzia. 
              Creando mondi colorati che ispirano e educano.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-sage-green hover:text-green-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-sage-green hover:text-green-400">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.type === "link" ? (
                    <Link href={link.href}>
                      <button className="text-gray-300 hover:text-sage-green transition-colors duration-300">
                        {link.label}
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-sage-green transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Ricevi aggiornamenti sui nuovi progetti e workshop</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                placeholder="La tua email"
                className="flex-1 rounded-r-none border-sage-green text-dark-brown"
              />
              <Button
                type="submit"
                className="bg-sage-green hover:bg-green-600 rounded-l-none"
              >
                Iscriviti
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 Paola Pappacena. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
