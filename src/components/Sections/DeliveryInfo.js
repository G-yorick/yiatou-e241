import React, { useState } from 'react';
import CitySelectionModal from '../Modals/CitySelectionModal';
import { formatCurrency, addDaysToDate, formatDateRange } from '../../utils/utils';

const DeliveryInfo = ({ initialCity, initialPrice, currency, unit, startDate, endDate, daysRange, cities, onModalOpen, onModalClose }) => {
  const [city, setCity] = useState(initialCity);
  const [price, setPrice] = useState(initialPrice);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deliveryDays, setDeliveryDays] = useState(daysRange);

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity.name);
    setPrice(selectedCity.price);
    setDeliveryDays(daysRange + 2);
    setIsModalOpen(false);
    onModalClose();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    onModalOpen();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onModalClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleOpenModal();
    }
  };

  const newEndDate = addDaysToDate(startDate, deliveryDays);

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="font-medium text-md text-gray-900 flex items-center">
        Livraison à{' '}
        <button
          className="text-md text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ml-1"
          onClick={handleOpenModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Sélectionner une ville"
        >
          {city}
        </button>
      </h3>
      <p className="mt-2 text-gray-600 text-sm">
        Prix: <span className="font-base">{formatCurrency(price, currency)}/{unit}</span>
      </p>
      <p className="mt-1 text-gray-600 text-sm">
        Délais: <span className="font-base">{formatDateRange(startDate, newEndDate)}</span> (10 - {deliveryDays} jours)
      </p>
      <p className="mt-2 text-xs text-black font-medium">
        (Paiement du transport à la livraison)
      </p>
      <CitySelectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectCity={handleCitySelection}
        cities={cities}
      />
    </div>
  );
};

export default DeliveryInfo;
