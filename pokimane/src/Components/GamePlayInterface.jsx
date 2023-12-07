import InGameLogo from "./InGameLogo"
import ScoreBoard from "./ScoreBoard"
import PlayArea from "./PlayArea"

export default function GamePlayInterface({isCardClickedFunction, cardClicked , gameDifficulty, gameLevel, storeData, cardData}){
    return (
        <>
            <InGameLogo />
            <ScoreBoard />
            <PlayArea isCardClickedFunction={isCardClickedFunction} cardClicked={cardClicked} gameDifficulty={gameDifficulty}gameLevel={gameLevel} storeData={storeData} cardData={cardData} />
        </>
    )
}