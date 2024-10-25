import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import SelectVariante from "../Buttons/SelectVariante";
import OverflowSliderModel from "../Sliders/OverflowSliderModel";

const SelectProductColor = () => {
    return (
        <div className="py-0 bg-white">
            <div className="flex items-center justify-between px-3 mb-2">
                <p className="font-medium text-md">Variation (5)</p>
                <FiChevronRight className="text-gray-400 text-3xl" />
            </div>
            <OverflowSliderModel>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
            </OverflowSliderModel>
        </div>
    );
}

export default SelectProductColor;
