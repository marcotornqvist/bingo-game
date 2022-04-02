import React from "react";
import { ISquare } from "../types";

const Square = ({ number, row, column, marked }: ISquare) => {
  return (
    <div className={`square col-${column} row-${row}`}>
      <h3>
        {number === 0 ? (
          "FREE"
        ) : marked ? (
          <span className="marked">X</span>
        ) : (
          number
        )}
      </h3>
    </div>
  );
};

export default Square;
