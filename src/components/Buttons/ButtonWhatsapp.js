import { FaWhatsapp } from 'react-icons/fa6';

export default function ButtonWhatsapp({children}) {
    return (
      <button className="flex font-medium gap-3 items-center justify-center w-full py-3 px-4 rounded-full text-white bg-green-600">
        <FaWhatsapp size={20} />
        <span>{children}</span>
      </button>
    );
  }
/*
Commander sur Whatsapps
import { FaWhatsapp } from 'react-icons/fa6';
 */