import { FaImage } from "react-icons/fa";

const MoneyItem = () => {
  return (
    <div className="bg-white rounded px-3 py-3">
      <div className="flex gap-3 justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-orange-200 rounded-full flex justify-center items-center">
            <FaImage />
          </div>
          <p className="font-bold">Retrait</p>
        </div>
        <p className="font-medium text-end text-gray-500">10h36</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-600">
          Pour les messages de retrait, tu reproduits ce qui est là et tu
          changes juste les valeurs des retraits pour faire réel. Les liens de
          réclamation mènent sur WhatsApp avec le Message "Bonjour ! Je n'ai
          toujours reçu mon retrait de 5,000 FCFA."
        </p>
        <p className="text-xs text-gray-400">ID: #RT45678</p>
      </div>
    </div>
  );
};

export default MoneyItem; 