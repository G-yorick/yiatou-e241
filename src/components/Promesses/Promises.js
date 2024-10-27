import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandshake, FaChevronRight } from 'react-icons/fa';

const Promises = ({ className }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      navigate('/promises');
    }, 300);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div className={`bg-[#418920] rounded-md overflow-hidden flex items-center ${className}`}>
      <div className="w-full px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaHandshake className="text-white text-xl" />
            <h2 className="text-sm text-white font-bold">Nos promesses</h2>
          </div>
          <button 
            className={`text-black rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 ${isAnimating ? 'transform scale-110' : ''}`} 
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            aria-label="Voir plus de détails sur nos promesses"
            tabIndex={0}
          >
            <FaChevronRight className="text-sm text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promises;
