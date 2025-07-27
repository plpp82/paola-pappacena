import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertPortfolioWorkSchema, 
  insertBookSchema, 
  insertIllustrationSchema, 
  insertPostSchema, 
  insertContactMessageSchema 
} from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Portfolio Works Routes
  app.get("/api/portfolio", async (req, res) => {
    try {
      const { category } = req.query;
      const works = category 
        ? await storage.getPortfolioWorksByCategory(category as string)
        : await storage.getPortfolioWorks();
      res.json(works);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio works" });
    }
  });

  app.get("/api/portfolio/:id", async (req, res) => {
    try {
      const work = await storage.getPortfolioWork(req.params.id);
      if (!work) {
        return res.status(404).json({ error: "Portfolio work not found" });
      }
      res.json(work);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio work" });
    }
  });

  app.post("/api/portfolio", async (req, res) => {
    try {
      const data = insertPortfolioWorkSchema.parse(req.body);
      const work = await storage.createPortfolioWork(data);
      res.status(201).json(work);
    } catch (error) {
      res.status(400).json({ error: "Invalid portfolio work data" });
    }
  });

  // Books Routes
  app.get("/api/books", async (req, res) => {
    try {
      const { featured } = req.query;
      const books = featured === "true" 
        ? await storage.getFeaturedBooks()
        : await storage.getBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch books" });
    }
  });

  app.get("/api/books/:id", async (req, res) => {
    try {
      const book = await storage.getBook(req.params.id);
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch book" });
    }
  });

  app.post("/api/books", async (req, res) => {
    try {
      const data = insertBookSchema.parse(req.body);
      const book = await storage.createBook(data);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: "Invalid book data" });
    }
  });

  // Illustrations Routes
  app.get("/api/illustrations", async (req, res) => {
    try {
      const { category, featured } = req.query;
      let illustrations;
      
      if (featured === "true") {
        illustrations = await storage.getFeaturedIllustrations();
      } else if (category) {
        illustrations = await storage.getIllustrationsByCategory(category as string);
      } else {
        illustrations = await storage.getIllustrations();
      }
      
      res.json(illustrations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch illustrations" });
    }
  });

  app.get("/api/illustrations/:id", async (req, res) => {
    try {
      const illustration = await storage.getIllustration(req.params.id);
      if (!illustration) {
        return res.status(404).json({ error: "Illustration not found" });
      }
      res.json(illustration);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch illustration" });
    }
  });

  app.post("/api/illustrations", async (req, res) => {
    try {
      const data = insertIllustrationSchema.parse(req.body);
      const illustration = await storage.createIllustration(data);
      res.status(201).json(illustration);
    } catch (error) {
      res.status(400).json({ error: "Invalid illustration data" });
    }
  });

  // Posts Routes (News & Ideas)
  app.get("/api/posts", async (req, res) => {
    try {
      const { category, featured } = req.query;
      let posts;
      
      if (featured === "true") {
        posts = await storage.getFeaturedPosts();
      } else if (category) {
        posts = await storage.getPostsByCategory(category as string);
      } else {
        posts = await storage.getPublishedPosts();
      }
      
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/:id", async (req, res) => {
    try {
      const post = await storage.getPost(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  app.get("/api/posts/slug/:slug", async (req, res) => {
    try {
      const post = await storage.getPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  app.post("/api/posts", async (req, res) => {
    try {
      const data = insertPostSchema.parse(req.body);
      const post = await storage.createPost(data);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid post data" });
    }
  });

  // Contact Routes
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact messages" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact message data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
