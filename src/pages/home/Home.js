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
import ModalModel from "../../components/Modals/ModalModel";
import { FaDollarSign } from "react-icons/fa";
import { IoImage, IoLogoWhatsapp } from "react-icons/io5";
import { useState } from "react";

const Home = () => {
  const [activeShare,setActiveShare] = useState(false);
  const toggleActiveShare = () =>{
    setActiveShare(!activeShare);
  }
  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <HomeSlider />
      <ModalModel onClose={toggleActiveShare} topContent={<ProductImage/>} icon={<IconMoney/>} title="Partage et gagne" active={activeShare}>
        <ModalImageContent/>
      </ModalModel>
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
        <h2 className="font-bold">Fais vite ton choix Dave</h2>

        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="flex flex-col gap-4">
            <Article share={toggleActiveShare}/>
            <Article share={toggleActiveShare}/>
            <Article share={toggleActiveShare}/>
            <Article share={toggleActiveShare}/>
          </div>
          <div class="flex flex-col gap-4">
            <Article share={toggleActiveShare}/>
            {/* <ArtitcleSlide/> */}
            <Article share={toggleActiveShare}/>
            <Article share={toggleActiveShare}/>
            <Article share={toggleActiveShare}/>
          </div>
        </div>
      </div>
      {/* <HomeAbout/> */}
      <Testimonial/>
      <HomePubSection/>
      <HomeWhatsappSection/>
    </PageLayout>
  );
};

function IconMoney() {
  return (
    <span className="px-2 py-2 text-white rounded-full bg-orange-600">
      <FaDollarSign size={18}/>
    </span>
  )
}

function ProductImage() {
  return (
    <div className="w-[130px] text-purple-900 rounded mb-4 h-[130px] bg-purple-300 flex justify-center items-center">
      <IoImage size={50}/>
    </div>
  );
}

function ModalImageContent() {
  return (
    <div>
      <p className="text-center my-3">Tu gagneras <strong>1,500 FCFA</strong> a chaque foid qu'un de tes amis acheteras cet article a travers ton lien</p>
      <div className="flex gap-3 justify-between mt-10">
        <div className="flex flex-col gap-1 justify-center items-center">
          <IoLogoWhatsapp color="green" size={30}/>
          <p className="font-medium text-gray-700">Whatsapp</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <IoLogoWhatsapp color="green" size={30}/>
          <p className="font-medium text-gray-700">Whatsapp</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <IoLogoWhatsapp color="green" size={30}/>
          <p className="font-medium text-gray-700">Whatsapp</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <IoLogoWhatsapp color="green" size={30}/>
          <p className="font-medium text-gray-700">Whatsapp</p>
        </div>
      </div>
      <button className="mt-10 text-lg font-medium text-gray-700 w-full py-2 px-2 bg-gray-200 rounded border-2 border-dashed border-gray-400">
        Copier le lien
      </button>
      <button className="w-full my-4 py-3 rounded bg-blue-900 text-white font-medium">
        Connexion
      </button>
    </div>
  );
}

export default Home;
