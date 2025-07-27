import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contatti" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Contatti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hai un progetto in mente? Vuoi collaborare o semplicemente dire ciao? 
            Sarò felice di sentirti!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-xl text-dark-brown mb-6">
              Informazioni di Contatto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-terracotta mr-4" />
                <div>
                  <p className="font-medium text-dark-brown">Email</p>
                  <a href="mailto:paola@paolapappacena.it" className="text-gray-600 hover:text-terracotta transition-colors">
                    paola@paolapappacena.it
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-terracotta mr-4" />
                <div>
                  <p className="font-medium text-dark-brown">Telefono</p>
                  <a href="tel:+393331234567" className="text-gray-600 hover:text-terracotta transition-colors">
                    +39 333 123 4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-terracotta mr-4" />
                <div>
                  <p className="font-medium text-dark-brown">Studio</p>
                  <p className="text-gray-600">Via delle Belle Arti, 42<br />00100 Roma, Italy</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-sans font-semibold text-lg text-dark-brown mb-4">
                Seguimi sui Social
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/paolapappacena" 
                  className="p-3 bg-cream rounded-full hover:bg-terracotta hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com/paolapappacena" 
                  className="p-3 bg-cream rounded-full hover:bg-terracotta hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/paolapappacena" 
                  className="p-3 bg-cream rounded-full hover:bg-terracotta hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="font-sans font-semibold text-xl text-dark-brown mb-6">
              Invia un Messaggio
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="la.tua@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-brown mb-2">
                  Oggetto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Di cosa vuoi parlare?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-2">
                  Messaggio *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full"
                  placeholder="Raccontami del tuo progetto o della tua idea..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-terracotta hover:bg-orange-600 text-white font-sans font-semibold py-3"
              >
                Invia Messaggio
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}