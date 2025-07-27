import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, Star } from "lucide-react";

const featuredBooks = [
  {
    id: 1,
    title: "Il Piccolo Esploratore",
    description: "Una storia di avventura e scoperta nel bosco",
    publisher: "Edizioni Natura",
    year: 2024,
    price: 16.90,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    alt: "Copertina libro Il Piccolo Esploratore"
  },
  {
    id: 2,
    title: "Il Giardino Magico",
    description: "Un viaggio educativo tra ortaggi e fiori",
    publisher: "Casa Editrice Verde",
    year: 2023,
    price: 14.50,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    alt: "Copertina libro Il Giardino Magico"
  },
  {
    id: 3,
    title: "Amici del Prato",
    description: "Le avventure di una famiglia di animali",
    publisher: "Libri & Bambini",
    year: 2023,
    price: 15.90,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    alt: "Copertina libro Amici del Prato"
  }
];

export default function Books() {
  return (
    <section id="libri" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            I Miei Libri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Storie illustrate che hanno preso vita nelle librerie e nelle case dei bambini
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
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
                  <span className="text-sm text-terracotta font-medium">{book.publisher}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
                  </div>
                </div>
                <h3 className="font-sans font-bold text-xl text-dark-brown mb-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-terracotta">€{book.price}</span>
                  <Link href={`/libri/${book.id}`}>
                    <Button className="bg-terracotta hover:bg-orange-600 text-white text-sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Dettagli
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/libri">
            <Button className="bg-terracotta hover:bg-orange-600 text-white font-sans font-semibold px-8 py-4">
              Visualizza Tutti i Libri
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}