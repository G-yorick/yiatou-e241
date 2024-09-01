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
    const [modalLivraison,setModalLivraison] = useState(false);
    const [modalCreateLivraison,setModalCreateLivraison] = useState(false);

    const onToggleModalLivraison = () =>{
        setModalLivraison(!modalLivraison);
    }
    const onToggleModalCreateLivraison = () =>{
        setModalCreateLivraison(!modalCreateLivraison);
    }
 
    return (
        <PageLayout bottomBar={<CommandeBottom/>} topBar={<TopBarWithButtonBack link='/produit-details' title="Commandes"/>}>
            <ModalModel onClose={onToggleModalLivraison} active={modalLivraison} title='Ou doit-on livrer ?'>
                <AddLivraison onCreateLivraison={onToggleModalCreateLivraison}/>
            </ModalModel>
            <ModalModel onClose={onToggleModalCreateLivraison} active={modalCreateLivraison} title='Nouvelle Adresse'>
                <CreateLivraison/>
            </ModalModel>
            <LivraisonInfo onOpenLivraison={onToggleModalLivraison}/>
            <CommandeInfo/>
        </PageLayout>
    );
}

export default Commandes;
