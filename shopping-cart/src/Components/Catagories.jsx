import { GiChaingun } from "react-icons/gi";
import { FaChessBishop } from "react-icons/fa";
import { FaMountain } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { LuSword } from "react-icons/lu";
import { GiPistolGun } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
const Catagories = () =>{
    return (
    <div className="text-white mt-4 flex flex-col justify-start items-center  w-[80%]">
        <h2 className="text-4xl font-bold">Genre</h2>
        <ul className="mt-1">
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><GiChaingun size={25} />Action</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaChessBishop size={25} />Strategy</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaMountain size={25} />Adventure</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><BsFillPersonFill size={25} />Mystery</li>   
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><LuSword size={25} />RPG</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><GiPistolGun size={25} />Shooter</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaPuzzlePiece size={25} />Puzzle</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaCar size={25} />Racing</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><GiSoccerBall size={25} />Sports</li>
        </ul>
    </div>
    )
}

export default Catagories