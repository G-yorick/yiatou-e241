import { NavLink } from "react-router-dom";

const NavItem = ({children,icon = "bi-shop"}) => {
    return (
        <div>
            <NavLink to="/" className="flex flex-col items-center">
            <i className={`bi ${icon} text-2xl`}></i>
                {children}
            </NavLink>
        </div>
    );
}

export default NavItem;
