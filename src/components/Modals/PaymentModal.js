import React, { useState } from 'react';
import ModalModel from './ModalModel';
import ButtonCta from '../Buttons/ButtonCta';
import WhatsAppModal from './WhatsAppModal';
import { formatPrice } from '../../utils/utils';
import { FaWhatsapp } from 'react-icons/fa';

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  totalPrice,
  orderItems = [],
  userInfo = {},
  deliveryInfo = {},
  orderNumber = 'N/A'
}) => {
  const [selectedMethod, setSelectedMethod] = useState('Airtel');
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handlePayment = () => {
    if (!selectedMethod) return;

    if (selectedMethod === 'WhatsApp') {
      setShowWhatsAppModal(true);
    } else if (selectedMethod === 'Airtel') {
      // Logique pour Airtel Money
      console.log('Redirection vers Airtel Money...');
      onClose();
    }
  };

  const formatWhatsAppMessage = () => {
    const userName = userInfo?.name || 'Non spécifié';
    const userPhone = userInfo?.phone || 'Non spécifié';
    const userEmail = userInfo?.email || 'Non spécifié';
    const deliveryAddress = deliveryInfo?.address || 'Non spécifié';
    const deliveryCity = deliveryInfo?.city || 'Non spécifié';
    const deliveryFee = deliveryInfo?.deliveryFee || 0;

    const message = [
      `🛍️ *Nouvelle Commande #${orderNumber}*\n`,
      `\n👤 *Informations Client*`,
      `Nom: ${userName}`,
      `Téléphone: ${userPhone}`,
      `Email: ${userEmail}`,
      
      `\n📍 *Adresse de Livraison*`,
      `${deliveryAddress}`,
      `${deliveryCity}`,
      
      `\n📝 *Détails de la Commande*`,
      ...(orderItems || []).map(item => 
        `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`
      ),
      
      `\n💰 *Récapitulatif*`,
      `Sous-total: ${formatPrice(totalPrice)}`,
      `Frais de livraison: ${formatPrice(deliveryFee)}`,
      `Total: ${formatPrice(totalPrice + deliveryFee)}`,
      
      `\n💳 *Paiement*`,
      `Mode de commande souhaité: WhatsApp Business`
    ].join('\n');

    return message;
  };

  const handleWhatsAppConfirm = () => {
    const phoneNumber = '+24177305184';
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const getButtonStyles = () => {
    if (selectedMethod === 'WhatsApp') {
      return 'bg-[#64ca5d] flex items-center justify-center gap-2 text-white';
    }
    return 'bg-red-500 hover:bg-red-600 text-white';
  };

  const getButtonContent = () => {
    if (selectedMethod === 'WhatsApp') {
      return (
        <>
          <FaWhatsapp className="w-6 h-6" />
          <span>Continuer sur WhatsApp</span>
        </>
      );
    }
    return `Payer ${formatPrice(totalPrice)}`;
  };

  return (
    <>
      <ModalModel
        title="Paiement"
        active={isOpen}
        onClose={onClose}
      >
        {/* Payment methods */}
        <div className="grid grid-cols-2 gap-4 mb-4 -mt-4">
          <div 
            role="radio"
            aria-checked={selectedMethod === 'WhatsApp'}
            tabIndex={0}
            onClick={() => handlePaymentMethodSelect('WhatsApp')}
            onKeyDown={(e) => e.key === 'Enter' && handlePaymentMethodSelect('WhatsApp')}
            className={`
              h-28 w-full border-2 cursor-pointer transition-all duration-200
              ${selectedMethod === 'WhatsApp' 
                ? 'border-green-500 ring-2 ring-green-500' 
                : 'border-gray-200 hover:border-gray-300'
              }
              focus:outline-none focus:ring-2 focus:ring-green-500
            `}
          >
            <div className="w-full h-full p-2">
              <img 
                src="/img/pro/whatsapp.png" 
                alt="WhatsApp"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>

          <div 
            role="radio"
            aria-checked={selectedMethod === 'Airtel'}
            tabIndex={0}
            onClick={() => handlePaymentMethodSelect('Airtel')}
            onKeyDown={(e) => e.key === 'Enter' && handlePaymentMethodSelect('Airtel')}
            className={`
              h-28 w-full border-2 cursor-pointer transition-all duration-200
              ${selectedMethod === 'Airtel' 
                ? 'border-red-500 ring-2 ring-red-500' 
                : 'border-gray-200 hover:border-gray-300'
              }
              focus:outline-none focus:ring-2 focus:ring-red-500
            `}
          >
            <div className="w-full h-full p-2">
              <img 
                src="/img/pro/airtelmoney.png" 
                alt="Airtel Money"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-600 mb-6 text-center px-4">
          En continuant, vous reconnaissez avoir lu et approuvé notre politique de confidentialité.
        </p>

        {/* Payment button */}
        <div className={`
          w-full transition-all duration-300
          ${!selectedMethod ? 'opacity-50' : ''}
        `}>
          <button
            onClick={handlePayment}
            disabled={!selectedMethod}
            className={`
              w-full h-12 text-lg rounded-lg font-medium
              ${getButtonStyles()}
              disabled:cursor-not-allowed disabled:opacity-50
            `}
          >
            {getButtonContent()}
          </button>
        </div>
      </ModalModel>

      <WhatsAppModal
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
        onConfirm={handleWhatsAppConfirm}
      />
    </>
  );
};

export default PaymentModal; 