import React from 'react';


const SampleCard = ({ image, price }) => {
 return (
   <div className="relative flex-shrink-0 w-24 h-32 bg-white rounded-lg shadow-md overflow-hidden">
     {/* Badge -30% */}
     <div className="absolute  bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded rounded-bl-none rounded-tr-none rounded-br-lg rounded-tl-lg">
       -30%
     </div>
     <img src={image} alt="Sample" className="w-full h-3/4 object-cover" />
     <div className="p-1 text-center">
       <p className="text-xs font-semibold">{price}</p>
     </div>
   </div>
 );
};


export default SampleCard;