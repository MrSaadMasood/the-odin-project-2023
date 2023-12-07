import Card from "./Card";

export default function PlayArea({isCardClickedFunction, cardClicked, gameDifficulty}){
    return (
        <div className="absolute play-area top-[55%] left-[50%] w-[90%] h-auto p-2"> 
            <div className="flex justify-center items-center flex-wrap">
            <Card isCardClickedFunction={isCardClickedFunction} cardClicked={cardClicked} gameDifficulty={gameDifficulty} />
            </div>
        </div>
    )
}