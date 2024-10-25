import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ to, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to === '/explore' && location.pathname === '/');

    const baseClasses = "text-base no-underline transition-colors duration-200 ease-in-out";
    const activeClasses = "text-blue-600 font-semibold";
    const inactiveClasses = "text-gray-700 hover:text-blue-500";
    const focusClasses = "focus:font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";

    return (
        <Link 
            to={to} 
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${focusClasses}`}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
        >
            {label}
        </Link>
    );
}

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default NavLink;
