import { FaShare } from "react-icons/fa";

const DetailsProduct = () => {
    return (
        <div className="px-3 py-5 bg-white">
            <div className="flex justify-between">
                <p className="flex gap-3 justify-end items-center">
                    <span className="text-lg font-bold uppercase">8,500 FCFA</span>
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
                <p className="font-medium text-gray-600">
                Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.
                </p>
                <button className="flex justify-center items-center gap-5 py-2 bg-red-200 text-gray-900 border-dashed border-2 border-red-500">
                <span className="font-medium">Partages pour gagner <strong>1,500 FCFA</strong></span>
                <FaShare/>
            </button>
            </div>
        
        </div>
    );
}

export default DetailsProduct;
