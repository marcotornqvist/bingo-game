import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Form from "../Form";

function getUsername() {
  return screen.getByRole("textbox", {
    name: /enter player name/i,
  });
}

function getSubmitBtn() {
  return screen.getByRole("button", { name: /confirm name/i });
}

describe("Gorm", () => {
  const setName = jest.fn();

  beforeEach(() => {
    render(<Form setName={setName} />);
  });

  test("input should be initially empty", () => {
    expect(getUsername().value).toBe("");
  });

  test("rendering, changing the username input value and submitting the form", () => {
    fireEvent.change(getUsername(), { target: { value: "jane doe" } });
    expect(getUsername().value).toBe("jane doe");

    fireEvent.click(getSubmitBtn());
    expect(setName).toBeCalledTimes(1);
  });

  describe("username error handling", () => {
    test("should show error message when username is empty", () => {
      fireEvent.change(getUsername(), { target: { value: "" } });
      fireEvent.click(getSubmitBtn());

      expect(getUsername()).toHaveErrorMessage(/name cannot be empty/i);
    });

    test("should show no error message if username input is valid", () => {
      fireEvent.change(getUsername(), { target: { value: "marco" } });
      fireEvent.click(getSubmitBtn());

      expect(
        screen.queryByText(/name cannot be empty/i)
      ).not.toBeInTheDocument();
    });
  });
});
