import { useState } from "react";
import BottomBar from "../../components/bottomBar/BottomBar";
import PageLayout from "../layout/PageLayout";
import ModalModel from "../../components/Modals/ModalModel";
import MoneyHeader from "../../components/Money/MoneyHeader";
import MoneyItem from "../../components/Money/MoneyItem";
import PaiementInformations from "../../components/Money/PaiementInformations";
import WithdrawInformation from "../../components/Money/WithdrawInformation";

const MonArgent = () => {
  const [moneyModal, setMoneyModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);

  const handleToggleModalMoney = () => {
    setMoneyModal(!moneyModal);
  };

  const handleToggleWithdrawModal = () => {
    setWithdrawModal(!withdrawModal);
  };

  return (
    <PageLayout bottomBar={<BottomBar />}>
      <ModalModel
        onClose={handleToggleModalMoney}
        active={moneyModal}
        title="Informations de paiement"
      >
        <PaiementInformations 
          setMoneyModal={setMoneyModal}
          setWithdrawModal={setWithdrawModal}
        />
      </ModalModel>
      <ModalModel
        onClose={handleToggleWithdrawModal}
        active={withdrawModal}
        title="Retrait de commission"
      >
        <WithdrawInformation />
      </ModalModel>
      <div className="flex flex-col min-h-screen">
        <MoneyHeader 
          onGetMoney={handleToggleModalMoney} 
          onWithdraw={handleToggleWithdrawModal} 
        />
        <div className="flex flex-col gap-5 px-3 pb-5">
          <p className="my-5 text-center font-medium text-gray-600">20/06/2024</p>
          <MoneyItem />
          <MoneyItem />
          <MoneyItem />
          <MoneyItem />
        </div>
      </div>
    </PageLayout>
  );
};

export default MonArgent;