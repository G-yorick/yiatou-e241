import NavLink from './NavLink';

const NavLinks = () => {
    return (
        <div className="w-full overflow-x-auto scrollbar-hide -translate-y-3">
            <div className="flex whitespace-nowrap px-3 py-2 space-x-4 text-[#333333] font-light">
                <NavLink to="/explorer" label="Explorer" className="w-24" />
                <NavLink to="/femme" label="Femme" className="w-24" />
                <NavLink to="/beaute" label="Beauté" className="w-24" />
                <NavLink to="/electronique" label="Electronique" className="w-24" />
                <NavLink to="/homme" label="Homme" className="w-24" />
                <NavLink to="/contact" label="Contact" className="w-24" />
                <NavLink to="/a-propos" label="À propos" className="w-24" />
            </div>
        </div>
    );
}

export default NavLinks;
