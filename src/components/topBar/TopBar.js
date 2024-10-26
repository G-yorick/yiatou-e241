import React, { useState, useEffect } from "react";
import TopBarLayout from "../../pages/layout/TopBarLayout";
import SmsNotif from "../notifcation/SmsNotif";
import SearchBar from "../search/SearchBar";
import NavLinks from "./NavLinks";

const TopBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <TopBarLayout>
            <div className={`flex flex-col items-center w-full px-4 py-2 space-y-2 transition-all duration-300 ${isScrolled ? 'pt-0' : 'pt-2'}`}>
                <div className={`flex items-center justify-between w-full mb-1 transition-opacity duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-12 opacity-100'}`}>
                    <img src="/img/logo/logo.png" alt="logo" className="h-12 w-auto" />
                    <SmsNotif />
                </div>
                <SearchBar />
                <NavLinks />
            </div>
        </TopBarLayout>
    );
}

export default TopBar;
