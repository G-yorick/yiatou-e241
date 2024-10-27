import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de recherche à implémenter
    };

    const borderClass = hasScrolled ? 'border-black' : 'border-[#cccccc]';
    const inputClass = hasScrolled ? 'bg-white text-black placeholder-gray-400' : 'bg-white text-black placeholder-gray-500';
    const iconClass = hasScrolled ? 'text-black' : 'text-gray-400';

    return (
        <form onSubmit={handleSubmit} className="flex items-center w-full max-w-[640px] px-2 md:px-6 lg:px-8 transition-colors duration-300">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Rechercher"
                    className={`w-full h-10 pl-4 pr-10 border ${borderClass} ${inputClass} border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300`}
                    aria-label="Rechercher" 
                />
                <button
                    type="submit"
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${iconClass} focus:outline-none transition-colors duration-300`}
                    aria-label="Lancer la recherche"
                >
                    <FaSearch className="w-5 h-5" />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
