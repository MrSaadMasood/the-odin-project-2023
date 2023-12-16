import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './Components/Home.jsx'
import Products from './Components/ProductsMainPage.jsx'
import ProductDescription from './Components/ProductDescription.jsx'
import { ProductMainPageBody } from './Components/ProductBody.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Checkout from './Components/Checkout.jsx'

// created page routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='Products' element={<Products/>} >
            <Route index element={<ProductMainPageBody/>} />
            <Route path='Product_Description/:productID' element={<ProductDescription/>} />
          </ Route >
          <Route path='checkout' element={<Checkout />} />
          <Route path='*' errorElement={<ErrorPage />} />

    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
)
