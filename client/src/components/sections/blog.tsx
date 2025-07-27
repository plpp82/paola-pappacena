import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Come Nasce un'Illustrazione",
    excerpt: "Vi racconto il mio processo creativo: dall'idea iniziale ai primi schizzi, fino all'opera finita...",
    date: "10 Gennaio 2025",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Il processo creativo di un'illustrazione"
  },
  {
    id: 2,
    title: "L'Autunno nei Miei Colori",
    excerpt: "La stagione autunnale offre una palette infinita di ispirazione. Ecco come cattura la sua magia...",
    date: "28 Dicembre 2024",
    image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Ispirazione dalla natura autunnale"
  },
  {
    id: 3,
    title: "L'Arte di Educare con le Immagini",
    excerpt: "Perché le illustrazioni sono così importanti nell'educazione dei bambini? Una riflessione...",
    date: "15 Dicembre 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "L'importanza dell'educazione visiva"
  }
];

export default function Blog() {
  const handleReadMore = (postId: number) => {
    // TODO: Navigate to full blog post
    console.log(`Read more about post ${postId}`);
  };

  const handleViewAllPosts = () => {
    // TODO: Navigate to full blog page
    console.log("View all blog posts");
  };

  return (
    <section id="blog" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Diario Creativo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Riflessioni, ispirazioni e dietro le quinte del mio processo creativo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-sans font-semibold text-xl text-dark-brown mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="text-terracotta hover:text-orange-600 font-medium text-sm transition-colors duration-300"
                >
                  Leggi tutto →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleViewAllPosts}
            className="bg-sage-green hover:bg-green-600 text-white font-sans font-semibold"
          >
            Leggi Altri Articoli
          </Button>
        </div>
      </div>
    </section>
  );
}
