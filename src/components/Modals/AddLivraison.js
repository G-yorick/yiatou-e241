import { LuPenSquare } from "react-icons/lu";
import ButtonCta from "../Buttons/ButtonCta";

const AddLivraison = ({onCreateLivraison}) => {
    const handleCreate = () => {
        try {
            if(onCreateLivraison) {
                onCreateLivraison()
            }
        } catch (error) {
            console.log("onCreateLivraison n'est pas une fonction.");
        }
    }

    return (
        <div className="relative px-3 -translate-y-4">
            <div>
                <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="adresses" id="adresse-1" />
                            <label htmlFor="adresse-1" className="label font-bold">
                                Adresse 1
                            </label>
                        </div>
                        <button>
                            <LuPenSquare />
                        </button>
                    </div>
                    <p className="font-medium text-gray-700">
                        Livraison a Mr. Dave Anguilet Walker, a l'adresse Beausejour en face de chez Mamboundou.
                    </p>
                </div>

                <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="adresses" id="adresse-2" />
                            <label htmlFor="adresse-2" className="label font-bold">
                                Adresse 2
                            </label>
                        </div>
                        <button>
                            <LuPenSquare />
                        </button>
                    </div>
                    <p className="font-medium text-gray-700">
                        Livraison a Mr. Dave Anguilet Walker, a l'adresse Beausejour en face de chez Mamboundou.
                    </p>
                </div>
            </div>

            <button 
                onClick={handleCreate}
                className="border-2 w-full py-1.5 rounded-full mb-2 mt-3 text-gray-600 font-medium"
            >
                Ajouter une adresse de livraison
            </button>
            <ButtonCta>
                Continuer
            </ButtonCta>
        </div>
    );
};

export default AddLivraison;
