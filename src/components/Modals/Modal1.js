import React, { useState } from 'react';
import ModalModel from "./ModalModel";

const colorOptions = [
  { name: 'Noir', image: '/path/to/black-image.jpg' },
  { name: 'Vert', image: '/path/to/green-image.jpg' },
  { name: 'Jaune', image: '/path/to/yellow-image.jpg' },
];

const sizeOptions = ['42', '40', '39'];

// Fonction pour formater le prix en francs CFA
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(price);
};

const Modal1 = ({ isOpen, onClose, productImage, price, minPurchase }) => {
  const handleContinue = () => {
    // Implement the logic for continuing with the purchase
    console.log('Continuing with purchase');
  };

  return (
    <ModalModel onClose={onClose} title="Variations" titleClassName="text-xl font-bold " active={isOpen}>
      <ModalContent 
        productImage={productImage}
        price={price}
        minPurchase={minPurchase}
      />
      <div className="px-3 bg-white">
        <button
          onClick={handleContinue}
          className="w-full h-14 rounded-md bg-[#ff5722] text-white py-2 px-3  focus:outline-none text-base font-semibold"
          aria-label="Continuer l'achat"
        >
          Continuer
        </button>
      </div>
    </ModalModel>
  );
};

const ModalContent = ({ productImage, price, minPurchase }) => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].name);
  const [sizeQuantities, setSizeQuantities] = useState({
    Noir: { '42': 0, '40': 0, '39': 0 },
    Vert: { '42': 0, '40': 0, '39': 0 },
    Jaune: { '42': 0, '40': 0, '39': 0 }
  });

  const handleSizeChange = (size, change) => {
    if (!selectedColor) return;
    
    setSizeQuantities(prev => ({
      ...prev,
      [selectedColor]: {
        ...prev[selectedColor],
        [size]: Math.max(0, prev[selectedColor][size] + change)
      }
    }));
  };

  const calculateTotal = () => {
    return Object.values(sizeQuantities).reduce((total, colorSizes) => {
      const colorTotal = Object.values(colorSizes).reduce((sum, qty) => sum + qty, 0);
      return total + (colorTotal * price);
    }, 0);
  };

  const getColorTotal = (colorName) => {
    if (!sizeQuantities[colorName]) return 0;
    return Object.values(sizeQuantities[colorName]).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <div className="px-3 pt-1 pb-4">
      <div className="mb-4">
        <h3 className="font-semibold text-sm mb-1">Prix unitaire</h3>
        <div className="flex items-center space-x-3">
          <img src={productImage} alt="Product" className="w-16 h-16 object-cover rounded" />
          <div>
            <p className="font-bold text-lg">{formatPrice(price)}</p>
            <p className="text-xs text-gray-600">Achat min. {minPurchase} pièces</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-xs mb-1 text-gray-500">Couleur</h3>
        <div className="grid grid-cols-3 gap-2">
          {colorOptions.map((color) => (
            <div 
              key={color.name} 
              className={`relative flex items-center p-2 cursor-pointer hover:bg-gray-50 border border-gray-200 ${
                selectedColor === color.name ? 'ring-2 ring-[#ff5722]' : ''
              }`}
              onClick={() => setSelectedColor(color.name)}
              role="button"
              tabIndex={0}
              aria-label={`Sélectionner la couleur ${color.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedColor(color.name);
                }
              }}
            >
              <div className="w-1/2">
                <img 
                  src={color.image} 
                  alt={color.name} 
                  className="w-full h-12 object-cover rounded-lg" 
                />
              </div>
              <span className='text-sm font-medium text-black ml-2 w-1/2'>{color.name}</span>
              {getColorTotal(color.name) > 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff5722] text-white rounded-full flex items-center justify-center text-xs font-bold">
                  x{getColorTotal(color.name)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-medium text-sm mb-1 text-gray-500">Pointures</h3>
        <div className="space-y-2">
          {sizeOptions.map(size => (
            <div key={size} className="flex items-center justify-between">
              <span className="text-sm font-semibold text-black">{size}</span>
              <div className="flex items-center space-x-1 border border-[#cccccc] rounded-full">
                <button
                  onClick={() => handleSizeChange(size, -1)}
                  disabled={!selectedColor}
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none disabled:opacity-50"
                  aria-label={`Diminuer la quantité de pointure ${size}`}
                >
                  -
                </button>
                <span className="w-6 text-center text-sm">
                  {selectedColor ? sizeQuantities[selectedColor][size] : 0}
                </span>
                <button
                  onClick={() => handleSizeChange(size, 1)}
                  disabled={!selectedColor}
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none disabled:opacity-50"
                  aria-label={`Augmenter la quantité de pointure ${size}`}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">TOTAL</h3>
          <p className="font-bold text-xl">{formatPrice(calculateTotal())}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
