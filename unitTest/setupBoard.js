function testSetupBoard() {
    game.setupBoard();
    let tests = [
        [{ row: 0, col: 0 }, 'Rook'],   // Initial position of Rook
        [{ row: 0, col: 1 }, 'Knight'], // Initial position of Knight
        [{ row: 0, col: 2 }, 'Bishop'], // Initial position of Bishop
        [{ row: 0, col: 3 }, 'Queen'], // Initial position of Queen
        [{ row: 0, col: 4 }, 'King'],  // Initial position of King
        [{ row: 0, col: 5 }, 'Bishop'], // Initial position of Bishop
        [{ row: 0, col: 6 }, 'Knight'], // Initial position of Knight
        
        [{ row: 0, col: 7 }, 'Rook'],  // Initial position of Rook
        [{ row: 1, col: 0 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 1, col: 1 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 1, col: 2 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 1, col: 3 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 1, col: 4 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 1, col: 5 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 1, col: 6 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 1, col: 7 }, 'Pawn'],  // Initial position of Pawn

        [{ row: 6, col: 0 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 6, col: 1 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 6, col: 2 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 6, col: 3 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 6, col: 4 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 6, col: 5 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 6, col: 6 }, 'Pawn'],  // Initial position of Pawn
        [{ row: 6, col: 7 }, 'Pawn'],  // Initial position of Pawn

        [{ row: 7, col: 0 }, 'Rook'],  // Initial position of Rook
        [{ row: 7, col: 1 }, 'Knight'], // Initial position of Knight
        [{ row: 7, col: 2 }, 'Bishop'], // Initial position of Bishop
        [{ row: 7, col: 3 }, 'Queen'], // Initial position of Queen
        [{ row: 7, col: 4 }, 'King'],  // Initial position of King
        [{ row: 7, col: 5 }, 'Bishop'], // Initial position of Bishop
        [{ row: 7, col: 6 }, 'Knight'], // Initial position of Knight
        [{ row: 7, col: 7 }, 'Rook'],  // Initial position of Rook
    ];

    for (let testCase of tests) {
        let piece = game.board.getPieceAt(testCase[0]);
        if (piece && piece.constructor.name === testCase[1]) {
            console.log("Oke in case " + JSON.stringify(testCase[0]));
        } else {
            console.log("Wrong in case " + JSON.stringify(testCase[0]));
        }
    }
    return "Complete Test SetupBoard";
}

// Assume game is initialized
testSetupBoard();