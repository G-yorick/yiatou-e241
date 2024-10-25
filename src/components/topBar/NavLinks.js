import NavLink from './NavLink';

const NavLinks = () => {
    return (
        <div className="w-full max-w-[640px] mx-auto flex justify-around items-center mt-2 space-x-4 mb-4">
            <NavLink to="/explorer" label="Explorer" />
            <NavLink to="/femme" label="Femme" />
            <NavLink to="/beaute" label="Beauté" />
            <NavLink to="/electronique" label="Electronique" />
            <NavLink to="/homme" label="Homme" />
        </div>
    );
}

export default NavLinks;
