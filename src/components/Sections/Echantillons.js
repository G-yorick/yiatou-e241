import React from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Echantillons = ({ sampleText, samplePrice, sampleCommission, onOrder, sampleId }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    // Assurez-vous que sampleId est bien défini et passé en tant que prop
    // navigate(`/echantillon-details/${sampleId}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOrder();
    }
  };

  return (
    <div className="bg-white p-4 border border-t-4 border-[#cccccc] relative">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-md">
          Échantillons <span className="text-xs font-normal text-gray-400 ">
            (Livraison en -2h sur LBV) 
            {sampleText && `, ${sampleText}`}
          </span>
        </h3>
        <FaChevronRight className="text-gray-400 text-xl" />
      </div>
      <p className="text-sm mb-0">
        <span className="font-medium text-gray-400">
          {typeof samplePrice === 'number' ? samplePrice.toLocaleString() : '11.300'} FCFA 
          <span className='text-gray-400 text-sm'>  / pièce</span>
        </span>
        <button
          className="text-sm text-blue-600 focus:outline-none rounded ml-1 inline-flex items-center" 
          onClick={handleOrder}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          aria-label="Commander des échantillons"
        >
          Commander
          <FaChevronDown className="text-blue-600 text-xs ml-1" />
        </button>
      </p>
    </div>
  );
};

export default Echantillons;
