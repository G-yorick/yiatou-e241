import React from 'react';
import TopBarLayout from '../layout/TopBarLayout';

const Beaute = () => {
  return (
    <TopBarLayout>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Beauté</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Ici nous ajouterons les produits */}
        </div>
      </div>
    </TopBarLayout>
  );
};

export default Beaute; 