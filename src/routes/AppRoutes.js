import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProduitDetails from "../pages/produitDetails/ProduitDetails";
import Commandes from "../pages/commandes/Commandes";
import Messages from "../pages/messages/Messages";
import Historique from "../pages/commandes/Historique";
import CommandeToDay from "../pages/commandes/CommandeToDay";
import CommandeHistorique from "../pages/commandes/CommandeHistorique";
import MonArgent from "../pages/money/MonArgent";
import Account from "../pages/comptes/Account";
import Informations from "../pages/comptes/Informations";
import About from "../pages/appPages/About";
import Services from "../pages/appPages/Services";
import Restore from "../pages/auth/Restore";
import Verify from "../pages/auth/Verify";
import AddPassword from "../pages/auth/AddPassword";
import Politique from "../pages/appPages/Politique";
import Conditions from "../pages/appPages/Conditions";
import Promises from "../pages/appPages/Promises";
import Cart from "../pages/cart/Cart";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/produit-details/:id" element={<ProduitDetails/>}/>
            <Route path="/commandes" element={<Commandes/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/historique" element={<Historique/>} >
                <Route path="historique" element={<CommandeToDay/>}/>
                <Route path="historiques" element={<CommandeHistorique/>}/>
            </Route>
            <Route path="/money" element={<MonArgent/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/informations" element={<Informations/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/conditions" element={<Conditions/>}/>
            <Route path="/politique" element={<Politique/>}/>
            <Route path="/restore" element={<Restore/>}/>
            <Route path="/verify" element={<Verify/>}/>
            <Route path="/password" element={<AddPassword/>}/>
            <Route path="/promises" element={<Promises/>}/>
            <Route path="/cart" component={Cart} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
