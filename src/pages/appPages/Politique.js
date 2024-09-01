import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";
import ButtonWhatsapp from "../../components/Buttons/ButtonWhatsapp";

export default function Politique() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Politique de confidentialité"/>}>
        <div className="px-3 py-4 bg-white">
            <H2>Découvrir !</H2>
            <div className="flex flex-col gap-3 font-medium text-gray-500">
                <p>
                    Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.
                </p>
                <p>
                     Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif.
                </p>
            </div>
            <H2>Fonctionnalités</H2>
            <ul className="pl-5 font-medium [&>*]:list-decimal">
                <li>Step</li>
                <li>Step</li>
                <li>Step</li>
            </ul>
            <p className="py-3 font-medium text-gray-500">
                Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif.
            </p>
            <H2>Titre du contenu</H2>
            <div className="flex flex-col gap-3 font-medium text-gray-500">
                <p>
                    Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.
                </p>
                <p>
                     Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif.
                </p>
            </div>
        </div>
        <div className="px-3 py-8 bg-green-100">
                <ButtonWhatsapp>
                    <span>Service client 24/7</span>
                </ButtonWhatsapp>
            </div>
    </PageLayout>
  )
}
const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg py-4">{children}</h2>
    );
}