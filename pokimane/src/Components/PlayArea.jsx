import Card from "./Card";

export default function PlayArea({
  isCardClickedFunction,
  cardClicked,
  gameDifficulty,
  gameLevel,
  iterations,
  cardDataArraySetter,
  arrayWithAllCardData,
  cardClickedOnLevelIncrease,
}) {
  const uselessArray = [];

  if (iterations > 0) {
    for (let i = 0; i < iterations; i++) {
      uselessArray.push(i);
    }
  }

  function shuffleArray(array) {
    let j;
    for (let i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const cardDataArray =
    cardClickedOnLevelIncrease === 0
      ? arrayWithAllCardData
      : shuffleArray(arrayWithAllCardData);

  return (
    <div className="absolute play-area top-[55%] left-[50%] w-[90%] h-auto p-2">
      <div className="flex justify-center items-center flex-wrap">
        {uselessArray.map((_, index) => {
          return (
            <div key={index}>
              <Card
                isCardClickedFunction={isCardClickedFunction}
                cardClicked={cardClicked}
                gameDifficulty={gameDifficulty}
                gameLevel={gameLevel}
                cardDataArraySetter={cardDataArraySetter}
                dataInArrayPassed={cardDataArray[index]}
                cardClickedOnLevelIncrease={cardClickedOnLevelIncrease}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
