import { useState } from "react";
import ShareProduct from "../Modals/ShareProduct";
import { Products } from "../../utils/utils";
import Desciption from "../Desciption";

/**
 * 
 * @param {{product : Products}} param0 
 * @returns 
 */
const DetailsProduct = ({product}) => {
    const [activeModal,setActiveModal] = useState(false);
    const toggleModal = () =>{
        setActiveModal(!activeModal);
    }
    return (
        <>
        <ShareProduct product={product} toggleActiveShare={toggleModal} activeShare={activeModal}/>
        <div className="px-3 py-5 bg-white">
            <div className="flex justify-between">
                <p className="flex gap-3 justify-end items-center">
                    <span className="text-lg font-bold uppercase">{product.prix.toLocaleString()} FCFA</span>
                    <span className="text-[12px] font-medium text-gray-400 line-through">(11,500 FCFA)</span>
                    <span className="text-[12px] font-medium text-gray-400">- 25%</span>
                </p>
                <p className="font-medium text-red-600">Stock limité !!!</p>
            </div>
            <div className="pt-4 flex flex-col gap-3">
                <p className="font-medium text-lg flex gap-3 items-center">
                    <span>Description</span>
                    <span className="text-sm text-gray-400">(35 Vendus)</span>
                </p>
                <p className="text-gray-600 mb-3">
                    <Desciption texte={product.description}/>
                </p>
                <button onClick={toggleModal} className="flex justify-center items-center gap-5 py-3 rounded bg-red-200 text-gray-900 border-dashed border-2 border-red-500">
                <span className="font-medium">Partages pour gagner <strong>{product.prix.toLocaleString()} FCFA</strong></span>
                <i className="fi fi-br-refer-arrow"></i>
            </button>
            </div>
        </div>
        </>
    );
}

export default DetailsProduct;
