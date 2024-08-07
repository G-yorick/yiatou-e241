import React from 'react';
import BottomBarLayout from '../../pages/layout/BottomBarLayout';
import { FaWhatsapp } from 'react-icons/fa6';

const CommandeBottom = () => {
    return (
        <BottomBarLayout>
            <div className='px-3 w-full'>
                <button className='flex font-medium gap-3 items-center justify-center w-full py-2 px-4 rounded text-white bg-blue-900'>
                    <FaWhatsapp size={20}/>
                    <span>Commander sur Whatsapps</span>
                </button>
            </div>
        </BottomBarLayout>
    );
}

export default CommandeBottom;
