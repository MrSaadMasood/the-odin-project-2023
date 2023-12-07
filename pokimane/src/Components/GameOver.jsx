export default function GameOver({ result = "Win" }){
    const gameEnding = result === "Win" ? "You Won!!!" : "Oops! You lost. Try Again"
    return (
        <>
            <div className="game-over  h-56 absolute top-[50%] left-[50%] flex flex-col justify-center items-center">
                <div className="flex justify-center items-center font-primary cursor-pointer text-[#ffc300] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-72 sm:w-96 md:w-[30rem] lg:w-[37rem]">
                    <p>
                        {gameEnding}
                    </p>
                </div>
                <div className="font-primary text-[#ffc300] sm:text-xl md:text-2xl lg:text-3xl mt-2">
                    <p>
                        Score : 
                    </p>
                    <p>
                        Top Score: 
                    </p>
                    
                </div>
                <div className="flex justify-center items-center mt-2 lg:mt-2 font-primary font-bold ">
                    <button className="bg-yellow-400 md:w-36 lg:w-40 text-black rounded-md p-3 lg:text2xl">
                        Play Again!
                    </button>
                </div>
                
            </div>
        </>
    )
}