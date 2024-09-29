import React from "react";
import Square from "../Square/Square";

function Board(props) {
  const { xIsNext, squares, onPlay } = props;
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return lines[i];
      }
    }
    const isDraw = squares.some((square) => square === null);
    if (!isDraw) return "Draw";
    return null;
  };
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[i] = xIsNext ? "X" : "O";
    onPlay(squaresCopy);
  };
  let status;
  const winner = calculateWinner(squares);
  if (winner === "Draw") {
    status = "Draw";
  } else {
    status = winner
      ? `Winner: ${squares[winner[0]]}`
      : `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 3, 6].map((row) => (
        <div key={row} className="board-row">
          {squares.slice(row, row + 3).map((square, index) => (
            <Square
              winner={winner && winner.includes(row + index)}
              key={row + index}
              value={square}
              onSquareClick={() => handleClick(row + index)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default Board;
