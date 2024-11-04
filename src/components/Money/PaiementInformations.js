import { Link } from "react-router-dom";

const PaiementInformations = ({ setMoneyModal, setWithdrawModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setMoneyModal(false);
    setWithdrawModal(true);
  };

  return (
    <>
      <p className="text-sm text-gray-700 px-3 text-center -translate-y-7">
        Ces informations permettent à Yiatou de traiter tes paiements et de
        verifier que tu n'est pas mineur.
        <br />
        Ces informations resteront privées.
      </p>
      <form onSubmit={handleSubmit} className="mt-[10px] mb-2 flex flex-col gap-3">
        {/* ... reste du code du formulaire ... */}
      </form>
    </>
  );
};

export default PaiementInformations; 