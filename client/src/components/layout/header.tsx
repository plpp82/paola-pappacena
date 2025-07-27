import { Menu, X } from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#chi-sono", label: "Chi Sono" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#libri", label: "Libri" },
  { href: "#laboratori", label: "Laboratori" },
  { href: "#blog", label: "Blog" },
  { href: "#contatti", label: "Contatti" },
];

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      close();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <button
              onClick={() => scrollToSection("#home")}
              className="font-sans font-bold text-2xl text-dark-brown hover:text-terracotta transition-colors duration-300"
            >
              Paola Pappacena
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-dark-brown hover:text-terracotta font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggle}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-dark-brown" />
            ) : (
              <Menu className="h-6 w-6 text-dark-brown" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-dark-brown hover:text-terracotta font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
