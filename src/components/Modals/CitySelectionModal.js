import React, { useEffect, useRef } from 'react';
import { IoMdClose } from "react-icons/io";

const CitySelectionModal = ({ isOpen, onClose, onSelectCity, cities }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modalRef.current?.classList.remove('translate-y-full');
      }, 10);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    modalRef.current?.classList.add('translate-y-full');
    setTimeout(onClose, 300);
  };

  if (!isOpen) return null;

  const handleKeyDown = (e, city) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelectCity(city);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div 
        ref={modalRef}
        className="bg-white rounded-t-[30px] p-6 w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ease-out translate-y-full"
      >
        <div className="sticky top-0 bg-white z-10 pb-4 mb-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Sélectionnez une ville</h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fermer"
            >
              <IoMdClose size={24} />
            </button>
          </div>
        </div>
        <ul className="space-y-4">
          {cities.map((city) => (
            <li
              key={city.name}
              className="cursor-pointer p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => onSelectCity(city)}
              onKeyDown={(e) => handleKeyDown(e, city)}
              tabIndex={0}
              role="button"
              aria-label={`Sélectionner ${city.name}`}
            >
              {city.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CitySelectionModal;
