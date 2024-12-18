function PieceBase(position, color) {
    this.position = position;
    this.color = color;
}

PieceBase.prototype.isValidMove = function() {
    console.log('Can not implement isValidMove in PieceBase');
}

function PlayerBase(name, color) {
    this.name = name;
    this.color = color;
}

PlayerBase.prototype.makeMove = function() {
    console.log('Can not implement makeMove in PlayerBase');
}

function GameBase(board, blackPlayer, whitePlayer) {
    this.board = board;
    this.blackPlayer = blackPlayer;
    this.whitePlayer = whitePlayer;
}

GameBase.prototype.start = function() {
    console.log('Can not implement start in GameBase');
}

GameBase.prototype.end = function() {
    console.log('Can not implement end in GameBase');
}