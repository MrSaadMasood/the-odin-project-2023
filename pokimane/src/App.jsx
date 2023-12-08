import { useState } from "react";
import SelectMode from "./Components/SelectMode";
import Logo from "./Components/Logo";
import GameOver from "./Components/GameOver";
import GamePlayInterface from "./Components/GamePlayInterface";

export default function App() {
  const [generalGameSettings, setGeneralGameSettings] = useState({
    isGameModeSelected: false,
    isGameOver: false,
    isGamePlayed: false,
  });

  const [inGameSettings, setInGameSettings] = useState({
    score: 0,
    topScore: 0,
    level: 0,
  });
  const [ gameMode, setGameMode] = useState("")
  const [cardData, setCardData] = useState([]);
  const [clickedCardNames, setClickedCardNames] = useState([]);
  // console.log("the level is", inGameSettings.level);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState("");
  const [gameResult, setGameResult] = useState("Lose");
  const [attemptsRemainingCounter, setAttemptsRemainingCounter] = useState(null)
  const [countIterations , setCountIterations] = useState(null)
  const [arrayWithAllCardData , setArrayWithAllCardData] = useState([])
  const [ cardClickedOnLevelIncrease, setCardClickedOnLevelIncrease] = useState(0)

  // console.log("the clicked card namees are", clickedCardNames);
  const booleanToDisplayMenu =
    generalGameSettings.isGameModeSelected || generalGameSettings.isGameOver;

  // console.log("different cards", numberofDifferentCardsClicked);

  // if(numberofDifferentCardsClicked > 0 && numberofDifferentCardsClicked === inGameSettings.score){

  //   gameLevelSetter(inGameSettings.level + 1)
  // }
  // console.log("the attempt remaining are", attemptsRemainingCounter);

  function flipCard(e, pokeData) {
    setAttemptsRemainingCounter(attemptsRemainingCounter - 1)
    setIsCardClicked(!isCardClicked);
    gameScoreSetter(inGameSettings.score + 1);
    storeDataOfCardClicked(pokeData);
    setCardClickedOnLevelIncrease(1)
    if(attemptsRemainingCounter === 1){
      // console.log("increasing the level");
      gameLevelSetter(inGameSettings.level + 1, gameMode)
      resetClickedCardNamesFuntion()
    }
  }


  if (isCardClicked) {
    setTimeout(() => {
      setIsCardClicked(!isCardClicked);
    }, 1200);
  }

  function attemptsTillLevelIncrease(value){
    setAttemptsRemainingCounter(value)
  }

  function generalsettingSetter(selectedMode) {
    setGameDifficulty(selectedMode);
    setGeneralGameSettings((generalGameSettings) => ({
      ...generalGameSettings,
      isGameModeSelected: true,
      isGamePlayed: true,
    }));
  }

  function gameLevelSetter(level, mode) {
    // console.log("inside game level setter", level ) ;
    // console.log("inside game level setter", mode ) ;
    // console.log("inside game level score", typeof inGameSettings.score ) ;
    // console.log("inside game level setter", (mode === "Easy" && level >= 3 && inGameSettings.score >= 5 ) );
    setCardClickedOnLevelIncrease(0)
    setArrayWithAllCardData([])
    if(mode === "Easy" && level >= 3 && inGameSettings.score >= 21){
      setTimeout(() => {
        gameEndFunction()
        setGameResult("Win")
      }, 500);
    }
    else if(mode === "Hard" && level >= 3 && inGameSettings.score >= 67){
      setTimeout(() => {
        gameEndFunction()
        setGameResult("Win")
      }, 500);
    }
    else{
      iterationsSetterFunction(level, mode)
      setInGameSettings((inGameSettings) => ({
        ...inGameSettings,
        level: level,
      }));
    }

  }
  function gameEndFunction(){
    gameTopScoreSetter();
    setCardClickedOnLevelIncrease(0)
    setGeneralGameSettings((generalGameSettings) => ({
      ...generalGameSettings,
      isGameModeSelected: false,
      isGamePlayed: false,
      isGameOver: true,
    }));
    setClickedCardNames([]);
  }
  function gameScoreSetter(value) {
    setInGameSettings((inGameSettings) => ({
      ...inGameSettings,
      score: value,
    }));
  }
  function gameTopScoreSetter() {
    setInGameSettings((inGameSettings) => {
      const newtopScore = inGameSettings.score;
      return {
        ...inGameSettings,
        score: 0,
        level: 0,
        topScore: newtopScore,
      };
    });
  }

  // console.log("the card iterations are", countIterations);
  function iterationsSetterFunction(level, mode){
    // console.log("the mode is", mode);
    // console.log("the level is", level);
    if(mode === "Easy"){
      if(level === 1){
        setCountIterations(5)
        attemptsTillLevelIncrease(5)
      }
      else if (level === 2){
        setCountIterations(7)
        attemptsTillLevelIncrease(7)

      }
      else {
        setCountIterations(10)
        attemptsTillLevelIncrease(10)
      }
    }
    else if (mode === "Hard"){
      if(level === 1){
        setCountIterations(15)
        attemptsTillLevelIncrease(15)
      }
      else if (level === 2){
        setCountIterations(23)
        attemptsTillLevelIncrease(23)
      }
      else {
        setCountIterations(30)
        attemptsTillLevelIncrease(30)
      }
    }
  }
  const modeSetFunction = (e) => {
    console.log(e.target.textContent);
    const selectedMode = e.target.textContent;
    setGameMode(selectedMode)
    if (selectedMode === "Easy") {
      generalsettingSetter(selectedMode);
      gameLevelSetter(1, selectedMode);
    } else {
      generalsettingSetter(selectedMode);
      gameLevelSetter(1, selectedMode);
    }
  };

  function storeData(data) {
    setCardData((cardData) => [
      ...cardData,
      {
        name: data.name,
        image: data.sprites["front_default"],
        id: data.id,
      },
    ]);
  }

  function storeDataOfCardClicked(pokeData) {
    const pokemonName = pokeData.name;
    console.log("the name of clicked pokemon is ", pokemonName);
    if (clickedCardNames.includes(pokemonName)) {
      gameEndFunction()
    } else {
      setClickedCardNames((clickedCardNames) => [
        ...clickedCardNames,
        pokemonName,
      ]);
    }
  }

  function resetClickedCardNamesFuntion() {
    setClickedCardNames([]);
  }

  function resetGameFunction() {
    setInGameSettings({
      ...inGameSettings,
      topScore: 0,
    });
    setGeneralGameSettings({
      isGameModeSelected: false,
      isGameOver: false,
      isGamePlayed: false,
    });
    resetClickedCardNamesFuntion();
  }
  function cardDataArraySetter(data){
    console.log("the data is", data);
    setArrayWithAllCardData((arrayWithAllCardData)=>{
      const updatedArray = [...arrayWithAllCardData, data];
      // const updatedArray = prevArray.push(data)
      return updatedArray
    })
  }
  return (
    <>
      <div className="relative ">
        <div className="background h-[50rem]"></div>
        {generalGameSettings.isGamePlayed === false ? <Logo /> : ""}
        {booleanToDisplayMenu === false ? (
          <SelectMode handleModeSelection={modeSetFunction} />
        ) : (
          ""
        )}
        {generalGameSettings.isGamePlayed === true ? (
          <GamePlayInterface
            isCardClickedFunction={flipCard}
            cardClicked={isCardClicked}
            gameDifficulty={gameDifficulty}
            gameLevel={inGameSettings.level}
            storeData={storeData}
            cardData={cardData}
            score={inGameSettings.score}
            topScore={inGameSettings.topScore}
            gameLevelSetter={gameLevelSetter}
            resetClickedCardNames={resetClickedCardNamesFuntion}
            attemptsTillLevelIncrease={attemptsTillLevelIncrease}
            iterations={countIterations}
            cardDataArraySetter={cardDataArraySetter}
            arrayWithAllCardData={arrayWithAllCardData}
            cardClickedOnLevelIncrease={cardClickedOnLevelIncrease}
          />
        ) : (
          ""
        )}
        {generalGameSettings.isGameOver === true ? (
          <GameOver
            result={gameResult}
            topScore={inGameSettings.topScore}
            resetGameFunction={resetGameFunction}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
