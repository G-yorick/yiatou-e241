import MoreProduct from "../../components/Sections/MoreProduct";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function About() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="A propos"/>}>
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
            <button className="border-2 w-full py-2 border-purple-500 rounded text-purple-500 font-medium">
                Clique ici pour en savoir plus
            </button>
        </div>
        <MoreProduct/>
    </PageLayout>
  )
}
const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg py-4">{children}</h2>
    );
}