

const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/donnees');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données depuis l\'API :', error);
      throw error;
    }
  };
  
  export default fetchData;