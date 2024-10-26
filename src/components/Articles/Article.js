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
      }, 300);
    }, interval);
    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return { currentText: texts[currentTextIndex], isVisible };
};

/**
 * @param {{share : Function, product : Products}} param0
 * @returns
 */
const Article = ({ share = null, product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = product.image.length;

  const handleShare = () => {
    try {
      if (typeof share === 'function') {
        share();
      }
    } catch (error) {
      console.log('pas une fonction');
    }
  };

  const { currentText, isVisible } = useTextAnimation(
    ["Échantillon dispo", "Livraison dispo"],
    3000
  );

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Effet pour changer automatiquement l'image toutes les 5 secondes
  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Réduire à 15 caractères pour une carte plus compacte
  let truncatedDescription = product.description.slice(0, 15) + "...";

  return (
    <div className="w-full bg-white rounded-lg shadow-sm relative overflow-hidden flex flex-col">
      {/* Discount badge */}
      <div className="absolute left-0 top-0 px-2 py-1 bg-red-600 rounded-tl rounded-br-lg text-white font-medium z-10">
        <span className="text-[10px]">-30%</span>
      </div>

      {/* Image */}
      <Link to={`/produit-details/${product.id}`} className="block relative">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img
            className="w-full h-full object-cover object-center"
            src={product.image[currentImageIndex]}
            alt={product.name}
          />
        </div>
        {/* Image indicator */}
        <div className="absolute bottom-2 right-2 bg-white bg-opacity-50 text-black text-xs px-2 py-1 rounded-full">
          {currentImageIndex + 1}/{totalImages}
        </div>
      </Link>

      {/* Content */}
      <div className="p-2 flex flex-col justify-between flex-shrink-0">
        {/* Description */}
        <Link 
          to={`/produit-details/${product.id}`}
          className="text-gray-800 font-medium text-xs leading-tight block mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {truncatedDescription}
        </Link>

        {/* Price */}
        <p className="text-gray-900 font-bold text-xs mb-0.5">
          {product.prix.toLocaleString()} FCFA
        </p>

        <div className="flex justify-between items-center">
          {/* Sample/Delivery Info */}
          {product.sampleAvailable ? (
            <p className={`text-[11px] leading-tight text-green-600 transition-opacity duration-300 ease-in-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {currentText}
            </p>
          ) : (
            <p className="text-[11px] leading-tight text-gray-600">
              Achat min: {product.minPurchase} pcs
            </p>
          )}

          {/* Share Button */}
          <button 
            className="bg-gray-100 p-1.5 rounded-full transition-transform duration-300 ease-in-out hover:rotate-180 focus:rotate-180"
            onClick={handleShare}
            aria-label="Partager"
          >
            <i className="fi fi-rr-refer-arrow text-[10px] flex"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
