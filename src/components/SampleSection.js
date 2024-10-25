import React from 'react';
import SampleCard from './SampleCard';
import { samples } from '../utils/utils';
import { FaChevronRight } from 'react-icons/fa';

const SampleSection = () => {
  return (
    <div className="px-3 py-4 border border-b-4 border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Échantillons</h2>
        <div className="flex items-center space-x-1">
          <span className="text-black focus:outline-none">
            Voir plus
          </span>
          <FaChevronRight className="text-black text-md" />
        </div>
      </div>
      <p className="text-sm text-gray-600">Livraison tout de suite</p>
      <div className="flex overflow-x-auto space-x-4 mt-2">
        {samples.map((sample, index) => (
          <SampleCard key={index} image={sample.image} price={sample.price} />
        ))}
      </div>
    </div>
  );
};

export default SampleSection;
