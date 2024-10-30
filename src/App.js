import React from 'react';
import { CartProvider } from './context/CartContext';
import AppRoutes from './routes/AppRoutes';
import DetailsEchantillon from './components/Sections/DetailsEchantillon';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App; 