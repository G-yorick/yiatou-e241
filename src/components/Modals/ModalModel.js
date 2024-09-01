import { FaX } from 'react-icons/fa6';

const ModalModel = ({title = "",icon = null,active = true,topContent = null,onClose,children}) => {
    const close = () =>{
        try {
            if(onClose){
                onClose()
            }
        } catch (error) {
            console.log("onClose n'est pas une fonction.");
        }
    }
    return (
        <div className={`fixed z-[1000] w-full max-w-[650px] top-0 h-screen bg-[rgba(0,0,0,0.97)] bottom-modal flex flex-col justify-end items-center ${active ? 'active' : 'no-active'}`}>
            {topContent}
            <div className='modal-content px-3 py-4 bg-white rounded-modal w-full'>
                <div className='py-2 relative'>
                    <p className='text-center text-lg font-medium flex justify-center items-center gap-3'>
                        {icon}
                        {title}
                        </p>
                    <button onClick={close} className='absolute right-0 top-[50%] px-2 py-2 rounded-full bg-gray-50 translate-y-[-50%] text-gray-700'>
                        <FaX/>
                    </button>
                </div>
                {/* Contenue */}
                {children}
                {/* Fin contenue */}
            </div>
        </div>
    );
}

export default ModalModel;
