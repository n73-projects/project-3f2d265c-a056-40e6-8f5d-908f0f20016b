import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products designed to enhance your lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 border border-gray-700 hover:border-gray-600">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}