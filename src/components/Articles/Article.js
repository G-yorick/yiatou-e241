import { Link } from "react-router-dom";
import { Products } from "../../utils/utils";
/**
 * 
 * @param {{share : Function,product : Products}} param0 
 * @returns 
 */
const Article = ({share = null,product}) => {
  let text = product.description.split("");
  text.length = 19;
  const onShare = () =>{
    try {
      share();
    } catch (error) {
      console.log('pas une fonction');
    }
  }
    return (
        <div className="w-full bg-white rounded-xl relative overflow-hidden">
              <div className="absolute left-0 top-0 px-4 bg-red-600 rounded-tl rounded-br-2xl text-white font-medium">
                <span className="text-[11px]">-30%</span>
              </div>
              <Link to={`/produit-details/${product.id}`}>
              <img
                class="max-h-[160px] w-full object-cover"
                src={product.image[0]}
                alt=""
              />
              </Link>
              <div className="py-1 px-3">
                <Link to={`/produit-details/${product.id}`} className="text-gray-600 w-full block text-[13px]">{text.join("")}...</Link>
                <p className="flex justify-between items-center py-2">
                  <strong className=" w-full"><Link to={`/produit-details/${product.id}`} className="w-full inline-block">{product.prix.toLocaleString()} FCFA</Link></strong>
                  <button className="bg-gray-100 px-[6px] py-[5px] flex justify-center items-center rounded-full" onClick={onShare}>
                  <i class="fi fi-rr-refer-arrow flex"></i>
                    </button>
                  </p>
              </div>
        </div>
    );
}

export default Article;
