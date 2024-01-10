import { Fragment } from "react";
import { IoIosClose } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const CartBar = ({
  isCartClicked,
  cartClickedSetter,
  totalItemsinCarts,
  totalPrice,
  itemsAddedtoCartList,
  quantityManager,
  resetCart,
}) => {
  const width = isCartClicked ? "w-full md:w-96" : "w-0";
  // useNavigate hook is used so that when the user clicks the checkout button the user is redirected to the 
  // checkout Page
  const navigate = useNavigate();
  function goToCheckOut() {
      navigate("/checkout");
      resetCart();
  }
  return (
    <div
      className={`bg-gray-700 h-[60rem] md:h-[45rem] ${width} text-white z-10 absolute top-0 right-0 ease-linear duration-300
     flex flex-col justify-start items-center`}
    >
      {isCartClicked && (
        <div className="w-[100%]">
          <div className=" w-[100%] h-14 flex justify-between items-center p-4 font-bold text-3xl">
            <p className="">Your Cart</p>
            <IoIosClose
              className="cursor-pointer hover:scale-110"
              size={25}
              onClick={cartClickedSetter}
            />
          </div>
          <hr className="mt-3" />
          <div className="p-3 text-xl fontbold">
            {totalItemsinCarts === 0 && "No Products Added"}
            <div className="w-[100%] pr-5 flex justify-between items-center text-sm">
              <p>Products</p>
              <p>Total</p>
            </div>
            <div className=" w-[100%] h-[43rem] md:h-[28rem] noScroll overflow-y-scroll ">
              {itemsAddedtoCartList.gameDetailsArray.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <ItemsForCheckout
                      item={item}
                      quantityManager={quantityManager}
                    />
                  </Fragment>
                );
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
            <button
              className="w-[100%] mt-3 h-8 flex justify-center items-center text-white bg-black"
              data-testid={"checkoutFunciton"}
              disabled={totalItemsinCarts === 0}
              onClick={goToCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


const ItemsForCheckout = ({ item, quantityManager }) => {
  // when the user clicks on the items in the cart and want to visit the product description page 
  // use navigate hook navigates the user that page
  const navigate = useNavigate();
  const pathToAddedItem = `/Products/Product_Description/${item.id}`;

  function changePage() {
    navigate(pathToAddedItem);
  }

  return (
    <div className="mt-3 p-2  h-20 flex justify-start items-center  hover:bg-gray-400 cursor-pointer">
      <div className="w-24" onClick={changePage}>
        <img src={item.image} alt={item.name} />
      </div>
      <div
        className="h-[4.3rem]  w-44 ml-1 flex flex-col justify-center items-start  text-sm overflow-hidden"
        onClick={changePage}
        data-testid={"changePage"} >
        <p className="text-lg h-8 w-44 font-bold overflow-hidden">{item.name}</p>
        <p className="text-xs font-bold">Price : ${item.price}</p>
        <p className="text-xs font-bold">Quantity : {item.quantity}</p>
      </div>
      <div className=" ml-1 h-16 w-[4rem] flex flex-col justify-between items-center">
        <p className="text-sm font-bold">${item.quantity * item.price}</p>
        <div className="flex justify-center items-center ">
          <CiSquarePlus onClick={() => quantityManager(item, "add")} />
          <button
            disabled={item.quantity === 1}
            onClick={() => quantityManager(item, "sub")}
          >
            <CiSquareMinus />
          </button>
          <MdOutlineDeleteOutline
            onClick={() => quantityManager(item, "del")}
          />
        </div>
      </div>
    </div>
  );
};

CartBar.propTypes = {
  isCartClicked: PropTypes.bool,
  cartClickedSetter: PropTypes.func,
  totalItemsinCarts: PropTypes.number,
  totalPrice: PropTypes.number,
  itemsAddedtoCartList: PropTypes.object,
  quantityManager: PropTypes.func,
  resetCart: PropTypes.func,
};
ItemsForCheckout.propTypes = {
  item: PropTypes.object,
  quantityManager: PropTypes.func,
};

export {ItemsForCheckout}
export default CartBar;
