import type { ISquare } from "../types";

export default function checkVertical(card: ISquare[]) {
  for (let i = 1; i < 6; i++) {
    // Calculates how many times a column with a certain values appears
    let count: number = card.reduce(
      (n: number, x: ISquare) => n + (x.column === i && x.marked ? 1 : 0),
      0
    );

    if (count >= 5) {
      return true;
    }
  }

  return false;
}
