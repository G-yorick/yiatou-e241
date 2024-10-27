import NavLink from './NavLink';

const NavLinks = () => {
    return (
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex whitespace-nowrap px-2.5 py-2 space-x-3.5 text-[#333333] font-light">
                <NavLink to="/explorer" label="Explorer" />
                <NavLink to="/femme" label="Femme" />
                <NavLink to="/beaute" label="Beauté" />
                <NavLink to="/electronique" label="Electronique" />
                <NavLink to="/homme" label="Homme" />
                <NavLink to="/contact" label="Contact" />
                <NavLink to="/a-propos" label="À propos" />
            </div>
        </div>
    );
}

export default NavLinks;
