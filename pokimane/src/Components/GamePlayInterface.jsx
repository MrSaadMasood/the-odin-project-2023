import InGameLogo from "./InGameLogo";
import ScoreBoard from "./ScoreBoard";
import PlayArea from "./PlayArea";

export default function GamePlayInterface({
  exitGame,
  isCardClickedFunction,
  cardClicked,
  gameDifficulty,
  gameLevel,
  score,
  topScore,
  gameLevelSetter,
  resetClickedCardNames,
  attemptsTillLevelIncrease,
  iterations,
  cardDataArraySetter,
  arrayWithAllCardData,
  cardClickedOnLevelIncrease,
}) {
  return (
    <>
      <InGameLogo exitGame={exitGame} />
      <ScoreBoard score={score} topScore={topScore} level={gameLevel} />
      <PlayArea
        isCardClickedFunction={isCardClickedFunction}
        cardClicked={cardClicked}
        gameDifficulty={gameDifficulty}
        gameLevel={gameLevel}
        score={score}
        gameLevelSetter={gameLevelSetter}
        resetClickedCardNames={resetClickedCardNames}
        attemptsTillLevelIncrease={attemptsTillLevelIncrease}
        iterations={iterations}
        cardDataArraySetter={cardDataArraySetter}
        arrayWithAllCardData={arrayWithAllCardData}
        cardClickedOnLevelIncrease={cardClickedOnLevelIncrease}
      />
    </>
  );
}
