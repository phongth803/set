function testGetAvailableMoves() {
  let tests = [
    [{ row: 1, col: 1 }, []], // Available moves for an empty square
    [{ row: 1, col: 0 }, [{ row: 2, col: 0 }]], // Available moves for a pawn
    [
      { row: 0, col: 0 },
      [
        { row: 1, col: 0 },
        { row: 2, col: 0 },
        { row: 3, col: 0 },
        { row: 4, col: 0 },
        { row: 5, col: 0 },
        { row: 6, col: 0 },
        { row: 7, col: 0 },
      ],
    ], // Available moves for a rook
    [
      { row: 0, col: 4 },
      [
        { row: 0, col: 3 },
        { row: 0, col: 5 },
        { row: 1, col: 3 },
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
    ], // Available moves for a king
    [
      { row: 0, col: 1 },
      [
        { row: 2, col: 0 },
        { row: 2, col: 2 },
      ],
    ], // Available moves for a knight
  ];

  for (let testCase of tests) {
    let piece = game.board.getPieceAt(testCase[0]);
    let result = piece.getAvailableMoves(game.board);
    if (JSON.stringify(result) === JSON.stringify(testCase[1])) {
      console.log("Oke in case " + JSON.stringify(testCase[0]));
    } else {
      console.log("Wrong in case " + JSON.stringify(testCase[0]));
    }
  }
  return "Complete Test GetAvailableMoves";
}

// Assume game and board are initialized
testGetAvailableMoves();
