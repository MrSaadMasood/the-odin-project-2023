import { CiShoppingCart } from "react-icons/ci";

const Counter = ()=>{
    return (
        <div className="counter w-5 h-5 flex justify-center
        items-center bg-red-600 rounded-full absolute right-0 align-top text-xs">
            0
        </div>
    )
}

const Header = ()=>{
    return (
    <div className="productHeader bg-black w-full h-24 text-white flex justify-start items-center  relative">
        <div className="innerLogo center w-14 md:w-[3.5rem] lg:w-16 absolute top-[25%] lg:top-[19%] left-2 md:left-3 lg:left-5 flex justify-center
        items-center cursor-pointer hover:scale-105 ease-in duration-150">
            <img src="/logo.png" alt="#" />
        </div>
        <div className="text-white text-3xl cursor-pointer font-bold hidden sm:hidden lg:block absolute lg:left-[5.2rem] ">
            Game Eagle
        </div>
        <div className="cart w-2 absolute top-[28%] right-12 lg:right-14 cursor-pointer">
            <div className="flex w-12 relative">
                <CiShoppingCart className="" size={40} color="white" onClick={()=>console.log("clicked")} />
                <Counter />
            </div>
        </div>
    </div>
    )
}

export default Header