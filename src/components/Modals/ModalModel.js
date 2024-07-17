import React from 'react';
import { FaUserLock } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ModalModel = () => {
    return (
        <div className='fixed z-50 w-full max-w-[650px] h-screen bg-[rgba(0,0,0,0.3)]'>
            <div className='px-3 py-4 bg-white rounded-modal absolute w-full bottom-0 min-h-[80%]'>
                <div className='py-2 relative'>
                    <p className='text-center text-lg font-medium'>Information de livraison</p>
                    <button className='absolute right-0 top-[50%] translate-y-[-50%] text-gray-700'>
                        <FaX/>
                    </button>
                </div>
                {/* Contenue */}
                <div>
                    <p className='text-center font-medium text-gray-600'>Ces information permettent a Yiatou de traiter tes commandes et restent privees.</p>
                </div>
                <form className='mt-[70px] mb-2 flex flex-col gap-3'>
                    <div className='flex gap-4 items-center'>
                        <div className='flex gap-2 items-center'>
                            <input type='radio' name='sexe' id='m'/>
                            <label htmlFor='m'>Monsieur</label>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type='radio' name='sexe' id='f'/>
                            <label htmlFor='f'>Madame</label>
                        </div>
                    </div>
                    <input type='text' name='name' placeholder='Prenoms' className='border px-2 py-2 rounded w-full'/>
                    <input type='tel' name='phone' placeholder='N de telephone appel' className='border px-2 py-2 rounded w-full'/>
                    <textarea name='adresse' placeholder='Adresse de livraison' className='border px-2 py-2 rounded w-full min-h-[150px] resize-none'></textarea>
                    <button className='w-full py-2 px-3 rounded bg-blue-800 text-white font-medium'>Enregistrer</button>
                </form>
                <Link to="#" className='flex justify-center items-center gap-2 py-4 text-gray-400'>
                    <FaUserLock/>
                    <span className='underline'>Voir notre politique de confidentialité</span>
                </Link>
                {/* Fin contenue */}
            </div>
        </div>
    );
}

export default ModalModel;
