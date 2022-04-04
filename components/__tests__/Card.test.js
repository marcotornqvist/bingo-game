import { render, screen } from "@testing-library/react";
import Card from "../Card";

const fakeCard = [
  { column: 1, row: 1, number: 10, marked: false },
  { column: 1, row: 2, number: 7, marked: false },
  { column: 1, row: 3, number: 15, marked: false },
  { column: 1, row: 4, number: 12, marked: false },
  { column: 1, row: 5, number: 3, marked: false },
  { column: 2, row: 1, number: 23, marked: false },
  { column: 2, row: 2, number: 27, marked: false },
  { column: 2, row: 3, number: 18, marked: false },
  { column: 2, row: 4, number: 29, marked: false },
  { column: 2, row: 5, number: 21, marked: false },
  { column: 3, row: 1, number: 38, marked: false },
  { column: 3, row: 2, number: 36, marked: false },
  { column: 3, row: 3, number: 0, marked: true },
  { column: 3, row: 4, number: 33, marked: false },
  { column: 3, row: 5, number: 43, marked: false },
  { column: 4, row: 1, number: 56, marked: false },
  { column: 4, row: 2, number: 51, marked: false },
  { column: 4, row: 3, number: 48, marked: false },
  { column: 4, row: 4, number: 49, marked: false },
  { column: 4, row: 5, number: 59, marked: false },
  { column: 5, row: 1, number: 71, marked: false },
  { column: 5, row: 2, number: 62, marked: false },
  { column: 5, row: 3, number: 68, marked: false },
  { column: 5, row: 4, number: 69, marked: false },
  { column: 5, row: 5, number: 67, marked: false },
];

describe("Card", () => {
  beforeEach(() => {
    render(<Card initialCard={fakeCard} numbers={[0]} />);
  });

  test("check that there are 25 squares", () => {
    const items = screen.getAllByRole("square");
    expect(items).toHaveLength(25);
  });
});
