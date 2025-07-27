import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Portfolio Works
export const portfolioWorks = pgTable("portfolio_works", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(), // natura, infanzia, educazione, commerciale
  subcategory: text("subcategory"), // libri-illustrati, magazine, packaging, etc.
  imageUrl: text("image_url").notNull(),
  year: integer("year"),
  client: text("client"),
  techniques: text("techniques").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Books
export const books = pgTable("books", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  description: text("description").notNull(),
  author: text("author").notNull(),
  publisher: text("publisher"),
  isbn: text("isbn"),
  pageCount: integer("page_count"),
  year: integer("year"),
  coverImageUrl: text("cover_image_url").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }),
  availableFormats: text("available_formats").array(), // cartaceo, ebook, audiolibro
  ageRange: text("age_range"), // 0-3, 3-6, 6-9, etc.
  category: text("category").notNull(), // educativo, narrativo, didattico
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Illustrations for Sale
export const illustrations = pgTable("illustrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // natura, animali, stagioni, etc.
  style: text("style"), // acquerello, digitale, matite-colorate, etc.
  dimensions: text("dimensions"), // A4, A3, 30x40cm, etc.
  priceDigital: decimal("price_digital", { precision: 10, scale: 2 }),
  pricePrint: decimal("price_print", { precision: 10, scale: 2 }),
  availableFormats: text("available_formats").array(), // digitale, stampa, originale
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// News & Ideas Posts
export const posts = pgTable("posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  slug: text("slug").notNull().unique(),
  imageUrl: text("image_url"),
  category: text("category").notNull(), // news, idee, processo
  tags: text("tags").array(),
  published: boolean("published").default(false),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Contact Messages
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  type: text("type").default("general"), // general, commission, workshop
  read: boolean("read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert Schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPortfolioWorkSchema = createInsertSchema(portfolioWorks).omit({
  id: true,
  createdAt: true,
});

export const insertBookSchema = createInsertSchema(books).omit({
  id: true,
  createdAt: true,
});

export const insertIllustrationSchema = createInsertSchema(illustrations).omit({
  id: true,
  createdAt: true,
});

export const insertPostSchema = createInsertSchema(posts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  read: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPortfolioWork = z.infer<typeof insertPortfolioWorkSchema>;
export type PortfolioWork = typeof portfolioWorks.$inferSelect;

export type InsertBook = z.infer<typeof insertBookSchema>;
export type Book = typeof books.$inferSelect;

export type InsertIllustration = z.infer<typeof insertIllustrationSchema>;
export type Illustration = typeof illustrations.$inferSelect;

export type InsertPost = z.infer<typeof insertPostSchema>;
export type Post = typeof posts.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
