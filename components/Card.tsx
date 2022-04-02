import React, { useEffect, useState } from "react";
import Square from "./Square";
import { ISquare } from "../types";
import checkVertical from "../helpers/checkVertical";
import ConfettiExplosion from "./ConfettiExplosion";
import checkHorizontal from "../helpers/checkHorizontal";
import checkDiagonal from "../helpers/checkDiagonal";

interface IProps {
  initialCard: ISquare[];
  numbers: number[];
  bingo: boolean;
  setBingo: (bingo: boolean) => void;
}

const matrixRightToLeftDown = [
  [1, 5],
  [2, 4],
  [3, 3],
  [4, 2],
  [5, 1],
];

const matrixLeftToRightDown = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
];

const Card = ({ initialCard, numbers, bingo, setBingo }: IProps) => {
  // Creates a new card and changes marked values to true if included in the numbers array
  const card: ISquare[] = initialCard.map((el) => ({
    ...el,
    marked: numbers.includes(el.number),
  }));

  // Returns only the objects that have a marked value of true
  const marked = card.filter((item) => item.marked === true);

  useEffect(() => {
    const vertical = checkVertical(marked);
    const horizontal = checkHorizontal(marked);
    const diagonal =
      checkDiagonal(marked, matrixLeftToRightDown) ||
      checkDiagonal(marked, matrixRightToLeftDown);

    if (vertical || horizontal || diagonal) {
      setBingo(true);
    }
  }, [marked]);

  return (
    <div className="card bingo-card">
      <ConfettiExplosion bingo={bingo} />
      {card.map(({ number, column, row, marked }, index) => (
        <Square
          key={index}
          number={number}
          column={column}
          row={row}
          marked={marked}
        />
      ))}
    </div>
  );
};

export default Card;
