import NavItem from "./NavItem";

const BottomBar = () => {
  return (
    <>
    <div className="btm-nav max-w-[640px] m-auto bg-white shadow-xl">
      <NavItem>
        Accueil
      </NavItem>
      <NavItem icon="bi-file-text">
        Commandes
      </NavItem>
      <NavItem icon="bi-briefcase">
        Argent
      </NavItem>
      <NavItem icon="bi-person">
        Compte
      </NavItem>
    </div>
    <div className="h-[70px]"></div>
    </>
  );
};

export default BottomBar;
