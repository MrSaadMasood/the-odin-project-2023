export default function SelectMode() {
  return (
    <>
      
        <div className="menu ">
          <div className="hello w-80 flex flex-col justify-evenly items-cente h-40 sm:h-60 sm:w-[26rem] md:w-[31rem] lg:w-[39rem]  ">
            <p className="flex justify-center  items-center font-primary cursor-pointer text-[#ffc300] font-bold text-[2.5rem] sm:text-[3.5rem] md:text-6xl lg:text-7xl w-80 sm:w-[26rem] md:w-[31rem] lg:w-[39rem]">
              Memory Game
            </p>
            <div className=" w-72 sm:w-96 md:w-[29rem] lg:w-[37rem] flex justify-evenly items-center ">
              <p className="font-primary text-orange-500 font-bold cursor-pointer text-xl sm:text-2xl md:text-3xl lg:text-5xl hover:scale-110 hover:text-[#ffd60a]">
                Easy
              </p>
              <p className="font-primary text-orange-500 font-bold cursor-pointer text-xl sm:text-2xl md:text-3xl lg:text-5xl  hover:scale-110 hover:text-[#ffd60a]">
                Hard
              </p>
            </div>
          </div>
        </div> 
     
    </>
  );
}
