import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { ShoppingCart, Star, BookOpen, Users, Calendar } from "lucide-react";

const bookCategories = [
  { id: "all", label: "Tutti i Libri", count: 12 },
  { id: "natura", label: "Natura", count: 5 },
  { id: "avventura", label: "Avventura", count: 4 },
  { id: "educativo", label: "Educativo", count: 3 },
];

const publishedBooks = [
  {
    id: 1,
    title: "Il Piccolo Esploratore",
    description: "Una storia di avventura e scoperta nel bosco, dove ogni foglia nasconde un segreto da svelare. Un viaggio educativo che insegna ai bambini l'importanza della natura.",
    publisher: "Edizioni Natura, 2024",
    price: 16.90,
    isbn: "978-88-1234-567-8",
    category: "avventura",
    ageRange: "4-8 anni",
    rating: 4.8,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina libro: Il Piccolo Esploratore",
    available: true
  },
  {
    id: 2,
    title: "Il Giardino Magico",
    description: "Un viaggio educativo tra ortaggi e fiori, per insegnare ai bambini l'amore per la natura e l'importanza di prendersi cura del nostro pianeta.",
    publisher: "Casa Editrice Verde, 2023",
    price: 14.50,
    isbn: "978-88-1234-568-5",
    category: "natura",
    ageRange: "3-7 anni",
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina libro: Il Giardino Magico",
    available: true
  },
  {
    id: 3,
    title: "Amici del Prato",
    description: "Le avventure di una famiglia di animali che vivono in armonia nel prato fiorito. Una storia che insegna l'amicizia e il rispetto per tutti gli esseri viventi.",
    publisher: "Libri & Bambini, 2023",
    price: 15.90,
    isbn: "978-88-1234-569-2",
    category: "natura",
    ageRange: "5-9 anni",
    rating: 4.7,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina libro: Amici del Prato",
    available: true
  },
  {
    id: 4,
    title: "Le Quattro Stagioni di Maya",
    description: "Segui Maya attraverso un anno intero di scoperte. Ogni stagione porta nuove avventure e insegnamenti sul ciclo della vita.",
    publisher: "Edizioni Stagioni, 2022",
    price: 18.50,
    isbn: "978-88-1234-570-8",
    category: "educativo",
    ageRange: "6-10 anni",
    rating: 4.6,
    reviews: 26,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina libro: Le Quattro Stagioni di Maya",
    available: true
  }
];

export default function Libri() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBooks = activeCategory === "all" 
    ? publishedBooks 
    : publishedBooks.filter(book => book.category === activeCategory);

  const handlePurchase = (bookId: number, title: string) => {
    // TODO: Implement actual purchase logic
    console.log(`Purchase book ${bookId}: ${title}`);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl sm:text-5xl text-dark-brown mb-4">
              I Miei Libri
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una raccolta di storie illustrate che hanno preso vita nelle librerie e nelle case dei bambini
            </p>
          </div>
          
          {/* Book Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {bookCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-terracotta text-white hover:bg-orange-600"
                    : "bg-white text-dark-brown hover:bg-terracotta hover:text-white border-terracotta"
                }
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <Link href={`/libri/${book.id}`}>
                  <img
                    src={book.image}
                    alt={book.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      book.category === 'natura' ? 'bg-sage-green' :
                      book.category === 'avventura' ? 'bg-terracotta' :
                      'bg-warm-brown'
                    }`}>
                      {book.category.charAt(0).toUpperCase() + book.category.slice(1)}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{book.rating} ({book.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="font-sans font-bold text-xl text-dark-brown mb-2">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{book.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{book.publisher}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Età: {book.ageRange}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>ISBN: {book.isbn}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-terracotta">€{book.price}</span>
                    <Button
                      onClick={() => handlePurchase(book.id, book.title)}
                      className="bg-terracotta hover:bg-orange-600 text-white flex items-center"
                      disabled={!book.available}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {book.available ? "Acquista" : "Esaurito"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-white rounded-lg p-8 text-center">
            <h2 className="font-sans font-bold text-2xl text-dark-brown mb-4">
              Cerchi un Libro Personalizzato?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Creo anche storie illustrate su commissione per occasioni speciali, 
              progetti educativi o semplicemente per rendere unico il regalo per il tuo bambino.
            </p>
            <Link href="/contatti">
              <Button className="bg-sage-green hover:bg-green-600 text-white font-sans font-semibold px-8 py-4">
                Richiedi un Preventivo
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}