import { MemoryRouter } from "react-router-dom"
import Checkout from "../Components/Checkout"
import { render, screen } from "@testing-library/react"
import {toBeInTheDocument } from "@testing-library/jest-dom"
const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', ()=>({
    ...(jest.requireActual('react-router-dom')),
    useNavigate : ()=> mockedUseNavigate
}))
jest.useFakeTimers()
test("testing the checkout component", ()=>{
    render(
    <MemoryRouter>
        <Checkout/>
    </MemoryRouter>)
    const text = screen.getByText(/thank/i)
    expect(text).toBeInTheDocument()
    expect(mockedUseNavigate).not.toHaveBeenCalled()
})



test("testing the checkout component", ()=>{
    render(
    <MemoryRouter>
        <Checkout/>
    </MemoryRouter>)
    jest.runAllTimers()
    expect(mockedUseNavigate).toHaveBeenCalled()
    
jest.useRealTimers()
})

