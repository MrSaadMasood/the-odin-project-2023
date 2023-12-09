import { it, vi, expect, assert } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../Components/Card";
import userEvent from "@testing-library/user-event";

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
//  expect(isCardClickedFunction).toHaveBeenCalled()
});

