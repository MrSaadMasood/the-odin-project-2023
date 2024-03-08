import {getAllByText, getByTestId, render, renderHook, screen, waitFor} from "@testing-library/react";
import { toBeInTheDocument} from '@testing-library/jest-dom'
import TopGames from "../Components/TopGames"
import useGameSearch from "../Components/useGameSearch";
import { data } from "autoprefixer";
import Catagories from "../Components/Catagories";
import userEvent from "@testing-library/user-event";
import { cart } from "../Components/cartContext";
import CartBar, { ItemsForCheckout } from "../Components/CartBar";
import { MemoryRouter, Route, useRouteError } from "react-router-dom";
import Checkout from "../Components/Checkout";
import ErrorPage from "../Components/ErrorPage";
import Header, { Counter } from "../Components/Header";
import Home from "../Components/Home";
import Platforms from "../Components/PlatformOptions";
import { ProductList, SidePanel } from "../Components/ProductBody";
import { act } from "react-dom/test-utils";
import useFetch from "../Components/useFetch";
import { reducer } from "../Components/reducer";
import ProductCard from "../Components/ProductCard";
import ProductDescription from "../Components/ProductDescription";

const contextData = {
    totalItemsInCart : 0,
    setTotalItemsInCart : jest.fn(),
    totalPrice : 0,
    setTotalPrice : jest.fn(),
    setAddedGamesInformation : jest.fn(),
    fetchSelectedCatagoryData : jest.fn(),
    selectedGenre : ""
}

const itemInCart = {
    price : 200,
    quantity : 20,
    image : "",
    name : "sample"

}

  const isCartClicked = true
  const cartClickedSetter = jest.fn()
  const totalItemsinCarts = 2
  const totalPrice = 190
  const itemsAddedtoCartList = {randomArray : [], gameDetailsArray: [itemInCart]} 
  const quantityManager = jest.fn()
  const resetCart = jest.fn()
function renderCatagories(data) {
    return render(
        <cart.Provider value={data}>
            <Catagories/>
        </cart.Provider>
    )
}
const mockedUseRouteError = jest.fn()
const mockedUseNavigate = jest.fn()
    jest.mock("react-router-dom", ()=>({
        ...jest.requireActual("react-router-dom"),
        useNavigate : ()=> mockedUseNavigate,
        useRouteError : ()=> {return {message : "Not Found"}}
    }))
    test("this renders the top game component", ()=>{
    render(<TopGames/>)
    const elelent = screen.getByText("Best of the Year")
    expect(elelent).toBeInTheDocument();
})

test("it renders the catagories component", ()=>{
    render(<Catagories/>)
    const shownElement = screen.getByText("Action")
    expect(shownElement).toHaveTextContent("Action")
})

test("testing the component with context", async()=>{
    renderCatagories(contextData)
    const listItemToClick = screen.getByText("Action")
    const user = userEvent.setup()
    await user.click(listItemToClick)
    expect(contextData.fetchSelectedCatagoryData).toHaveBeenCalled()
})

test("testing the CartBar sub-component", ()=>{
    const mockedFunc = jest.fn()
    const {getByText}  = render(
    <MemoryRouter>
       <ItemsForCheckout item={itemInCart} quantityManager={mockedFunc} /> 
    </MemoryRouter>)
    const displayPrice = getByText(/200/i)
    expect(displayPrice).toBeInTheDocument()
})


test("testing the cartBar sub-compoent with by mocking original module", async ()=>{
    const user = userEvent.setup()
    const mockedFunc = jest.fn()
    const renderWithModule = ()=>{
        const {getAllByTestId} = render(
        <ItemsForCheckout item={itemInCart} quantityManager={mockedFunc} />
        )
        const elementsWithTestId = getAllByTestId("changePage")[0]
        return {
            elementsWithTestId
        }
    }
    const {elementsWithTestId} = renderWithModule()
    await user.click(elementsWithTestId)
    expect(mockedUseNavigate).toHaveBeenCalled()
    mockedUseNavigate.mockRestore()
})

test("test the main cartBar component", ()=>{
  const {getByText} = render(
    <MemoryRouter>
        <CartBar isCartClicked={isCartClicked}
        cartClickedSetter={cartClickedSetter}
        totalItemsInCart={totalItemsinCarts}
        totalPrice={totalPrice}
        itemsAddedtoCartList={itemsAddedtoCartList}
        quantityManager={quantityManager}
        resetCart={resetCart} />
    </MemoryRouter>
  )
  const yourCartText = getByText(/your cart/i)
  const totalPriceOnScreen = getByText(/190/i)
  const itemPrice = getByText(/200/i)
  expect(itemPrice).toBeInTheDocument()
  expect(yourCartText).toBeInTheDocument()
  expect(totalPriceOnScreen).toBeInTheDocument()
})

