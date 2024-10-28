import React from "react";
import TopBarLayout from "../../pages/layout/TopBarLayout";
import { Link } from "react-router-dom";
import { FaChevronLeft } from 'react-icons/fa';

const TopBarWithButtonBack = ({title = null, link = "#"}) => {
  return (
    <TopBarLayout>
      <div className="w-full flex items-center justify-between h-[40px] px-3 relative">
        <Link 
          to={link} 
          className="absolute left-3 flex items-center"
          aria-label="Retour"
          tabIndex={0}
        >
          <FaChevronLeft className="text-gray-400 text-xl" />
        </Link>
        <h2 className="text-lg font-medium w-full ml-10">{title}</h2>
      </div>
    </TopBarLayout>
  );
};

export default TopBarWithButtonBack;
