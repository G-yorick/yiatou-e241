import React from 'react';

const SampleCard = ({ image, price }) => {
  return (
    <div className="flex-shrink-0 w-40 bg-white shadow-md overflow-hidden mb-2">
      <img src={image} alt="Sample" className="w-full h-32 object-cover" />
      <div className="p-2">
        <p className="text-center text-sm font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default SampleCard;
