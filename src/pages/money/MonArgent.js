import { FaImage } from "react-icons/fa";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";
import { Link } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";
import { useState } from "react";
import ButtonCta from "../../components/Buttons/ButtonCta";

export default function MonArgent() {
  const [moneyModal, setMoneyModal] = useState(false);
  const toggleModalMoney = () => setMoneyModal(!moneyModal);
  
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/" title="Mon argent" />}>
      <ModalModel
        onClose={toggleModalMoney}
        active={moneyModal}
        title="Informations de paiement"
      >
        <PaiementInformations />
      </ModalModel>
      <Header onGetMoney={toggleModalMoney} />
      <p className="my-5 text-center font-medium text-gray-600">20/06/2024</p>
      <div className="flex flex-col gap-5 px-3">
        <MoneyItem />
        <MoneyItem />
        <MoneyItem />
        <MoneyItem />
      </div>
    </PageLayout>
  );
}

const Header = ({ onGetMoney }) => {
  const handleClick = () => {
    try {
      onGetMoney();
    } catch (error) {
      console.log("onGetMoney est une fonction");
    }
  };

  return (
    <header className="w-full h-[200px] bg-green-200 rounded-b-[30px] px-5 py-2 flex flex-col justify-center items-start mt-10">
      <p className="font-medium">Solde actuel</p>
      <p className="flex gap-3 items-end">
        <span className="font-bold text-3xl">6,500</span>
        <span className="font-medium">FCFA</span>
      </p>
      <button onClick={handleClick} className="bg-gray-300 my-3 font-medium px-5 py-2 rounded-full">
        Retirer
      </button>
    </header>
  );
};

const MoneyItem = () => (
  <div className="bg-white rounded px-3 py-3">
    <div className="flex gap-3 justify-between items-center mb-3">
      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] bg-orange-200 rounded-full flex justify-center items-center">
          <FaImage />
        </div>
        <p className="font-bold">Retrait</p>
      </div>
      <p className="font-medium text-end text-gray-500">10h36</p>
    </div>
    <div className="flex flex-col gap-3">
      <p className="text-gray-600">
        Pour les messages de retrait, tu reproduits ce qui est là et tu
        changes juste les valeurs des retraits pour faire réel. Les liens de
        réclamation mènent sur WhatsApp avec le Message "Bonjour ! Je n'ai
        toujours reçu mon retrait de 5,000 FCFA."
      </p>
    </div>
  </div>
);

const PaiementInformations = () => (
  <>
    <p className="text-center text-sm text-gray-500 mb-6 -translate-y-5">
      Ces informations permettent a Yiatou de traiter tes paiements et de
      verifier que tu n'es pas mineur.<br />
      Ses informations resteront privees.
    </p>
    <form className="flex flex-col gap-2">
      <div className="flex gap-4 items-center mb-2">
        <div className="flex gap-2 items-center">
          <input type="radio" name="sexe" id="m" />
          <label htmlFor="m">Monsieur</label>
        </div>
        <div className="flex gap-2 items-center">
          <input type="radio" name="sexe" id="f" />
          <label htmlFor="f">Madame</label>
        </div>
      </div>
      <input type="text" name="name" placeholder="Noms" className="border px-2 py-1.5 rounded w-full outline-red-500" />
      <input type="text" name="last" placeholder="Prenoms" className="border px-2 py-1.5 rounded w-full outline-red-500" />
      <input type="date" name="anniversaire" className="border px-2 py-1.5 rounded w-full outline-red-500" placeholder="Date de naissance" />
      <input type="tel" name="phone" placeholder="N de telephone appel" className="border px-2 py-1.5 rounded w-full outline-red-500" />
      <input type="text" name="names" placeholder="Nom complet relie au compte" className="border px-2 py-1.5 rounded w-full outline-red-500" />
      <select className="border px-2 py-1.5 rounded w-full outline-red-500">
        <option>Quelle est ton statut ?</option>
        <option value="Eleve">Eleve</option>
        <option value="Eleve">Employe</option>
        <option value="Eleve">J'ai une bricole</option>
      </select>
      <Link to="#" className="text-[13px] text-gray-600 flex gap-2 items-center mt-1">
        <span className="text-[16px]"><i className="fi fi-rr-user-lock"></i></span>
        <span className="underline">Voir notre politique de confidentialite</span>
      </Link>
      <ButtonCta type="button" className="mt-2">Enregistrer</ButtonCta>
    </form>
  </>
);
