import React from 'react';
import { Zap } from 'lucide-react';


const SampleCard = ({ image, price }) => {
 return (
   <div className="relative flex-shrink-0 w-24 h-32 bg-white rounded-lg shadow-sm overflow-hidden mb-1">
     {/* Badge -30% with flash icon */}
     <div className="absolute bg-red-600 text-white text-xs font-medium px-1.5 py-0.5 rounded rounded-bl-none rounded-tr-none rounded-br-lg rounded-tl-lg flex items-center space-x-1">
       <Zap size={12} fill="currentColor" strokeWidth={3} />
       <span>-30%</span>
     </div>
     <img src={image} alt="Sample" className="w-full h-3/4 object-cover" />
     <div className="p-1 text-start">
       <p className="text-xs font-semibold">{price} FCFA</p>
     </div>
   </div>
 );
};


export default SampleCard;
