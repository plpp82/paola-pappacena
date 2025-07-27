import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";

const categories = [
  { id: "all", label: "Tutti", count: 32 },
  { id: "natura", label: "Natura", count: 12 },
  { id: "infanzia", label: "Infanzia", count: 8 },
  { id: "educativo", label: "Educativo", count: 7 },
  { id: "fantastico", label: "Fantastico", count: 5 },
];

const portfolioItems = [
  {
    id: 1,
    category: "infanzia",
    title: "Bambini nel Bosco Autunnale",
    description: "Acquerello, 2024",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Bambini che giocano tra le foglie autunnali"
  },
  {
    id: 2,
    category: "natura",
    title: "Animali del Bosco",
    description: "Digitale, 2024",
    image: "https://pixabay.com/get/g3737d22ad184bed06bc53b02c1c9a26da10a73b4f7950dcd8bf6c97bdfdd6358f71be8c71be97ac26dddf3d5a1d03456678c4657f0a197ebf8462b9ac6662039_1280.jpg",
    alt: "Animali del bosco che fanno merenda"
  },
  {
    id: 3,
    category: "educativo",
    title: "Letture Magiche",
    description: "Tempera, 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Bambini che leggono sotto un albero magico"
  },
  {
    id: 4,
    category: "educativo",
    title: "Vita Marina Educativa",
    description: "Acquerello, 2023",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Vita marina educativa per bambini"
  },
  {
    id: 5,
    category: "natura",
    title: "Orto Didattico",
    description: "Digitale, 2024",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Orto didattico con bambini che imparano"
  },
  {
    id: 6,
    category: "fantastico",
    title: "Ciclo delle Stagioni",
    description: "Acquerello, 2023",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Ciclo delle stagioni illustrato per bambini"
  },
  {
    id: 7,
    category: "natura",
    title: "Habitat Naturali",
    description: "Tempera, 2024",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Animali nel loro habitat naturale"
  },
  {
    id: 8,
    category: "fantastico",
    title: "Regno delle Fate",
    description: "Digitale, 2024",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Mondo fantastico con fate e creature magiche"
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl sm:text-5xl text-dark-brown mb-4">
              Portfolio Completo
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esplora la mia collezione completa di illustrazioni, organizzata per temi e progetti
            </p>
          </div>
          
          {/* Portfolio Categories */}
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

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-sans font-semibold text-lg text-dark-brown mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <Link href={`/portfolio/${item.id}`} className="text-terracotta hover:text-orange-600 font-medium text-sm transition-colors duration-300">
                    Visualizza Dettagli →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation to other sections */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/libri">
              <div className="bg-terracotta text-white rounded-lg p-6 text-center hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                <h3 className="font-sans font-bold text-xl mb-2">Libri Pubblicati</h3>
                <p className="text-sm opacity-90">Scopri le mie storie illustrate</p>
              </div>
            </Link>
            <Link href="/illustrazioni">
              <div className="bg-warm-brown text-white rounded-lg p-6 text-center hover:bg-opacity-80 transition-all duration-300 cursor-pointer">
                <h3 className="font-sans font-bold text-xl mb-2">Illustrazioni in Vendita</h3>
                <p className="text-sm opacity-90">Acquista le opere originali</p>
              </div>
            </Link>
            <Link href="/laboratori">
              <div className="bg-sage-green text-white rounded-lg p-6 text-center hover:bg-green-600 transition-colors duration-300 cursor-pointer">
                <h3 className="font-sans font-bold text-xl mb-2">Workshop</h3>
                <p className="text-sm opacity-90">Partecipa ai miei laboratori</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}