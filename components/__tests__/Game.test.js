import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Game from "../Game";

function getUsername() {
  return screen.getByRole("username");
}

function getNextNumberBtn() {
  return screen.getByRole("button", { name: /next number/i });
}

describe("Game", () => {
  beforeEach(() => {
    render(<Game />);
  });

  test("check that username exists", () => {
    expect(getUsername()).toBeInTheDocument();
  });

  test("check that count increments when next number is clicked", () => {
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    fireEvent.click(getNextNumberBtn());
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
