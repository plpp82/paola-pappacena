import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const portfolioCategories = [
  {
    id: "natura",
    title: "Natura & Animali",
    description: "Illustrazioni che celebrano il mondo naturale",
    count: 12,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Categria natura e animali"
  },
  {
    id: "infanzia",
    title: "Infanzia & Gioco",
    description: "Il mondo magico dell'infanzia",
    count: 8,
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Categoria infanzia e gioco"
  },
  {
    id: "educativo",
    title: "Educativo",
    description: "Imparare divertendosi",
    count: 7,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Categoria educativo"
  },
  {
    id: "fantastico",
    title: "Fantastico",
    description: "Mondi magici e creature fantastiche",
    count: 5,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Categoria fantastico"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esplora le diverse categorie del mio lavoro, dalla natura all'educazione, 
            dal fantastico all'infanzia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioCategories.map((category) => (
            <Link key={category.id} href="/portfolio">
              <div className="group cursor-pointer bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-sans font-semibold text-lg text-dark-brown mb-2 group-hover:text-terracotta transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <span className="text-terracotta font-medium text-sm">
                    {category.count} opere
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button className="bg-sage-green hover:bg-green-600 text-white font-sans font-semibold px-8 py-4">
              Visualizza Portfolio Completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}