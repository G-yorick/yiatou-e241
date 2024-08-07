import { IoImage } from "react-icons/io5";

export default function HistoriqueItem() {
  return (
    <div className="bg-white px-3 py-4 my-2">
      <p className="flex justify-between items-center">
        <span className="font-medium">Commande YT-251</span>
        <span className="font-medium text-[13px] text-gray-500">14:26</span>
      </p>
      <div className="flex flex-col gap-4 mt-10">
        {/*  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-[40px] h-[40px] bg-red-200 rounded flex justify-center items-center">
              <IoImage />
            </div>
            <p>X3 Clés USB 16 GB...</p>
          </div>
          <p>6,500 FCFA</p>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-[40px] h-[40px] bg-red-200 rounded flex justify-center items-center">
              <IoImage />
            </div>
            <p>X3 Clés USB 16 GB...</p>
          </div>
          <p>6,500 FCFA</p>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex justify-between items-center my-4">
            <p className="flex items-center gap-3">
                <span>Livraison</span>
                <span className="text-gray-500 text-[14px]">(Akanda)</span>
            </p>
            <p>2,500 FCFA</p>
        </div>
        {/*  */}
        <div className="flex justify-between items-center">
            <p className="font-bold">TOTAL</p>
            <p className="flex gap-4">
                <span className="font-medium line-through text-gray-500">(12,000 FCFA)</span>
                <span className="font-bold">9,000 FCFA</span>
            </p>
        </div>
      </div>
    </div>
  );
}
