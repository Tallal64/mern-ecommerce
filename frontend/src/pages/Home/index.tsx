import Hero from "./Hero";
import ProductGrid from "./ProductGrid";

const Home = () => {
  return (
    <div className="bg-gradient-to-tl from-background to-background/50">
      <Hero />
      <ProductGrid />
    </div>
  );
};

export default Home;
