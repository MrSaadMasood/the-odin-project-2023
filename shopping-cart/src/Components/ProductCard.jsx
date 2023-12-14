
import { SiWindows } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductCard = ({game}) =>{
    return (
       <Link to={`Product_Description/${game.id}`} className="w-[90%] lg:w-[46%] xl:w-[31%] rounded-3xl h-[22rem] lg:h-80 ml-6 xl:ml-5 mt-7 overflow-hidden
       hover:scale-105 ease-in duration-150" >
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[25.5rem] sm:w-[37rem] md:w-[39rem] lg:w-[34rem] lg:h-56 h-60 overflow-hidden">
                        <img src={game.background_image} alt="" width={"900px"} />
                    </div>
                    <div className="bg-[#2F2F2F] w-full h-32 text-white relative">
                        <div className="flex justify-start items-center mt-2">
                            <p className="absolute top-2  left-2 sm:left-4 text-[#BBBBBB]">
                                Add to Cart+
                            </p>
                            <p className="absolute top-2 right-3 sm:right-4 text-[#BBBBBB]">
                                {game.playtime}
                            </p>
                        </div>
                        <div className="absolute top-10 left-2 sm:left-4 flex justify-between items-center w-16">
                            <SiWindows size={15} />
                            <FaPlaystation size={15} />
                            <FaXbox size={15} />
                        </div>
                        <div className="absolute top-16 lg:top-[3.6rem] left-1 sm:left-3 flex text-2xl font-bold">
                            <h3>{game.name}</h3>
                        </div>
                    </div>
                </div>
       </Link>
    )
}


export default ProductCard