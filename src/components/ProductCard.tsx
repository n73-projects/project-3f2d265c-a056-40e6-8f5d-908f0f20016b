import { ShoppingCart } from 'lucide-react';
import type { Product } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-400">
            ${product.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}