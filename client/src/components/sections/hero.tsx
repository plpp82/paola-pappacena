import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowDown, Palette, Heart, BookOpen } from "lucide-react";

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-green rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-terracotta rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-warm-brown rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-sage-green rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight">
              Ciao! Sono{" "}
              <span className="text-terracotta">Paola Pappacena</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Illustratrice specializzata nel mondo dell'<span className="text-sage-green font-semibold">infanzia</span> e della{" "}
              <span className="text-terracotta font-semibold">natura</span>
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              Creo storie visive che educano, ispirano e accompagnano i bambini nella loro crescita, 
              trasformando ogni illustrazione in una finestra verso mondi fantastici e naturali.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/portfolio">
                <Button className="bg-sage-green hover:bg-green-600 text-white font-sans font-semibold px-8 py-4 text-lg">
                  <Palette className="h-5 w-5 mr-2" />
                  Esplora il Portfolio
                </Button>
              </Link>
              <Link href="/libri">
                <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-sans font-semibold px-8 py-4 text-lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  I Miei Libri
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta mb-1">150+</div>
                <div className="text-sm text-gray-600">Illustrazioni</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sage-green mb-1">12</div>
                <div className="text-sm text-gray-600">Libri Pubblicati</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-brown mb-1">8</div>
                <div className="text-sm text-gray-600">Anni di Esperienza</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
                alt="Paola Pappacena nel suo studio creativo"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <Heart className="h-8 w-8 text-terracotta" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-sage-green text-white p-4 rounded-xl shadow-lg z-20">
              <Palette className="h-8 w-8" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToPortfolio}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scorri per vedere di più"
          >
            <ArrowDown className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}