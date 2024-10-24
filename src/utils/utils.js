export class Products {
    /**
     * Produit
     * @param {number} id 
     * @param {string} name 
     * @param {string} description 
     * @param {string[]} images 
     * @param {number} prix
     */
    constructor(id,name,description,images,prix){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = images;
        this.prix = prix;
    }
}

export const produits = [
    new Products(1,'Nom du produit',"Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.",['/img/pro/p1.png','/img/pro/p2.png','/img/pro/p3.png'],8500),
    new Products(2,'Nom du produit',"Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.",['/img/pro/p4.png','/img/pro/p5.png'],3000),
    new Products(3,'Nom du produit',"Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.",['/img/pro/p12.png','/img/pro/p13.png','/img/pro/p3.png'],18000),
    new Products(4,'Nom du produit',"Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.",['/img/pro/p7.png','/img/pro/p8.png','/img/pro/p9.png'],3500),
    new Products(5,'Nom du produit',"Même chose quand la demande n'est pas disponible dans le magasin, juste les informations qui changent un peu. Ici on choisit un motif pour la non disponibilité du produit avec un joli bouton SELECT et on y ajoute un message personnalisé au besoin tjrs.",['/img/pro/p10.png','/img/pro/p6.png','/img/pro/p11.png'],15000),
]
export const sliders = [
    '/img/slides/s1.jpg',
    '/img/slides/s2.jpeg',
    '/img/slides/s3.jpg',
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
