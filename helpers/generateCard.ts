import { ISquare } from "../types";
import fillWithNumbers from "./fillWithNumbers";
import generateRandomNumber from "./generateRandomNumber";

export default function generateCard() {
  const grid = <ISquare[]>[];

  // i = column
  for (let i = 1; i <= 5; i++) {
    // j = row
    for (let j = 1; j <= 5; j++) {
      // returns an array with numbers
      const skip = grid.map((item) => item.number);
      // if i (column) is 2 and j (row) is 2, set value to 0 meaning that it's "free"
      if (i === 3 && j === 3) {
        grid.push({
          column: 3,
          row: 3,
          number: 0,
          marked: true,
        });
      } else {
        grid.push({
          column: i,
          row: j,
          number: generateRandomNumber(
            fillWithNumbers(15 * i - 14, 15 * i),
            skip
          ),
          marked: false,
        });
      }
    }
  }

  return grid;
}
