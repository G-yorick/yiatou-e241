import React from 'react';
import ModalModel from "./ModalModel";
import {IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5";

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

          <i class="fi fi-brands-tik-tok text-[#1877F2] text-3xl"></i>
          <p className="font-medium text-gray-700">Facebook</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">

          <i class="fi fi-brands-facebook-messenger text-[#00B2FF] text-3xl "></i>
          <p className="font-medium text-gray-700">Messenger</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          
          <i class="fi fi-brands-facebook text-[#E4405F] text-3xl "></i>
          <p className="font-medium text-gray-700">Instagram</p>
        </div>
      </div>
      <div className="mt-10">
        <button className="text-lg rounded-md font-medium text-gray-700 w-full py-2 px-2 bg-gray-200 mb-3 border-2 border-dashed border-[#cccccc]">
          Copier le lien
        </button>
      </div>
    </div>
  );
}
