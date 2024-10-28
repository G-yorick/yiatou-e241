import React, { useState } from 'react'
import PageLayout from '../layout/PageLayout'
import { FaImage, FaPeopleGroup } from 'react-icons/fa6'
import BottomBar from '../../components/bottomBar/BottomBar'
import { Link } from 'react-router-dom'
import ShareProduct from '../../components/Modals/ShareProduct'
import ButtonWhatsapp from '../../components/Buttons/ButtonWhatsapp'

export default function Account() {
    const [share, setShare] = useState(false)
    const toggleShare = () => {
        setShare(!share)
    }
    return (
        <PageLayout bottomBar={<BottomBar />}>
            <ShareProduct isProduct={false} toggleActiveShare={toggleShare} activeShare={share} />
            <div className='bg-gray-50 min-h-screen pb-20'>
                {/* Profile Section */}
                <div className='bg-white shadow-sm mb-3'>
                    <Link to="/informations" className='px-4 py-4 grid grid-cols-[60px_1fr_30px] gap-3 items-center'>
                        <div className='w-[60px] h-[60px] bg-blue-50 flex justify-center items-center rounded-full text-blue-500 text-xl'>
                            <FaImage/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-2'>
                                <span className='font-semibold text-gray-900'>Dave</span>
                                <span className='text-blue-600'>
                                    <i className="fi fi-sr-check-circle text-sm"></i>
                                </span>
                            </div>
                            <p className='text-gray-500 text-sm'>abcdef@gmail.com</p>
                        </div>
                        <i className="fi fi-rs-angle-small-right text-2xl text-gray-400"></i>
                    </Link>
                </div>

                {/* Invités Section */}
                <div className='bg-white shadow-sm mb-3 px-4 py-4'>
                    <div className='flex items-center gap-3'>
                        <span className='text-blue-500 text-2xl'><FaPeopleGroup/></span>
                        <span className='font-medium text-gray-800'>3 invités</span>
                    </div>
                </div>

                {/* Services Section */}
                <div className='bg-white shadow-sm mb-3 px-4 py-4'>
                    <h2 className='font-semibold text-gray-900 text-lg mb-4'>Services</h2>
                    <ul className='flex flex-col gap-4'>
                        <ServiceLink to="/about" icon="fi-rr-info" text="À propos" />
                        <ServiceLink to="/services" icon="fi-rr-comment-question" text="Centre d'aide" />
                        <ServiceLink to="/politique" icon="fi-rr-user-lock" text="Politique de confidentialité" />
                        <ServiceLink to="/conditions" icon="fi-rr-handshake" text="Termes et Conditions d'utilisation" />
                    </ul>
                </div>

                {/* Actions Section */}
                <div className='px-4 py-4 flex flex-col gap-3'>
                    <ButtonWhatsapp className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium flex justify-center items-center gap-2 transition-colors'>
                        Service client
                    </ButtonWhatsapp>
                    <button 
                        className='w-full border-2 border-gray-200 hover:border-gray-300 py-3 rounded-lg font-medium text-gray-700 hover:text-gray-900 transition-colors'
                        onClick={() => {/* Ajoutez la logique de déconnexion ici */}}
                    >
                        Déconnexion
                    </button>
                </div>
            </div>
        </PageLayout>
    )
}

// Nouveau composant pour les liens de service
const ServiceLink = ({ to, icon, text }) => {
    return (
        <li>
            <Link 
                to={to} 
                className='flex items-center gap-3 py-2 text-gray-700 hover:text-gray-900 transition-colors'
            >
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-50'>
                    <i className={`fi ${icon} text-gray-500`}></i>
                </span>
                <span className='font-medium'>{text}</span>
            </Link>
        </li>
    )
}
