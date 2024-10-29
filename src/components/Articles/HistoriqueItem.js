import { IoImage } from "react-icons/io5";

const OrderItem = ({ quantity, name, price }) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-2 items-center">
      <div className="w-8 h-8 bg-red-200 rounded flex justify-center items-center">
        <IoImage className="text-sm" />
      </div>
      <p className="text-xs">X{quantity} {name}</p>
    </div>
    <p className="text-xs">{price} FCFA</p>
  </div>
);

const FeeItem = ({ label, price, icon }) => (
  <div className="flex justify-between items-center py-1">
    <div className="flex items-center gap-2">
      <span className="font-medium text-xs">{label}</span>
      {icon && <i className={icon}></i>}
    </div>
    <p className="text-xs">{price} FCFA</p>
  </div>
);

export default function HistoriqueItem() {
  return (
    <div className="bg-white px-2 py-3 my-1 rounded">
      <p className="flex justify-between items-center">
        <span className="font-medium text-sm">Commande YT-251</span>
        <span className="text-xs text-gray-500">14:26</span>
      </p>
      
      <div className="flex flex-col gap-2 mt-4">
        <OrderItem quantity={3} name="Clés USB 16 GB..." price="6,500" />
        <OrderItem quantity={3} name="Clés USB 16 GB..." price="6,500" />
        
        <div className="my-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="assurance"
              className="w-3 h-3 accent-yellow-400"
            />
            <label htmlFor="assurance" className="flex items-center gap-1">
              <span className="font-medium text-xs">Assurance</span>
              <i className="fi fi-rr-info text-red-500 text-xs self-center"></i>
            </label>
          </div>
          <p className="text-xs">500 FCFA</p>
        </div>

        <FeeItem label="Livraison (Libreville)" price="2000" />
        <FeeItem label="Frais Airtel Money" price="435" />

        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-sm">TOTAL</p>
          <p className="flex gap-2">
            <span className="font-medium line-through text-gray-500 text-xs">(12,000 FCFA)</span>
            <span className="font-bold text-sm">9,000 FCFA</span>
          </p>
        </div>
      </div>
    </div>
  );
}
