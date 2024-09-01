import BottomBar from "../../components/bottomBar/BottomBar";
import ButtonHome from "../../components/Buttons/ButtonHome";
import HomeSlider from "../../components/Sliders/HomeSlider";
import TopBar from "../../components/topBar/TopBar";
import { FaWhatsapp } from "react-icons/fa6";
import { MdDirectionsCar } from "react-icons/md";
import PageLayout from "../layout/PageLayout";
import Article from "../../components/Articles/Article";
// import ArtitcleSlide from "../../components/Sliders/ArtitcleSlide";
// import HomeAbout from "../../components/Sections/HomeAbout";
import Testimonial from "../../components/Sections/Testimonial";
import HomePubSection from "../../components/Sections/HomePubSection";
import HomeWhatsappSection from "../../components/Sections/HomeWhatsappSection";
import { useState } from "react";
import ShareProduct from "../../components/Modals/ShareProduct";
import { produits } from "../../utils/utils";

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
      <div className="flex relative gap-3 bg-orange-200 mx-3 rounded">
        <ButtonHome data="Entre 1 et 2h" icon={<MdDirectionsCar />}>
          Livraison rapide
        </ButtonHome>
        <div className="absolute left-[50%] top-[50%] h-[70%] w-[2px] bg-white rounded translate-x-[-50%] translate-y-[-50%]"></div>
        <ButtonHome data="24/7" icon={<FaWhatsapp />}>
          Service client
        </ButtonHome>
      </div>
      <div className="mt-4 px-3 py-4">
        <h2 className="font-medium">Fais vite ton choix Dave</h2>

        <div class="grid grid-cols-2 gap-2 mt-4">
            {produits.map((produit,i,a) => <Article key={i} product={produit} share={() => {toggleActiveShare(produit)}}/>)}
        </div>
      </div>
      {/* <HomeAbout/> */}
      <Testimonial/>
      <HomePubSection/>
      <HomeWhatsappSection/>
    </PageLayout>
  );
};

export default Home;
