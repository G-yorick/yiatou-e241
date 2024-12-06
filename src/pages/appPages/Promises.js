import MoreProduct from "../../components/Sections/MoreProduct";
import TopBarWithButtonBackLikeTemu from "../../components/topBar/TopBarWithButtonBackLikeTemu";
import PageLayoutLikeTemu from "../layout/PageLayoutLikeTemu";

export default function Promises() {
  return (
    <PageLayoutLikeTemu 
      topBar={
        <TopBarWithButtonBackLikeTemu 
          link="/" 
          className="bg-white" 
          title="Nos engagements Yiatou"
        />
      }
    >
      <div className="px-3 bg-white">
        <section className="grid grid-cols-1 md:grid-cols-1 gap-10 py-10 mt-10">
          {/* Première section */}
          <div className="space-y-3 transition-shadow duration-300 shadow shadow-gray-500/40 hover:border hover:bg-gray-100 hover:shadow-lg ease-in-out p-4 rounded-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex justify-center items-center">
                <i className="fi fi-rr-badge-check text-2xl text-[#418920]"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Des produits authentiques
              </h3>
            </div>
            <p className="text-sm text-[#333333] leading-relaxed">
              Nous nous engageons à vous proposer uniquement des produits authentiques, 
              soigneusement sélectionnés auprès de nos partenaires de confiance.
            </p>
          </div>

          {/* Deuxième section */}
          <div className="space-y-3 transition-shadow duration-300 shadow shadow-gray-500/40 hover:border hover:bg-gray-100 hover:shadow-lg ease-in-out p-4 rounded-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex justify-center items-center">
                <i className="fi fi-rr-diamond text-2xl text-[#418920]"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Une qualité garantie
              </h3>
            </div>
            <p className="text-sm text-[#333333] leading-relaxed">
              Chaque produit est vérifié et testé pour garantir une qualité optimale 
              et une satisfaction totale de nos clients.
            </p>
          </div>
        </section>
</div>

    </PageLayoutLikeTemu>
  )
}

// const H2 = ({children}) => {
//   return (
//     <h2 className="font-medium text-lg py-4">{children}</h2>
//   );
// }
