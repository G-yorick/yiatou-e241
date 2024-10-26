import { useState, useEffect } from "react";
import ShareProduct from "../Modals/ShareProduct";
import Desciption from "../Desciption";
import React from 'react';

/**
 * 
 * @param {{product : Products}} param0 
 * @returns 
 */
const DetailsProduct = ({product}) => {
    const [activeModal, setActiveModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = product.image.length;

    const toggleModal = () => {
        setActiveModal(!activeModal);
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }

    useEffect(() => {
        const intervalId = setInterval(nextImage, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <ShareProduct product={product} toggleActiveShare={toggleModal} activeShare={activeModal}/>
        <div className="px-3 py-5 bg-gray-100">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-md font-bold">{product.prix.toLocaleString()} FCFA</h3>
                    <p className="text-[11px] text-gray-600">10-50 unités</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-md font-bold">{product.prix.toLocaleString()} FCFA</h3>
                    <p className="text-[11px] text-gray-600">51-100 unités</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-md font-bold">{product.prix.toLocaleString()} FCFA</h3>
                    <p className="text-[11px] text-gray-600"> ≥101-500 unités </p>
                </div>
            </div>
        </div>
        <div className="px-3 py-5 pt-4 flex flex-col gap-3">
                <p className="text-gray-600 mb-3 text-justify text-sm">
                    <Desciption texte={product.description}/>
                </p>
                <button 
                    onClick={toggleModal} 
                    className="flex justify-center items-center gap-5 py-3 rounded bg-red-200 text-gray-900 border-dashed border-2 border-red-500"
                >
                    <span className="font-medium">Partages pour gagner <strong>{product.prix.toLocaleString()} FCFA</strong></span>
                    <i className="fi fi-br-refer-arrow"></i>
                </button>
        </div>
        </>
    );
}

export default DetailsProduct;
