import React, { useState } from 'react';
import fetchData from '../utils/api';

const DonneesComponent = () => {
  const [donnees, setDonnees] = useState([]);
  const [afficherDonnees, setAfficherDonnees] = useState(false);

  const handleAfficherDonnees = async () => {
    try {
      const data = await fetchData();
      setDonnees(data);
      setAfficherDonnees(true);
    } catch (error) {
      
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <div>
      <h2>Données depuis l'API :</h2>
      <button onClick={handleAfficherDonnees}>Afficher les données</button>
      {afficherDonnees && (
        <ul>
          {donnees.map((item) => (
            <li key={item.id}>{item.nom} - {item.valeur}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonneesComponent;
