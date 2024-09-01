import { FaImage } from "react-icons/fa";

const MoreArticleItem = () => {
    return (
        <div className="w-[100px] shrink-0 shadow grid grid-rows-[100px_1fr] rounded-lg overflow-hidden">
            <div className="relative bg-gray-400 flex justify-center items-center">
                <FaImage className="text-gray-700" size={20}/>
                <p className="absolute top-0 left-0 rounded-br-lg px-2 bg-red-600 text-white text-[11px] font-medium">-30%</p>
            </div>
            <div className="px-2 py-1">
                <p className="text-[13px] font-medium">2,500 cfa</p>
            </div>
        </div>
    );
}

export default MoreArticleItem;
