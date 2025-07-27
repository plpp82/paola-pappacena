import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { ShoppingCart, Heart, Palette, Ruler, Info } from "lucide-react";

const illustrationCategories = [
  { id: "all", label: "Tutte le Illustrazioni", count: 24 },
  { id: "natura", label: "Natura", count: 8 },
  { id: "infanzia", label: "Infanzia", count: 7 },
  { id: "educativo", label: "Educativo", count: 5 },
  { id: "fantastico", label: "Fantastico", count: 4 },
];

const illustrations = [
  {
    id: 1,
    title: "Il Bosco Incantato",
    description: "Un acquerello delicato che cattura la magia di un bosco al tramonto, con piccoli animali che si preparano per la notte.",
    category: "natura",
    price: 95.00,
    dimensions: "30x40 cm",
    technique: "Acquerello su carta",
    year: 2024,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione acquerello bosco incantato",
    available: true,
    printOptions: ["Originale", "Stampa Fine Art A3", "Stampa Fine Art A4"]
  },
  {
    id: 2,
    title: "Giardino delle Meraviglie",
    description: "Una composizione digitale vivace che mostra bambini che esplorano un giardino pieno di fiori colorati e farfalle.",
    category: "infanzia",
    price: 75.00,
    dimensions: "25x35 cm",
    technique: "Illustrazione digitale",
    year: 2024,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione digitale bambini in giardino",
    available: true,
    printOptions: ["Stampa Fine Art A3", "Stampa Fine Art A4", "Stampa Canvas"]
  },
  {
    id: 3,
    title: "Amici del Prato",
    description: "Una tempera allegra che raffigura diversi animali che giocano insieme in un prato fiorito durante una giornata di primavera.",
    category: "educativo",
    price: 120.00,
    dimensions: "35x50 cm",
    technique: "Tempera su tela",
    year: 2023,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Tempera animali che giocano nel prato",
    available: true,
    printOptions: ["Originale", "Stampa Fine Art A2", "Stampa Fine Art A3"]
  },
  {
    id: 4,
    title: "Castello delle Nuvole",
    description: "Un'illustrazione fantastica che mostra un castello magico sospeso tra le nuvole, abitato da creature gentili e colorate.",
    category: "fantastico",
    price: 85.00,
    dimensions: "28x38 cm",
    technique: "Acquerello e pastelli",
    year: 2024,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione fantastica castello tra le nuvole",
    available: true,
    printOptions: ["Originale", "Stampa Fine Art A3", "Stampa Canvas"]
  },
  {
    id: 5,
    title: "Ciclo della Vita",
    description: "Un'opera educativa che illustra il ciclo di crescita di una pianta, dalla semente al fiore, in modo poetico e colorato.",
    category: "educativo",
    price: 110.00,
    dimensions: "40x30 cm",
    technique: "Acquerello su carta",
    year: 2023,
    image: "https://images.unsplash.com/photo-1574778790209-6f96b4a8c7b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione educativa ciclo vita pianta",
    available: true,
    printOptions: ["Originale", "Stampa Fine Art A3", "Stampa Fine Art A4"]
  },
  {
    id: 6,
    title: "Famiglia di Scoiattoli",
    description: "Una tenera rappresentazione di una famiglia di scoiattoli che raccoglie noci per l'inverno, ricca di dettagli naturalistici.",
    category: "natura",
    price: 95.00,
    dimensions: "30x25 cm",
    technique: "Matite colorate",
    year: 2024,
    image: "https://images.unsplash.com/photo-1574778790209-6f96b4a8c7b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione famiglia scoiattoli natura",
    available: false,
    printOptions: ["Stampa Fine Art A3", "Stampa Fine Art A4"]
  }
];

export default function Illustrazioni() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredIllustrations = activeCategory === "all" 
    ? illustrations 
    : illustrations.filter(item => item.category === activeCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const handlePurchase = (illustrationId: number, title: string, option: string) => {
    // TODO: Implement actual purchase logic
    console.log(`Purchase illustration ${illustrationId}: ${title} - ${option}`);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl sm:text-5xl text-dark-brown mb-4">
              Illustrazioni in Vendita
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acquista le mie opere originali o stampe di alta qualità. Ogni illustrazione è disponibile in diverse opzioni per adattarsi alle tue esigenze.
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-sage-green text-white rounded-lg p-6 mb-12">
            <div className="flex items-start">
              <Info className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans font-bold text-lg mb-2">Informazioni sugli Acquisti</h3>
                <p className="text-sm opacity-90">
                  • <strong>Originali:</strong> Opere uniche, certificate con firma dell'artista<br/>
                  • <strong>Stampe Fine Art:</strong> Stampe di alta qualità su carta premium<br/>
                  • <strong>Stampe Canvas:</strong> Stampe su tela, pronte da appendere<br/>
                  • Spedizione gratuita per ordini superiori a €100
                </p>
              </div>
            </div>
          </div>
          
          {/* Illustration Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {illustrationCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-warm-brown text-white hover:bg-opacity-80"
                    : "bg-white text-dark-brown hover:bg-warm-brown hover:text-white border-warm-brown"
                }
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          {/* Illustrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIllustrations.map((illustration) => (
              <div key={illustration.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Link href={`/illustrazioni/${illustration.id}`}>
                    <img
                      src={illustration.image}
                      alt={illustration.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <button
                    onClick={() => toggleFavorite(illustration.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.includes(illustration.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-400'
                      }`} 
                    />
                  </button>
                  {!illustration.available && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                        Venduto
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      illustration.category === 'natura' ? 'bg-sage-green' :
                      illustration.category === 'infanzia' ? 'bg-terracotta' :
                      illustration.category === 'educativo' ? 'bg-warm-brown' :
                      'bg-purple-500'
                    }`}>
                      {illustration.category.charAt(0).toUpperCase() + illustration.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{illustration.year}</span>
                  </div>
                  
                  <h3 className="font-sans font-bold text-xl text-dark-brown mb-2">{illustration.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{illustration.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Palette className="h-4 w-4 mr-2" />
                      <span>{illustration.technique}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Ruler className="h-4 w-4 mr-2" />
                      <span>{illustration.dimensions}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-terracotta">
                        Da €{illustration.price}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {illustration.printOptions.slice(0, 2).map((option, index) => (
                        <Button
                          key={index}
                          onClick={() => handlePurchase(illustration.id, illustration.title, option)}
                          className="w-full bg-gray-100 text-dark-brown hover:bg-terracotta hover:text-white text-sm"
                          size="sm"
                          disabled={!illustration.available && option === "Originale"}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {option}
                        </Button>
                      ))}
                      {illustration.printOptions.length > 2 && (
                        <Link href={`/illustrazioni/${illustration.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Vedi Tutte le Opzioni
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-white rounded-lg p-8 text-center">
            <h2 className="font-sans font-bold text-2xl text-dark-brown mb-4">
              Illustrazione Personalizzata
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Desideri un'illustrazione unica creata appositamente per te? 
              Realizzo opere su commissione per matrimoni, nascite, o semplicemente per immortalare un momento speciale.
            </p>
            <Link href="/contatti">
              <Button className="bg-terracotta hover:bg-orange-600 text-white font-sans font-semibold px-8 py-4">
                Richiedi un'Illustrazione Personalizzata
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}