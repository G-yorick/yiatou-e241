import MoreArticleItem from "../Articles/MoreArticleItem";
import OverflowSliderModel from "../Sliders/OverflowSliderModel";

const MoreProduct = () => {
    return (
        <div className="py-5 bg-white mt-1">
            <p className="text-lg font-medium">D'autre articles interessants</p>
            <OverflowSliderModel>
            <MoreArticleItem/>
            <MoreArticleItem/>
            <MoreArticleItem/>
            <MoreArticleItem/>
            <MoreArticleItem/>
            <MoreArticleItem/>
            <MoreArticleItem/>
            <MoreArticleItem/>
        </OverflowSliderModel>
        </div>
    );
}

export default MoreProduct;
