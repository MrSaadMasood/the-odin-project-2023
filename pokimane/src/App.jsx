import { useEffect, useRef, useState } from "react";
import SelectMode from "./Components/SelectMode";
import Logo from "./Components/Logo";
import GameOver from "./Components/GameOver";
import GamePlayInterface from "./Components/GamePlayInterface";

import flipcardSound from "/assets/Sounds/flipcard-91468.mp3";
import outAudio from "/assets/Sounds/intro_track.mp3";
import levelUp from "/assets/Sounds/levelup.mp3";
import winSound from "/assets/Sounds/win.mp3";
import loseSound from "/assets/Sounds/lose.mp3";
import buttonClick from "/assets/Sounds/click.wav";

import playAudio from "./playAudio";

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
  const [gameMode, setGameMode] = useState("");
  const [clickedCardNames, setClickedCardNames] = useState([]);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState("");
  const [gameResult, setGameResult] = useState("Lose");
  const [attemptsRemainingCounter, setAttemptsRemainingCounter] =
    useState(null);
  const [countIterations, setCountIterations] = useState(null);
  const [arrayWithAllCardData, setArrayWithAllCardData] = useState([]);
  const [cardClickedOnLevelIncrease, setCardClickedOnLevelIncrease] =
    useState(0);
  const outroAudio = useRef(new Audio(outAudio));
  const buttonClickSound = new Audio(buttonClick);

  buttonClickSound.volume = 0.4;
  const booleanToDisplayMenu =
    generalGameSettings.isGameModeSelected || generalGameSettings.isGameOver;

  useEffect(() => {
    if (inGameSettings.level > 1 && inGameSettings.level < 4) {
      const leveledUp = new Audio(levelUp);
      leveledUp.volume = 0.5;
      leveledUp.play();
    }
  }, [inGameSettings.level]);

  useEffect(() => {
    const gameWonSound = new Audio(winSound);
    const gameLoseSound = new Audio(loseSound);
    if (generalGameSettings.isGameOver) {
      gameResult === "Win" ? gameWonSound.play() : gameLoseSound.play();
      setTimeout(() => {
        outroAudio.current.volume = 0.2;
        outroAudio.current.play();
      }, 2000);
    } else {
      outroAudio.current.pause();
      outroAudio.current.currentTime = 0;
    }
  }, [generalGameSettings.isGameOver, gameResult]);

  useEffect(() => {
    if (generalGameSettings.isGameModeSelected && isCardClicked) {
      const cardFlipSound = new Audio(flipcardSound);
      playAudio(cardFlipSound);
    }
  }, [generalGameSettings.isGameModeSelected, isCardClicked]);
  function flipCard(e, pokeData) {
    setAttemptsRemainingCounter((prevCounter) => prevCounter - 1);
    setIsCardClicked(!isCardClicked);
    gameScoreSetter(inGameSettings.score + 1);
    storeDataOfCardClicked(pokeData);
    setCardClickedOnLevelIncrease(1);
    if (attemptsRemainingCounter === 1) {
      gameLevelSetter(inGameSettings.level + 1, gameMode);
      resetClickedCardNamesFuntion();
    }
  }

  if (isCardClicked) {
    setTimeout(() => {
      setIsCardClicked(!isCardClicked);
    }, 1200);
  }

  function attemptsTillLevelIncrease(value) {
    setAttemptsRemainingCounter(value);
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
    setCardClickedOnLevelIncrease(0);
    setArrayWithAllCardData([]);
    if (mode === "Easy" && level >= 3 && inGameSettings.score >= 21) {
      setTimeout(() => {
        gameEndFunction();
        setGameResult("Win");
      }, 500);
    } else if (mode === "Hard" && level >= 3 && inGameSettings.score >= 67) {
      setTimeout(() => {
        gameEndFunction();
        setGameResult("Win");
      }, 500);
    } else {
      iterationsSetterFunction(level, mode);
      setInGameSettings((inGameSettings) => ({
        ...inGameSettings,
        level: level,
      }));
    }
  }
  function gameEndFunction() {
    gameTopScoreSetter();
    setCardClickedOnLevelIncrease(0);
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

  function iterationsSetterFunction(level, mode) {
    if (mode === "Easy") {
      if (level === 1) {
        setCountIterations(5);
        attemptsTillLevelIncrease(5);
      } else if (level === 2) {
        setCountIterations(7);
        attemptsTillLevelIncrease(7);
      } else {
        setCountIterations(10);
        attemptsTillLevelIncrease(10);
      }
    } else if (mode === "Hard") {
      if (level === 1) {
        setCountIterations(15);
        attemptsTillLevelIncrease(15);
      } else if (level === 2) {
        setCountIterations(23);
        attemptsTillLevelIncrease(23);
      } else {
        setCountIterations(30);
        attemptsTillLevelIncrease(30);
      }
    }
  }
  const modeSetFunction = (e) => {
    buttonClickSound.play();
    const selectedMode = e.target.textContent;
    setGameMode(selectedMode);
    if (selectedMode === "Easy") {
      generalsettingSetter(selectedMode);
      gameLevelSetter(1, selectedMode);
    } else {
      generalsettingSetter(selectedMode);
      gameLevelSetter(1, selectedMode);
    }
  };

  function storeDataOfCardClicked(pokeData) {
    const pokemonName = pokeData.name;
    if (clickedCardNames.includes(pokemonName)) {
      gameEndFunction();
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
  function cardDataArraySetter(data) {
    setArrayWithAllCardData((arrayWithAllCardData) => {
      const updatedArray = [...arrayWithAllCardData, data];
      return updatedArray;
    });
  }
  function exitGame() {
    setGeneralGameSettings(() => ({
      isGameModeSelected: false,
      isGameOver: false,
      isGamePlayed: false,
    }));
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
            exitGame={exitGame}
            isCardClickedFunction={flipCard}
            cardClicked={isCardClicked}
            gameDifficulty={gameDifficulty}
            gameLevel={inGameSettings.level}
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
