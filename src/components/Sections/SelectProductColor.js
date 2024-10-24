import SelectVariante from "../Buttons/SelectVariante";
import OverflowSliderModel from "../Sliders/OverflowSliderModel";

const SelectProductColor = () => {
    return (
        <div className="py-5 bg-white">
            <p className="font-medium text-lg mb-2 px-3">Variation (5) : </p>
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
