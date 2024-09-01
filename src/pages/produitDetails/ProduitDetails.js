import { FaUserLock } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ModalModel from "../../components/Modals/ModalModel";
import DestinationCommande from "../../components/Sections/DestinationCommande";
import DetailsProduct from "../../components/Sections/DetailsProduct";
import MoreProduct from "../../components/Sections/MoreProduct";
import SelectProductColor from "../../components/Sections/SelectProductColor";
import PageLayout from "../layout/PageLayout";
import BottomBarLayout from "../layout/BottomBarLayout";
import ButtonCta from "../../components/Buttons/ButtonCta";
import { Products, produits } from "../../utils/utils";
import SliderModel from "../../components/Sliders/SliderModel";

const ProduitDetails = () => {
  const {id} = useParams();
  
    const [modalUserInfo,setModalUserInfo] = useState(false);
    const product = produits.find((p) => p.id === parseFloat(id));
 
    const toggleModal = () =>{
        setModalUserInfo(!modalUserInfo);
    }
    return (
        <PageLayout bottomBar={<BottomButton toggleModal={toggleModal}/>}>
            <ModalModel onClose={toggleModal} active={modalUserInfo} title="Information de livraison">
                <PersonnalInfo/>
            </ModalModel>
            <HeaderProductDetails product={product}/>
            <DetailsProduct product={product}/>
            <SelectProductColor/>
            <DestinationCommande/>
            <MoreProduct/>
        </PageLayout>
    );
}



const BottomButton = ({toggleModal}) =>{
  const toggle = () =>{
    try {
      toggleModal();
    } catch (error) {
      console.log('ToggleModal doit etre une fonction');
      
    }
  }
  return (
    <BottomBarLayout>
      <div className="shadow-lg w-full mt-1 py-2 px-3">
      <ButtonCta onClick={toggle} >Je valide</ButtonCta>
    </div>
    </BottomBarLayout>
  );
}

const PersonnalInfo = () => {
  return (
    <>
      <div>
        <p className="text-center font-medium text-gray-600">
          Ces information permettent a Yiatou de traiter tes commandes et
          restent privees.
        </p>
      </div>
      <form className="mt-[70px] mb-2 flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="m" />
            <label htmlFor="m">Monsieur</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="f" />
            <label htmlFor="f">Madame</label>
          </div>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Prenoms"
          className="border px-2 py-2 rounded w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="N de telephone appel"
          className="border px-2 py-2 rounded w-full"
        />
        <textarea
          name="adresse"
          placeholder="Adresse de livraison"
          className="border px-2 py-2 rounded w-full min-h-[150px] resize-none"
        ></textarea>
        {/* <button className="w-full py-2 px-3 rounded bg-blue-800 text-white font-medium">
          Enregistrer
        </button> */}
        <ButtonCta type="button">
        <Link to="/commandes">
          Enregistrer
        </Link>
        </ButtonCta>
      </form>
      <Link
        to="#"
        className="flex justify-center items-center gap-2 py-4 text-gray-400"
      >
        <FaUserLock />
        <span className="underline">
          Voir notre politique de confidentialité
        </span>
      </Link>
    </>
  );
};
/**
 * 
 * @param {{product : Products}} param0 
 * @returns 
 */
const HeaderProductDetails = ({product}) => {
    
  return (
    <div className="w-full relative">
      <div className="absolute left-[8px] top-[8px] z-[100]">
              <Link to="/" className="bg-white border inline-block px-2 py-2 rounded-full">
                  <i className="fi fi-br-angle-left flex text-[13px]"></i>
              </Link>
          </div>
      <SliderModel dots={true}>
          {product.image.map((img,i) =>{
            return (
              <div key={i} className='w-full h-[100vw] bg-white flex justify-center items-center'>
                <img src={img} alt={product.name} className="w-full h-full object-cover"/>

              </div>
            );
          })}
      </SliderModel>
    </div>
  );
}

export default ProduitDetails;
