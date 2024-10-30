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
        <SelectProductColor />
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

const HeaderEchantillonDetails = ({ echantillon }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const [showAllImages, setShowAllImages] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!headerRef.current) return;
    
    const rect = headerRef.current.getBoundingClientRect();
    const scrollPosition = -rect.top;
    const imageHeight = window.innerWidth;
    const newImageIndex = Math.floor(scrollPosition / imageHeight) + 1;

    const imagesArray = Array.isArray(echantillon.image) ? echantillon.image : [echantillon.image];

    if (newImageIndex !== currentImage && newImageIndex <= imagesArray.length) {
      setCurrentImage(newImageIndex);
    }
  }, [currentImage, echantillon.image]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const imagesArray = Array.isArray(echantillon.image) ? echantillon.image : [echantillon.image];

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages);
  };

  if (showAllImages) {
    return (
      <div className="fixed inset-0 bg-black z-[200] overflow-y-auto">
        <button 
          onClick={toggleShowAllImages}
          className="absolute top-4 right-4 text-white z-10 bg-gray-800 rounded-full p-2"
          aria-label="Fermer la galerie"
        >
          <i className="fi fi-br-cross text-lg"></i>
        </button>
        <div className="flex flex-col gap-[2px] pt-12 pb-20">
          {imagesArray.map((img, i) => (
            <div key={i} className="w-full">
              <img 
                src={img} 
                alt={`${echantillon.name} vue ${i + 1}`} 
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={headerRef} className="w-full relative">
      <SliderModel onSlideChange={(index) => setCurrentImage(index + 1)}>
        {imagesArray.map((img, i) => (
          <div 
            key={i} 
            className="w-full h-[100vw] bg-white flex justify-center items-center"
            onClick={toggleShowAllImages}
            role="button"
            tabIndex={0}
          >
            <img 
              src={img} 
              alt={`${echantillon.name} vue ${i + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </SliderModel>
      <ProductLevelIndicator 
        currentImage={currentImage} 
        totalImages={imagesArray.length} 
        onClick={toggleShowAllImages}
      />
    </div>
  );
};

const ProductLevelIndicator = ({ currentImage, totalImages, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 right-5 bg-white rounded-full px-3 py-1 z-50"
      aria-label="Voir toutes les images"
    >
      <div className="text-sm font-semibold">
        {currentImage} / {totalImages}
      </div>
    </button>
  );
};

export default EchantillonDetails;
