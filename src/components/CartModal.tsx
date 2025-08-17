import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import toast from 'react-hot-toast';

export function CartModal() {
  const {
    items,
    isOpen,
    toggleCart,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCartStore();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    
    toast.success('Checkout initiated! (Demo only)');
    clearCart();
    toggleCart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={toggleCart}
      />

      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shopping Cart ({totalItems})
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCart}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <ShoppingBag className="h-16 w-16 mb-4 opacity-50" />
                <p className="text-lg">Your cart is empty</p>
                <p className="text-sm">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-800 rounded-lg p-4"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-medium text-white text-sm">
                        {item.name}
                      </h3>
                      <p className="text-blue-400 font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center text-white font-medium">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-800 px-6 py-4 space-y-4">
              {/* Total */}
              <div className="flex justify-between text-xl font-semibold text-white">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  Proceed to Checkout
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={clearCart}
                  className="w-full text-gray-400 hover:text-white border border-gray-700 hover:bg-gray-800"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}