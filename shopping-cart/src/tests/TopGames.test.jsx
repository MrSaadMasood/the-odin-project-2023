import {expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import TopGames from "../Components/TopGames"

it("renders the TopGames component", ()=>{
    render(<TopGames/>)
    const topGamesText = screen.getByText("Best of the Year")
    expect(topGamesText).toBeInTheDocument()
})