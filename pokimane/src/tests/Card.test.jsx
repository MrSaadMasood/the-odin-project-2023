import { it, vi, expect, assert } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../Components/Card";
import userEvent from "@testing-library/user-event";
import GameOver from "../Components/GameOver";
import {toBeInTheDocument} from "@testing-library/jest-dom"
import InGameLogo from "../Components/InGameLogo";
import ScoreBoard from "../Components/ScoreBoard";
import SelectMode from "../Components/SelectMode";
import PlayArea from "../Components/PlayArea";
it("renders the Card component with initial data", () => {
  const user = userEvent.setup()
  const mockData = {
    name: "Pikachu",
    image: "pikachu.jpg",
    id: 25,
  };

  const cardDataArraySetter = vi.fn();
  const isCardClickedFunction = vi.fn()
  
  render(
    <Card
      isCardClickedFunction={isCardClickedFunction}
      cardClicked={false}
      gameDifficulty="Easy"
      gameLevel={1}
      cardDataArraySetter={cardDataArraySetter}
      dataInArrayPassed={mockData}
      cardClickedOnLevelIncrease={1}
    />
  );
    
  const cardContainer = screen.getByTestId("container")
  user.click(cardContainer);


  assert.ok(screen.getByText("Pikachu"));
});

it("tests the Game ober component" ,async ()=>{
  const result = vi.fn()
  const topScore = 16;
  const resetGameFunction = vi.fn()
  render(<GameOver result={result} topScore={topScore} resetGameFunction={resetGameFunction} />)
  const user = userEvent.setup()
  const text = screen.getByText(/16/i)
  const button = screen.getByRole("button", { name : "Play Again!"})
  await user.click(button)
  expect(text).toBeInTheDocument()
  expect(resetGameFunction).toHaveBeenCalled()
})

it("tests the inGameLogo component", async ()=>{
  const resetGameFunction = vi.fn()
  render(<InGameLogo resetGameFunction={resetGameFunction} />)
  const button = screen.getByTestId("button")
  await userEvent.click(button)
  expect(resetGameFunction).toHaveBeenCalled()
})

it("tests the scoreBoard Component", ()=>{
  render(<ScoreBoard score={10} topScore={20} level={3} />)
  expect(screen.getByText(/10/i)).toBeInTheDocument()
  expect(screen.getByText(/20/i)).toBeInTheDocument()
  expect(screen.getByText(/3/i)).toBeInTheDocument()
})

it("tests the handleMode component", async()=>{
  const handleModeSelection = vi.fn()
  render(<SelectMode handleModeSelection={handleModeSelection} />)
  expect(screen.getByText(/memory/i)).toBeInTheDocument()
  const button = screen.getByRole("button", { name : "Easy"})
  const button2= screen.getByRole("button", { name : "Hard"})
  await userEvent.click(button)
  expect(handleModeSelection).toHaveBeenCalledTimes(1)

  await userEvent.click(button2)
  expect(handleModeSelection).toHaveBeenCalledTimes(2)
})