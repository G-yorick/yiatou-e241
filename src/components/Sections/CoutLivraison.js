import React from 'react';
import { FiTag, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';

const CoutLivraison = ({ numberOfPieces = 20 }) => {
    const businessItems = [
        { label: "Prix d'achat", value: `14,000 FCFA (${numberOfPieces} pièces)`, icon: FiTag },
        { label: "Transport", value: "7,500 FCFA /Kg", icon: FaPlane },
        { label: "Prix de revient", value: "1,075 FCFA /1", icon: FiDollarSign },
        { label: "Prix de vente", value: "2,500 FCFA /1", icon: FiTrendingUp },
        { label: "Bénéfice", value: "3,000 FCFA", icon: FiTrendingUp },
    ];

    return (
        <div className="py-5 px-3 bg-white border border-b-4 border-gray-200">
            {/* Lance ton Business section */}
            <div className="mt-0">
                <h2 className="text-xl font-bold mb-4">Lance ton Business</h2>
                <div className="space-y-3">
                    {businessItems.map((item, index) => (
                        <div key={index} className={`flex items-center ${index === businessItems.length - 1 ? 'font-bold' : ''}`}>
                            <div className="w-5 h-5 mr-3 text-gray-600 flex-shrink-0">
                                <item.icon className="w-full h-full" />
                                {item.label === "Prix de vente" && (
                                    <FiTrendingUp className="w-3 h-3 absolute -mt-3 ml-2 text-green-500" />
                                )}
                            </div>
                            <span className="text-gray-700 w-32">{item.label} :</span>
                            <span className="text-gray-700">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CoutLivraison;
