import BottomBar from "../../components/bottomBar/BottomBar";
import ButtonHome from "../../components/Buttons/ButtonHome";
import HomeSlider from "../../components/Sliders/HomeSlider";
import TopBar from "../../components/topBar/TopBar";
import { FaWhatsapp } from "react-icons/fa6";
import { MdDirectionsCar, MdHandshake } from "react-icons/md";
import PageLayout from "../layout/PageLayout";
import Article from "../../components/Articles/Article";
import Testimonial from "../../components/Sections/Testimonial";
import HomePubSection from "../../components/Sections/HomePubSection";
import HomeWhatsappSection from "../../components/Sections/HomeWhatsappSection";
import { useState } from "react";
import ShareProduct from "../../components/Modals/ShareProduct";
import { produits, samples } from "../../utils/utils"; // Import samples from utils
import Promises from "../../components/Promesses/Promises";
import SampleCard from "../../components/SampleCard";
import SampleSection from "../../components/SampleSection";

const Home = () => {
  const [activeShare,setActiveShare] = useState(false);
  const [product,setProduct] = useState(null);
  const toggleActiveShare = (selecte) =>{
    setActiveShare(!activeShare);
    setProduct(selecte);
  }

  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <ShareProduct product={product} toggleActiveShare={toggleActiveShare} activeShare={activeShare}/>
      <HomeSlider />
      <div className="mx-2 flex relative gap-3 bg-orange-200 rounded-tl-lg rounded-tr-lg overflow-hidden">
        <ButtonHome data="entre 10 - 14 jours" icon={<MdDirectionsCar />}>
          Livraison rapide
        </ButtonHome>
        <div className="absolute left-[50%] top-[50%] h-[70%] w-[2px] bg-white translate-x-[-50%] translate-y-[-50%]"></div>
        <ButtonHome data="24/7" icon={<FaWhatsapp />}>
          Service client
        </ButtonHome>
      </div>
      <Promises/>
      <SampleSection />
      <h2 className="px-3 py-1 text-sm font-bold">Les plus achetés</h2>
      <div className="mx-4 grid grid-cols-2 gap-2">
        {produits.map((produit, i) => (
          <Article key={i} product={produit} share={() => toggleActiveShare(produit)} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
