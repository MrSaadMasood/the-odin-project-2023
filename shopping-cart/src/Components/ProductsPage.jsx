import ProductBody from "./ProductBody";
import Header from "./Header";
import { cart } from "./cartContext";
import { useState } from "react";
import CartBar from "./CartBar";

const Products = () => {
  const [isCartClicked, setIscartClicked] = useState(false);
  const [totalItemsinCarts, setTotalItemsinCarts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedGameInformation, setAddedGameInformation] = useState({
    gameNames: [],
    gameDetailsArray: [],
  });
  const [selectedGenre, setSelectedGenre] = useState("");

  function cartClickedSetter() {
    setIscartClicked(!isCartClicked);
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  function quantityIncreaser(item, toDo) {
    setAddedGameInformation((addedGameInformation) => {
      const detailArray = addedGameInformation.gameDetailsArray;
      for (let i = 0; i < detailArray.length; i++) {
        if (detailArray[i].name === item.name && toDo === "del") {
          detailArray.splice(i, 1);
          return addedGameInformation;
        } else if (detailArray[i].name === item.name && toDo === "add") {
          detailArray[i].quantity = detailArray[i].quantity + 1;
          return addedGameInformation;
        } else if (detailArray[i].name === item.name && toDo === "sub") {
          detailArray[i].quantity = detailArray[i].quantity - 1;
          return addedGameInformation;
        }
      }
    });
    cartSettings(item, toDo);
  }
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
    } else if (toDo === "add") {
      setTotalItemsinCarts(totalItemsinCarts + 1);
      setTotalPrice(totalPrice + item.price);
    } else if (toDo === "sub") {
      setTotalItemsinCarts(totalItemsinCarts - 1);
      setTotalPrice(totalPrice - item.price);
    }
  }
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
  function fetchSelectedCatagoryData(genre) {
    setSelectedGenre(genre);
  }
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
        <Header cartClickedSetter={cartClickedSetter} />
        <ProductBody />
        <CartBar
          isCartClicked={isCartClicked}
          cartClickedSetter={cartClickedSetter}
          totalItemsinCarts={totalItemsinCarts}
          totalPrice={totalPrice}
          itemsAddedtoCartList={addedGameInformation}
          quantityIncreaser={quantityIncreaser}
          resetCart={resetCart}
        />
      </cart.Provider>
    </>
  );
};

export default Products;
