import ProductBody from "./ProductBody";
import Header from "./Header";
import { cart } from "./cartContext";
import { useState } from "react";
import CartBar from "./CartBar";

// this acts a the second main page
const Products = () => {
  // state to check if the card item is clicked
  const [isCartClicked, setIscartClicked] = useState(false);
  // state for total items in the cart
  const [totalItemsinCarts, setTotalItemsinCarts] = useState(0);
  // state for total price
  const [totalPrice, setTotalPrice] = useState(0);
  // state containing an object with two arrays. one is to store the names of the added gameNames
  // the name are matched for when the user want to increase the quantity of the items 
  // and the other is to stre their information is the form of objects
  // which are used to dispaly their information
  const [addedGameInformation, setAddedGameInformation] = useState({
    gameNames: [],
    gameDetailsArray: [],
  });
  // state for the genre of games user selected based on the genre the games are displalyed
  const [selectedGenre, setSelectedGenre] = useState("");

  // function to set the if the cart icon is clicked. If clicked the the cart side bar will be opened
  function cartClickedSetter() {
    setIscartClicked(!isCartClicked);
  }
  // the function is more increase decreasign and deleting the selected items in the cart
  // the name in the names array is matched against the name of the selected game object
  // if the name match then the required task is performed
  function quantityManager(item, toDo) {
    setAddedGameInformation((addedGameInformation) => {
      const detailArray = addedGameInformation.gameDetailsArray;

      for (let i = 0; i < detailArray.length; i++) {

        if (detailArray[i].name === item.name && toDo === "del") {
          detailArray.splice(i, 1);
          return addedGameInformation;
        } 
        else if (detailArray[i].name === item.name && toDo === "add") {
          detailArray[i].quantity = detailArray[i].quantity + 1;
          return addedGameInformation;
        } 
        else if (detailArray[i].name === item.name && toDo === "sub") {
          detailArray[i].quantity = detailArray[i].quantity - 1;
          return addedGameInformation;
        }
      }
    });
    cartSettings(item, toDo);
  }

  // this function sets the other parameters after the item quantity is increased or decreased
  // or if the item is deleted. its to keep the othe states up-to-date
  function cartSettings(item, toDo) {

    if (toDo === "del") {
      setTotalItemsinCarts(totalItemsinCarts - item.quantity);
      const newPriceAfterDeletion = totalPrice - item.quantity * item.price;
      setTotalPrice(newPriceAfterDeletion);
      setAddedGameInformation((addedGameInformation) => {
        const indexToRemove = addedGameInformation.gameNames.indexOf(item.name);
        addedGameInformation.gameNames.splice(indexToRemove, 1);
        return addedGameInformation;
      });
    } 
    else if (toDo === "add") {
      setTotalItemsinCarts(totalItemsinCarts + 1);
      setTotalPrice(totalPrice + item.price);
    } 
    else if (toDo === "sub") {
      setTotalItemsinCarts(totalItemsinCarts - 1);
      setTotalPrice(totalPrice - item.price);
    }
  }

  // function for when the user checkout all the state are reset to their original values
  function resetCart() {
    setIscartClicked(false);
    setTotalItemsinCarts(0);
    setTotalPrice(0);
    setSelectedGenre("");
    setAddedGameInformation({
      gameNames: [],
      gameDetailsArray: [],
    });
  }

  // function to set the selected genre
  function fetchSelectedCatagoryData(genre) {
    setSelectedGenre(genre);
  }
  // useContext is used here and the various states and functions are passed to the children so they can be used in
  // deeper parts of the app
  return (
    <>
      <cart.Provider
        value={{
          totalItemsinCarts,
          setTotalItemsinCarts,
          totalPrice,
          setTotalPrice,
          setAddedGameInformation,
          fetchSelectedCatagoryData,
          selectedGenre,
        }}
      >
        <Header cartClickedSetter={cartClickedSetter} totalItemsinCarts={totalItemsinCarts} />
        <ProductBody />
        <CartBar
          isCartClicked={isCartClicked}
          cartClickedSetter={cartClickedSetter}
          totalItemsinCarts={totalItemsinCarts}
          totalPrice={totalPrice}
          itemsAddedtoCartList={addedGameInformation}
          quantityManager={quantityManager}
          resetCart={resetCart}
        />
      </cart.Provider>
    </>
  );
};

export default Products;
