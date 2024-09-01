import SelectVariante from "../Buttons/SelectVariante";
import OverflowSliderModel from "../Sliders/OverflowSliderModel";

const SelectProductColor = () => {
    return (
        <div className="py-5 bg-white my-1">
            <p className="font-medium mb-2 px-3">Couleur (5) : </p>
            <OverflowSliderModel>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
            </OverflowSliderModel>
            <div className="flex gap-2 items-center px-3">
                <p className="font-semibold">Qté</p>
                <div className="w-[100px] font-medium h-[35px] grid grid-cols-3">
                    <button className="bg-gray-100 font-bold text-gray-600 rounded-sm">-</button>
                    <span className="flex justify-center items-center">1</span>
                    <button className="bg-gray-100 font-bold text-gray-600 rounded-sm">+</button>
                </div>
                <p className="font-medium text-gray-500">Bientot fini ou 9 en stock</p>
            </div>
        </div>
    );
}

export default SelectProductColor;
