import { FaTrophy } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";

export default function TopGames(){
    return(
    <div className="text-white mt-4 flex flex-col justify-start items-center w-[80%]">
        <h2 className="text-4xl font-bold">Top</h2>
        <ul className="mt-1">
            <li className="flex justify-evenly items-center w-40 mt-5 text-lg"><FaTrophy size={25} />Best of the Year</li>
            <li className="flex justify-evenly items-center w-40 mt-5 text-lg"><FaChartArea size={25} />Popular in 2022</li>
            <li className="flex justify-evenly items-center w-40 mt-5 text-lg"><GiDiamondTrophy size={25} />All time top</li>
        </ul>
    </div>
    )
}