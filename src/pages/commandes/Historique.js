import { NavLink, Outlet } from "react-router-dom";
import TopBarTitle from "../../components/topBar/TopBarTitle";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";

export default function Historique() {
  return (
    <PageLayout bottomBar={<BottomBar/>} topBar={<TopBarTitle title="Mes commandes"/>}>
        <ul className="flex justify-center items-center gap-6 py-4">
            <li>
                <NavLink to="historique" className='nav-link'>Ajourd'hui</NavLink>
            </li>
            <li>
                <NavLink to="historiques" className="nav-link">Historique</NavLink>
            </li>
        </ul>
        <Outlet/>
    </PageLayout>
  )
}
