import React from 'react'
import PageLayout from '../layout/PageLayout'
import {  FaImage, FaPeopleGroup } from 'react-icons/fa6';
import BottomBar from '../../components/bottomBar/BottomBar';
import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <PageLayout bottomBar={<BottomBar/>} topBar={<ToBar/>}>
        <div className='py-4 bg-white h-full'>
            {/* ------------------------------ */}
            <div className='px-3 py-3 grid grid-cols-[60px_1fr_30px] gap-2 border-b'>
                <div className='w-[50px] h-[50px] bg-orange-100 flex justify-center items-center rounded-full'>
                    <FaImage/>
                </div>
                <div>
                    <p className='flex gap-2 items-center font-medium'>
                        <span>Dave</span>
                        <span className='text-blue-700'>
                        <i class="fi fi-sr-check-circle"></i>
                        </span>
                    </p>
                    <p className='font-medium text-gray-600 text-[13px]'>abcdef@gmail.com</p>
                </div>
                <Link to="/informations">
                 <i class="fi fi-rs-angle-small-right text-3xl"></i>
                </Link>
            </div>
            {/* ------------------------------- */}
            {/* ------------------------------- */}
            <div className='px-3 py-6 border-b'>
                <p className='flex items-center gap-2 font-medium text-gray-600'>
                    <span className='text-[25px]'><FaPeopleGroup/></span>
                    <span>3 invités</span>
                </p>
            </div>
            {/* ------------------------------- */}
            {/* ------------------------------- */}
            <div className='px-3 py-4 border-b'>
                <h2 className='font-bold text-gray-900 text-lg'>Services</h2>
                <ul className='flex-col gap-2 flex my-3'>
                    <li className='font-medium text-gray-500'>
                        <Link to="/about" className='flex gap-2 items-center'>
                        <span><i class="fi fi-rr-info"></i></span>
                        <span>A propos</span>
                        </Link>
                    </li>
                    <li className='flex gap-2 items-center font-medium text-gray-500'>
                        <span><i class="fi fi-rr-comment-question"></i></span>
                        <span>Centre d'aide</span>
                    </li>
                    <li className='flex gap-2 items-center font-medium text-gray-500'>
                        <span><i class="fi fi-rr-user-lock"></i></span>
                        <span>Politique de confidentialité</span>
                    </li>
                    <li className='flex gap-2 items-center font-medium text-gray-500'>
                        <span><i class="fi fi-rr-handshake"></i></span>
                        <span>Termes et Conditions d'utilisation</span>
                    </li>
                </ul>
            </div>
            {/* ------------------------------- */}
            {/* ------------------------------- */}
            <div className='px-3 py-4 flex flex-col gap-3'>
                <button className='flex justify-center items-center gap-3 py-2 rounded text-white bg-green-700 font-medium'>
                    <span>
                        <i class="fi fi-brands-whatsapp text-xl"></i>
                    </span>
                    <span>Service client</span>
                </button>
                <button className='border-2 py-2 rounded font-medium'>Deconnexion</button>
            </div>
            {/* ------------------------------- */}
        </div>
    </PageLayout>
  )
}
const ToBar = () =>{
    return (
        <div className='px-3 flex justify-between w-full items-center'>
            <h2 className='font-medium text-lg'>Mon compte</h2>
            <button>
                <i class="fi fi-sr-share text-xl"></i>
            </button>
        </div>
    );
}