import BottomBar from "../../components/bottomBar/BottomBar";
import ButtonHome from "../../components/Buttons/ButtonHome";
import HomeSlider from "../../components/Sliders/HomeSlider";
import TopBar from "../../components/topBar/TopBar";
import { FaWhatsapp } from "react-icons/fa6";
import { MdDirectionsCar } from "react-icons/md";
import PageLayout from "../layout/PageLayout";
import Article from "../../components/Articles/Article";
import ArtitcleSlide from "../../components/Sliders/ArtitcleSlide";
import HomeAbout from "../../components/Sections/HomeAbout";
import Testimonial from "../../components/Sections/Testimonial";
import HomePubSection from "../../components/Sections/HomePubSection";
import HomeWhatsappSection from "../../components/Sections/HomeWhatsappSection";

const Home = () => {
  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <HomeSlider />
      <div className="flex gap-3">
        <ButtonHome data="Entre 1 et 2h" icon={<MdDirectionsCar />}>
          Livraison rapide
        </ButtonHome>
        <ButtonHome data="24/7" icon={<FaWhatsapp />}>
          Service client
        </ButtonHome>
      </div>
      <div className="bg-white mt-4 px-3 py-4">
        <h2 className="font-bold">Fais vite ton choix Dave</h2>

        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="flex flex-col gap-4">
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
          <div class="flex flex-col gap-4">
            <Article />
            <ArtitcleSlide/>
            <Article />
            <Article />
          </div>
        </div>
      </div>
      <HomeAbout/>
      <Testimonial/>
      <HomePubSection/>
      <HomeWhatsappSection/>
    </PageLayout>
  );
};

export default Home;
