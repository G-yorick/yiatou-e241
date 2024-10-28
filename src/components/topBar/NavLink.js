import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, label, className = '' }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (location.pathname === '/' && to === '/explorer');

    return (
        <div className="flex flex-col items-center">
            <Link 
                to={to}
                className={`
                    relative 
                    text-center 
                    transition-all 
                    hover:text-gray-800
                    ${className}
                    ${isActive ? 'font-semibold' : 'font-light'}
                `}
                aria-current={isActive ? 'page' : undefined}
            >
                {label}
                {/* Indicateur de page active */}
                <div 
                    className={`
                        absolute 
                        -bottom-1
                        left-1/2 
                        w-14
                        h-[2px]
                        bg-black 
                        transition-all
                        duration-200
                        ${isActive ? 'opacity-100 -translate-x-1/2' : 'opacity-0'}
                    `}
                    aria-hidden="true"
                />
            </Link>
        </div>
    );
};

export default NavLink;
