import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeWhatsappSection = () => {
    return (
        <div className="px-3 py-5 bg-blue-50">
            <div className="w-full flex flex-col gap-3 justify-center items-center">
                <h2 className="text-xl font-bold text-red-700">Tu as des question ?</h2>
                <Link to="#" className="text-center font-medium">Cliques ici pour lire motre FAQ <br/> ou</Link>
            </div>
            <button className="flex justify-center items-center gap-2 w-full py-2 text-[14px] font-medium mt-3 bg-green-600 text-white rounded">
                <FaWhatsapp size={23}/>
                <span>Contactes-nous</span>
            </button>
        </div>
    );
}

export default HomeWhatsappSection;
