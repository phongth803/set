import React, { useState } from "react";
import Board from "../Board/Board";
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const xIsNext = stepNumber % 2 === 0;
  const currentSquare = history[stepNumber];

  const handlePlay = (newSquare) => {
    const newHistory = [...history.slice(0, stepNumber + 1), newSquare];
    setHistory(newHistory);
    setStepNumber(newHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setStepNumber(nextMove);
  };

  const moves = history.map((item, index) => {
    const desc = index > 0 ? "Go to move #" + index : "Go to game start";
    return (
      <li key={item}>
        {index === stepNumber ? (
          `You are at move #${index}`
        ) : (
          <button onClick={() => jumpTo(index)}>{desc}</button>
        )}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
