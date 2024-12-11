import React from 'react';
import { useNavigate } from 'react-router-dom'; // Utilisation de useNavigate

// Fonction d'animation de texte
const useTextAnimation = (texts, interval) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
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

const ProductCard = ({ product, onShare }) => {
  const { currentText, isVisible: isTextVisible } = useTextAnimation(
    ["Échantillon dispo", "Livraison dispo"],
    3000
  );

  const navigate = useNavigate(); // Utilisation de useNavigate

  const handleShare = (e) => {
    e.stopPropagation(); // Empêche la redirection lors du clic sur le bouton de partage
    onShare();
  };

  const handleClick = () => {
    // Redirection vers la page produit-details
    navigate(`/produit-details/${product.id}`); // Assurez-vous que l'ID du produit soit correct
  };

  return (
    <div
      className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer" // Ajout de cursor-pointer
      onClick={handleClick}
    >
      <div className="relative w-full pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm font-bold text-gray-900 mt-1">
          {product.price.toFixed(2)} FCFA
        </p>
        {/* Conteneur pour le texte animé et le bouton de partage */}
        <div className="flex justify-between items-center mt-2">
          {/* Texte animé */}
          {product.title === 'Top basique blanc' ? (
            <p className="text-sm font-base leading-tight text-gray-600">
              Achat min: 5
            </p>
          ) : product.title === 'Jupe' ? (
            <p className="text-sm font-base leading-tight text-gray-600">
              Achat min: 10
            </p>
          ) : product.title === 'Maquillage' ? (
            <p className="text-sm font-base leading-tight text-gray-600">
              Achat min: 5
            </p>
          ) : product.title === 'Laptop' ? (
            <p className="text-sm font-base leading-tight text-gray-600">
              Achat min: 5
            </p>
          ) : product.title === 'Smart TV' ? (
            <p className="text-sm font-base leading-tight text-gray-600">
              Achat min: 10
            </p>
          ) : product.title === 'Jean Coupe' ? (
            <p className="text-sm font-base leading-tight text-gray-600">
              Achat min: 5
            </p>
          ) : product.title === 'Accessoires' ? (
            <p className="text-sm font-base leading-tight text-gray-600">
              Achat min: 10
            </p>
          ) : (
            <p className={`text-sm font-base leading-tight text-green-600 transition-opacity duration-300 ease-in-out ${
              isTextVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {currentText}
            </p>
          )}
          {/* Bouton de partage */}
          <button
            className="bg-gray-100 p-1.5 rounded-full transition-transform duration-300 ease-in-out hover:rotate-180 focus:rotate-180"
            onClick={handleShare}
            aria-label="Partager"
          >
            <i className="fi fi-rr-refer-arrow text-[15px] flex"></i> {/* Assurez-vous d'avoir une icône appropriée */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;