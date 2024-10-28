import React from "react";
import TopBarLayout from "../../pages/layout/TopBarLayout";
import { Link } from "react-router-dom";

const TopBarWithButtonBack = ({title = null, link = "#"}) => {
  return (
    <TopBarLayout>
      <div className="w-full flex items-center justify-between h-[40px] px-3 relative">
        <Link 
          to={link} 
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center"
          aria-label="Retour"
          tabIndex={0}
        >
          <i className="fi fi-br-angle-left w-6 h-6 mt-2"></i>
        </Link>
        <h2 className="text-lg font-medium w-full ml-10">{title}</h2>
      </div>
    </TopBarLayout>
  );
};

export default TopBarWithButtonBack;
