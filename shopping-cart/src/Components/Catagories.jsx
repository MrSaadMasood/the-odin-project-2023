import { GiChaingun } from "react-icons/gi";
import { FaChessBishop } from "react-icons/fa";
import { FaMountain } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { LuSword } from "react-icons/lu";
import { GiPistolGun } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { useContext } from "react";
import { cart } from "./cartContext";
const Catagories = () => {
  const object = useContext(cart);
  const categories = [
    { icon: <GiChaingun size={25} />, text: "Action", genres: "action" },
    { icon: <FaChessBishop size={25} />, text: "Strategy", genres: "strategy" },
    { icon: <FaMountain size={25} />, text: "Adventure", genres: "adventure" },
    { icon: <BsFillPersonFill size={25} />, text: "Arcade", genres: "arcade" },
    { icon: <LuSword size={25} />, text: "Indie", genres: "indie" },
    { icon: <GiPistolGun size={25} />, text: "Shooter", genres: "shooter" },
    { icon: <FaPuzzlePiece size={25} />, text: "Puzzle", genres: "puzzle" },
    { icon: <FaCar size={25} />, text: "Racing", genres: "racing" },
    { icon: <GiSoccerBall size={25} />, text: "Sports", genres: "sports" },
  ];
  return (
    <div className="text-white mt-4 flex flex-col justify-start items-center  w-[80%]">
      <h2 className="text-4xl font-bold">Genre</h2>
      <ul className="mt-1">
        {categories.map((item, index) => {
          return (
            <li
              className="cursor-pointer hover:text-yellow-300 
                    flex justify-evenly items-center w-28 mt-5 text-xl"
              key={index}
              onClick={() => object.fetchSelectedCatagoryData(item.genres)}
            >
              {item.icon}
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Catagories;
