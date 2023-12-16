import { FaTrophy } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";

export default function TopGames() {
  const topGames = [
    { icon: <FaTrophy size={25} />, text: "Best of the Year" },
    { icon: <FaChartArea size={25} />, text: "Popular in 2022" },
    { icon: <GiDiamondTrophy size={25} />, text: "All-time Top" },
  ];
  return (
    <div className="text-white mt-4 flex flex-col justify-start items-center w-[80%]">
      <h2 className="text-4xl font-bold">Top</h2>
      <ul className="mt-1">
        {topGames.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-evenly items-center w-40 mt-5 text-lg cursor-pointer hover:text-yellow-300"
            >
              {item.icon}
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
