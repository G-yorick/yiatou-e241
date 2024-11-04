import { useState } from 'react';
import { FaLock, FaCoins } from "react-icons/fa";
import { HelpCircle } from "lucide-react";

const WithdrawInformation = () => {
  const [showInfoBubble, setShowInfoBubble] = useState(false);

  const handleInfoClick = () => {
    setShowInfoBubble(!showInfoBubble);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* ... reste du code ... */}
    </div>
  );
};

export default WithdrawInformation; 