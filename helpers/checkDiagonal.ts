import { ISquare } from "../types";

export default function checkDiagonal(card: ISquare[], matrix: number[][]) {
  let counter = 0;

  // matrix example 1: = [[1, 1]] === row: 1, column: 1
  // matrix example 2: = [[2, 4]] === row: 2, column: 4

  card.forEach((item: ISquare) => {
    matrix.forEach((el) => {
      if (item.row === el[0] && item.column === el[1]) {
        counter++;
      }
    });
  });

  if (counter >= 5) {
    return true;
  }

  return false;
}
