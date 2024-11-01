import { FaCar } from "react-icons/fa6";
import { IoImage } from "react-icons/io5";
import { Check, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import InfoModal from '../Modals/InfoModal';

const CommandeInfo = ({ isEchantillon = false, onTotalChange }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentMessage, setCurrentMessage] = useState('');
    const [isInsuranceChecked, setIsInsuranceChecked] = useState(true);

    // Messages d'information
    const infoMessages = {
        assurance: "L'assurance couvre la perte, le vol et les dommages pendant le transport. Elle représente 2% de la valeur déclarée de vos produits.",
        fraisPaiement: "Les frais de paiement correspondent aux frais de transaction et de gestion de votre commande.",
    };

    const handleInfoClick = (messageKey) => {
        setCurrentMessage(infoMessages[messageKey]);
        setModalOpen(true);
    };

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

    // Calcul des montants
    const subtotal = orderProducts.reduce((sum, product) => sum + product.price, 0);
    const insuranceFee = 700; // Frais d'assurance fixe

    // Calcul des frais de paiement (3.5% du sous-total)
    const calculatePaymentFee = (amount) => {
        const feePercentage = 0.025; // 2.5%
        return Math.round(amount * feePercentage);
    };

    // Calcul dynamique des frais de paiement
    const paymentFee = calculatePaymentFee(subtotal);

    // Calcul du total en fonction de l'état de l'assurance
    const total = subtotal + paymentFee + (isInsuranceChecked ? insuranceFee : 0);

    // Effet pour notifier le parent du changement de total
    useEffect(() => {
        onTotalChange(total);
    }, [total, onTotalChange]);

    const handleInsuranceChange = (e) => {
        setIsInsuranceChecked(e.target.checked);
    };

    return (
        <>
            <div className="py-4 mt-3 bg-white pb-20">
                <div className="px-3 mt-3">
                    <h2 className="text-base font-medium">
                        Résumé de la commande
                    </h2>
                    <p className="uppercase font-medium my-2 text-sm">yt-123</p>
                    
                    {/* conteneur produit */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="bg-green-400 w-[45px] h-[45px] rounded flex justify-center items-center">
                                    <IoImage className="w-5 h-5"/>
                                </div>
                                <p className="text-sm">X3 clés USB 16 GB</p>
                            </div>
                            <p className="text-sm">6,500 FCFA</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-300 w-[45px] h-[45px] rounded flex justify-center items-center">
                                    <IoImage className="w-5 h-5"/>
                                </div>
                                <p className="text-sm">X3 clés USB 16 GB</p>
                            </div>
                            <p className="text-sm">6,500 FCFA</p>
                        </div>
                    </div>

                    <div className="my-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                id="assurance"
                                className="w-3.5 h-3.5 accent-yellow-400"
                                checked={isInsuranceChecked}
                                onChange={handleInsuranceChange}
                            />
                            <label htmlFor="assurance" className="flex items-center gap-1">
                                <span className="font-medium text-sm">Assurance</span>
                                <button
                                    onClick={() => handleInfoClick('assurance')}
                                    className="text-red-600"
                                    aria-label="Information sur l'assurance"
                                >
                                    <HelpCircle className="w-4 h-4" />
                                </button>
                            </label>
                        </div>
                        <p className="text-sm">{insuranceFee.toLocaleString()} FCFA</p>
                    </div>

                    <div className="mb-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Frais de Paiement (2.5%)</span>
                            <button
                                onClick={() => handleInfoClick('fraisPaiement')}
                                className="text-red-600"
                                aria-label="Information sur les frais de paiement"
                            >
                                <HelpCircle className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-sm">{paymentFee.toLocaleString()} FCFA</p>
                    </div>

                    <div className="w-full h-[1px] bg-gray-200 mb-3"></div>

                    <div className="flex justify-between items-center flex-wrap">
                        <p className="font-medium text-sm uppercase">TOTAL</p>
                        <p className="flex items-center gap-4">
                            <span className="font-medium text-sm uppercase">
                                {total.toLocaleString()} FCFA
                            </span>
                        </p>
                    </div>
                </div>

                <div className="w-screen h-[2px] bg-gray-100 mt-3"></div>
                
                <div className="px-3">
                    <div className="mt-3">
                        <h3 className="text-base font-medium mb-2 text-black">Livraison & Délais</h3> 
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between py-0.5">
                                <div className="flex flex-wrap items-center gap-x-1">
                                    <span className="text-sm text-gray-600">Simples:</span>
                                    <span className="text-sm font-medium text-gray-700">10500 FCFA/KG</span>
                                    <span className="text-sm text-gray-500">(10-14 jours)</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between py-0.5">
                                <div className="flex flex-wrap items-center gap-x-1">
                                    <span className="text-sm text-gray-600">Liquides:</span>
                                    <span className="text-sm font-medium text-gray-700">10500 FCFA/KG</span>
                                    <span className="text-sm text-gray-500">(14-21 jours)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2 text-xs text-black font-medium">
                        (Paiement du transport à la livraison)
                    </p>
                </div>

                <div className="w-screen h-[2px] bg-gray-100 mt-3"></div>

                <div className="px-3">
                    <div className="mt-3">
                        <h3 className="font-medium text-md mb-2 text-black">Promesses de livraison</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-green-500" />
                                <p className="text-sm text-gray-600">Respect des délais</p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-green-500" />
                                <p className="text-sm text-gray-600">Retour produit</p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-green-500" />
                                <p className="text-sm text-gray-600">
                                    {isEchantillon ? "Qualité" : "2k de crédit de retard"}
                                </p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-green-500" />
                                <p className="text-sm text-gray-600">Remboursement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InfoModal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                message={currentMessage}
            />
        </>
    );
}

export default CommandeInfo;
