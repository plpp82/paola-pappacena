import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  project: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Errore",
        description: "Per favore compila tutti i campi obbligatori.",
        variant: "destructive",
      });
      return;
    }

    try {
      // TODO: Implement actual form submission
      console.log("Contact form submission:", formData);
      
      toast({
        title: "Messaggio Inviato!",
        description: "Ti risponderò entro 48 ore. Grazie per avermi contattato!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contatti" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-dark-brown mb-4">
            Lavoriamo Insieme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hai un progetto in mente? Scrivimi e creeremo qualcosa di speciale insieme
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-cream rounded-lg p-8">
            <h3 className="font-sans font-bold text-2xl text-dark-brown mb-6">Inviami un Messaggio</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Il tuo nome"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="la-tua@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="project">Tipo di Progetto</Label>
                <Select value={formData.project} onValueChange={(value) => handleInputChange("project", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona un'opzione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="libro">Illustrazione per Libro</SelectItem>
                    <SelectItem value="educativo">Materiale Educativo</SelectItem>
                    <SelectItem value="workshop">Workshop/Laboratorio</SelectItem>
                    <SelectItem value="commissione">Commissione Personalizzata</SelectItem>
                    <SelectItem value="altro">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Messaggio *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Descrivi il tuo progetto..."
                  rows={5}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-terracotta hover:bg-orange-600 text-white font-sans font-semibold"
              >
                Invia Messaggio
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-bold text-2xl text-dark-brown mb-6">Altre Informazioni</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="text-terracotta text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-brown mb-1">Email</h4>
                  <p className="text-gray-600">paola@paolapappacena.it</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-terracotta text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-brown mb-1">Telefono</h4>
                  <p className="text-gray-600">+39 333 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-terracotta text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-brown mb-1">Studio</h4>
                  <p className="text-gray-600">Firenze, Italia</p>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-6">
              <h4 className="font-sans font-semibold text-lg text-dark-brown mb-4">Tempi di Risposta</h4>
              <p className="text-gray-600 mb-4">
                Rispondo a tutte le richieste entro 48 ore. Per progetti urgenti, 
                chiamami direttamente al numero indicato.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-terracotta hover:text-orange-600">
                  <Instagram className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-terracotta hover:text-orange-600">
                  <Facebook className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
