import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ModalModel from './ModalModel';
import ButtonCta from '../Buttons/ButtonCta';

const WhatsAppModal = ({ isOpen, onClose, onConfirm }) => {
  const handleConfirm = () => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm();
    }
    onClose();
  };

  return (
    <ModalModel
      title="Conversation"
      active={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col items-center px-4 mb-4">
        <div className="w-16 h-16 text-green-500 mb-6">
          <FaWhatsapp className="w-full h-full" />
        </div>
        
        <p className="text-center text-gray-700 mb-8">
          Vous êtes sur le point d'engager une conversation sur WhatsApp pour terminer votre commande.
        </p>

        <ButtonCta
          onClick={handleConfirm}
          label="Confirmer"
          ariaLabel="Confirmer et ouvrir WhatsApp"
          className="w-full h-14 text-lg"
        >
          Confirmer
        </ButtonCta>
      </div>
    </ModalModel>
  );
};

export default WhatsAppModal; 