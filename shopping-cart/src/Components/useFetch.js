import { useEffect, useState } from "react";

const useFetch = (genre) => {
  // state for storing game information and if fetch request is successfull the loading is set to false which
  // will trigger the componenets using it to display the results
  const [gameData, setGameData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // based on if the genre value is given the url is used
  // if no value is given the default url is used
  useEffect(() => {
    const url = `https://api.rawg.io/api/games?key=7a8913f2e38a45e5a05781c7ac2021e8&page_size=40`;
    const urlToUse =
      genre === ""
        ? url
        : `https://api.rawg.io/api/games?key=7a8913f2e38a45e5a05781c7ac2021e8&page_size=40&genres=${genre}`;
    fetch(urlToUse)
      .then((response) => response.json())
      .then((data) => {
        const game = data.results;
        setGameData(game);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [genre]);
  return [gameData, loading, error];
};

export default useFetch;
