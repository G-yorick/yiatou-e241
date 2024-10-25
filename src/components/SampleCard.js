import React from 'react';

const SampleCard = ({ image, price }) => {
  return (
    <div className="flex-shrink-0 w-24 bg-white shadow-md overflow-hidden mb-2">
      <img src={image} alt="Sample" className="w-full h-20 object-cover" />
      <div className="p-2">
        <p className="text-start text-xs font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default SampleCard;
