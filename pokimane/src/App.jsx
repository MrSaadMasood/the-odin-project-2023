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
import Loading from "./Components/Loading";

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
  // state for name of the cards clicked which can be used to check if the already clicked card is clicked again
  const [clickedCardNames, setClickedCardNames] = useState([]);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState("");
  const [gameResult, setGameResult] = useState("Lose");
  // this state for how many attempts till you move to the next level
  const [attemptsRemainingCounter, setAttemptsRemainingCounter] =
    useState(null);
  // this state for setting the number for cards to be displayed
  const [countIterations, setCountIterations] = useState(null);
  // main array containing all cards data
  const [arrayWithAllCardData, setArrayWithAllCardData] = useState([]);
  // this state is used to to check if a card is clicked after the level is incresaed. at every level increase it is
  // reset to 0
  const [cardClickedOnLevelIncrease, setCardClickedOnLevelIncrease] =
    useState(0);
  const [loadingScreen, setLoadingScreen] = useState(true);

  // variables for the sounds
  const outroAudio = useRef(new Audio(outAudio));
  const buttonClickSound = new Audio(buttonClick);
  buttonClickSound.volume = 0.4;
  
  // a variable used to display the main menu if the game has yet to start or is over
  const booleanToDisplayMenu =
    generalGameSettings.isGameModeSelected || generalGameSettings.isGameOver;

  // sets the loading screen to false removing it after 2 seconds
  if (loadingScreen === true) {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2000);
  }
  // basically used to flip the card automatically
  if (isCardClicked) {
    setTimeout(() => {
      setIsCardClicked(!isCardClicked);
    }, 1200);
  }

  // for level up sound
  useEffect(() => {
    if (inGameSettings.level > 1 && inGameSettings.level < 4) {
      const leveledUp = new Audio(levelUp);
      leveledUp.volume = 0.5;
      leveledUp.play();
    }
  }, [inGameSettings.level]);
  // for game won game loose and outro sound when the game is over
  useEffect(() => {
    const gameWonSound = new Audio(winSound);
    const gameLoseSound = new Audio(loseSound);

    if (generalGameSettings.isGameOver) {
      gameResult === "Win" ? gameWonSound.play() : gameLoseSound.play();
      setTimeout(() => {
        outroAudio.current.volume = 0.2;
        outroAudio.current.play();
      }, 2000);
    } 
    else {
      outroAudio.current.pause();
      outroAudio.current.currentTime = 0;
    }
  }, [generalGameSettings.isGameOver, gameResult]);

  // for card flip sound
  useEffect(() => {
    if (generalGameSettings.isGameModeSelected && isCardClicked) {
      const cardFlipSound = new Audio(flipcardSound);
      playAudio(cardFlipSound);
    }
  }, [generalGameSettings.isGameModeSelected, isCardClicked]);

  // when the card is clicked its flips the card sets the attempts remaining, sets score, stores the name of the card
  // clicked in the array / state and if the remaining attempt are 1 it sets the increases the level and empties the 
  // containing all names of the cards that were clicked
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

  // for setting the attempts till level increase
  function attemptsTillLevelIncrease(value) {
    setAttemptsRemainingCounter(value);
  }

  // when the mode is selected, it sets the difficulty level and and sets the general game settings
  function generalsettingSetter(selectedMode) {
    setGameDifficulty(selectedMode);
    setGeneralGameSettings((generalGameSettings) => ({
      ...generalGameSettings,
      isGameModeSelected: true,
      isGamePlayed: true,
    }));
  }

  // on level increase it displays the loading screen sets the card clicked to 0 to know if any card is clicked
  // or not empties the array contaning all call names. then its checks for the game mode and the score
  // if the score is maxed out then its ends the game and displays the results. otherwise it sets increases the level
  // by 1.
  function gameLevelSetter(level, mode) {

    setLoadingScreen(true);
    setCardClickedOnLevelIncrease(0);
    setArrayWithAllCardData([]);

    if (mode === "Easy" && level >= 3 && inGameSettings.score >= 21) {
      setTimeout(() => {
        gameEndFunction();
        setGameResult("Win");
      }, 500);
    } 
    else if (mode === "Hard" && level >= 3 && inGameSettings.score >= 67) {
      setTimeout(() => {
        gameEndFunction();
        setGameResult("Win");
      }, 500);
    } 
    else {
      iterationsSetterFunction(level, mode);
      setInGameSettings((inGameSettings) => ({
        ...inGameSettings,
        level: level,
      }));
    }
  }

  // sets the top score to be displayed when the game ends and also sets the game settigs so that game end meny is displayed
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

  // it sets the game score
  function gameScoreSetter(value) {
    setInGameSettings((inGameSettings) => ({
      ...inGameSettings,
      score: value,
    }));
  }

  // it sets the games top score
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

  // it sets the number of times cards needs to be iterated or displayed based on the level and mode
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

  // its sets the mode sets the game setting to the desired mode
  const modeSetFunction = (e) => {
    buttonClickSound.play();
    const selectedMode = e.target.textContent;
    setGameMode(selectedMode);

    if (selectedMode === "Easy") {
      generalsettingSetter(selectedMode);
      gameLevelSetter(1, selectedMode);
    } 
    else {
      generalsettingSetter(selectedMode);
      gameLevelSetter(1, selectedMode);
    }
  };

  // it stores the name of clicked cards in the array and checks if the name is already in the array
  // if yes then you loose the game and game over settigs are displayed
  function storeDataOfCardClicked(pokeData) {
    const pokemonName = pokeData.name;

    if (clickedCardNames.includes(pokemonName)) {
      setInGameSettings((inGameSettings) => {
        // let newScore = inGameSettings.score - 1;
        return {
          ...inGameSettings,
          score: inGameSettings.score - 1,
        };
      });
      gameEndFunction();
    } 
    else {
      setClickedCardNames((clickedCardNames) => [
        ...clickedCardNames,
        pokemonName,
      ]);
    }
  }

  // resets the clicked cards name function
  function resetClickedCardNamesFuntion() {
    setClickedCardNames([]);
  }

  // when the game is over it resets the values to default
  function resetGameFunction() {
    setInGameSettings((inGameSettings)=>({
      ...inGameSettings,
      level : 0,
      score : 0,
    }));
    setGeneralGameSettings({
      isGameModeSelected: false,
      isGameOver: false,
      isGamePlayed: false,
    });
    resetClickedCardNamesFuntion();
  }

  // all cards that are displayed their data gets loaded in the array and which is used for shuffling the cards
  function cardDataArraySetter(data) {
    setArrayWithAllCardData((arrayWithAllCardData) => {
      const updatedArray = [...arrayWithAllCardData, data];
      return updatedArray;
    });
  }

  return (
    <>
      <div className="relative ">
        <div className="background h-[50rem]"></div>
        {loadingScreen === true ? (
          <Loading />
        ) : (
          <>
            {generalGameSettings.isGamePlayed === false ? <Logo /> : ""}
            {booleanToDisplayMenu === false ? (
              <SelectMode handleModeSelection={modeSetFunction} />
            ) : (
              ""
            )}
            {generalGameSettings.isGamePlayed === true ? (
              <GamePlayInterface
                resetGameFunction={resetGameFunction}
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
          </>
        )}
      </div>
    </>
  );
}
