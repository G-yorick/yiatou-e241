import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProduitDetails from "../pages/produitDetails/ProduitDetails";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/produit-details" element={<ProduitDetails/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
