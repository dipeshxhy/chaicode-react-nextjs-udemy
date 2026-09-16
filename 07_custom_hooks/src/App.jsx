import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products as data } from './data/products';
import Cart from './components/Cart';
import { useCart } from './hooks/useCart';

const App = () => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useCart();
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item)));
    }
  };
  const handleRemove = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <hr className=" border-t border-gray-300 border-2 " />
      <div className="flex flex-wrap justify-between gap-4 mt-10">
        <div className="flex-1 ">
          <ProductList products={products} onAdd={handleAddToCart} />
        </div>
        <Cart cart={cart} onUpdateQty={handleUpdateQty} onRemove={handleRemove} />
      </div>
    </div>
  );
};
export default App;
