import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import FeaturedGallery from "@/components/sections/featured-gallery";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Books from "@/components/sections/books";
import Workshops from "@/components/sections/workshops";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <FeaturedGallery />
        <About />
        <Portfolio />
        <Books />
        <Workshops />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
