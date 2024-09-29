import React from "react";

function Square(props) {
  const { value, onSquareClick, winner } = props;
  return (
    <button
      className={`square ${winner ? "win-square" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
