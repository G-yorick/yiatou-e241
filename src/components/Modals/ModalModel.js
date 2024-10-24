import { FaX } from 'react-icons/fa6';

const ModalModel = ({title = "", icon = null, active = true, topContent = null, onClose, children}) => {
    const handleClose = () => {
        if (onClose && typeof onClose === 'function') {
            onClose();
        }
    };

    return (
        <div className={`fixed inset-0 z-[1000] flex items-end justify-center ${active ? '' : 'pointer-events-none'}`}>
            <div 
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${active ? 'bg-opacity-70' : 'bg-opacity-0 pointer-events-none'}`} 
                onClick={handleClose}
            ></div>
            <div 
                className={`relative w-full max-w-[650px] transition-transform duration-300 ease-in-out ${active ? 'translate-y-0' : 'translate-y-full'}`}
            >
                {topContent}
                <div className='modal-content bg-white rounded-t-[20px] w-full shadow-lg'>
                    <div className='py-4 px-3 relative'>
                        <p className='text-center text-lg font-medium flex justify-center items-center gap-3'>
                            {icon}
                            {title}
                        </p>
                        <button 
                            onClick={handleClose} 
                            className='absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                            aria-label="Fermer"
                        >
                            <FaX />
                        </button>
                    </div>
                    <div className="px-3 pb-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalModel;
