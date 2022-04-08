import NewGameScreen from "../NewGameScreen"
import { render, screen } from "@testing-library/react"

describe("New Game Screen", () => {
  it("should change player 1's mark on selection", () => {
    render (<NewGameScreen />)
    const buttonXElement = screen.getByTestId("choice_x")
    expect(buttonXElement).toBeInTheDocument()
  })
})