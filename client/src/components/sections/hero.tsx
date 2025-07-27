import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-green to-warm-brown">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
          Paola Pappacena
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Illustrazioni che raccontano natura, educazione e infanzia
        </p>
        <Button
          onClick={scrollToPortfolio}
          className="bg-terracotta hover:bg-orange-600 text-white font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Scopri le Opere
        </Button>
      </div>
    </section>
  );
}
