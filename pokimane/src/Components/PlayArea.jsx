import Card from "./Card";

export default function PlayArea({isCardClickedFunction, cardClicked, gameDifficulty, gameLevel, storeData, cardData}){
    let cardIterations;
    const uselessArray = []
    if(gameLevel === 1){
        cardIterations = 5;
    }
    else if(gameLevel === 2){
        cardIterations = 7
    }
    else if (gameLevel === 3){
        cardIterations = 10
    }
    if (cardIterations > 0){
        for (let i = 0; i < cardIterations; i++){
            uselessArray.push(i)
        }
    }
    function randomNumberGenerator(){
        return Math.floor((Math.random() * 1000) + 1)
    }

    return (
        <div className="absolute play-area top-[55%] left-[50%] w-[90%] h-auto p-2"> 
            <div className="flex justify-center items-center flex-wrap">
            {uselessArray.map((_ , index)=>{
                return (
                    <div key={index}>
                        <Card isCardClickedFunction={isCardClickedFunction} cardClicked={cardClicked} gameDifficulty={gameDifficulty} pokeNumber={randomNumberGenerator()} storeData={storeData} cardData={cardData} gameLevel={gameLevel} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}