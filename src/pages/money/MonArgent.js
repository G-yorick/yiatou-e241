import { FaImage } from "react-icons/fa";
import BottomBar from "../../components/bottomBar/BottomBar";
import TopBarTitle from "../../components/topBar/TopBarTitle";
import PageLayout from "../layout/PageLayout";
import { Link } from "react-router-dom";

export default function MonArgent() {
  return (
    <PageLayout bottomBar={<BottomBar/>} topBar={<TopBarTitle title="Mon argent"/>}>
        <Header/>
        <p className="my-5 text-center font-medium text-gray-600">20/06/2024</p>
        <div className="flex flex-col gap-5 px-3">
            <MoneyItem/>
            <MoneyItem/>
            <MoneyItem/>
            <MoneyItem/>
        </div>
    </PageLayout>
  )
}

const Header = () =>{
    return (
        <header className="w-full h-[200px] bg-green-200 rounded-b-[30px] px-3 py-5 flex flex-col justify-center items-start">
            <p className="font-medium">Solde actuel</p>
            <p className="flex gap-3 items-end">
                <span className="font-bold text-3xl">6,500</span>
                <span className="font-medium">FCFA</span>
            </p>
            <button className="bg-gray-300 my-3 font-medium px-5 py-2 rounded-full">Retirer</button>
        </header>
    );
}
const MoneyItem = () =>{
    return (
        <div className="bg-white rounded px-3 py-3">
            <div className="flex gap-3 justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-[50px] h-[50px] bg-orange-200 rounded-full flex justify-center items-center">
                        <FaImage/>
                    </div>
                    <p className="font-bold">Retrait</p>
                </div>
                <p className="font-medium text-end text-gray-500">10h36</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-medium text-gray-600">Pour les messages de retrait, tu reproduits ce qui est là et tu changes juste les valeurs des retraits pour faire réel. Les liens de réclamation mènent sur WhatsApp avec le Message "Bonjour ! Je n'ai toujours reçu mon retrait de 5,000 FCFA."</p>
                <Link to="#" className="font-medium underline text-gray-800">Faire une reclamation</Link>
            </div>
        </div>
    );
}