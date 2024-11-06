import React, { useState } from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";

// Données des produits (à déplacer vers un fichier séparé plus tard)
const products = [
  {
    id: 1,
    title: 'Robe d\'été fleurie',
    image: '/img/produit/femme/robe-fleurie.jpeg',
    price: 2000,
    category: 'robes'
  },
  {
    id: 2,
    title: 'Top basique blanc',
    image: '/img/produit/femme/tops.webp',
    price: 200,
    category: 'tops'
  },
  {
    id: 3,
    title: 'Pantalon',
    image: '/img/produit/femme/pantalon.jpeg',
    price: 200,
    category: 'pantalons'
  },
  {
    id: 4,
    title: 'Jupe',
    image: '/img/produit/femme/jupe.jpeg',
    price: 200,
    category: 'jupes'
  },
  {
    id: 5,
    title: 'Accessoires',
    image: '/img/produit/femme/accessoires.jpeg',
    price: 200,
    category: 'accessoires'
  },
  // Ajoutez d'autres produits...
];

const categoryItems = [
  {
    id: 'all',
    title: 'Tout',
    image: '/images/categories/all/',
    link: '/femme/all'
  },
  {
    id: 1,
    title: 'Robes',
    image: '/img/produit/femme/robe-fleurie.jpeg',
    link: '/femme/robes',
    category: 'robes'
  },
  {
    id: 2,
    title: 'Tops',
    image: '/img/produit/femme/tops.webp',
    link: '/femme/tops',
    category: 'tops'
  },
  {
    id: 3,
    title: 'Pantalons',
    image: '/img/produit/femme/pantalon.jpeg',
    link: '/femme/pantalons',
    category: 'pantalons'
  },
  {
    id: 4,
    title: 'Jupes',
    image: '/img/produit/femme/jupe.jpeg',
    link: '/femme/jupes',
    category: 'jupes'
  },
  {
    id: 5,
    title: 'Accessoires',
    image: '/img/produit/femme/accessoires.jpeg',
    link: '/femme/accessoires',
    category: 'accessoires'
  }
];

const Femme = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (link, category) => {
    setSelectedCategory(category || 'all');
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <div className="flex flex-col h-full bg-gray-50 translate-y-24">
        {/* Catégories rondes avec défilement horizontal */}
        <div className="flex gap-4 px-4 py-6 overflow-x-auto bg-white mb-2">
          {categoryItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-1 cursor-pointer min-w-[4rem]"
              onClick={() => handleCategoryClick(item.link, item.category)}
              role="button"
              tabIndex={0}
              aria-label={`Catégorie ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(item.link, item.category);
                }
              }}
            >
              <div className={`w-16 h-16 rounded-full overflow-hidden shadow-sm ${
                selectedCategory === (item.category || 'all') ? 'ring-2 ring-black' : ''
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`text-xs whitespace-nowrap ${
                selectedCategory === (item.category || 'all') 
                  ? 'p-0.4 px-3 bg-black text-white text-sm rounded-full' 
                  : 'text-gray-800'
              }`}>
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Grille de produits filtrés */}
        <div className="grid grid-cols-2 gap-4 p-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative w-full pt-[100%]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  {product.price.toFixed(2)} FCFA
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Femme; 