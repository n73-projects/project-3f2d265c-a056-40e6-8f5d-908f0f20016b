import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';

export function Header() {
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-blue-400">E</span>Shop
          </h1>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Products
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center flex-1 max-w-sm mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleCart}
            className="relative text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-blue-500 text-xs font-bold text-white flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </header>
  );
}