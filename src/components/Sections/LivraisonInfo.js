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
        <div className='bg-white px-4 py-5 flex flex-col gap-3 items-start translate-y-6 border-b-2 border-gray-100'>
            <h2 className='text-lg font-medium'>Informations de livraison</h2>
            <div className="grid grid-cols-[1fr_30px] w-full">
                <div className="flex flex-col gap-1">
                    <p className="font-medium text-gray-700">Monsieur Dave</p>
                    <p className="text-gray-500 font-medium">Beausejour - Libreville - 066612236</p>
                </div>
                <div className="flex justify-end items-center">
                    <Link to="/informations">
                    <i className="fi fi-br-angle-right w-6 h-6 "></i>
                        
                    </Link>
                </div>
            </div>
            <button onClick={openModalLivraison} className="font-bold text-sm underline text-blue-600">
                Changer l'adresse de livraison
            </button>
        </div>
    );
}

export default LivraisonInfo;

// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from 'react-router-dom';

// const LivraisonInfo = ({ onOpenLivraison, isOwner, deliveryInfo }) => {
//   // Early return si pas d'informations de livraison
//   if (!deliveryInfo) return null;

//   const handleOpenLivraison = () => {
//     try {
//       if (onOpenLivraison) {
//         onOpenLivraison();
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'ouverture du modal de livraison:", error);
//     }
//   };

//   return (
//     <div className="bg-white px-4 py-5 flex flex-col gap-3 items-start translate-y-6 border-b-2 border-gray-100">
//       <h2 className="text-lg font-medium">
//         {isOwner ? "Informations de livraison" : "Livré à"}
//       </h2>
      
//       <div className="grid grid-cols-[1fr_30px] w-full">
//         <div className="flex flex-col gap-1">
//           <p className="font-medium text-gray-700">{deliveryInfo.name}</p>
//           <p className="text-gray-500 font-medium">
//             {`${deliveryInfo.address} - ${deliveryInfo.city} - ${deliveryInfo.phone}`}
//           </p>
//         </div>
        
//         {isOwner && (
//           <div className="flex justify-end items-center">
//             <Link 
//               to="/informations"
//               className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//               aria-label="Modifier les informations de livraison"
//               tabIndex={0}
//             >
//               <IoIosArrowForward className="w-5 h-5 text-gray-600" />
//             </Link>
//           </div>
//         )}
//       </div>

//       {isOwner && (
//         <button
//           onClick={handleOpenLivraison}
//           className="font-bold text-sm underline text-blue-600 hover:text-blue-700 transition-colors"
//           aria-label="Changer l'adresse de livraison"
//           tabIndex={0}
//         >
//           Changer l'adresse de livraison
//         </button>
//       )}
//     </div>
//   );
// };

// export default LivraisonInfo;


