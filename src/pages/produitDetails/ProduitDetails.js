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
import ImageCounter from '../../components/UI/ImageCounter';
import { useCart } from '../../context/CartContext';
import Toast from '../../components/UI/Toast';
import { motion } from 'framer-motion';
import anime from 'animejs';

const BottomButton = ({ toggleModal, product, onAddToCart }) => {
  const { addToCart } = useCart();  // Fonction pour ajouter au panier
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOrder = () => {
    try {
      toggleModal();
    } catch (error) {
      console.log('ToggleModal doit être une fonction');
    }
  };


    const handleAddToCart = () => {
      setIsAnimating(true); // Démarrer l'animation
      addToCart(product); // Ajouter le produit au panier
      onAddToCart(); // Appel à la fonction `onAddToCart` passée en prop
  
      // Récupérer le bouton "Ajouter au panier" par sa classe
      const button = document.querySelector('.add-to-cart-btn');
      if (!button) {
        console.error("Le bouton 'Ajouter au panier' est introuvable.");
        setIsAnimating(false);
        return;
      }
  
      // Récupérer les dimensions du bouton "Ajouter au panier"
      const buttonBounds = button.getBoundingClientRect();
  
      // Créer un élément animé
      const animatedObject = document.createElement('div');
      animatedObject.className = 'animated-object';
      document.body.appendChild(animatedObject);
  
      // Définir la position initiale de l'élément animé
      animatedObject.style.position = 'absolute';
      animatedObject.style.width = '20px';
      animatedObject.style.height = '20px';
      animatedObject.style.borderRadius = '50%';
      animatedObject.style.backgroundColor = '#ff5722';
      animatedObject.style.left = `${buttonBounds.left + buttonBounds.width / 2}px`;
      animatedObject.style.top = `${buttonBounds.top}px`;
      animatedObject.style.opacity = '1';
      animatedObject.style.zIndex = '1000';
      animatedObject.style.pointerEvents = 'none';
  
      // Animation avec JavaScript natif
      const animation = animatedObject.animate(
        [
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: 'translate(250px, -650px)', opacity: 0 }  // Déplacement modifié
        ],
        {
          duration: 1000,  // Durée de l'animation modifiée à 1000 ms (1 seconde)
          easing: 'ease-out',
          fill: 'forwards'  // Maintenir la fin de l'animation
        }
      );
  
      // Utiliser `animation.onfinish` pour supprimer l'élément uniquement à la fin de l'animation
      animation.onfinish = () => {
        document.body.removeChild(animatedObject); // Supprimer l'objet à la fin de l'animation
        setIsAnimating(false); // Terminer l'animation
      };
    };
  
    return (
      <BottomBarLayout>
        <div className="shadow-lg w-full mt-1 py-2 px-3 flex justify-between gap-2">
          <ButtonCta
            onClick={handleOrder}
            variant="green"
            className="flex-1 text-md font-bold"
          >
            Commander
          </ButtonCta>
          <div className="flex-1">
            <ButtonCta
              className="add-to-cart-btn w-full flex items-center justify-center text-md font-bold"
              onClick={handleAddToCart}
              disabled={isAnimating}
            >
              {isAnimating ? 'Ajouter au panier': 'Ajouter au panier'}
            </ButtonCta>
          </div>
        </div>
      </BottomBarLayout>
    );
  };
const ProduitDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  
  const [modalUserInfo,setModalUserInfo] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const product = produits.find((p) => p.id === parseFloat(id));
  const [showToast, setShowToast] = useState(false);

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
        !isCityModalOpen && (
          <BottomButton 
            toggleModal={toggleModal} 
            product={product} 
            onAddToCart={() => setShowToast(true)}
          />
        )
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
        <SelectProductColor productType="shoes" />
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
        <Toast 
          message="Produit ajouté au panier avec succès !"
          isVisible={showToast}
          onClose={() => setShowToast(false)}
        />
      </PageLayout>
    </div>
  );
}

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
          Ces informations permettent à Yiatou de traiter tes commandes et
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
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold transition-colors mt-4"
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
      <ImageCounter currentImage={currentImage} totalImages={product.image.length} />
    </div>
  );
}

export default ProduitDetails;
