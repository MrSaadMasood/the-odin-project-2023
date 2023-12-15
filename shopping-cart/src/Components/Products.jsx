import ProductBody from "./ProductBody";
import Header from "./Header";
import { cart } from "./cartContext";
import { useContext, useState } from "react";
import CartBar from "./CartBar";


const Products = () =>{
    const [ isCartClicked, setIscartClicked] = useState(false)
    console.log("is clicked", isCartClicked);
    const [totalItemsinCarts, setTotalItemsinCarts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [ addedGameInformation, setAddedGameInformation] = useState({
        gameNames : [],
        gameDetailsArray : []
    })
    console.log("the added game data included", addedGameInformation);
    console.log("the total price is:", totalPrice);

    function cartClickedSetter(){
        console.log("clicked");
        setIscartClicked(!isCartClicked)
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    }
    return (
    <>
    <cart.Provider value={{totalItemsinCarts ,setTotalItemsinCarts , totalPrice, setTotalPrice, setAddedGameInformation}}>
        <Header cartClickedSetter={cartClickedSetter} />
        <ProductBody />
        <CartBar isCartClicked={isCartClicked} cartClickedSetter={cartClickedSetter} totalItemsinCarts={totalItemsinCarts}
        totalPrice={totalPrice} itemsAddedtoCartList={addedGameInformation.gameDetailsArray} />
    </cart.Provider>

    </>
    )
}

export default Products