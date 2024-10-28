import React from "react";
import TopBarLayout from "../../pages/layout/TopBarLayout";
import { Link } from "react-router-dom";

const TopBarWithButtonBack = ({title = null,link = "#"}) => {
  return (
    <TopBarLayout>
      <div className="w-full  flex items-center h-[70px]">
        <Link to={link} className="flex items-center gap-2">
        <i class="fi fi-br-angle-left text-xl flex"></i>
        <h2 className="text-lg font-medium w-full">{title}</h2>
        </Link>
      </div>
    </TopBarLayout>
  );
};

export default TopBarWithButtonBack;
