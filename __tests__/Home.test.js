import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index";

function getFormSection() {
  return screen.queryByRole("insert-username-section");
}

function getGameSection() {
  return screen.queryByRole("game-section");
}

function getUsername() {
  return screen.getByRole("textbox", {
    name: /enter player name/i,
  });
}

function getSubmitBtn() {
  return screen.getByRole("button", { name: /confirm name/i });
}

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("check that form is rendered on initial render", () => {
    expect(getFormSection()).toBeInTheDocument();
    expect(getGameSection()).not.toBeInTheDocument();
  });

  test("check that bingo game is rendered when name is submitted", () => {
    fireEvent.change(getUsername(), { target: { value: "jane doe" } });
    fireEvent.click(getSubmitBtn());

    expect(getFormSection()).not.toBeInTheDocument();
    expect(getGameSection()).toBeInTheDocument();
  });
});
