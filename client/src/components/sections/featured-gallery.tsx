const featuredWorks = [
  {
    id: 1,
    title: "Il Bosco Incantato",
    description: "Acquerello su carta, 2024",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione di bosco incantato"
  },
  {
    id: 2,
    title: "Giardino delle Meraviglie",
    description: "Digitale, 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione di giardino con bambini"
  },
  {
    id: 3,
    title: "Amici del Prato",
    description: "Tempera, 2023",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Illustrazione educativa con animali"
  }
];

export default function FeaturedGallery() {
  return (
    <section id="featured-gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Opere Rappresentative
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selezione delle mie illustrazioni più amate, che catturano la magia dell'infanzia e la bellezza della natura
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <img
                src={work.image}
                alt={work.alt}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
              />
              <div className="mt-4">
                <h3 className="font-sans font-semibold text-lg text-dark-brown">{work.title}</h3>
                <p className="text-gray-600 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
