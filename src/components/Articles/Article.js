import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../utils/utils";

const useTextAnimation = (texts, interval) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300); // Delay for fade-out effect
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return { currentText: texts[currentTextIndex], isVisible };
};

/**
 * 
 * @param {{share : Function, product : Products}} param0 
 * @returns 
 */
const Article = ({ share = null, product }) => {
  const handleShare = () => {
    if (typeof share === 'function') {
      share();
    } else {
      console.log('share n\'est pas une fonction');
    }
  };

  const { currentText, isVisible } = useTextAnimation(
    ["Échantillon dispo", "Livraison dispo"],
    3000
  );

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <Link to={`/produit-details/${product.id}`} className="block">
        <img
          className="h-32 w-full object-cover"
          src={product.image[0]}
          alt={product.name}
        />
      </Link>
      <div className="p-2">
        <Link 
          to={`/produit-details/${product.id}`} 
          className="text-gray-800 font-medium text-xs leading-tight block mb-1 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {product.description}
        </Link>
        <p className="text-gray-900 font-bold text-sm mb-1">
          {product.prix.toLocaleString()} FCFA
        </p>
        <div className="flex justify-between items-center">
          {product.sampleAvailable ? (
            <p className={`text-[13px] leading-tight text-green-600 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {currentText}
            </p>
          ) : (
            <p className="text-[13px] leading-tight text-gray-600">
              Achat min: {product.minPurchase} pièces
            </p>
          )}
          <button 
            className="bg-gray-100 p-2 rounded-full transition-transform duration-300 ease-in-out hover:rotate-180 focus:rotate-180"
            onClick={handleShare}
            aria-label="Partager"
          >
            <i className="fi fi-rr-refer-arrow text-xs flex"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
