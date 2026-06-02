import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import FeatureCard from "@/components/FeatureCard";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductGrid />
      <FeatureCard />
      <Gallery />
      <Location />
      <Contact />
    </>
  );
}
