import sampleImage from "../assets/sampleImage.jpg";
import back from "../assets/back.jpg";
import { useEffect, useState, useRef } from "react";

export default function Card({
  isCardClickedFunction,
  cardClicked,
  gameDifficulty,
  storeData,
  cardData,
  gameLevel,
  addDataToArray,
  cardDataArraySetter,
  dataInArrayPassed,
  cardClickedOnLevelIncrease
}) {
  const isFirstRender = useRef(true);
  // console.log("the card data is", cardData);
  const [pokeData, setPokeData] = useState({});
  // console.log("the data passed in card is", dataInArrayPassed);
  const dataToUse = cardClickedOnLevelIncrease ===  0 ? pokeData : dataInArrayPassed
  const easySizeSettings =
    "w-16 h-24 sm:w-24 sm:h-36 md:w-32 md:h-44 lg:w-[5.5rem] lg:h-[7rem]";
  const hardSizeSettings =
    "w-12 h-[5.2rem] sm:w-20 sm:h-[6.3rem] md:w-[5.5rem] md:h-[7rem]  lg:w-[5.5rem] lg:h-[7rem]";
  const isGameEasy =
    gameDifficulty === "Easy" ? easySizeSettings : hardSizeSettings;

  //   console.log("the pokemon data is",pokeData);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (gameLevel > 0) {
      const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * 1000 + 1
      )}`;
      console.log("the url inside is", url);
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
        // storeData(result)
      });
    }
  }, [gameLevel]);

  useEffect(()=>{
      if(Object.keys(pokeData).length > 0){
        cardDataArraySetter(dataToUse)
  }
  },[pokeData])
  return (
    <div
      className={`container ${isGameEasy} rounded-md overflow-hidden relative mt-2 ml-3 md:mt-4 md:ml-5`}
      onClick={(e) => isCardClickedFunction(e, dataToUse)}
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