test("testing the useNavigate in the cartBar component",async ()=>{
    const user = userEvent.setup()
    render(
    
        <CartBar isCartClicked={isCartClicked}
        cartClickedSetter={cartClickedSetter}
        totalItemsInCart={1}
        totalPrice={totalPrice}
        itemsAddedtoCartList={itemsAddedtoCartList}
        quantityManager={quantityManager}
        resetCart={resetCart} />
        )

    const button = screen.getByText("Checkout")
    expect(button).toBeInTheDocument()
    await user.click(button)
    expect(resetCart).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalled()
})

test("testing the error page component", ()=>{
    render(
     <ErrorPage />    
   )
    const errorText = screen.getByText(/oops/i)
    const errorMessage = screen.getByText(/not found/i)
    expect(errorText).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()

})

test("testing Header sub component", ()=>{
    render(<Counter value={26} />)
    const value = screen.getByText("26")
    expect(value).toBeInTheDocument()
})

test("testing the Header component",async ()=>{
    const mock = jest.fn()
   render(
    <MemoryRouter>
        <cart.Provider value={contextData} >
<Header cartClickedSetter={mock} totalItemsInCart={16} />
        </cart.Provider>
    </MemoryRouter>
   ) 
    const name = screen.getByText(/game/i)
    expect(name).toBeInTheDocument()

    const cartID = screen.getByTestId("cart")
    await userEvent.click(cartID)
    expect(mock).toHaveBeenCalled()

})

test("testing the Home component", ()=>{
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )
    const homeText = screen.getByText(/navigation/i)
    expect(homeText).toBeInTheDocument()
})

test("testing the Platforms Component", ()=>{
    render(<Platforms />)
    const platformText = screen.getByText(/playstation/i)
    expect(platformText).toBeInTheDocument()
})

test("testing the Side Panel component", ()=>{
    render(<SidePanel />)
    const sidePanel = screen.getByText(/option/i)
})
test("testing the useGameSearch Hook",async ()=>{

    global.fetch = jest.fn().mockResolvedValue({
        json : ()=> [
                { id : 3030,
                  background_image : "",
                  playtime : 178,
                  name : "GTA"
                },
                { id : 3030,
                  background_image : "",
                  playtime : 178,
                  name : "GTA"
                }
            ]
        
    })
    const result  = await act(()=>{
        const { result} = renderHook(useGameSearch)
        return result
    }) 
    const [gameData, loading, error] = result.current
    expect(gameData[0].id).toBe(3030)
    expect(loading).not.toBeTruthy()
    expect(error).toBeNull()
})

test("testing the useFetch custom hook", async()=>{

    global.fetch = jest.fn().mockResolvedValue({
        json : ()=> {
            return {   results : {
                id : 3030,
                background_image : "",
                playtime : 178,
                name : "GTA"
                },
            }
        }
        
    })
    const result = await act(()=>{
        const { result } = renderHook(useFetch, {
            initialProps : {
                genre : ""
            }
        })
        return result
    })
    const [ gameData, loading, error] = result.current
    expect(gameData.id).toBe(3030)
    expect(loading).not.toBeTruthy()
    expect(error).toBeNull()
})

test("testing the useReducer's function", ()=>{
    const value = reducer(10 , { type : "increase", value : 20})
    const decreaseValue = reducer(10 , { type : "decrease", value : 5})
    
    expect(value).toBe(30)
    expect(decreaseValue).toBe(5)
})

test("testing Product Card Compoent", ()=>{
    const game = {
        id : 3804,
        background_image : "",
        playtime : 120,
        name : "GTA"
    }
    render(
        <MemoryRouter>
            <ProductCard game={game} />
        </MemoryRouter>
    )
    const text = screen.getByText(/add to cart/i)
    const gameName = screen.getByText("GTA")
    expect(text).toBeInTheDocument()
    expect(gameName).toBeInTheDocument()
})

test("testing the product Description Component", async ()=>{
    

    global.fetch = jest.fn().mockResolvedValue({
        json : ()=> {
                return { id : 3030,
                  background_image : "",
                  playtime : 178,
                  name : "GTA"
                }
            }
        
    })

    const getByTestId = await act(()=>{
        const { getByTestId } = render(
        <MemoryRouter initialEntries={[`/Products/Product_Description/${3498}`]}>
            <cart.Provider value={contextData}>
                <ProductDescription />                
            </cart.Provider>
        </MemoryRouter>
        
    )
        return getByTestId
    })
      const text = screen.getByText(/price/i)
      const playtime = screen.getByText(/178/i)
      const gameName = screen.getByText("GTA")
      const increaser = getByTestId("increaser")
      const decreaser = screen.getByTestId("decreaser")
      const input = getByTestId("input")
      await userEvent.click(increaser)
      expect(input).toHaveValue(1)
      await userEvent.click(decreaser)
      await userEvent.click(decreaser)
      expect(input).toHaveValue(0)
      expect(gameName).toBeInTheDocument()
      expect(playtime).toBeInTheDocument()
      expect(text).toBeInTheDocument()
})