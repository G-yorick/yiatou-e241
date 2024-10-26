import React from 'react';
import { FaImage } from "react-icons/fa";

const MoreArticleItem = ({ imageUrl, price }) => {
    return (
        <div className=" mb-6 w-[120px] h-[140px] shrink-0 shadow overflow-hidden flex flex-col">
            <div className="h-[120px] bg-gray-200 flex justify-center items-center">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt="Product" 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <FaImage className="text-gray-400" size={24}/>
                )}
            </div>
            <div className="h-[20px] px-2 py-1 bg-white flex items-center">
                <p className="text-[14px] font-medium text-start">
                    {price ? `${price} FCFA` : 'Prix non disponible'}
                </p>
            </div>
        </div>
    );
}

export default MoreArticleItem;
