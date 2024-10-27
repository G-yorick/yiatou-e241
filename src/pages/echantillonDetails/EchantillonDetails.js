import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEchantillonDetails } from "../../utils/utils"; // Assurez-vous que cette fonction existe dans utils.js

const EchantillonDetails = () => {
  const { id } = useParams();
  const [echantillon, setEchantillon] = useState(null);

  useEffect(() => {
    const loadEchantillonDetails = async () => {
      try {
        const details = await fetchEchantillonDetails(id);
        setEchantillon(details);
      } catch (error) {
        console.error('Erreur lors du chargement des détails de l\'échantillon:', error);
      }
    };

    loadEchantillonDetails();
  }, [id]);

  if (!echantillon) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Détails de l'échantillon</h1>
      <p>ID de l'échantillon: {echantillon.id}</p>
      <p>Nom: {echantillon.name}</p>
      <p>Prix: {echantillon.price} FCFA</p>
      {/* Ajoutez d'autres détails de l'échantillon ici */}
    </div>
  );
};

export default EchantillonDetails;
