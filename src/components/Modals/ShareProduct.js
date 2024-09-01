import {IoLogoWhatsapp } from "react-icons/io5";
import React from 'react'
import ModalModel from "./ModalModel";
import ButtonCta from "../Buttons/ButtonCta";

export default function ShareProduct({toggleActiveShare,activeShare,product = null,isProduct = true}) {
  console.log('depuis produit');
  console.log(product);
  console.log('depuis produit');
  
    const toggleModal = () =>{
        try {
            toggleActiveShare();
        } catch (error) {
            console.log("toggleActiveShare doit etre une fonction");
            
        }
      }
  return (
    <ModalModel onClose={toggleModal} topContent={isProduct ? <ProductImage image={product?.image[0]}/> : null} icon={<IconMoney/>} title="Partage et gagne" active={activeShare}>
        <ModalImageContent isProduct={isProduct}/>
      </ModalModel>
  )
}
function ProductImage({image = ""}) {
    return (
      <div className="w-[130px] mb-4 h-[130px] bg-white rounded overflow-hidden flex justify-center items-center">
        <img src={image} alt="product share" className="w-full h-full object-cover"/>
      </div>
    );
}


function ModalImageContent({isProduct = true}) {
    return (
      <div>
        {!isProduct ? 
        <p>Tu gagneras encore</p> : 
        <p className="text-center my-3">
          Tu gagneras <strong>1,500 FCFA</strong> à chaque fois qu'un de tes amis achetera cet article avec ton lien.
        </p>
        }
        
        <div className="flex gap-3 justify-between mt-10">
          <div className="flex flex-col gap-1 justify-center items-center">
            <IoLogoWhatsapp color="green" size={30}/>
            <p className="font-medium text-gray-700">Whatsapp</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <IoLogoWhatsapp color="green" size={30}/>
            <p className="font-medium text-gray-700">Whatsapp</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <IoLogoWhatsapp color="green" size={30}/>
            <p className="font-medium text-gray-700">Whatsapp</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <IoLogoWhatsapp color="green" size={30}/>
            <p className="font-medium text-gray-700">Whatsapp</p>
          </div>
        </div>
        <button className="mt-10 text-lg rounded-full font-medium text-gray-700 w-full py-2 px-2 bg-gray-200 mb-3 border-2 border-dashed border-gray-400">
          Copier le lien
        </button>
        <ButtonCta>
          Connexion
        </ButtonCta>
      </div>
    );
}
function IconMoney() {
    return (
      <span className="px-2 py-2 text-white rounded-full bg-green-600">
        <i className="fi fi-sr-sack-dollar flex"></i>
      </span>
    )
  }
