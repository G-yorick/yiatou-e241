import React from 'react';
import ModalModel from "./ModalModel";
import {IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5";
import {FaFacebookMessenger, FaInstagram} from "react-icons/fa";

export default function ShareContentModal({ isOpen, onClose }) {
  return (
    <ModalModel onClose={onClose} title="Partager" active={isOpen}>
      <ShareContent />
    </ModalModel>
  );
}

function ShareContent() {
  return (
    <div className="px-4 py-6">
      <p className="text-center my-3 text-sm">
        Tu gagneras <strong>+1,500 FCFA</strong> à chaque fois qu'un de tes amis achetera cet article avec ton lien.
      </p>
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
    </div>
  );
}
