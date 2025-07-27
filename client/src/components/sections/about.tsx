import { Button } from "@/components/ui/button";

export default function About() {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="chi-sono" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://pixabay.com/get/g7b2e59024396d8185ffa19f5c3bff5c4fde8ddb00988f573e701434a773dc4ea8f4cffd915d19cb21a53163e05882a9c049c02e5842124800cc7f0236fea5719_1280.jpg"
              alt="Ritratto di Paola Pappacena"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-6">
              Chi Sono
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Ciao! Sono Paola, un'illustratrice appassionata che trova ispirazione nella natura e nell'innocenza dell'infanzia. 
                Da oltre dieci anni creo immagini che raccontano storie di crescita, scoperta e meraviglia.
              </p>
              <p>
                Le mie illustrazioni nascono dall'amore per i colori caldi della terra, per gli animali del bosco e per 
                quel momento magico in cui un bambino scopre qualcosa di nuovo nel mondo che lo circonda.
              </p>
              <p>
                Collaboro con case editrici, scuole e famiglie per creare opere che educano divertendo, 
                sempre con un occhio attento alla sostenibilità e al rispetto per l'ambiente.
              </p>
            </div>
            <div className="mt-8">
              <Button
                onClick={scrollToContact}
                className="bg-warm-brown hover:bg-opacity-80 text-white font-sans font-semibold"
              >
                Conosciamoci Meglio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
