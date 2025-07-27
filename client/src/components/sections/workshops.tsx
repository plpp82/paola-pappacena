import { Calendar, MapPin, Users, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingWorkshops = [
  {
    id: 1,
    title: "Storie dal Bosco",
    description: "Workshop di narrazione e illustrazione",
    schedule: "Ogni secondo sabato del mese"
  },
  {
    id: 2,
    title: "Il Mio Primo Libro",
    description: "Laboratorio di auto-illustrazione per bambini",
    schedule: "Workshop mensile su prenotazione"
  },
  {
    id: 3,
    title: "Natura e Colori",
    description: "Laboratorio per famiglie all'aria aperta",
    schedule: "Eventi stagionali nei parchi cittadini"
  }
];

export default function Workshops() {
  const handleBookWorkshop = () => {
    // TODO: Implement workshop booking logic
    console.log("Book workshop");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="laboratori" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Laboratori e Workshop
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Condivido la mia passione attraverso laboratori creativi per bambini, famiglie e educatori
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-sage-green to-green-400 rounded-lg p-8 text-white">
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 mr-4" />
              <h3 className="font-sans font-bold text-2xl">Prossimo Workshop</h3>
            </div>
            <h4 className="font-sans font-semibold text-xl mb-2">"Dipingere la Natura"</h4>
            <p className="mb-4">
              Un laboratorio per scoprire come catturare i colori e le forme della natura attraverso l'acquerello.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>15 Marzo 2025, ore 15:00-17:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Biblioteca Comunale di Firenze</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>Età: 6-12 anni</span>
              </div>
            </div>
            <Button
              onClick={handleBookWorkshop}
              className="bg-white text-sage-green hover:bg-gray-100 font-sans font-semibold"
            >
              Prenota Posto
            </Button>
          </div>

          <div className="space-y-6">
            {upcomingWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-cream rounded-lg p-6 border-l-4 border-terracotta">
                <h4 className="font-sans font-semibold text-lg text-dark-brown mb-2">"{workshop.title}"</h4>
                <p className="text-gray-600 text-sm mb-2">{workshop.description}</p>
                <p className="text-gray-500 text-sm">{workshop.schedule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            className="bg-warm-brown hover:bg-opacity-80 text-white font-sans font-semibold px-8 py-4 rounded-full"
          >
            Organizza un Workshop
          </Button>
        </div>
      </div>
    </section>
  );
}
