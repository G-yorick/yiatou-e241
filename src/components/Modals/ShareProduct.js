import {IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5";
import {FaFacebookMessenger, FaInstagram} from "react-icons/fa";
import React, { useState } from 'react'
import ModalModel from "./ModalModel";
import ButtonCta from "../Buttons/ButtonCta";
import Login from "../../pages/auth/Login";

export default function ShareProduct({toggleActiveShare, activeShare, product = null, isProduct = true}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleModal = () => {
    try {
      toggleActiveShare();
    } catch (error) {
      console.log("toggleActiveShare doit être une fonction");
    }
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  }

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <ModalModel 
      onClose={toggleModal} 
      topContent={isProduct ? <ProductImage image={product?.image[0]}/> : null} 
      icon={<IconMoney/>} 
      title="Partage et gagne" 
      active={activeShare}
    >
      <ModalImageContent isProduct={isProduct} isLoggedIn={isLoggedIn} toggleLoginModal={toggleLoginModal} />
      {showLoginModal && <LoginModal onClose={toggleLoginModal} onLogin={handleLogin} />}
    </ModalModel>
  )
}

function ProductImage({image = ""}) { 
  return (
    <div className="w-full h-[50em] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[150px] h-[150px] bg-white rounded-lg overflow-hidden flex justify-center items-center mt-[600px]">
        <img src={image} alt="product share" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}

function ModalImageContent({isProduct = true, isLoggedIn, toggleLoginModal}) {
    const [showFAQ, setShowFAQ] = useState(false);

    const toggleFAQ = () => {
        setShowFAQ(!showFAQ);
    };

    const handleShare = (platform) => {
        if (!isLoggedIn) {
            alert("Tu ne gagneras pas 1,000 FCFA de commission, car tu n'es pas connecté");
        } else {
            // Implement sharing logic here
            console.log(`Sharing on ${platform}`);
        }
    };

    const handleCopyLink = () => {
        if (!isLoggedIn) {
            alert("Tu ne gagneras pas 1,000 FCFA de commission, car tu n'es pas connecté");
        } else {
            // Implement copy link logic here
            console.log("Link copied");
        }
    };

    return (
      <div className="px-3 py-5">
        {!isProduct ? 
        <p>Tu gagneras encore</p> : 
        <p className="text-center my-3 text-sm relative">
          Tu gagneras <strong>+1,500 FCFA</strong> à chaque fois qu'un de tes amis achetera cet article avec ton lien.
          <span className="inline-block align-middle ml-1 bg-white rounded-full p-1 cursor-pointer" onClick={toggleFAQ}>
            <i className="fi fi-rr-info text-red-500 text-sm"></i>
          </span>
        </p>
        }
        
        <div className="flex gap-3 justify-between mt-10">
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('WhatsApp')}>
            <IoLogoWhatsapp color="#25D366" size={30}/>
            <p className="text-sm text-gray-500">WhatsApp</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('Facebook')}>
            <IoLogoFacebook color="#1877F2" size={30}/>
            <p className="text-sm text-gray-500">Facebook</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('Messenger')}>
            <FaFacebookMessenger color="#00B2FF" size={30}/>
            <p className="text-sm text-gray-500">Messenger</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('Instagram')}>
            <FaInstagram color="#E4405F" size={30}/>
            <p className="text-sm text-gray-500">Instagram</p>
          </div>
        </div>
        <div className="mt-10">
          <button 
            className="text-lg rounded-md font-medium text-gray-700 w-full py-2 px-2 bg-gray-200 mb-3 border-2 border-dashed border-gray-400"
            onClick={handleCopyLink}
          >
            Copier le lien
          </button>
        </div>
        {!isLoggedIn && (
          <ButtonCta onClick={toggleLoginModal}>
            Connexion
          </ButtonCta>
        )}
      </div>
    );
}

function IconMoney() {
    return (
      <span className="px-2 py-2 text-white rounded-full bg-green-600">
        <i className="fi fi-sr-sack-dollar flex"></i>
      </span>
    )
}

function LoginModal({ onClose, onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement login logic here
        onLogin();
    };

    return (
        <ModalModel onClose={onClose} icon={<IconUser />} title="Connexion" active={true}>
            <Login/>
        </ModalModel>
    );
}

function IconUser() {
    return (
        <span className="px-2 py-2 text-white rounded-full bg-blue-600">
            <i className="fi fi-sr-user flex"></i>
        </span>
    )
}
