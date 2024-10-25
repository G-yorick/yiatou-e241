import React from 'react';
import BottomBarLayout from '../../pages/layout/BottomBarLayout';
import ButtonWhatsapp from '../Buttons/ButtonWhatsapp';

const CommandeBottom = () => {
    return (
        <BottomBarLayout>
            <div className='px-3 py-3 shadow-xl w-full'>
                <ButtonWhatsapp>
                Commander sur WhatsApp
                </ButtonWhatsapp>
            </div>
        </BottomBarLayout>
    );
}

export default CommandeBottom;
