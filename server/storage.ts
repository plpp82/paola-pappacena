import { 
  type User, type InsertUser,
  type PortfolioWork, type InsertPortfolioWork,
  type Book, type InsertBook,
  type Illustration, type InsertIllustration,
  type Post, type InsertPost,
  type ContactMessage, type InsertContactMessage
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Portfolio Works
  getPortfolioWorks(): Promise<PortfolioWork[]>;
  getPortfolioWorksByCategory(category: string): Promise<PortfolioWork[]>;
  getPortfolioWork(id: string): Promise<PortfolioWork | undefined>;
  createPortfolioWork(work: InsertPortfolioWork): Promise<PortfolioWork>;
  
  // Books
  getBooks(): Promise<Book[]>;
  getFeaturedBooks(): Promise<Book[]>;
  getBook(id: string): Promise<Book | undefined>;
  createBook(book: InsertBook): Promise<Book>;
  
  // Illustrations
  getIllustrations(): Promise<Illustration[]>;
  getFeaturedIllustrations(): Promise<Illustration[]>;
  getIllustrationsByCategory(category: string): Promise<Illustration[]>;
  getIllustration(id: string): Promise<Illustration | undefined>;
  createIllustration(illustration: InsertIllustration): Promise<Illustration>;
  
  // Posts
  getPosts(): Promise<Post[]>;
  getPublishedPosts(): Promise<Post[]>;
  getPostsByCategory(category: string): Promise<Post[]>;
  getFeaturedPosts(): Promise<Post[]>;
  getPost(id: string): Promise<Post | undefined>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  
  // Contact Messages
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioWorks: Map<string, PortfolioWork>;
  private books: Map<string, Book>;
  private illustrations: Map<string, Illustration>;
  private posts: Map<string, Post>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.portfolioWorks = new Map();
    this.books = new Map();
    this.illustrations = new Map();
    this.posts = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Portfolio Works
    const portfolioWorksData = [
      {
        id: randomUUID(),
        title: "Il Bosco Incantato",
        description: "Illustrazione per libro per bambini ambientato in un bosco magico popolato da creature fantastiche",
        category: "infanzia",
        subcategory: "libri-illustrati",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        year: 2024,
        client: "Mondadori Ragazzi",
        techniques: ["acquerello", "digitale"],
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Animali della Savana",
        description: "Serie di illustrazioni educative sui grandi mammiferi africani per materiale didattico",
        category: "natura",
        subcategory: "educativo",
        imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        year: 2024,
        client: "Casa Editrice Giunti",
        techniques: ["matite colorate", "digitale"],
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Le Quattro Stagioni",
        description: "Calendario illustrato che racconta il passaggio delle stagioni attraverso gli occhi di un bambino",
        category: "natura",
        subcategory: "commerciale",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        year: 2023,
        client: "Agenda del Cuore",
        techniques: ["acquerello", "pastelli"],
        createdAt: new Date()
      }
    ];

    portfolioWorksData.forEach(work => {
      this.portfolioWorks.set(work.id, work);
    });

    // Books
    const booksData = [
      {
        id: randomUUID(),
        title: "La Piccola Foglia Coraggiosa",
        subtitle: "Una storia d'autunno",
        description: "La storia di una piccola foglia che non vuole cadere dall'albero e scopre l'importanza del cambiamento",
        author: "Paola Pappacena",
        publisher: "Edizioni del Bosco",
        isbn: "978-88-123-4567-8",
        pageCount: 32,
        year: 2024,
        coverImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        price: "14.90",
        availableFormats: ["cartaceo", "ebook"],
        ageRange: "3-6",
        category: "educativo",
        featured: true,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Gli Amici del Giardino",
        subtitle: "Scopriamo insieme gli insetti",
        description: "Un viaggio alla scoperta del meraviglioso mondo degli insetti nel giardino di casa",
        author: "Paola Pappacena",
        publisher: "Natura Editrice",
        isbn: "978-88-123-4568-9",
        pageCount: 24,
        year: 2023,
        coverImageUrl: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        price: "12.90",
        availableFormats: ["cartaceo"],
        ageRange: "4-8",
        category: "educativo",
        featured: false,
        createdAt: new Date()
      }
    ];

    booksData.forEach(book => {
      this.books.set(book.id, book);
    });

    // Illustrations
    const illustrationsData = [
      {
        id: randomUUID(),
        title: "Famiglia di Cervi al Tramonto",
        description: "Delicata illustrazione ad acquerello di una famiglia di cervi nel loro habitat naturale",
        imageUrl: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
        category: "natura",
        style: "acquerello",
        dimensions: "A3 (29.7x42cm)",
        priceDigital: "25.00",
        pricePrint: "45.00",
        availableFormats: ["digitale", "stampa"],
        featured: true,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Bambini che Giocano nel Parco",
        description: "Allegra illustrazione di bambini che si divertono all'aria aperta",
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
        category: "infanzia",
        style: "digitale",
        dimensions: "A4 (21x29.7cm)",
        priceDigital: "20.00",
        pricePrint: "35.00",
        availableFormats: ["digitale", "stampa"],
        featured: false,
        createdAt: new Date()
      }
    ];

    illustrationsData.forEach(illustration => {
      this.illustrations.set(illustration.id, illustration);
    });

    // Posts
    const postsData = [
      {
        id: randomUUID(),
        title: "L'importanza dell'illustrazione nell'educazione infantile",
        content: "Le illustrazioni giocano un ruolo fondamentale nello sviluppo cognitivo ed emotivo dei bambini. Attraverso le immagini, i piccoli lettori riescono a comprendere concetti complessi, sviluppare l'immaginazione e creare connessioni emotive profonde con le storie. Nel mio lavoro, cerco sempre di creare illustrazioni che non solo accompagnino il testo, ma che aggiungano livelli di significato e coinvolgimento.",
        excerpt: "Scopriamo insieme come le immagini aiutano i bambini a comprendere e interpretare il mondo",
        slug: "illustrazione-educazione-infantile",
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "idee",
        tags: ["educazione", "infanzia", "arte"],
        published: true,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Il mio processo creativo: dall'idea al libro finito",
        content: "Ogni progetto inizia con un'idea, spesso ispirata dalla natura o dai ricordi d'infanzia. Il processo creativo è un viaggio affascinante che mi porta dalla prima bozza al libro finito, passando attraverso diverse fasi di sviluppo e raffinamento.",
        excerpt: "Un viaggio dietro le quinte della creazione di un libro illustrato",
        slug: "processo-creativo-libro-illustrato",
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "processo",
        tags: ["creatività", "processo", "illustrazione"],
        published: true,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    postsData.forEach(post => {
      this.posts.set(post.id, post);
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Portfolio Work methods
  async getPortfolioWorks(): Promise<PortfolioWork[]> {
    return Array.from(this.portfolioWorks.values());
  }

  async getPortfolioWorksByCategory(category: string): Promise<PortfolioWork[]> {
    return Array.from(this.portfolioWorks.values()).filter(
      work => work.category === category
    );
  }

  async getPortfolioWork(id: string): Promise<PortfolioWork | undefined> {
    return this.portfolioWorks.get(id);
  }

  async createPortfolioWork(insertWork: InsertPortfolioWork): Promise<PortfolioWork> {
    const id = randomUUID();
    const work: PortfolioWork = { 
      ...insertWork, 
      id, 
      createdAt: new Date(),
      description: insertWork.description || null,
      subcategory: insertWork.subcategory || null,
      year: insertWork.year || null,
      client: insertWork.client || null,
      techniques: insertWork.techniques || null
    };
    this.portfolioWorks.set(id, work);
    return work;
  }

  // Book methods
  async getBooks(): Promise<Book[]> {
    return Array.from(this.books.values());
  }

  async getFeaturedBooks(): Promise<Book[]> {
    return Array.from(this.books.values()).filter(book => book.featured);
  }

  async getBook(id: string): Promise<Book | undefined> {
    return this.books.get(id);
  }

  async createBook(insertBook: InsertBook): Promise<Book> {
    const id = randomUUID();
    const book: Book = { 
      ...insertBook, 
      id, 
      createdAt: new Date(),
      subtitle: insertBook.subtitle || null,
      publisher: insertBook.publisher || null,
      isbn: insertBook.isbn || null,
      pageCount: insertBook.pageCount || null,
      year: insertBook.year || null,
      price: insertBook.price || null,
      availableFormats: insertBook.availableFormats || null,
      ageRange: insertBook.ageRange || null,
      featured: insertBook.featured || false
    };
    this.books.set(id, book);
    return book;
  }

  // Illustration methods
  async getIllustrations(): Promise<Illustration[]> {
    return Array.from(this.illustrations.values());
  }

  async getFeaturedIllustrations(): Promise<Illustration[]> {
    return Array.from(this.illustrations.values()).filter(ill => ill.featured);
  }

  async getIllustrationsByCategory(category: string): Promise<Illustration[]> {
    return Array.from(this.illustrations.values()).filter(
      ill => ill.category === category
    );
  }

  async getIllustration(id: string): Promise<Illustration | undefined> {
    return this.illustrations.get(id);
  }

  async createIllustration(insertIllustration: InsertIllustration): Promise<Illustration> {
    const id = randomUUID();
    const illustration: Illustration = { 
      ...insertIllustration, 
      id, 
      createdAt: new Date(),
      style: insertIllustration.style || null,
      dimensions: insertIllustration.dimensions || null,
      priceDigital: insertIllustration.priceDigital || null,
      pricePrint: insertIllustration.pricePrint || null,
      availableFormats: insertIllustration.availableFormats || null,
      featured: insertIllustration.featured || false
    };
    this.illustrations.set(id, illustration);
    return illustration;
  }

  // Post methods
  async getPosts(): Promise<Post[]> {
    return Array.from(this.posts.values());
  }

  async getPublishedPosts(): Promise<Post[]> {
    return Array.from(this.posts.values()).filter(post => post.published);
  }

  async getPostsByCategory(category: string): Promise<Post[]> {
    return Array.from(this.posts.values()).filter(
      post => post.category === category && post.published
    );
  }

  async getFeaturedPosts(): Promise<Post[]> {
    return Array.from(this.posts.values()).filter(
      post => post.featured && post.published
    );
  }

  async getPost(id: string): Promise<Post | undefined> {
    return this.posts.get(id);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return Array.from(this.posts.values()).find(post => post.slug === slug);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = randomUUID();
    const post: Post = { 
      ...insertPost, 
      id, 
      createdAt: new Date(),
      updatedAt: new Date(),
      excerpt: insertPost.excerpt || null,
      imageUrl: insertPost.imageUrl || null,
      tags: insertPost.tags || null,
      published: insertPost.published || false,
      featured: insertPost.featured || false
    };
    this.posts.set(id, post);
    return post;
  }

  // Contact Message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      read: false,
      createdAt: new Date(),
      subject: insertMessage.subject || null,
      type: insertMessage.type || "general"
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
