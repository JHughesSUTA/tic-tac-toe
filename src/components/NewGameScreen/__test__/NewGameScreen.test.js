import NewGameScreen from "../NewGameScreen"
import { fireEvent, render, screen } from "@testing-library/react"

describe("New Game Screen", () => {
  it("should change player 1's mark on selection", () => {
    render (<NewGameScreen />)
    const buttonXElement = screen.getByTestId("choice_x")
    expect(buttonXElement).toBeInTheDocument()
  })

  it("should only highlight the selected player 1 mark", () => {
    render(<NewGameScreen />)
    const buttonXElement = screen.getByTestId("choice_x")
    const buttonOElement = screen.getByTestId("choice_o");
    fireEvent.click(buttonXElement)
    expect(buttonXElement).toHaveClass("module__select-button--active");
    expect(buttonOElement).not.toHaveClass("module__select-button--active");
  })

  it("should only highlight the selected player 1 mark after two clicks", () => {
    render(<NewGameScreen />);
    const buttonXElement = screen.getByTestId("choice_x");
    const buttonOElement = screen.getByTestId("choice_o");
    fireEvent.click(buttonXElement);
    fireEvent.click(buttonOElement);
    expect(buttonOElement).toHaveClass("module__select-button--active");
    expect(buttonXElement).not.toHaveClass("module__select-button--active");
  });
})