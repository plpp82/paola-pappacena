import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const newsAndIdeas = [
  {
    id: 1,
    title: "Come Nasce un'Illustrazione",
    excerpt: "Vi racconto il mio processo creativo: dall'idea iniziale ai primi schizzi, fino all'opera finita...",
    date: "10 Gennaio 2025",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Il processo creativo di un'illustrazione",
    category: "process"
  },
  {
    id: 2,
    title: "L'Autunno nei Miei Colori",
    excerpt: "La stagione autunnale offre una palette infinita di ispirazione. Ecco come cattura la sua magia...",
    date: "28 Dicembre 2024",
    image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Ispirazione dalla natura autunnale",
    category: "idea"
  },
  {
    id: 3,
    title: "Nuova Collaborazione con Casa Editrice Verde",
    excerpt: "Sono felice di annunciare la mia nuova collaborazione per una serie di libri educativi sulla sostenibilità...",
    date: "15 Dicembre 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Nuova collaborazione editoriale",
    category: "news"
  }
];

export default function NewsAndIdeas() {
  return (
    <section id="news-ideas" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            News & Ideas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notizie, ispirazioni e dietro le quinte del mio processo creativo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsAndIdeas.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.category === 'news' ? 'bg-terracotta text-white' :
                    item.category === 'idea' ? 'bg-sage-green text-white' :
                    'bg-warm-brown text-white'
                  }`}>
                    {item.category === 'news' ? 'News' : 
                     item.category === 'idea' ? 'Idea' : 'Processo'}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-xl text-dark-brown mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link href={`/news/${item.id}`} className="text-terracotta hover:text-orange-600 font-medium text-sm transition-colors duration-300">
                  Leggi tutto →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news">
            <Button className="bg-sage-green hover:bg-green-600 text-white font-sans font-semibold">
              Leggi Tutte le News & Ideas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
