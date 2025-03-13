import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="py-16">
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
