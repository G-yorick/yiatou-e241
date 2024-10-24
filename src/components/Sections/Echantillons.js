import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Echantillons = ({ sampleText, samplePrice, sampleCommission, onOrder }) => {
  const handleOrder = () => {
    if (onOrder) {
      onOrder({
        type: 'sample',
        price: samplePrice,
        commission: sampleCommission
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOrder();
    }
  };

  return (
    <div className="bg-white p-4 border border-t-4 border-gray-300">
      <h3 className="font-medium text-lg">
        Échantillons <span className="text-sm font-normal text-gray-400">
          (Livraison en -2h sur LBV) 
          <FaChevronRight className="inline-block ml-20 text-xl" />
          {sampleText && `, ${sampleText}`}
        </span>
      </h3>
      <p className="text-md mb-0">
        <span className="font-medium text-gray-400">
          {typeof samplePrice === 'number' ? samplePrice.toLocaleString() : samplePrice}11.300 FCFA 
          <span className='text-gray-400 text-sm'>  / pièce</span>
        </span>
        <button
          className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ml-1"
          onClick={handleOrder}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          aria-label="Commander des échantillons"
        >
          Commander
        </button>
      </p>
    </div>
  );
};

export default Echantillons;
