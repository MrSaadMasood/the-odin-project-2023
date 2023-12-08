import InGameLogo from "./InGameLogo";
import ScoreBoard from "./ScoreBoard";
import PlayArea from "./PlayArea";

export default function GamePlayInterface({
  isCardClickedFunction,
  cardClicked,
  gameDifficulty,
  gameLevel,
  storeData,
  cardData,
  score,
  topScore,
  gameLevelSetter,
  resetClickedCardNames,
  attemptsTillLevelIncrease,
  iterations,
  cardDataArraySetter,
  arrayWithAllCardData,
  cardClickedOnLevelIncrease,

  // cardIterations={cardIterations}
}) {
  return (
    <>
      <InGameLogo />
      <ScoreBoard score={score} topScore={topScore} level={gameLevel} />
      <PlayArea
        isCardClickedFunction={isCardClickedFunction}
        cardClicked={cardClicked}
        gameDifficulty={gameDifficulty}
        gameLevel={gameLevel}
        storeData={storeData}
        cardData={cardData}
        score={score}
        gameLevelSetter={gameLevelSetter}
        resetClickedCardNames={resetClickedCardNames}
        // cardIterations={cardIterations}
        attemptsTillLevelIncrease={attemptsTillLevelIncrease}
        iterations={iterations}
        cardDataArraySetter={cardDataArraySetter}
        arrayWithAllCardData={arrayWithAllCardData}
        cardClickedOnLevelIncrease={cardClickedOnLevelIncrease}
      />
    </>
  );
}
