import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="flex items-center w-full max-w-[640px] border border-gray-300 px-2 rounded-md">
            <input
                type="text"
                placeholder="Rechercher"
                className="flex-grow h-10 px-4 focus:outline-none"
                aria-label="Search"
            />
            <FaSearch className="text-gray-500" />
        </div>
    );
}

export default SearchBar;
