import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";
import * as schema from "../shared/schema";

// Create a connection to Supabase PostgreSQL (optional - using in-memory storage for now)
let db: any = null;

try {
  if (process.env.DATABASE_URL && process.env.DATABASE_URL.includes('postgresql://')) {
    const sql = neon(process.env.DATABASE_URL);
    db = drizzle(sql, { schema });
    console.log('Connected to Supabase database');
  } else {
    console.log('Using in-memory storage (DATABASE_URL not properly configured)');
  }
} catch (error) {
  console.log('Database connection failed, using in-memory storage');
}

export { db };

// Sample data for development
export const sampleData = {
  portfolioWorks: [
    {
      title: "Il Bosco Incantato",
      description: "Illustrazione per libro per bambini ambientato in un bosco magico popolato da creature fantastiche",
      category: "infanzia",
      subcategory: "libri-illustrati",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3",
      year: 2024,
      client: "Mondadori Ragazzi",
      techniques: ["acquerello", "digitale"]
    },
    {
      title: "Animali della Savana",
      description: "Serie di illustrazioni educative sui grandi mammiferi africani per materiale didattico",
      category: "natura",
      subcategory: "educativo",
      imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3",
      year: 2024,
      client: "Casa Editrice Giunti",
      techniques: ["matite colorate", "digitale"]
    },
    {
      title: "Le Quattro Stagioni",
      description: "Calendario illustrato che racconta il passaggio delle stagioni attraverso gli occhi di un bambino",
      category: "natura",
      subcategory: "commerciale",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      year: 2023,
      client: "Agenda del Cuore",
      techniques: ["acquerello", "pastelli"]
    }
  ],

  books: [
    {
      title: "La Piccola Foglia Coraggiosa",
      subtitle: "Una storia d'autunno",
      description: "La storia di una piccola foglia che non vuole cadere dall'albero e scopre l'importanza del cambiamento",
      author: "Paola Pappacena",
      publisher: "Edizioni del Bosco",
      isbn: "978-88-123-4567-8",
      pageCount: 32,
      year: 2024,
      coverImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      price: "14.90",
      availableFormats: ["cartaceo", "ebook"],
      ageRange: "3-6",
      category: "educativo",
      featured: true
    },
    {
      title: "Gli Amici del Giardino",
      subtitle: "Scopriamo insieme gli insetti",
      description: "Un viaggio alla scoperta del meraviglioso mondo degli insetti nel giardino di casa",
      author: "Paola Pappacena",
      publisher: "Natura Editrice",
      isbn: "978-88-123-4568-9",
      pageCount: 24,
      year: 2023,
      coverImageUrl: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3",
      price: "12.90",
      availableFormats: ["cartaceo"],
      ageRange: "4-8",
      category: "educativo",
      featured: false
    }
  ],

  illustrations: [
    {
      title: "Famiglia di Cervi al Tramonto",
      description: "Delicata illustrazione ad acquerello di una famiglia di cervi nel loro habitat naturale",
      imageUrl: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3",
      category: "natura",
      style: "acquerello",
      dimensions: "A3 (29.7x42cm)",
      priceDigital: "25.00",
      pricePrint: "45.00",
      availableFormats: ["digitale", "stampa"],
      featured: true
    },
    {
      title: "Bambini che Giocano nel Parco",
      description: "Allegra illustrazione di bambini che si divertono all'aria aperta",
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3",
      category: "infanzia",
      style: "digitale",
      dimensions: "A4 (21x29.7cm)",
      priceDigital: "20.00",
      pricePrint: "35.00",
      availableFormats: ["digitale", "stampa"],
      featured: false
    }
  ],

  posts: [
    {
      title: "L'importanza dell'illustrazione nell'educazione infantile",
      content: "Le illustrazioni giocano un ruolo fondamentale nello sviluppo cognitivo ed emotivo dei bambini...",
      excerpt: "Scopriamo insieme come le immagini aiutano i bambini a comprendere e interpretare il mondo",
      slug: "illustrazione-educazione-infantile",
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3",
      category: "idee",
      tags: ["educazione", "infanzia", "arte"],
      published: true,
      featured: true
    },
    {
      title: "Il mio processo creativo: dall'idea al libro finito",
      content: "Ogni progetto inizia con un'idea, spesso ispirata dalla natura o dai ricordi d'infanzia...",
      excerpt: "Un viaggio dietro le quinte della creazione di un libro illustrato",
      slug: "processo-creativo-libro-illustrato",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3",
      category: "processo",
      tags: ["creatività", "processo", "illustrazione"],
      published: true,
      featured: false
    }
  ]
};