import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const featuredWorks = [
  {
    id: 1,
    title: "Il Bosco Incantato",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Illustrazione del bosco incantato",
    link: "/portfolio/1"
  },
  {
    id: 2,
    title: "Il Piccolo Esploratore",
    category: "Libro",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Copertina del libro Il Piccolo Esploratore",
    link: "/libri/1"
  },
  {
    id: 3,
    title: "Giardino delle Meraviglie",
    category: "Illustrazione",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Illustrazione giardino delle meraviglie",
    link: "/illustrazioni/2"
  }
];

export default function FeaturedGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Opere in Evidenza
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selezione delle mie creazioni più recenti e significative
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <Link key={work.id} href={work.link}>
              <div className="group cursor-pointer bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={work.image}
                  alt={work.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <span className="text-sm text-terracotta font-medium">{work.category}</span>
                  <h3 className="font-sans font-semibold text-xl text-dark-brown mt-1 group-hover:text-terracotta transition-colors">
                    {work.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button className="bg-sage-green hover:bg-green-600 text-white font-sans font-semibold px-8 py-4">
              Esplora Tutto il Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}