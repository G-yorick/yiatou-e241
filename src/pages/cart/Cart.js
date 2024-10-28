import { useState } from 'react'
import { Trash2, Plus, Minus } from 'lucide-react'
import TopBarWithButtonBack from '../../components/topBar/TopBarWithButtonBack'
import PageLayout from '../layout/PageLayout'
import ButtonCta from "../../components/Buttons/ButtonCta";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Clé USB 128 GB', price: 15000, quantity: 0, image: '/img/pro/p7.png' },
    { id: 2, name: 'Clé USB 14 GB', price: 7000, quantity: 0, image: '/img/pro/p8.png' },
    { id: 3, name: 'Clé USB 4 GB', price: 2500, quantity: 0, image: '/img/pro/p9.png' },
  ])

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <PageLayout
      topBar={
        <TopBarWithButtonBack
          link="/"
          className="bg-white"
          title="Panier"
        />
      }
    >
      <div className="w-full">
        <div className="px-1 space-y-3">
          {cartItems.map(item => (
            <div key={item.id} className="relative">
              <div className="bg-white p-2 flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    className="rounded text-purple-600 focus:ring-purple-500"
                    aria-label={`Sélectionner ${item.name}`}
                  />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover"
                    loading="lazy"
                  />
                  <div className="flex-grow">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.price.toLocaleString()} FCFA</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label={`Supprimer ${item.name} du panier`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <div className="flex items-center space-x-1 border border-[#cccccc] rounded-full">
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                        aria-label="Diminuer la quantité"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] bg-gray-200 w-full"></div>
              </div>
            </div>
          ))}
          
          <div role="alert" className="bg-red-100 border border-red-300 text-[#333333] p-3 rounded-full text-sm mx-1 text-center translate-y-10">
            Votre panier contient des articles n'ayant pas les mêmes délais de livraison.
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4 ">
            <span className="font-semibold text-black">TOTAL</span>
            <span className="font-semibold text-black">{total.toLocaleString()} FCFA</span>
          </div>
          <ButtonCta
          className="flex-1 text-lg font-bold"
        >
          Commander
        </ButtonCta>
        </div>
      </div>
    </PageLayout>
  )
}

export default Cart
