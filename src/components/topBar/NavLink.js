import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, label, className }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`
                ${className}
                ${isActive ? 'font-semibold text-blue-600' : 'text-gray-700'}
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            `}
            role="menuitem"
            tabIndex={0}
            aria-current={isActive ? 'page' : undefined}
        >
            {label}
        </Link>
    );
};

export default NavLink;
