import { Fragment } from "react";
import { IoIosClose } from "react-icons/io";


const ItemsForCheckout = ({ item }) =>{
    return (
        <div className="mt-3 p-2  h-20 flex justify-start items-center hover:bg-gray-400 cursor-pointer">
            <div className="w-24">
                {/* {console.log(item.image)} */}
                <img src={item.image} alt={item.name} />
            </div>
            <div className="h-[4.3rem] w-44 ml-1 flex flex-col justify-center items-start  text-sm overflow-hidden">
                <p className="text-lg w-44 font-bold overflow-hidden">
                    {item.name} 
                </p>
                <p className="text-xs font-bold">
                    Price : ${item.price}
                </p>
                <p className="text-xs font-bold">
                    Quantity : {item.quantity}
                </p>
            </div>
            <div className="bg-red-500 ml-1 h-16 w-[4rem] flex justify-center items-center">
                <p className="text-sm font-bold">
                   ${item.quantity * item.price}
                </p>
            </div>
        </div>
    )
}
const CartBar = ({isCartClicked, cartClickedSetter, totalItemsinCarts , totalPrice, itemsAddedtoCartList}) => {
    const width = isCartClicked ? "w-96" : "w-0" 
    console.log(width);
  return (
    <div className={`bg-gray-700 h-[60rem] md:h-[45rem] ${width } text-white z-10 absolute top-0 right-0 ease-linear duration-300
     flex flex-col justify-start items-center`}>
        {isCartClicked && 
        <div className="w-[100%]">
            <div className=" w-[100%] h-14 flex justify-between items-center p-4 font-bold text-3xl">
                <p className="">Your Cart</p>
                <IoIosClose className="cursor-pointer hover:scale-110" size={25} onClick={cartClickedSetter} />
            </div>
            <hr className="mt-3" />
            <div className="p-3 text-xl fontbold">
                {totalItemsinCarts === 0 && "No Products Added"  }
                <div className="w-[100%] pr-5 flex justify-between items-center text-sm">
                    <p>Products</p>
                    <p>Total</p>
                </div>
                <div className=" w-[100%] h-[43rem] md:h-[30rem] noScroll overflow-y-scroll">
                    {itemsAddedtoCartList.map((item, index)=>{
                        return (
                            <Fragment key={index}>
                                <ItemsForCheckout item={item} />
                            </Fragment>
                        )
                    })}
                </div>

            </div>
            <hr />
            <div className=" w-[100%] h-10 flex justify-between items-center p-4 font-bold text-2xl">
                <p className="">Estimated Total</p>
                <p>${totalPrice}</p>
            </div>
            <div className=" w-[100%] flex justify-center items-center pl-2 pr-2 text-xs">
                Tax included. Shipping and discounts calculated at checkout.
            </div>
            <div className="w-[100%] flex justify-center items-center p-3 ">
                <button className="w-[100%] h-8 flex justify-center items-center text-white bg-black">
                    Checkout
                </button>
            </div>


            
        </div> }

        

    </div>
  )
};

export default CartBar