import FormButton from "../Buttons/FormButton";

const CreateLivraison = () => {
    return (
        <div className="w-full">
            <textarea className="resize-none border-2 w-full min-h-[140px] p-3 rounded mt-5 mb-1" placeholder="Nouvelle Adresse de livraison"></textarea>
            <p className="text-[13px] font-medium text-gray-600 mb-4">La commande en cours sera livré a cette adresse.</p>
            <FormButton>Ajouter</FormButton>
        </div>
    );
}

export default CreateLivraison;
