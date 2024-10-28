import React from 'react';
import { Zap } from 'lucide-react';


const SampleCard = ({ image, price }) => {
 return (
   <div className="relative flex-shrink-0 w-24 h-32 bg-white rounded-lg shadow-sm overflow-hidden mb-1">
     {/* Badge -30% with flash icon bg-[#ff592d] */}
     <div className="absolute  bg-red-600 text-white text-[10px] font-sans font-medium px-1 py-0.2 rounded rounded-bl-none rounded-tr-none rounded-br-lg rounded-tl-lg flex items-center space-x-1">   
       <Zap size={12} fill="currentColor" strokeWidth={1} />
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
