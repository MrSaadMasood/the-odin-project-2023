import { SiWindows } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Platforms = () => {
  const platforms = [
    { icon: <SiWindows size={25} />, text: "PC" },
    { icon: <FaPlaystation size={25} />, text: "PlayStation" },
    { icon: <BsNintendoSwitch size={25} />, text: "Nintendo" },
    { icon: <FaXbox size={25} />, text: "Xbox One" },
    { icon: <FaApple size={25} />, text: "iOS" },
    { icon: <FaAndroid size={25} />, text: "Android" },
  ];

  return (
    <div className="text-white mt-4 flex flex-col justify-start items-center w-[80%]">
      <h2 className="text-4xl font-bold">Platforms</h2>
      <ul className="mt-1">
        {platforms.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-yellow-300 flex justify-evenly items-center w-28 mt-5 text-xl"
          >
            {item.icon}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;
