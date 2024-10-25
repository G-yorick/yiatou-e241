import React from 'react';
import MoreArticleItem from "../Articles/MoreArticleItem";

const MoreProduct = () => {
    const products = [
        { id: 1, imageUrl: '/images/product1.jpg', price: 2500 },
        { id: 2, imageUrl: '/images/product2.jpg', price: 3000 },
        { id: 3, imageUrl: '/images/product3.jpg', price: 1800 },
        { id: 4, imageUrl: '/images/product4.jpg', price: 3500 },
        // Ajoutez autant de produits que nécessaire
    ];

    return (
        <div className="p-4">
            <h2 className="font-medium text-lg mb-3">D'autres articles intéressants</h2>
            <div className="flex space-x-4 overflow-x-auto">
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
