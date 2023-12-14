
import { SiWindows } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Platforms = () =>{
    return (
    <div className="text-white mt-4 flex flex-col justify-start items-center w-[80%]">
        <h2 className="text-4xl font-bold">Platforms</h2>
        <ul className="mt-1">
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><SiWindows size={25} />PC</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaPlaystation size={25} />PlayStation</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><BsNintendoSwitch size={25} />Nintendo</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaXbox size={25} />Xbox One</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaApple size={25} />IOS</li>
            <li className="flex justify-evenly items-center w-28 mt-5 text-xl"><FaAndroid size={25} />Android</li>
        </ul>
    </div>
    )
}

export default Platforms