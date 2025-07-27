import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, Calendar } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Disegnare la Natura",
    description: "Un laboratorio per bambini per imparare a osservare e disegnare il mondo naturale",
    duration: "2 ore",
    participants: "6-12 anni",
    location: "Studio Paola Pappacena",
    nextDate: "15 Febbraio 2025",
    price: 25,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Workshop disegnare la natura"
  },
  {
    id: 2,
    title: "Raccontare con i Colori",
    description: "Laboratorio di illustrazione per adulti: tecniche base di acquerello e narrazione visiva",
    duration: "3 ore",
    participants: "Adulti",
    location: "Biblioteca Comunale",
    nextDate: "22 Febbraio 2025",
    price: 40,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Workshop raccontare con i colori"
  }
];

export default function Workshops() {
  const handleBookWorkshop = (workshopId: number, title: string) => {
    // TODO: Implement booking logic
    console.log(`Book workshop ${workshopId}: ${title}`);
  };

  return (
    <section id="laboratori" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Workshop e Laboratori
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Condivido la mia passione per l'illustrazione attraverso laboratori creativi 
            per bambini e adulti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-cream rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src={workshop.image}
                alt={workshop.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="font-sans font-bold text-xl text-dark-brown mb-3">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-sage-green" />
                    <span>Durata: {workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-sage-green" />
                    <span>Età: {workshop.participants}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-sage-green" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-sage-green" />
                    <span>Prossima data: {workshop.nextDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-terracotta">€{workshop.price}</span>
                  <Button
                    onClick={() => handleBookWorkshop(workshop.id, workshop.title)}
                    className="bg-sage-green hover:bg-green-600 text-white"
                  >
                    Prenota Posto
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-sage-green text-white rounded-lg p-8 text-center">
          <h3 className="font-sans font-bold text-xl mb-4">
            Workshop Personalizzati
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Organizzo anche laboratori su misura per scuole, biblioteche e eventi privati. 
            Contattami per discutere le tue esigenze specifiche.
          </p>
          <Button className="bg-white text-sage-green hover:bg-gray-100">
            Richiedi un Workshop Personalizzato
          </Button>
        </div>
      </div>
    </section>
  );
}