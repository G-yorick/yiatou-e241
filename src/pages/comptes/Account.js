import React, { useState } from 'react'
import PageLayout from '../layout/PageLayout'
import {  FaImage, FaPeopleGroup } from 'react-icons/fa6';
import BottomBar from '../../components/bottomBar/BottomBar';
import { Link } from 'react-router-dom';
import ShareProduct from '../../components/Modals/ShareProduct';
import ButtonWhatsapp from '../../components/Buttons/ButtonWhatsapp';
import NavItem from '../../components/bottomBar/NavItem';

export default function Account() {
    const [share,setShare] = useState(false);
    const toggleShare = () =>{
        setShare(!share);
    }
  return (
    <PageLayout bottomBar={<BottomBar/>} topBar={<ToBar onpenShare={toggleShare}/>}>
        <ShareProduct isProduct={false} toggleActiveShare={toggleShare} activeShare={share}/>
        <div className='py-4 bg-white min-h-[80vh] mt-6'>
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
            <div className='px-3 py-5 border-b'>
                <p className='flex items-center gap-2 font-medium text-gray-600'>
                    <span className='text-[25px]'><FaPeopleGroup/></span>
                    <span className="text-black">3 invités</span>
                </p>
            </div>
            {/* ------------------------------- */}
            {/* ------------------------------- */}
            <div className='px-3 py-5 border-b'>
                <p className='grid grid-cols-[25px_1fr_30px] items-center gap-2 font-medium text-gray-600'>
                    <span className='text-[25px]'>
                        <i className="fi fi-rr-receipt text-2xl"></i>
                    </span>
                    <span className="text-black">Mes commandes</span>
                    <NavItem to="/historique/historique">
                        <i className="fi fi-rs-angle-small-right text-3xl"></i>
                    </NavItem>
                </p>
            </div>
            {/* ------------------------------- */}
            {/* ------------------------------- */}
            <div className='px-3 py-4 border-b'>
                <h2 className='font-bold text-gray-900 text-lg'>Services</h2>
                <ul className='flex-col gap-2 flex my-3'>
                    <li className='font-medium text-gray-500'>
                        <Link to="/about" className='flex gap-2 items-center'>
                        <span><i class="fi fi-rr-info flex"></i></span>
                        <span className="text-black">A propos</span>
                        </Link>
                    </li>
                    <li className='font-medium text-gray-500'>
                        <Link to="/services" className='flex gap-2 items-center'>
                        <span><i class="fi fi-rr-comment-question flex"></i></span>
                        <span className="text-black">Centre d'aide</span>
                        </Link>
                    </li>
                    <li className='font-medium text-gray-500'>
                        <Link to="/politique" className='flex gap-2 items-center'>
                        <span><i class="fi fi-rr-user-lock flex"></i></span>
                        <span className="text-black">Politique de confidentialité</span>
                        </Link>
                    </li>
                    <li className='font-medium text-gray-500'>
                        <Link to="/conditions" className='flex gap-2 items-center'>
                        <span><i class="fi fi-rr-handshake flex"></i></span>
                        <span className="text-black">Termes et Conditions d'utilisation</span>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* ------------------------------- */}
            {/* ------------------------------- */}
            <div className='px-3 py-4 flex flex-col gap-3'>
                <ButtonWhatsapp className='flex justify-center items-center gap-3 py-2 rounded text-white bg-green-700 font-medium'>
                    Service client
                </ButtonWhatsapp>
                {/* <button className='border-2 py-2 rounded-full font-medium'>Deconnexion</button> */}
            </div>
            {/* ------------------------------- */}
        </div>
    </PageLayout>
  )
}
const ToBar = ({onpenShare}) =>{
    const toggle = () =>{
        try {
            onpenShare();
        } catch (error) {
            console.log('onpenShare doit etre une fonction');
            
        }
    }
    return (
        <div className='px-3 flex h-[40px] justify-between w-full items-center'>
            <h2 className='font-medium text-lg'>Mon compte</h2>
            <button onClick={toggle}>
                <i class="fi fi-sr-share text-xl"></i>
            </button>
        </div>
    );
}