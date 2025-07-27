import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { Calendar, Tag, Eye, ArrowLeft } from "lucide-react";

const categories = [
  { id: "all", label: "Tutto", count: 18 },
  { id: "news", label: "News", count: 6 },
  { id: "idea", label: "Idee", count: 8 },
  { id: "process", label: "Processo", count: 4 },
];

const newsAndIdeas = [
  {
    id: 1,
    title: "Come Nasce un'Illustrazione",
    excerpt: "Vi racconto il mio processo creativo: dall'idea iniziale ai primi schizzi, fino all'opera finita. Un viaggio affascinante tra ispirazione e tecnica.",
    content: "Il processo di creazione di un'illustrazione è sempre diverso, ma ci sono alcuni passaggi che non mancano mai...",
    date: "10 Gennaio 2025",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Il processo creativo di un'illustrazione",
    category: "process",
    tags: ["creatività", "processo", "tutorial"],
    views: 234
  },
  {
    id: 2,
    title: "L'Autunno nei Miei Colori",
    excerpt: "La stagione autunnale offre una palette infinita di ispirazione. Ecco come cattura la sua magia nei miei lavori più recenti.",
    content: "L'autunno è sempre stata la mia stagione preferita per dipingere...",
    date: "28 Dicembre 2024",
    image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Ispirazione dalla natura autunnale",
    category: "idea",
    tags: ["natura", "stagioni", "ispirazione"],
    views: 189
  },
  {
    id: 3,
    title: "Nuova Collaborazione con Casa Editrice Verde",
    excerpt: "Sono felice di annunciare la mia nuova collaborazione per una serie di libri educativi sulla sostenibilità ambientale.",
    content: "È con grande gioia che annuncio questa nuova partnership...",
    date: "15 Dicembre 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Nuova collaborazione editoriale",
    category: "news",
    tags: ["collaborazione", "editoria", "sostenibilità"],
    views: 312
  },
  {
    id: 4,
    title: "Workshop Creativi per Bambini",
    excerpt: "Parte il nuovo ciclo di laboratori creativi nelle scuole primarie. Un'opportunità per condividere la passione per l'arte con i più piccoli.",
    content: "I bambini hanno una creatività naturale che va coltivata...",
    date: "5 Dicembre 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Workshop creativi per bambini",
    category: "news",
    tags: ["workshop", "educazione", "bambini"],
    views: 156
  },
  {
    id: 5,
    title: "L'Importanza del Colore nell'Educazione",
    excerpt: "Una riflessione su come i colori influenzano l'apprendimento e lo sviluppo emotivo dei bambini attraverso le illustrazioni.",
    content: "Il colore non è solo estetica, è comunicazione emotiva...",
    date: "20 Novembre 2024",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "L'importanza del colore nell'educazione",
    category: "idea",
    tags: ["psicologia", "educazione", "colori"],
    views: 278
  },
  {
    id: 6,
    title: "Dietro le Quinte: Dalla Matita al Digitale",
    excerpt: "Il mio approccio ibrido che combina tecniche tradizionali e strumenti digitali per creare illustrazioni uniche e moderne.",
    content: "Non credo nella distinzione tra arte tradizionale e digitale...",
    date: "8 Novembre 2024",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Processo dalla matita al digitale",
    category: "process",
    tags: ["tecnica", "digitale", "tradizionale"],
    views: 201
  }
];

export default function NewsIdeas() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? newsAndIdeas 
    : newsAndIdeas.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl sm:text-5xl text-dark-brown mb-4">
              News & Ideas
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notizie, ispirazioni e riflessioni dal mio mondo creativo. 
              Condivido con voi il dietro le quinte del mio lavoro e le mie passioni.
            </p>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-sage-green text-white hover:bg-green-600"
                    : "bg-white text-dark-brown hover:bg-sage-green hover:text-white border-sage-green"
                }
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          {filteredItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <img
                    src={filteredItems[0].image}
                    alt={filteredItems[0].alt}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      filteredItems[0].category === 'news' ? 'bg-terracotta' :
                      filteredItems[0].category === 'idea' ? 'bg-sage-green' :
                      'bg-warm-brown'
                    }`}>
                      {filteredItems[0].category === 'news' ? 'News' : 
                       filteredItems[0].category === 'idea' ? 'Idea' : 'Processo'}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {filteredItems[0].views}
                    </div>
                  </div>
                  <h2 className="font-sans font-bold text-2xl text-dark-brown mb-3">
                    {filteredItems[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">{filteredItems[0].excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{filteredItems[0].date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredItems[0].tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-xs text-gray-600">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/news/${filteredItems[0].id}`}>
                    <Button className="bg-terracotta hover:bg-orange-600 text-white">
                      Leggi l'Articolo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(1).map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                <Link href={`/news/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      item.category === 'news' ? 'bg-terracotta' :
                      item.category === 'idea' ? 'bg-sage-green' :
                      'bg-warm-brown'
                    }`}>
                      {item.category === 'news' ? 'News' : 
                       item.category === 'idea' ? 'Idea' : 'Processo'}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.views}
                    </div>
                  </div>
                  
                  <h3 className="font-sans font-semibold text-xl text-dark-brown mb-2 group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-xs text-gray-600">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/news/${item.id}`} className="text-terracotta hover:text-orange-600 font-medium text-sm transition-colors duration-300">
                    Leggi tutto →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-sage-green text-white rounded-lg p-8 text-center">
            <h2 className="font-sans font-bold text-2xl mb-4">
              Resta Aggiornata
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Iscriviti alla mia newsletter per ricevere le ultime news, 
              ispirazioni creative e accesso anticipato ai nuovi progetti.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-2 rounded-lg text-dark-brown"
              />
              <Button className="bg-terracotta hover:bg-orange-600 text-white">
                Iscriviti
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}