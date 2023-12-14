import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './Components/Home.jsx'
import Products from './Components/Products.jsx'
import ProductDescription from './Components/ProductDescription.jsx'
import { ProductMainPageBody } from './Components/ProductBody.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='Products' element={<Products/>} >
            <Route index element={<ProductMainPageBody/>} />
            <Route path='Product_Description/:productID' element={<ProductDescription/>} />
          </ Route >
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
