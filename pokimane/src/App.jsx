import Card from "./Components/Card";
import { useState } from "react";
import SelectMode from "./Components/SelectMode";
import Logo from "./Components/Logo";

import ScoreBoard from "./Components/ScoreBoard";
import InGameLogo from "./Components/InGameLogo";
import PlayArea from "./Components/PlayArea";
import GameOver from "./Components/GameOver";
import Loading from "./Components/Loading";


export default function App() {
  const [isCardClicked, setIsCardClicked] = useState(false)
  const [gameDifficulty, setGameDifficulty] = useState("Easy")
  function flipCard(){
    setIsCardClicked(!isCardClicked)
  }
  if (isCardClicked){
    setTimeout(() => {
      setIsCardClicked(!isCardClicked)
    }, 1200);
  }

  return (
    // <Card isCardClickedFunction={flipCard} cardClicked={isCardClicked} />

    <>
      <div className="relative ">
        <div className="background h-[50rem]"></div>
        {/* <Logo /> */}
        {/* <SelectMode /> */}
        {/* <ScoreBoard />
        <InGameLogo />
        <PlayArea isCardClickedFunction={flipCard} cardClicked={isCardClicked} gameDifficulty={gameDifficulty}/> */}
        {/* <GameOver /> */}
        {/* <Loading /> */}
      </div>
      
    </>
   
  )

}
