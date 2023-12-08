export default function ScoreBoard({score, topScore, level}){
    return (
        
        <div className="absolute top-4 right-5">
            <div className="font-primary font-bold text-xl text-[#ffc300] ">
                <p>
                    Score : {score}
                </p>
                <p>
                    Top Score : {topScore}
                </p>
                <p>
                    Level: {level}
                </p>
            </div>
        </div>
        
    )
}