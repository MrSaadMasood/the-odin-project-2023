import { Link, useParams } from "react-router-dom";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BallTriangle } from "react-loader-spinner";

// custom hook for fetching data
import useGameSearch from "./useGameSearch";
import { useContext, useState } from "react";
import { cart } from "./cartContext";
import ErrorPage from "./ErrorPage";

const ProductDescription = () => {
  // when the card is clicked the product id is used to fetch the details about that specific product and the user
  // is redirected to this page. useParams hook is used to get the id which come enclosed in an object
  // which is destructered to get the id
  const { productID } = useParams();
  // custom hook to fetch the details based on the productID
  const [specificGame, loading, error] = useGameSearch(productID);
  // state for the input value
  const [input, setInput] = useState(0);
  // useContext hook is used as the parent is decided based on the Oulet Component of the react router
  const {
    totalItemsinCarts,
    setTotalItemsinCarts,
    totalPrice,
    setTotalPrice,
    setAddedGameInformation,
  } = useContext(cart);

    // when add to cart is clicked the values and quantity are set based on the input field
  function cartValueCalculator() {

    setTotalItemsinCarts(totalItemsinCarts + input);
    const price = input * specificGame.playtime;
    setTotalPrice(totalPrice + price);
    setAddedGameInformation((addedGames) => {
      // if the product already exists then the quantity is increased based on the input value
      if (addedGames.gameNames.includes(specificGame.name)) {
        const detailArray = addedGames.gameDetailsArray;
        for (let i = 0; i < detailArray.length; i++) {
          if (detailArray[i].name === specificGame.name) {
            detailArray[i].quantity = detailArray[i].quantity + input;
            return addedGames;
          }
        }
      } 
      // if the product does not exist in the cart its name is added to the names array and
      // details are added in details array
      else {
        return {
          gameNames: [...addedGames.gameNames, specificGame.name],
          gameDetailsArray: [
            ...addedGames.gameDetailsArray,
            {
              name: specificGame.name,
              quantity: input,
              price: specificGame.playtime,
              image: specificGame.background_image,
              id: specificGame.id,
            },
          ],
        };
      }
    });
  }

  // decreases the value of input by 1
  function decreaseValue() {
    if (input !== 0) {
      setInput(input - 1);
    }
  }

  
  if (loading) {
    return (
      <div
        className="bg-black w-full h-[52rem] md:h-[52rem] text-white flex justify-center items-center
    overflow-y-scroll relative"
      >
        <BallTriangle
          height={80}
          width={800}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <ErrorPage />;
  }
  return (
    <div
      className="bg-black w-full h-[56rem] noScroll overflow-hidden md:h-[52rem] text-white flex flex-col justify-start items-center
     relative"
    >
      <div className="w-[95%] h-20 absolute top-4  flex justify-between items-center">
        <Link to={"/Products"} className=" left-0 sm:text-xl">
          <IoArrowBackCircleOutline size={30} />
        </Link>

        <div
          className="w-[60%] sm:w-[80%] md:w-[85%] h-auto text-[1.6rem] sm:text-[2.3rem] md:text-5xl
        lg:text-6xl font-bold
        flex justify-end items-center"
        >
          {specificGame.name}
        </div>
      </div>
      <div
        className=" w-[95%] lg:w-[60%] xl:w-[70%] h-[26rem] lg:h-[42rem]  absolute top-[7rem] lg:left-9 rounded-[2rem] overflow-hidden 
      "
      >
        <div className="w-[39rem] sm:w-[46rem] md:w-[55rem] lg:w-[67rem] xl:w-[73rem]">
          <img src={specificGame.background_image} alt="#" width={"2000px"} />
        </div>
      </div>
      <div
        className="gradient w-[95%] lg:w-[29%] xl:w-[23%] h-14 absolute top-[34rem] lg:top-[7.5rem] lg:right-9 rounded-2xl flex justify-between items-center p-4
      font-bold text-xl"
      >
        <p className="sm:text-3xl md:text-2xl">Price</p>
        <p className="sm:text-3xl md:text-2xl">${specificGame.playtime}</p>
      </div>

      <div
        className="gradient w-[95%] lg:w-[29%] xl:w-[23%] h-14 absolute top-[38.5rem] lg:top-[39.5rem] lg:right-9 rounded-2xl 
      flex justify-center items-center p-4
      font-bold text-xl"
      >
        <div className="w-[70%] lg:w-[90%] flex justify-evenly items-center text-3xl ">
          <CiCirclePlus
            className="cursor-pointer hover:scale-110"
            onClick={() => setInput(input + 1)}
          />
          <input
            className="w-28 rounded-2xl h-12 p-2 text-black"
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <CiCircleMinus
            className="cursor-pointer hover:scale-110"
            onClick={decreaseValue}
          />
        </div>
      </div>
      <button
        className=" w-[95%] lg:w-[29%] xl:w-[23%] gradient h-14 absolute  top-[43rem] lg:top-[44rem] lg:right-9 rounded-2xl 
      flex justify-center items-center p-4
      font-bold text-xl sm:text-3xl md:text-2xl"
        onClick={cartValueCalculator}
      >
        Add to Cart
      </button>
      <div
        className=" w-[95%] lg:w-[29%] xl:w-[23%] gradient h-32 lg:h-60 absolute  top-[47.5rem] lg:top-[12rem] lg:right-9
       rounded-2xl  text-xl sm:text-3xl md:text-2xl
       flex flex-col justify-center items-start p-4 mb-4"
      >
        <p className="font-bold">Description</p>
        <div className="h-20 lg:h-52 text-xs noScroll overflow-y-scroll mt-2">
          {specificGame.description_raw}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
