
import { useEffect, useState, useRef } from "react";

export default function Card({
  isCardClickedFunction,
  cardClicked,
  gameDifficulty,
  gameLevel,
  cardDataArraySetter,
  dataInArrayPassed,
  cardClickedOnLevelIncrease
}) {

  // when the is first fetched its stored in this state and displayed on the div on all other subsequent
  // renders the cards are shuffles and its not used
  const [pokeData, setPokeData] = useState({});

  const dataToUse = cardClickedOnLevelIncrease ===  0 ? pokeData : dataInArrayPassed
  // CSS settings based on the game mode selected
  const easySizeSettings =
    "w-16 h-24 sm:w-24 sm:h-36 md:w-32 md:h-44 lg:w-[5.5rem] lg:h-[7rem] xl:w-[8.5rem] xl:h-[10rem]";
  const hardSizeSettings =
    "w-12 h-[5.2rem] sm:w-20 sm:h-[6.3rem] md:w-[5.5rem] md:h-[7rem]  lg:w-[5.5rem] lg:h-[7rem] xl:w-[7.5rem] xl:h-[9rem]";
  const isGameEasy =
    gameDifficulty === "Easy" ? easySizeSettings : hardSizeSettings;

  // for fetching the pokemons data from the apis and displaying it. if the game level is increaed the data is fetched again
  useEffect(() => {

    if (gameLevel > 0) {
      const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * 1000 + 1
      )}`;
      const fetcher = async () => {
        const result = await fetch(url);
        const data = await result.json();
        return data;
      };

      fetcher().then((result) => {
        setPokeData({
          name: result.name,
          image: result.sprites["front_default"],
          id: result.id,
        });
      });
    }
  }, [gameLevel]);

  // to check if there the pokedata is not empty it then sends the data to the app Component so that the data of all cards can be
  // stored in that array
  useEffect(()=>{
      if(Object.keys(pokeData).length > 0){
        cardDataArraySetter(dataToUse)
  }
  },[pokeData])
  return (
    <div
      className={`container ${isGameEasy} rounded-md overflow-hidden relative mt-2 ml-3 md:mt-4 md:ml-5`}
      onClick={(e) => isCardClickedFunction(e, dataToUse)}
      data-testid="container"
    >
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className={` box-contents ease-in duration-200`}>
        <div className={`card relative ${cardClicked ? "flipped" : ""}`}>
          <div
            className={`bg-[#ffc300] card-face card-front ${isGameEasy} rounded-md overflow-hidden absolute`}
          >
            <img src={dataToUse.image} alt="" width={"2000px"} />
            <div
              className="bg-black text-white  flex justify-center items-center text-[8px] 
            sm:text-[14px] md:text-[12px] lg:text-[14px]"
            >
              {dataToUse.name}
            </div>
          </div>
          <div
            className={`card-face card-back ${isGameEasy} rounded-md overflow-hidden absolute `}
          ></div>
        </div>
      </div>
    </div>
  );
}
