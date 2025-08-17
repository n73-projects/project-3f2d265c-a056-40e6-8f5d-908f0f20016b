import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header";
import { ProductGrid } from "./components/ProductGrid";
import { CartModal } from "./components/CartModal";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-4 text-center bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Welcome to EShop
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover premium products curated just for you. Experience quality, style, and innovation in every purchase.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Shop Now
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        </section>

        {/* Products Section */}
        <ProductGrid />
      </main>
      
      <Footer />
      <CartModal />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151'
          }
        }}
      />
    </div>
  );
}

export default App;
