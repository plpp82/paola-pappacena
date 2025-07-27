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
              src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
              alt="Paola Pappacena al lavoro nel suo studio"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-6">
              Chi Sono
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Ciao! Sono Paola, un'illustratrice specializzata nel mondo dell'infanzia e della natura. 
                La mia passione è raccontare storie attraverso immagini che possano educare, 
                ispirare e far sognare i bambini.
              </p>
              <p>
                Da oltre dieci anni collaboro con case editrici, scuole e famiglie per creare 
                illustrazioni che catturano la meraviglia del mondo naturale e accompagnano 
                i più piccoli nella loro crescita.
              </p>
              <p>
                Nel mio lavoro utilizzo principalmente acquerelli e tecniche digitali, 
                sempre con un occhio attento ai dettagli e ai colori che possano 
                stimolare la curiosità e l'immaginazione.
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