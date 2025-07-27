export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  alt: string;
  price?: number;
  available: boolean;
  technique: string;
  year: number;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  publisher: string;
  year: number;
  image: string;
  alt: string;
  price: number;
  isbn?: string;
  category: string;
  ageRange: string;
  available: boolean;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  alt: string;
  category: 'news' | 'idea' | 'process';
  tags: string[];
}

export interface Illustration {
  id: number;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  alt: string;
  price: number;
  dimensions: string;
  technique: string;
  year: number;
  available: boolean;
  printOptions: string[];
}