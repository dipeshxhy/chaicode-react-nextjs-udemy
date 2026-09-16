import { useState } from 'react';
import { useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);
  // sync across tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cart') {
        try {
          const newCart = event.newValue ? JSON.parse(event.newValue) : [];
          setCart(newCart);
        } catch (error) {
          console.error('Error parsing cart from localStorage:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return [cart, setCart];
};
