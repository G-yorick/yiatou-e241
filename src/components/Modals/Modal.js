import React, { useState } from 'react';
import ModalModel from "./ModalModel";

const colorOptions = [
  { name: 'Noir', image: '/path/to/black-image.jpg' },
  { name: 'Vert', image: '/path/to/green-image.jpg' },
  { name: 'Jaune', image: '/path/to/yellow-image.jpg' },
];

// Fonction pour formater le prix en francs CFA
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(price);
};

const Modal = ({ isOpen, onClose, productImage, price, minPurchase }) => {
  const handleContinue = () => {
    // Implement the logic for continuing with the purchase
    console.log('Continuing with purchase');
  };

  return (
    <ModalModel onClose={onClose} title="Variations" active={isOpen}>
      <ModalContent 
        productImage={productImage}
        price={price}
        minPurchase={minPurchase}
      />
      <div className="px-4 py-4 bg-white">
        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out text-lg font-semibold"
          aria-label="Continuer l'achat"
        >
          Continuer
        </button>
      </div>
    </ModalModel>
  );
};

const ModalContent = ({ productImage, price, minPurchase }) => {
  const [quantities, setQuantities] = useState({ Noir: 0, Vert: 0, Jaune: 0 });

  const handleQuantityChange = (color, change) => {
    setQuantities(prev => ({
      ...prev,
      [color]: Math.max(0, prev[color] + change)
    }));
  };

  const calculateTotal = () => {
    return Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0) * price;
  };

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h3 className="font-semibold text-md mb-2">Prix unitaire</h3>
        <div className="flex items-center space-x-4">
          <img src={productImage} alt="Product" className="w-20 h-20 object-cover rounded" />
          <div>
            <p className="font-bold text-xl">{formatPrice(price)}</p>
            <p className="text-sm text-gray-600">Achat min. {minPurchase} pièces</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-sm mb-2 text-gray-500">Couleur</h3>
        <ul className="space-y-4">
          {colorOptions.map((color) => (
            <li key={color.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={color.image} alt={color.name} className="w-16 h-16 object-cover" />
                <span className='text-md font-semibold text-black'>{color.name}</span>
              </div>
              <div className="flex items-center space-x-2 border border-gray-300 rounded-full">
                <button
                  onClick={() => handleQuantityChange(color.name, -1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                  aria-label={`Diminuer la quantit�� de ${color.name}`}
                >
                  -
                </button>
                <span className="w-8 text-center">{quantities[color.name]}</span>
                <button
                  onClick={() => handleQuantityChange(color.name, 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                  aria-label={`Augmenter la quantité de ${color.name}`}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Total</h3>
          <p className="font-bold text-xl">{formatPrice(calculateTotal())}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
