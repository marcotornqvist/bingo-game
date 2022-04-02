import type { ISquare } from "../types";

export default function checkHorizontal(card: ISquare[]) {
  for (let i = 1; i < 6; i++) {
    // Calculates how many times a column with a value of marked appears
    let count = card.reduce((n, x) => n + (x.row === i && x.marked ? 1 : 0), 0);

    if (count >= 5) {
      return true;
    }
  }

  return false;
}


