import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { formatCurrency, addDaysToDate, formatDateRange } from '../../utils/utils';

const CustomSelect = ({ value, onChange, options, currency }) => {
  return (
    <div className="relative inline-flex items-center">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none bg-transparent text-md text-blue-600 focus:outline-none py-1 pl-2"
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name === value ? option.name : `${formatCurrency(option.price, currency)} - ${option.name}`}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-blue-600 pr-14">
        <FaChevronDown className="h-3 w-3 " />
      </div>
    </div>
  );
};

const DeliveryInfo = ({ initialCity, initialPrice, currency, unit, startDate, endDate, daysRange, cities }) => {
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [price, setPrice] = useState(initialPrice);
  const [deliveryDays, setDeliveryDays] = useState(daysRange);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    const selectedCityObj = cities.find(city => city.name === cityName);
    setSelectedCity(cityName);
    setPrice(selectedCityObj.price);
    setDeliveryDays(daysRange + 2);
  };

  const newEndDate = addDaysToDate(startDate, deliveryDays);

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center">
        <span className="font-medium text-md text-gray-900 mr-1">
          Livraison à
        </span>
        <CustomSelect
          value={selectedCity}
          onChange={handleCityChange}
          options={cities}
          currency={currency}
        />
      </div>
      <p className="mt-2 text-gray-600 text-sm">
        Prix: <span className="font-base">{formatCurrency(price, currency)}/{unit}</span>
      </p>
      <p className="mt-1 text-gray-600 text-sm">
        Délais: <span className="font-base">{formatDateRange(startDate, newEndDate)}</span> (10 - {deliveryDays} jours)
      </p>
      <p className="mt-2 text-xs text-black font-medium">
        (Paiement du transport à la livraison)
      </p>
    </div>
  );
};

export default DeliveryInfo;
