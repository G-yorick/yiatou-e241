import { LuPenSquare } from "react-icons/lu";

const AddLivraison = ({onCreateLivraison}) => {
    const onCreate = () =>{
        try {
            if(onCreateLivraison){
                onCreateLivraison()
            }
        } catch (error) {
            console.log("onCreateLivraison n'est pas une fonction.");
        }
    }
  return (
    <div className="relative">
        {/* Input conteneur */}
      <div>
        {/* input */}
        <div className="my-3">
          <div className="flex justify-between items-center">
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
            Livraison a Mr. Dave Anguilet Walker, a l'adresse Beausejour en face
            de chez Mamboundou.
          </p>
        </div>
        {/* end input */}
        {/* input */}
        <div className="my-3">
          <div className="flex justify-between items-center">
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
            Livraison a Mr. Dave Anguilet Walker, a l'adresse Beausejour en face
            de chez Mamboundou.
          </p>
        </div>
        {/* end input */}
      </div>
      {/* fin input conteneur */}
      <button onClick={onCreate} className="border-2 w-full py-2 rounded text-gray-600 font-medium">
        Ajouter une adresse de livraison
      </button>
      <button className="w-full py-2 rounded text-white bg-blue-800 mt-20">
        Continuer
      </button>
    </div>
  );
};

export default AddLivraison;
