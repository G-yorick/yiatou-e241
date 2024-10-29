import { FaCar } from "react-icons/fa6";
import { IoImage } from "react-icons/io5";
import { Check } from 'lucide-react';


const CommandeInfo = ({ isEchantillon = false }) => {
    // Ajout des données des produits (à remplacer par vos vraies données)
    const orderProducts = [
        { id: 1, name: "X3 clés USB 16 GB", type: "simple", price: 6500 },
        { id: 2, name: "Batterie externe", type: "batterie", price: 6500 }
    ];

    // Fonction pour obtenir les types de produits uniques
    const getUniqueProductTypes = () => {
        const types = orderProducts.map(product => product.type);
        return [...new Set(types)];
    };

    // Configuration des informations de livraison par type
    const deliveryInfo = {
        simple: {
            label: "Simples",
            price: "10500 FCFA/KG",
            delay: "10-14 jours"
        },
        batterie: {
            label: "Batteries",
            price: "7500 FCFA/KG",
            delay: "14-21 jours"
        },
        liquide: {
            label: "Liquides",
            price: "10500 FCFA/KG",
            delay: "14-21 jours"
        }
    };

    return (
        <>
            <div className="px-3 py-5 mt-4 bg-white pb-24">
                <h2 className="text-lg font-medium">
                    Résumé de la commande
                </h2>
                <p className="uppercase font-medium my-3">yt-123</p>
                {/* conteneur produit */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-400 w-[50px] h-[50px] rounded flex justify-center items-center">
                                <IoImage/>
                            </div>
                            <p>X3 clés USB 16 GB</p>
                        </div>
                        <p>6,500 FCFA</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-300 w-[50px] h-[50px] rounded flex justify-center items-center">
                                <IoImage/>
                            </div>
                            <p>X3 clés USB 16 GB</p>
                        </div>
                        <p>6,500 FCFA</p>
                    </div>
                </div>
                {/* Fin conteneur produit */}
                <div className="my-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <input 
                            type="checkbox" 
                            id="assurance"
                            className="w-4 h-4 accent-yellow-400"
                        />
                        <label htmlFor="assurance" className="flex items-center gap-1">
                            <span className="font-medium text-sm">Assurance</span>
                            <i className="fi fi-rr-info text-red-500 text-sm self-center mt-1"></i>
                        </label>
                    </div>
                    <p>700 FCFA</p>
                </div>

                <div className="mb-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Frais de Paiement</span>
                        <i className="fi fi-rr-info text-red-500 text-sm self-center mt-1"></i>
                    </div>
                    <p>2,500 FCFA</p>
                </div>

                <div className="w-full h-[1px] bg-gray-200 mb-4"></div>

                <div className="flex justify-between items-center flex-wrap">
                    <p className="px-2 rounded font-bold uppercase">TOTAL</p>
                    <p className="flex items-center gap-6">
                        <span className="px-2 rounded font-bold uppercase">28,500 FCFA</span>
                    </p>
                </div>
                <div className="w-screen h-[3px] bg-gray-100 mt-4 relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>
                
                {/* Nouvelle section Livraison & Délais */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium mb-3 text-gray-600">Livraison & Délais par produit</h3>
                    <div className="flex flex-col gap-2">
                        {/* Informations de livraison statiques pour chaque type de produit */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-gray-500">
                                <span className="text-md">Simples:</span>
                                <span className="text-md">10500 FCFA/KG</span>
                                <span className="text-md ml-2">(10-14 jours)</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-gray-500">
                                <span className="text-md">Batteries:</span>
                                <span className="text-md">7500 FCFA/KG</span>
                                <span className="text-md ml-2">(14-21 jours)</span>
                            </div>
                            <i className="fi fi-br-angle-right w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-gray-500">
                                <span className="text-md">Liquides:</span>
                                <span className="text-md">10500 FCFA/KG</span>
                                <span className="text-md ml-2">(14-21 jours)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-2 text-xs text-black font-medium">
                    (Paiement du transport à la livraison)
                </p>
                <div className="w-screen h-[3px] bg-gray-100 mt-4 relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]"></div>

                {/* Ajout de la section Promesses de livraison */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium mb-3">Promesses de livraison</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <p className="text-sm text-gray-600">Respect des délais</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <p className="text-sm text-gray-600">Retour produit</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <p className="text-sm text-gray-600">
                                {isEchantillon ? "Qualité" : "2k de crédit de retard"}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <p className="text-sm text-gray-600">Remboursement</p>
                        </div>
                    </div>
                </div>
            </div>
      
        </>
    );
}

export default CommandeInfo;
