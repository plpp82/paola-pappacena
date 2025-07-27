import { Menu, X } from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const navigationItems = [
  { href: "/", label: "Home", type: "link" },
  { href: "/portfolio", label: "Portfolio", type: "link" },
  { href: "/libri", label: "Libri", type: "link" },
  { href: "/illustrazioni", label: "Illustrazioni", type: "link" },
  { href: "/news", label: "News & Ideas", type: "link" },
  { href: "#contatti", label: "Contatti", type: "scroll" },
];

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const [location] = useLocation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      close();
    }
  };

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.type === "scroll") {
      scrollToSection(item.href);
    } else {
      close();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <Link href="/">
              <button className="font-sans font-bold text-2xl text-dark-brown hover:text-terracotta transition-colors duration-300">
                Paola Pappacena
              </button>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              item.type === "link" ? (
                <Link key={item.href} href={item.href}>
                  <button
                    className={`font-medium transition-colors duration-300 ${
                      location === item.href 
                        ? "text-terracotta border-b-2 border-terracotta" 
                        : "text-dark-brown hover:text-terracotta"
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-dark-brown hover:text-terracotta font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              )
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
              item.type === "link" ? (
                <Link key={item.href} href={item.href}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left py-2 font-medium ${
                      location === item.href 
                        ? "text-terracotta" 
                        : "text-dark-brown hover:text-terracotta"
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left py-2 text-dark-brown hover:text-terracotta font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
