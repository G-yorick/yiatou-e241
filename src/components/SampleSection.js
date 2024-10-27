import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import SampleCard from './SampleCard';
import { samples } from '../utils/utils';


const SampleSection = () => {
 const [isAnimating, setIsAnimating] = useState(false);


 const handleClick = () => {
   setIsAnimating(true);
   setTimeout(() => setIsAnimating(false), 300);
 };


 const handleKeyDown = (event) => {
   if (event.key === 'Enter' || event.key === ' ') {
     handleClick();
   }
 };


 return (
   <section className="px-3 py-2 border-b-4 border-gray-200 bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400">
     <div className="flex justify-between items-start">
       <div>
         <h2 className="text-md font-serif font-bold text-white">Échantillons</h2>
         <p className="text-sm font-light font-semi-bold text-white mt-0.3 opacity-90">Livraison tout de suite</p>
       </div>
       <div className="flex items-center">
         <span className="text-white text-xs font-light mr-1">Voir plus</span>
         <button
           className={`p-1 text-white rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 ${
             isAnimating ? 'transform scale-110' : ''
           }`}
           onClick={handleClick}
           onKeyDown={handleKeyDown}
           aria-label="Voir plus de détails sur les échantillons"
           tabIndex={0}
         >
           <FaChevronRight className="text-sm" />
         </button>
       </div>
     </div>
     <div className="flex overflow-x-auto space-x-2 mt-2 scrollbar-hide">
       {samples.map((sample, index) => (
         <SampleCard key={index} image={sample.image} price={sample.price} />
       ))}
     </div>
   </section>
 );
};


export default SampleSection;