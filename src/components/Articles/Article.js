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
    <div className="w-full bg-white rounded-xl relative overflow-hidden">
      <Link to={`/produit-details/${product.id}`} className="block">
        <img
          className="max-h-[160px] w-full object-cover"
          src={product.image[0]}
          alt={product.name}
        />
      </Link>
      <div className="p-3">
        <Link to={`/produit-details/${product.id}`} className="text-gray-800 font-semibold text-sm block mb-2">
          {product.name}
        </Link>
        <p className="text-gray-900 font-bold text-lg mb-2">
          {product.prix.toLocaleString()} FCFA
        </p>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-600 text-xs">
            {product.sampleAvailable ? "Échantillon dispo" : `Achat min: ${product.minPurchase} pièces`}
          </p>
          <button 
            className="bg-gray-100 p-2 rounded-full"
            onClick={handleShare}
            aria-label="Partager"
          >
            <i className="fi fi-rr-refer-arrow flex"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
