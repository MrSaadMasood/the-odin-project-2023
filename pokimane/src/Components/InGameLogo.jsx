export default function InGameLogo({ exitGame }) {
  return (
    <button onClick={exitGame}>
      <div className="in-game-logo flex justify-center items-center absolute top-4 left-3 w-44 sm:w-[15rem] md:w-[18rem] lg:w-[22rem] hover:scale-110 ease-in duration-100 ">
        <img src="./assets/pokimane.png" alt="" width={"500px"} />
      </div>
    </button>
  );
}
