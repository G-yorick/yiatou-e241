import HeaderProductDetails from "../../components/headers/HeaderProductDetails";
import ModalModel from "../../components/Modals/ModalModel";
import DestinationCommande from "../../components/Sections/DestinationCommande";
import DetailsProduct from "../../components/Sections/DetailsProduct";
import MoreProduct from "../../components/Sections/MoreProduct";
import SelectProductColor from "../../components/Sections/SelectProductColor";
import Layout from "../layout/Layout";

const ProduitDetails = () => {
    return (
        <Layout>
            {/* <ModalModel/> */}
            <HeaderProductDetails/>
            <DetailsProduct/>
            <SelectProductColor/>
            <DestinationCommande/>
            <MoreProduct/>
            <div className="bg-gray-200 mt-1 py-4 px-3">
                <button className="py-2 px-2 w-full bg-blue-950 text-white rounded shadow font-medium">Je valide</button>
            </div>
        </Layout>
    );
}

export default ProduitDetails;
