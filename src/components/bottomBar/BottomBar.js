import NavItem from "./NavItem";

const BottomBar = () => {
  return (
    <>
    <div className="fixed h-[70px] bottom-0 left-0 w-full bg-white border-t">
    <div className="flex justify-between items-center h-full px-3 max-w-[640px] m-auto">
      <NavItem icon="fi-rr-house-blank" iconSec="fi-sr-house-blank">
        Accueil
      </NavItem>
      <NavItem to="/historique/historique" icon="fi-rr-receipt" iconSec="fi-sr-receipt">
        Commandes
      </NavItem>
      <NavItem to="/money" iconSec="fi-sr-sack-dollar" icon="fi-rr-sack-dollar">
        Argent
      </NavItem>
      <NavItem to="/account" iconSec="fi-sr-user" icon="fi-rr-user">
        Compte
      </NavItem>
    </div>
    </div>
    <div className="h-[70px]"></div>
    </>
  );
};

export default BottomBar;
