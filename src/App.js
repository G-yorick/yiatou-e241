import React from 'react';
import { CartProvider } from './context/CartContext';
import AppRoutes from './routes/AppRoutes';
import DetailsEchantillon from './components/Sections/DetailsEchantillon';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </UserProvider>
  );
}

export default App; 