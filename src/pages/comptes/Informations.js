import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function Informations() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Mes informaions"/>}>
        <div className="px-3 py-5 flex flex-col gap-8 bg-white">
            <div className="border-b-2 border-gray-300 pb-5">
                <H2>Informations personnelles</H2>
                <Section>
                    <Item>
                        Monsieur
                    </Item>
                    <Item title="Prenom">
                        Dave
                    </Item>
                    <Item title="Noms">
                        Anguilet
                    </Item>
                    <Item title="Adresse email">
                        abcdef@gmail.com
                    </Item>
                    <Item title="Numero de telephone">
                        066038083
                    </Item>
                    <Item title="Statut">
                        Employé
                    </Item>
                    <Item title="Date de naissance">
                        18/02/1998
                    </Item>
                </Section>
            </div>
            <div className="border-b-2 border-gray-300 pb-5">
                <H2>Adresses de livraison</H2>
                <Section>
                    <Item title="Villes">
                        Libreville
                    </Item>
                    <Item title="Adresse de livraison 1">
                        Beausejour,En face de chez...
                    </Item>
                    <Item title="Adresse de livraison occasionnelle">
                        Beausejour,En face de chez...
                    </Item>
                </Section>
            </div>
            <div className="border-b-2 border-gray-300 pb-5">
                <H2>Coodonnées de paiement</H2>
                <Section>
                    <Item title="N Airtel Money">
                        074567765
                    </Item>
                    <Item title="Nom complet relié au compte">
                        Anguilet prenom
                    </Item>
                </Section>
            </div>
            <div className="pb-5">
                <H2>Mon mot de passe</H2>
                <Section>
                    <Item title="Mot de passe actuelle">
                        *****************
                    </Item>
                </Section>
            </div>
        </div>
    </PageLayout>
  )
}
const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg">{children}</h2>
    );
}
const Item = ({title = "Civilité",children}) => {
    return (
        <div>
            <p className="font-medium text-gray-600 text-[13px]">{title}</p>
            <p className="font-medium">{children}</p>
        </div>
    );
}
const Section = ({children}) => {
    return (
        <div className="grid grid-cols-[1fr_30px] py-3">
            <div className="flex flex-col gap-3">
            {children}
            </div>
            <div className="flex justify-center items-end flex-col">
                <button className="text-gray-600">
                <i class="fi fi-rr-edit"></i>
                </button>
            </div>
        </div>
    );
}