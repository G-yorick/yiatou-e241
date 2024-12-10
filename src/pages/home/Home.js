import BottomBar from "../../components/bottomBar/BottomBar";
import HomeSlider from "../../components/Sliders/HomeSlider";
import TopBar from "../../components/topBar/TopBar";
import { FaWhatsapp } from "react-icons/fa6";
import PageLayout from "../layout/PageLayout";
import Article from "../../components/Articles/Article";
import { useState } from "react";
import ShareProduct from "../../components/Modals/ShareProduct";
import { produits } from "../../utils/utils"; 
import SampleSection from "../../components/SampleSection";
import '@flaticon/flaticon-uicons/css/all/all.css';

const Home = () => {
  const [activeShare, setActiveShare] = useState(false);
  const [product, setProduct] = useState(null);

  const toggleActiveShare = (selected) => {
    setActiveShare(!activeShare);
    setProduct(selected);
  };

  const handleWhatsAppRedirect = () => {
    window.open(
      'https://wa.me/+24177305184?text=Bonjour%20je%20souhaite%20plus%20d\'informations',
      '_blank'
    );
  };

  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <ShareProduct product={product} toggleActiveShare={toggleActiveShare} activeShare={activeShare} />
      <HomeSlider />
      <div className="mx-3 flex relative gap-3 bg-[#ffe5af] rounded-tl-lg rounded-tr-lg overflow-hidden">
        {/* Bouton Livraison rapide */}
        <div className="flex-1 flex flex-col items-center justify-center p-3 text-center hover:bg-[#f9d89c] transition">
          <i className="fi fi-rr-shipping-fast text-2xl flex items-center mb-1" />
          <span className="text-sm font-medium">Livraison rapide</span>
          <span className="text-xs text-gray-500">entre 10 - 14 jours</span>
        </div>

        {/* Séparateur */}
        <div className="absolute left-[50%] top-[50%] h-[70%] w-[2px] bg-white translate-x-[-50%] translate-y-[-50%]"></div>

        {/* Bouton Service client */}
        <div
          className="flex-1 flex flex-col items-center justify-center p-3 text-center hover:bg-[#f9d89c] transition cursor-pointer"
          onClick={handleWhatsAppRedirect}
        >
          <FaWhatsapp className="text-2xl mb-1" />
          <span className="text-sm font-medium">Service client</span>
          <span className="text-xs text-gray-500">aux petits oignons</span>
        </div>
      </div>
      <SampleSection />
      <h2 className="px-3 py-1 mt-2 text-md font-bold text-[rgb(51,51,51)]">Les plus achetés</h2>
      <div className="mx-3 grid grid-cols-2 gap-2">
        {produits.map((produit, i) => (
          <Article key={i} product={produit} share={() => toggleActiveShare(produit)} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;

