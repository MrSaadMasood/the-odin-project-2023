import ProductCard from "./ProductCard";
import Catagories from "./Catagories";
import Platforms from "./PlatformOptions";
import TopGames from "./TopGames";
import { Outlet } from "react-router-dom";
import useFetch from "./useFetch";
import { Fragment, useReducer, useState } from "react";
import { reducer } from "./reducer";

// icons
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";


const SidePanel = () =>{
    return (

            <div className="options noScroll bg-black hidden sm:hidden md:block md:w-[30%] lg:w-[25%] xl:w-[18%] h-[52rem] overflow-y-scroll">
                <div className="flex flex-col justify-center items-center mb-4">
                    <h2 className="text-4xl font-bold text-white">Options</h2>
                    <Catagories />
                    <Platforms />
                    <TopGames />
                </div>
            </div>
    )
}

const ProductList = () =>{
    const [gameData, loading, error] = useFetch()
    const [currentPage, dispatch] = useReducer(reducer, 1) 
    const previousPage = currentPage - 1
    const nextPage = currentPage + 1
    const itemsPerPage = 10
    const startingIndex = previousPage * itemsPerPage
    const endingIndex = currentPage * itemsPerPage
    const buttonColorIf0 = previousPage !== 0 ? "bg-[#323232]" : "b-[#717171]" 
    const buttonColorIf5 = nextPage !== 5 ? "bg-[#323232]" : "b-[#717171]" 
    console.log(gameData);
    let currentPageCards;
    if(gameData){
        currentPageCards = gameData.slice(startingIndex, endingIndex)
    }


    if(loading){
    return(
      <div
      className="bg-black w-full h-[52rem] md:h-[52rem] text-white flex justify-center items-center
    overflow-y-scroll relative"
    >Loading
      </div>
    )
  }
    return (
        <div className="noScroll bg-black w-full md:w-[70%] lg:w-[75%] xl:w-[82%] md:h-[52rem] flex flex-col justify-start items-center
        overflow-y-scroll relative">
            <div className="text-white text-7xl flex justify-center items-center font-bold w-full bg-black mt-2">
                Products
            </div>
            <div className="w-[100%] flex justify-start flex-wrap items-center mb-5">
                {currentPageCards.map((game, index)=>{
                    return (
                    <Fragment key={index}>
                        <ProductCard game={game} />
                    </Fragment>
                    )
                })}
            </div>
            <div className=" w-80 h-12 mt-3 mb-7 flex justify-evenly items-center text-2xl font-bold text-white">
                <button className={`${buttonColorIf0} flex justify-center items-center rounded-full w-10 h-10 hover:scale-105
                hover:shadow hover:shadow-yellow-400`}
                onClick={()=>dispatch({
                    type : "decrease",
                    value : 1,
                })}
                disabled={previousPage === 0}><GrFormPrevious /></button>
                <p>
                    {currentPage}
                </p>
                <button className={`${buttonColorIf5} flex justify-center items-center rounded-full w-10 h-10 hover:scale-105
                hover:shadow hover:shadow-yellow-400`}
                onClick={()=>dispatch({
                    type : "increase",
                    value : 1,
                })}
                disabled={nextPage === 5}><GrFormNext /></button>
            </div>
        </div>
    )
}

const ProductMainPageBody = () =>{
    return (
        <>
            <SidePanel />
            <ProductList />
        </>
    )
}
const ProductBody = () => {
  return (
    <>
        <div className="flex">
            <Outlet />
        </div>
    </>
  )
};

export default ProductBody;
export {ProductMainPageBody}
