import { useState } from 'react';

const MoneyHeader = ({ onGetMoney, onWithdraw }) => {
  const handleClick = () => {
    try {
      onGetMoney();
    } catch (error) {
      console.log("onGetMoney est une fonction");
    }
  };

  return (
    <header className="sticky top-0 z-10 w-full h-[160px] bg-green-200 rounded-b-[30px] px-3 flex flex-col justify-center items-start">
      <p className="font-medium -translate-y-2">Solde actuel</p>
      <p className="flex gap-3 items-end">
        <span className="font-bold text-3xl">6,500</span>
        <span className="font-medium">FCFA</span>
      </p>
      <button
        onClick={handleClick}
        className="bg-gray-300 hover:bg-gray-400 transition-colors my-3 font-medium px-5 py-2 rounded-full"
        aria-label="Retirer l'argent"
      >
        Retirer
      </button>
    </header>
  );
};

export default MoneyHeader; 