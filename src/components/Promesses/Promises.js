import { useState } from 'react';
import { FaHandshake, FaChevronRight } from 'react-icons/fa';

const Garantees = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div className="mx-2 mt-1 bg-orange-200 rounded-md overflow-hidden">
      <div className="w-full px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaHandshake className="text-black text-md" />
            <h2 className="text-xs font-semibold text-black">Nos promesses</h2>
          </div>
          <button 
            className={`text-black rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 ${isAnimating ? 'transform scale-110' : ''}`} 
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            aria-label="Voir plus de détails sur nos promesses"
            tabIndex={0}
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Garantees;
