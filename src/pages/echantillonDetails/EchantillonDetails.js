import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaUserLock, FaShoppingCart } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";
import CoutLivraison from "../../components/Sections/CoutLivraison";
import MoreProduct from "../../components/Sections/MoreProduct";
import SelectProductColor from "../../components/Sections/SelectProductColor";
import PageLayout from "../layout/PageLayout";
import BottomBarLayout from "../layout/BottomBarLayout";
import ButtonCta from "../../components/Buttons/ButtonCta";
import { fetchEchantillonDetails } from "../../utils/utils";
import SliderModel from "../../components/Sliders/SliderModel";
import DeliveryInfo from "../../components/Sections/DeliveryInfo";
import DeliveryPromises from "../../components/Sections/DeliveryPromises";
import DetailsEchantillon from "../../components/Sections/DetailsEchantillon";
import TopNavigationBar from '../../components/navigation/TopNavigationBar';
import ImageCounter from '../../components/UI/ImageCounter';

const EchantillonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [echantillon, setEchantillon] = useState(null);
  const [modalUserInfo, setModalUserInfo] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const loadEchantillonDetails = async () => {
      try {
        const details = await fetchEchantillonDetails(id);
        setEchantillon(details);
      } catch (error) {
        console.error("Erreur lors du chargement des détails de l'échantillon:", error);
      }
    };

    loadEchantillonDetails();
  }, [id]);

  useEffect(() => {
    const handleNavScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleNavScroll);
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, []);

  const toggleModal = () => {
    setModalUserInfo(!modalUserInfo);
  };

  const cities = [
    { name: 'Libreville', price: 2000 },
    { name: 'Akanda', price: 2500 },
    { name: 'Owendo', price: 2500 },
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCartClick();
    }
  };

  const handleStartClick = () => {
    console.log("L'utilisateur a cliqué sur Je me lance");
  };

  if (!echantillon) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

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
          <PersonnalInfo />
        </ModalModel>
        <HeaderEchantillonDetails echantillon={echantillon} />
        <DetailsEchantillon echantillon={echantillon}/>
        <SelectProductColor productType="sample" />
        <DeliveryInfo
          initialCity="Libreville"
          initialPrice={2000}
          currency="FCFA"
          unit="Kg"
          startDate={new Date()}
          endDate={new Date(new Date().setDate(new Date().getDate() + 14))}
          daysRange={14}
          cities={cities}
          onModalOpen={() => setIsCityModalOpen(true)}
          onModalClose={() => setIsCityModalOpen(false)}
        />
        <DeliveryPromises 
          isSample={true} 
          onStartClick={handleStartClick}
        />
        <CoutLivraison 
          numberOfPieces={20} 
          onStartClick={handleStartClick} 
          showStartButton={true} 
        />
        <MoreProduct />
      </PageLayout>
    </div>
  );
};

const BottomButton = ({ toggleModal }) => {
  const handleOrder = () => {
    try {
      toggleModal();
    } catch (error) {
      console.log('ToggleModal doit être une fonction');
    }
  };

  const handleAddToCart = () => {
    console.log('Echantillon ajouté au panier');
  };

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
          Ajouter au panier
        </ButtonCta>
      </div>
    </BottomBarLayout>
  );
};

const PersonnalInfo = () => {
  const navigate = useNavigate();

  const handleFocus = useCallback((e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/commandes');
  };

  return (
    <>
      <div className="mb-1">
        <p className="text-center text-sm text-gray-700 -translate-y-7">
          Ces informations permettent a Yiatou de traiter tes commandes et
          restent privées.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
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
          onFocus={handleFocus}
        />
        <input
          type="text"
          name="firstname"
          placeholder="Prenom"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <input
          type="tel"
          name="phone"
          placeholder="N de telephone appel"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <textarea
          name="adresse"
          placeholder="Adresse de livraison"
          className="border px-2 py-2 rounded w-full min-h-[100px] resize-none"
          onFocus={handleFocus}
        ></textarea>
        
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-4"
        >
          Enregistrer
        </button>
      </form>
      <Link
        to="#"
        className="flex justify-center items-center gap-2 py-4 text-gray-400"
      >
        <FaUserLock />
        <span className="underline">
          <Link to="/politique">
          Voir notre politique de confidentialité
          </Link>
        </span>
      </Link>
    </>
  );
};

const HeaderEchantillonDetails = ({ echantillon }) => {
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <div className="w-full relative">
      <SliderModel onSlideChange={(index) => setCurrentImage(index + 1)}>
        {echantillon.image.map((img, i) => {
          return (
            <div key={i} className='w-full h-[100vw] bg-white flex justify-center items-center overflow-hidden'>
              <img src={img} alt={echantillon.name} className="w-full h-full object-cover"/>
            </div>
          );
        })}
      </SliderModel>
      <ImageCounter currentImage={currentImage} totalImages={echantillon.image.length} />
    </div>
  );
};

export default EchantillonDetails;
