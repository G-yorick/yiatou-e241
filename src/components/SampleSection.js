import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import SampleCard from './SampleCard';
import { samples } from '../utils/utils';
import Promises from './Promesses/Promises';


const SampleSection = () => {
 const [isAnimating, setIsAnimating] = useState(false);
 const navigate = useNavigate();

 const handleClick = () => {
  setIsAnimating(true);
  setTimeout(() => {
    setIsAnimating(false);
    navigate('/echantillonDetails');
  }, 300);
};


 const handleKeyDown = (event) => {
   if (event.key === 'Enter' || event.key === ' ') {
     handleClick();
   }
 };


 return (
   <>
     
     <section className="px-3 py-2 border-b-4 border-[#cccccc] bg-gray-100">
       {/* Ajoutez une marge en bas pour séparer Promises du contenu suivant */}
       <div className="mb-2">
         <Promises />
       </div>
       <div className="flex justify-between items-start">
        
         <div>
           <h2 className="text-md font-bold text-[#333333]">Échantillons</h2>
           <p className="text-xs font-light font-semi-bold text-[#333333] mt-0.3 opacity-90">Livraison tout de suite</p>
         </div>
         <div className="flex items-center">
           <span className="text-[#333333] text-xs font-light mr-1">Voir plus</span>
           <button
             className={`p-1 text-[#333333] rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 ${
               isAnimating ? 'transform scale-110' : ''
             }`}
             onClick={handleClick}
             onKeyDown={handleKeyDown}
             aria-label="Voir plus de détails sur les échantillons"
             tabIndex={0}
           >
             <FaChevronRight className="text-xs" />
           </button>
         </div>
       </div>
       <div className="flex overflow-x-auto space-x-2 mt-2 scrollbar-hide">
         {samples.map((sample, index) => (
           <SampleCard key={index} image={sample.image} price={sample.price} />
         ))}
       </div>
     </section>
   </>
 );
};


export default SampleSection;
