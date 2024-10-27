import React from 'react';
import { FiTag, FiTrendingUp } from 'react-icons/fi';
import { FaPlane, FaMoneyBillWave, FaCalculator } from 'react-icons/fa';

const CoutLivraison = ({ numberOfPieces = 20 }) => {
    const businessItems = [
        { label: "Prix d'achat", value: `14,000 FCFA (${numberOfPieces} pièces)`, icon: FiTag },
        { label: "Transport", value: "7,500 FCFA /Kg", icon: FaPlane },
        { label: "Prix de revient", value: "1,075 FCFA /1", icon: FaCalculator },
        { label: "Prix de vente", value: "2,500 FCFA /1", icon: FiTrendingUp },
        { label: "Bénéfice", value: `1,425 x ${numberOfPieces} = 28,500 FCFA`, icon: FaMoneyBillWave },
    ];

    return (
        <div className="py-2 px-4 bg-white border border-b-4 border-[#cccccc]">
            <div className="mt-0">
                <h2 className="text-md font-medium mb-2">Lance ton Business</h2>
                <table className="w-full text-sm border-collapse border border-[#cccccc]">
                    <tbody>
                        {businessItems.map((item, index) => (
                            <tr 
                                key={index} 
                                className={`
                                    ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                    ${index === businessItems.length - 1 ? 'font-semibold bg-green-100' : ''}
                                `}
                            >
                                <td className="py-2 pl-2 pr-4 border border-[#cccccc]">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 text-gray-500 flex-shrink-0 mr-2">
                                            <item.icon className="w-full h-full" />
                                            {item.label === "Prix de vente" && (
                                                <FiTrendingUp className="w-2 h-2 absolute -mt-2 ml-2 text-green-500" />
                                            )}
                                        </div>
                                        <span className="text-gray-600">{item.label}</span>
                                    </div>
                                </td>
                                <td className="py-2 pr-2 border border-[#cccccc] text-[#333333] text-right">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CoutLivraison;
