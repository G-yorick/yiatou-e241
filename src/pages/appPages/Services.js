import { FaWhatsapp } from "react-icons/fa6";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function Services() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack title="Nom de la page"/>}>
        <div className="px-3 py-4">
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
        <div className="px-5 py-8 bg-green-100">
                <button className="flex items-center gap-3 py-2 rounded bg-green-600 w-full px-3 justify-center font-medium text-white">
                    <FaWhatsapp size={24}/>
                    <span>Service client 24/7</span>
                </button>
            </div>
    </PageLayout>
  )
}
const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg py-4">{children}</h2>
    );
}