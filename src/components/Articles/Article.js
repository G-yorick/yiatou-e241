import { Link } from "react-router-dom";
import { Products } from "../../utils/utils";

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
          <p className={`text-[10px] leading-tight ${product.sampleAvailable ? 'text-green-600' : 'text-gray-600'}`}>
            {product.sampleAvailable ? "Échantillon dispo" : `Achat min: ${product.minPurchase} pièces`}
          </p>
          <button 
            className="bg-gray-100 p-1 rounded-full"
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
