import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const TopNavigationBar = ({ 
  isScrolled, 
  onCartClick, 
  onKeyDown,
  backLink = "/",
  className = "" 
}) => {
  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    } ${className}`}>
      <div className="flex justify-between px-[8px] py-[8px]">
        <Link 
          to={backLink} 
          className={`inline-block p-2 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-white text-gray-700' 
              : 'bg-black/30 text-white'
          }`}
        >
          <i className="fi fi-br-angle-left flex text-[13px]"></i>
        </Link>
        <button
          onClick={onCartClick}
          onKeyDown={onKeyDown}
          className={`inline-block p-2 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-white text-gray-700' 
              : 'bg-black/30 text-white'
          }`}
          aria-label="Voir le panier"
          tabIndex={0}
        >
          <FaShoppingCart className="text-[13px]" />
        </button>
      </div>
    </div>
  );
};

export default TopNavigationBar; 