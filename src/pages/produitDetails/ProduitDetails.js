import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaUserLock, FaShoppingCart } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";
import CoutLivraison from "../../components/Sections/CoutLivraison";
import DetailsProduct from "../../components/Sections/DetailsProduct";
import MoreProduct from "../../components/Sections/MoreProduct";
import SelectProductColor from "../../components/Sections/SelectProductColor";
import PageLayout from "../layout/PageLayout";
import BottomBarLayout from "../layout/BottomBarLayout";
import ButtonCta from "../../components/Buttons/ButtonCta"; 
import { Products, produits } from "../../utils/utils";
import SliderModel from "../../components/Sliders/SliderModel";
import DeliveryInfo from "../../components/Sections/DeliveryInfo";
import Echantillons from "../../components/Sections/Echantillons";
import DeliveryPromises from "../../components/Sections/DeliveryPromises";
import TopNavigationBar from '../../components/navigation/TopNavigationBar';

const ProduitDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  
  const [modalUserInfo,setModalUserInfo] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const product = produits.find((p) => p.id === parseFloat(id));

  useEffect(() => {
    const handleNavScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleNavScroll);
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, []);

  const toggleModal = () =>{
    setModalUserInfo(!modalUserInfo);
  }
  const cities = [
    { name: 'Libreville', price: 2000 },
    { name: 'Akanda', price: 2500 },
    { name: 'Owendo', price: 2500 },
    // Ajoutez d'autres villes selon vos besoins
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCartClick();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen relative overflow-x-hidden">
      <PageLayout bottomBar={
        !isCityModalOpen && <BottomButton toggleModal={toggleModal} />
      }>
        <TopNavigationBar 
          isScrolled={isScrolled}
          onCartClick={handleCartClick}
          onKeyDown={handleKeyDown}
        />
        <ModalModel onClose={toggleModal} active={modalUserInfo} title="Information de livraison">
          <PersonnalInfo/>
        </ModalModel>
        <HeaderProductDetails product={product}/>
        <DetailsProduct product={product}/>
        <SelectProductColor/>
        <DeliveryInfo
          initialCity="Libreville"
          initialPrice={2000}
          currency="FCFA"
          unit="Kg"
          startDate={new Date()} // Utilisez la date actuelle ou une date spécifique
          endDate={new Date(new Date().setDate(new Date().getDate() + 14))} // Date de fin initiale (14 jours après la date de début)
          daysRange={14}
          cities={cities}
          onModalOpen={() => setIsCityModalOpen(true)}
          onModalClose={() => setIsCityModalOpen(false)}
        />
        <Echantillons/>
        <DeliveryPromises />
        <CoutLivraison/>
        <MoreProduct/>
      </PageLayout>
    </div>
  );
}

const BottomButton = ({toggleModal}) => {
  const handleOrder = () => {
    try {
      toggleModal();
    } catch (error) {
      console.log('ToggleModal doit être une fonction');
    }
  }

  const handleAddToCart = () => {
    // Implement add to cart functionality here
    console.log('Produit ajouté au panier');
  }

  return (
    <BottomBarLayout>
      <div className="shadow-lg w-full mt-1 py-2 px-3 flex justify-between gap-2">
        <ButtonCta 
          onClick={handleOrder}
          variant="green"
          className="flex-1 text-lg font-bold"
        >
          Commander
        </ButtonCta>
        <ButtonCta 
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center text-lg font-bold"
        >
          Ajoute au panier
        </ButtonCta>
      </div>
    </BottomBarLayout>
  );
}

const PersonnalInfo = () => {
  return (
    <>
      <div className="mb-1">
        <p className="text-center text-sm text-gray-700 -translate-y-7">
          Ces informations permettent a Yiatou de traiter tes commandes et
          restent privées.
        </p>
      </div>
      <form className="mt-3 flex flex-col gap-3">
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
          name="lastname"
          placeholder="Nom"
          className="border px-2 py-2 rounded w-full"
        />
        <input
          type="text"
          name="firstname"
          placeholder="Prenom"
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
          className="border px-2 py-2 rounded w-full min-h-[100px] resize-none"
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
  const [currentImage, setCurrentImage] = useState(1);
  
  return (
    <div className="w-full relative">
      <SliderModel onSlideChange={(index) => setCurrentImage(index + 1)}>
        {product.image.map((img,i) =>{
          return (
            <div key={i} className='w-full h-[100vw] bg-white flex justify-center items-center overflow-hidden'>
              <img src={img} alt={product.name} className="w-full h-full object-cover"/>
            </div>
          );
        })}
      </SliderModel>
      <ProductLevelIndicator currentImage={currentImage} totalImages={product.image.length} />
    </div>
  );
}

const ProductLevelIndicator = ({ currentImage, totalImages }) => {
  return (
    <div className="absolute bottom-4 right-5  z-50">
      <div className="bg-black/45 text-white rounded-full text-xs font-light px-2">
        {currentImage} / {totalImages}
      </div>
    </div>
  );
};

export default ProduitDetails;
