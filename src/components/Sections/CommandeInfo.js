import { FaCar } from "react-icons/fa6";
import {IoImage } from "react-icons/io5";

const CommandeInfo = () => {
    return (
        <div className="px-3 py-5 mt-1 bg-white">
            <h2 className="font-medium text-xl">
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
            <div className="my-7 flex justify-between items-center">
                <p><strong>Livraison</strong> <span className="text-[12px] font-medium text-gray-500">(Akanda)</span></p>
                <p>2,500 FCFA</p>
            </div>
            <div className="flex justify-between items-center flex-wrap">
                <p className="bg-yellow-300 px-2 rounded font-bold uppercase">TOTAL</p>
                <p className="flex items-center gap-6">
                    <span className="text-gray-400 text-[13px] line-through">30,500 FCFA</span>
                    <span className="bg-yellow-300 px-2 rounded font-bold uppercase">28,500 FCFA</span>
                </p>
            </div>
            <div className="flex items-center gap-3 my-6 p-3 bg-gray-300 border-2 rounded-xl border-dashed border-gray-600">
                <div>
                    <FaCar size={20}/>
                </div>
                <p className="font-medium">Tu sera livré entre<br/>11H30 et 12h30</p>
            </div>
        </div>
    );
}

export default CommandeInfo;
