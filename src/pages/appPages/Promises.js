import React from 'react';
import { ChevronLeft, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Promises = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-md mx-auto bg-white shadow-sm">
        {/* Header */}
        <header className="flex items-center p-4 border-b">
          <button
            onClick={handleBack}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            aria-label="Retour"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-grow"></div>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
        </header>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Competitive Pricing */}
          <section>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Comment parvenons-nous à offrir des prix aussi compétitifs ?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Nous traitons directement avec des fournisseurs et des fabricants, réduisant ainsi les coûts intermédiaires.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Nous proposons une large gamme de produits pour répondre à tous les besoins.
            </p>
          </section>

          {/* Security and Privacy */}
          <section>
            <h2 className="text-lg font-semibold">Sécurité et vie privée</h2>
            <h3 className="mt-2 text-base font-semibold">Payez en toute confiance avec nos méthodes sécurisées</h3>
            <p className="mt-2 text-sm text-gray-600">
              Nous utilisons le cryptage SSL pour protéger vos données de carte bancaire
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['visa', 'mastercard', 'amex', 'discover', 'jcb', 'applePay', 'googlePay'].map((payment) => (
                <div key={payment} className="h-8 w-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </section>

          {/* Free Shipping */}
          <section>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Livraison et retour gratuits
            </h2>
            <h3 className="mt-2 text-base font-semibold">Livraison gratuite sur les articles expédiés par nous</h3>
            <p className="mt-2 text-sm text-gray-600">
              Nous vous proposons cette offre exceptionnelle pour vous faire découvrir notre service efficace et fiable.
            </p>
          </section>

          {/* More Sections */}
          {['Garantie de livraison', 'Retour gratuit sous 90 jours', 'Ajustement du prix dans les 30 jours', 'Service client'].map((title) => (
            <section key={title} className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{title}</h2>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </section>
          ))}

          {/* Tree Planting Program */}
          <section>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Notre programme de plantation d'arbres
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Nous nous sommes associés à des organisations pour planter des arbres et soutenir les petits exploitants agricoles.
            </p>
          </section>

          {/* Customer Reviews */}
          <section>
            <h2 className="text-lg font-semibold">Avis des clients</h2>
            <div className="mt-2 bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-600">J'ai reçu un petit cadeau avec ma commande...</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Promises;
