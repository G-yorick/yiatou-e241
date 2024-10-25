import React from 'react';
import { FaCheck} from 'react-icons/fa';

const DeliveryPromises = () => {
  const promises = [
    { icon: FaCheck, text: "Respect des délais" },
    { icon: FaCheck, text: "Retour produit" },
    { icon: FaCheck, text: "2k de crédit de retard" },
    { icon: FaCheck, text: "Remboursement" },
  ];

  return (
    <div className="bg-white p-4 border border-t-4 border-b-4 border-gray-300">
      <h3 className="font-medium text-md mb-3">Promesses de livraison</h3>
      <div className="grid grid-cols-2 gap-4">
        {promises.map((promise, index) => (
          <div key={index} className="flex items-center">
            <promise.icon className="text-green-500 text-md mr-2" />
            <p className="text-sm text-gray-600">{promise.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryPromises;
