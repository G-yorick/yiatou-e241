import NavLink from './NavLink';

const NavLinks = () => {
    return (
        <div className="w-full overflow-x-auto scrollbar-hide -translate-y-2">
            <nav 
                className="flex justify-between whitespace-nowrap px-1 py-1 text-[#333333] max-w-screen-xl mx-auto"
                aria-label="Navigation principale"
            >
                <NavLink to="/explorer" label="Explorer" className="w-16" />
                <NavLink to="/femme" label="Femme" className="w-16" />
                <NavLink to="/beaute" label="Beauté" className="w-16" />
                <NavLink to="/electronique" label="Electronique" className="w-22" />
                <NavLink to="/homme" label="Homme" className="w-16" />
            </nav>
        </div>
    );
}

export default NavLinks;
