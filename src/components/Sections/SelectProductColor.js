import SelectVariante from "../Buttons/SelectVariante";
import OverflowSliderModel from "../Sliders/OverflowSliderModel";

const SelectProductColor = () => {
    return (
        <div className="px-3 py-5 bg-white my-1">
            <p className="font-medium mb-2">Couleur (5) : </p>
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
            <div className="flex gap-2 items-center">
                <p className="font-semibold">Qté</p>
                <div className="w-[120px] font-medium border-2 border-gray-500 h-[40px] grid grid-cols-3 bg-gray-200">
                    <button>-</button>
                    <span className="bg-gray-50 flex justify-center items-center">1</span>
                    <button>+</button>
                </div>
                <p className="font-medium text-gray-500">Bientot fini ou 9 en stock</p>
            </div>
        </div>
    );
}

export default SelectProductColor;
