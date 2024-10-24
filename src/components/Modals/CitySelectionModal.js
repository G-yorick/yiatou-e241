import React from 'react';
import ModalModel from "./ModalModel";

const CitySelectionModal = ({ isOpen, onClose, onSelectCity, cities }) => {
  return (
    <ModalModel onClose={onClose} title="Sélectionnez une ville" active={isOpen}>
      <CitySelectionContent onSelectCity={onSelectCity} cities={cities} />
    </ModalModel>
  );
};

const CitySelectionContent = ({ onSelectCity, cities }) => {
  const handleKeyDown = (e, city) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelectCity(city);
    }
  };

  return (
    <ul className="px-4 py-6">
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
  );
};

export default CitySelectionModal;
