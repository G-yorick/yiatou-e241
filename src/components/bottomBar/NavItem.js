import { NavLink } from "react-router-dom";

const NavItem = ({children,to ="/",icon = "bi-shop"}) => {

    return (
        <div>
            <NavLink to={to} className="flex [&.active]:text-red-600 font-medium text-[13px] flex-col items-center">
            <i className={`fi ${icon} text-xl`}></i>
                {children}
            </NavLink>
        </div>
    );
}

export default NavItem;
