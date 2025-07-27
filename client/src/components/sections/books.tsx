import { Button } from "@/components/ui/button";

const publishedBooks = [
  {
    id: 1,
    title: "Il Piccolo Esploratore",
    description: "Una storia di avventura e scoperta nel bosco, dove ogni foglia nasconde un segreto da svelare.",
    publisher: "Edizioni Natura, 2024",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina libro: Il Piccolo Esploratore"
  },
  {
    id: 2,
    title: "Il Giardino Magico",
    description: "Un viaggio educativo tra ortaggi e fiori, per insegnare ai bambini l'amore per la natura.",
    publisher: "Casa Editrice Verde, 2023",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina libro: Il Giardino Magico"
  },
  {
    id: 3,
    title: "Amici del Prato",
    description: "Le avventure di una famiglia di animali che vivono in armonia nel prato fiorito.",
    publisher: "Libri & Bambini, 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina libro: Amici del Prato"
  }
];

export default function Books() {
  const handlePurchase = (bookTitle: string) => {
    // TODO: Implement book purchase logic
    console.log(`Purchase book: ${bookTitle}`);
  };

  return (
    <section id="libri" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            I Miei Libri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una raccolta di storie illustrate che hanno preso vita nelle librerie e nelle case dei bambini
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src={book.image}
                alt={book.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="font-sans font-bold text-xl text-dark-brown mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-sage-green font-semibold">{book.publisher}</span>
                  <Button
                    onClick={() => handlePurchase(book.title)}
                    className="bg-terracotta hover:bg-orange-600 text-white"
                    size="sm"
                  >
                    Acquista
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
