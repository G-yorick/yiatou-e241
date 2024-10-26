export class Products {
    /**
     * Produit
     * @param {number} id 
     * @param {string} name 
     * @param {string} description 
     * @param {string[]} images 
     * @param {number} prix
     * @param {boolean} sampleAvailable
     * @param {number} minPurchase
     */
    constructor(id, name, description, images, prix, sampleAvailable, minPurchase) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = images;
        this.prix = prix;
        this.sampleAvailable = sampleAvailable;
        this.minPurchase = minPurchase;
    }
}

export const produits = [
    new Products(1, 'Sac à dos', "Description du produit,Description du produit,Description du produit 1,Description du produit 1...,Description du produit 1...,Description du produit 1...", ['/img/pro/p1.png','/img/pro/p2.png','/img/pro/p3.png'], 8500, true, 0),
    new Products(2, 'Cracheur', "Description du produit 2...", ['/img/pro/p4.png','/img/pro/p5.png'], 3000, false, 5),
    new Products(3, 'Lunette de luxe', "Description du produit 3...", ['/img/pro/p12.png','/img/pro/p13.png'], 18000, true, 0),
    new Products(4, 'Clé USB Type-C', "Description du produit 4...", ['/img/pro/p7.png','/img/pro/p8.png','/img/pro/p9.png'], 3500, false, 10),
    new Products(5, 'Mini Caméra', "Description du produit 5...", ['/img/pro/p10.png','/img/pro/p6.png'], 15000, true, 0),
]
export const sliders = [
    '/img/slides/s1.png',
    '/img/slides/s2.png',
    '/img/slides/s3.png',
];

export const calculateDeliveryPrice = (basePrice) => {
  // Vous pouvez ajuster cette logique selon vos besoins
  return basePrice;
};

export const calculateDeliveryDates = (city) => {
  const today = new Date();
  const baseDays = 10;
  const additionalDays = city === 'Libreville' ? 0 : 2;
  const totalDays = baseDays + additionalDays;

  const startDate = new Date(today.getTime() + (baseDays * 24 * 60 * 60 * 1000));
  const endDate = new Date(today.getTime() + (totalDays * 24 * 60 * 60 * 1000));

  return {
    startDate: startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
    endDate: endDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
    daysRange: `${baseDays} - ${totalDays}`,
  };
};

export const formatCurrency = (amount, currency) => {
  return `${amount.toLocaleString()} ${currency}`;
};

export const addDaysToDate = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const formatDateRange = (startDate, endDate) => {
  const options = { day: 'numeric', month: 'short' };
  return `${startDate.toLocaleDateString('fr-FR', options)} - ${endDate.toLocaleDateString('fr-FR', options)}`;
};

export const samples = [
  { image: "/img/pro/p6.png", name: "Produit 1", price: "1000 FCFA" },
  { image: "/img/pro/p7.png", name: "Produit 2", price: "1500 FCFA" },
  { image: "/img/pro/p8.png", name: "Produit 3", price: "2000 FCFA" },
  { image: "/img/pro/p9.png", name: "Produit 4", price: "2400 FCFA" },
  { image: "/img/pro/p10.png", name: "Produit 5", price: "2440 FCFA" },
  // Ajoutez d'autres échantillons si nécessaire
];

export const getProductById = async (id) => {
  // Implémentation de la fonction
  // ...
};
