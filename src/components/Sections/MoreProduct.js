import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import MoreArticleItem from "../Articles/MoreArticleItem";

const MoreProduct = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            navigate('/products'); // Ajustez la route selon vos besoins
        }, 300);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleClick();
        }
    };

    const products = [
        { id: 1, imageUrl: '/img/pro/p5.png', price: 2500 },
        { id: 2, imageUrl: '/img/pro/p6.png', price: 3000 },
        { id: 3, imageUrl: '/img/pro/p7.png', price: 1800 },
        { id: 4, imageUrl: '/img/pro/p8.png', price: 3500 },
        // Ajoutez autant de produits que nécessaire
    ];

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-3">
                <h2 className="font-medium text-mb">D'autres articles intéressants</h2>
                <div className="flex items-center">
                    <span className="text-[#333333] text-xs font-light mr-1">Voir plus</span>
                    <button
                        className={`p-1 text-[#333333] rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 ${
                            isAnimating ? 'transform scale-110' : ''
                        }`}
                        onClick={handleClick}
                        onKeyDown={handleKeyDown}
                        aria-label="Voir plus d'articles"
                        tabIndex={0}
                    >
                        <FaChevronRight className="text-xs" />
                    </button>
                </div>
            </div>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {products.map(product => (
                    <MoreArticleItem 
                        key={product.id}
                        imageUrl={product.imageUrl}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default MoreProduct;
