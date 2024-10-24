import {IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5";
import {FaFacebookMessenger, FaInstagram} from "react-icons/fa";
import React, { useState } from 'react'
import ModalModel from "./ModalModel";
import ButtonCta from "../Buttons/ButtonCta";

export default function ShareProduct({toggleActiveShare, activeShare, product = null, isProduct = true}) {
  const toggleModal = () => {
    try {
      toggleActiveShare();
    } catch (error) {
      console.log("toggleActiveShare doit être une fonction");
    }
  }

  return (
    <ModalModel 
      onClose={toggleModal} 
      topContent={isProduct ? <ProductImage image={product?.image[0]}/> : null} 
      icon={<IconMoney/>} 
      title="Partage et gagne" 
      active={activeShare}
    >
      <ModalImageContent isProduct={isProduct}/>
    </ModalModel>
  )
}

function ProductImage({image = ""}) {
  return (
    <div className="w-full h-[50em] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[150px] h-[150px] bg-white rounded-lg overflow-hidden flex justify-center items-center mt-96">
        <img src={image} alt="product share" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}

function ModalImageContent({isProduct = true}) {
    const [showFAQ, setShowFAQ] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const toggleFAQ = () => {
        setShowFAQ(!showFAQ);
    };

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
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
          <div className="flex flex-col gap-1 justify-center items-center">
            <IoLogoWhatsapp color="#25D366" size={30}/>
            <p className="font-medium text-gray-700">WhatsApp</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <IoLogoFacebook color="#1877F2" size={30}/>
            <p className="font-medium text-gray-700">Facebook</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <FaFacebookMessenger color="#00B2FF" size={30}/>
            <p className="font-medium text-gray-700">Messenger</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <FaInstagram color="#E4405F" size={30}/>
            <p className="font-medium text-gray-700">Instagram</p>
          </div>
        </div>
        <div className="mt-10">
          <button className="text-lg rounded-md font-medium text-gray-700 w-full py-2 px-2 bg-gray-200 mb-3 border-2 border-dashed border-gray-400">
            Copier le lien
          </button>
        </div>
        <ButtonCta onClick={toggleLoginModal}>
          Connexion
        </ButtonCta>
        
        {showLoginModal && <LoginModal onClose={toggleLoginModal} />}
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

function LoginModal({ onClose }) {
    return (
        <ModalModel onClose={onClose} icon={<IconUser />} title="Connexion" active={true}>
            <div className="px-3 py-5">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <ButtonCta type="submit">
                        Se connecter
                    </ButtonCta>
                </form>
            </div>
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
