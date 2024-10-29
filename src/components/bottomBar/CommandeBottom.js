import { useState } from 'react';
import ButtonCta from '../Buttons/ButtonCta';
import PaymentModal from '../Modals/PaymentModal';

const CommandeBottom = ({ totalPrice = "28,500 FCFA" }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const handleContinue = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-200 border-t border-gray-200 px-4 py-4 grid grid-cols-2 gap-4">
        <div className="flex items-center justify-start">
          <span className="text-lg font-bold">{totalPrice}</span>
        </div>
        
        <ButtonCta 
          onClick={handleContinue}
          label="Continuer"
          ariaLabel="Continuer vers le paiement"
          className="w-full h-14"
        >
          Continuer
        </ButtonCta>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalPrice={totalPrice}
      />
    </>
  );
};

export default CommandeBottom;
