import { FaImage } from "react-icons/fa";

const MoreArticleItem = () => {
    return (
        <div className="w-[100px] bg-gray-400 shrink-0 grid grid-rows-[100px_1fr]">
            <div className="relative flex justify-center items-center">
                <FaImage className="text-gray-700" size={20}/>
                <p className="absolute top-0 left-0 px-2 bg-red-300 text-[14px] font-medium">-30%</p>
            </div>
            <div className="bg-gray-200 px-2 py-1">
                <p className="text-[13px] font-medium">2,500 cfa</p>
            </div>
        </div>
    );
}

export default MoreArticleItem;
