import React from "react";
import { FaImage } from "react-icons/fa6";

const SelectVariante = () => {
  return (
    <button className="w-[60px] rounded shrink-0 h-[60px] relative flex justify-center items-center bg-blue-200 focus:border-2 focus:border-blue-600">
        <span className="absolute font-medium text-[13px] py-1 px-2 bg-red-200 z-20 rounded-full right-0 top-0 translate-x-[50%] translate-y-[-50%]">
            x1
        </span>
      <FaImage/>
    </button>
  );
};

export default SelectVariante;
