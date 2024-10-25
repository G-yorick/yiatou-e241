import { useState, useEffect } from 'react';
import SearchBar from '../../components/search/SearchBar';
import NavLinks from '../../components/topBar/NavLinks';
const TopBarLayout = ({children}) => {
    const [showLogoAndIcon, setShowLogoAndIcon] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowLogoAndIcon(false);
            } else {
                setShowLogoAndIcon(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div className="h-auto pl-3 pr-3 w-full z-[100] fixed left-0 top-0 shadow bg-white">
            <div className={`w-full max-w-[640px] h-[60px] mx-auto flex ${showLogoAndIcon ? 'justify-between' : 'justify-center'} items-center`}>
                {showLogoAndIcon ? children : <SearchBar />}
            </div>
            {showLogoAndIcon && (
                <div className="w-full max-w-[640px] mx-auto flex justify-center items-center mt-2">
                    <SearchBar />
                </div>
            )}
            <NavLinks />
            
        </div>
        <div className="h-[120px] w-full bg-white"></div>
        </>
    );
}

export default TopBarLayout;
