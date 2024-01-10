import { useEffect, useState } from "react";

const useGameSearch = (productID) => {
  console.log(productID);
  // state for storing game information and if fetch request is successfull the loading is set to false which
  // will trigger the componenets using it to display the results
  const [specificGameData, setSpecificGameData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // it makes the request based on the productID and stores the details of that game in speicificGameData
  useEffect(() => {
    const specificURL = `https://api.rawg.io/api/games/${productID}?key=7a8913f2e38a45e5a05781c7ac2021e8`;
    fetch(specificURL)
      .then((response) => {
         return response.json()})
      .then((data) => {
        setSpecificGameData(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [productID]);

  return [specificGameData, loading, error];
};

export default useGameSearch;
