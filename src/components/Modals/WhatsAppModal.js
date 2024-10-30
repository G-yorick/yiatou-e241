import React from 'react';
import ModalModel from './ModalModel';
import ButtonCta from '../Buttons/ButtonCta';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppModal = ({ isOpen, onClose, onConfirm }) => {
  const handleConfirm = () => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm();
    }
    onClose();
  };

  return (
    <ModalModel
      title="Conversation WhatsApp"
      active={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col items-center px-4 min-h-[100px]">
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="w-32 h-32 mb-2 -translate-y-7">
            <img 
              src="/img/pro/whatsappbusiness.png"
              alt="WhatsApp Business"
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="text-center text-sm text-gray-600 mb-3 max-w-md -translate-y-4">
            Vous serez redirigé vers WhatsApp pour finaliser votre commande avec notre service client. Un récapitulatif de votre commande sera automatiquement généré.
          </p>
        </div>

        <div className="w-full">
          <ButtonCta
            onClick={handleConfirm}
            label="Continuer sur WhatsApp"
            ariaLabel="Confirmer et ouvrir WhatsApp"
            className="w-full h-12 text-lg bg-[#64ca5d] flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Continuer sur WhatsApp</span>
          </ButtonCta>
        </div>
      </div>
    </ModalModel>
  );
};

export default WhatsAppModal; 