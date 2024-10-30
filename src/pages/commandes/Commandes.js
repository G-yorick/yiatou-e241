import { useState } from 'react';
import CommandeBottom from '../../components/bottomBar/CommandeBottom';
import ModalModel from '../../components/Modals/ModalModel';
import CommandeInfo from '../../components/Sections/CommandeInfo';
import LivraisonInfo from '../../components/Sections/LivraisonInfo';
import TopBarWithButtonBack from '../../components/topBar/TopBarWithButtonBack';
import PageLayout from '../layout/PageLayout';
import AddLivraison from '../../components/Modals/AddLivraison';
import CreateLivraison from '../../components/Modals/CreateLivraison';

const Commandes = () => {
    const [modalLivraison, setModalLivraison] = useState(false);
    const [modalCreateLivraison, setModalCreateLivraison] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleTotalChange = (newTotal) => {
        setTotalAmount(newTotal);
    };

    const onToggleModalLivraison = () => {
        setModalLivraison(!modalLivraison);
    }
    const onToggleModalCreateLivraison = () => {
        setModalCreateLivraison(!modalCreateLivraison);
    }
 
    return (
        <PageLayout 
            bottomBar={<CommandeBottom totalAmount={totalAmount} />} 
            topBar={<TopBarWithButtonBack link='/cart' title="Commande"/>}
        >
            <ModalModel onClose={onToggleModalLivraison} active={modalLivraison} title='Ou doit-on livrer ?'>
                <AddLivraison onCreateLivraison={onToggleModalCreateLivraison}/>
            </ModalModel>
            <ModalModel onClose={onToggleModalCreateLivraison} active={modalCreateLivraison} title='Nouvelle Adresse'>
                <CreateLivraison/>
            </ModalModel>
            <LivraisonInfo onOpenLivraison={onToggleModalLivraison}/>
            <CommandeInfo 
                onTotalChange={handleTotalChange}
                isEchantillon={false}
            />
        </PageLayout>
    );
}

export default Commandes;
