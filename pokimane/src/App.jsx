import Card from "./Components/Card";
import { useState } from "react";
import SelectMode from "./Components/SelectMode";
import Logo from "./Components/Logo";

import ScoreBoard from "./Components/ScoreBoard";
import InGameLogo from "./Components/InGameLogo";
import PlayArea from "./Components/PlayArea";
import GameOver from "./Components/GameOver";
import Loading from "./Components/Loading";
import GamePlayInterface from "./Components/GamePlayInterface";


export default function App() {
  const [generalGameSettings, setGeneralGameSettings] = useState({
    isGameModeSelected : false,
    isGameOver : false,
    isGamePlayed : false
  })

  const [inGameSettings , setInGameSettings] = useState({
    score : 0,
    topScore : 0,
    level : 0
  })

  const [cardData, setCardData] = useState([])
  // console.log("the level is", inGameSettings.level);
  const [isCardClicked, setIsCardClicked] = useState(false)
  const [gameDifficulty, setGameDifficulty] = useState("")
  function flipCard(){
    setIsCardClicked(!isCardClicked)
  }
  if (isCardClicked){
    setTimeout(() => {
      setIsCardClicked(!isCardClicked)
    }, 1200);
  }

  function generalsettingSetter(selectedMode){
    setGameDifficulty(selectedMode)
      setGeneralGameSettings((generalGameSettings)=>({
        ...generalGameSettings,
        isGameModeSelected : true,
        isGamePlayed : true
      }))
  }

  function gameLevelSetter(level){
    setInGameSettings((inGameSettings)=>({
      ...inGameSettings,
      level : level,
    }))
  }

  const modeSetFunction = (e)=>{
    console.log(e.target.textContent);
    const selectedMode = e.target.textContent;
    if( selectedMode === "Easy"){
      generalsettingSetter(selectedMode)
      gameLevelSetter(1)
    }
    else{
      generalsettingSetter(selectedMode)
      gameLevelSetter(1)
    }
  }

  function storeData(data){
    setCardData((cardData)=>([
      ...cardData,
      {
        name: data.name,
        image: data.sprites["front_default"],
        id: data.id,
      }
    ]))
  }
  return (
    <>
      <div className="relative ">
        <div className="background h-[50rem]"></div>
        {generalGameSettings.isGamePlayed === false ? <Logo /> : ""}
        {generalGameSettings.isGameModeSelected === false ? <SelectMode handleModeSelection={modeSetFunction}/> : ""}
        {generalGameSettings.isGamePlayed === true ? <GamePlayInterface isCardClickedFunction={flipCard} cardClicked={isCardClicked} gameDifficulty={gameDifficulty} gameLevel={inGameSettings.level} storeData={storeData} cardData={cardData} /> : ""}
        
      </div>
      
    </>
   
  )

}
