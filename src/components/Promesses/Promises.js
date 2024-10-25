import { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

export default function Garantees() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-orange-200 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <FaHandshake className="text-black text-2xl" />
            <h2 className="text-sm font-semibold text-black">Nos promesses</h2>
          </div>
          <button 
            className={`text-gray-500 text-sm transition-transform ${isAnimating ? 'transform scale-110' : ''}`} 
            onClick={handleClick}
          >
            <FaChevronRight className="text-black text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
