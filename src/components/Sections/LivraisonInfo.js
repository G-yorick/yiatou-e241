import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const LivraisonInfo = ({onOpenLivraison}) => {
    const openModalLivraison = () =>{
        try {
            if(onOpenLivraison){
                onOpenLivraison()
            }
        } catch (error) {
            console.log("onClose doit etre une fonction.");
        }
    }
    return (
        <div className='bg-white px-3 py-5 flex flex-col gap-3 items-start'>
            <h2 className='text-lg font-medium'>Informations de livraison</h2>
            <div className="grid grid-cols-[1fr_30px] w-full">
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-gray-700">Monsieur Dave</p>
                    <p className="text-gray-500 font-medium">Beausejour - Libreville - 066612236</p>
                </div>
                <div className="flex justify-end items-center">
                    <Link to="/informations">
                        <IoIosArrowForward size={22}/>
                    </Link>
                </div>
            </div>
            <button onClick={openModalLivraison} className="bg-gray-100 px-4 py-2 rounded-xl font-medium">
                Changer l'adresse de livraison
            </button>
        </div>
    );
}

export default LivraisonInfo;
