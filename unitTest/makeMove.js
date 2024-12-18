function testMakeMove() {
    let tests = [
        // Nước đi hợp lệ
        [[{ row: 1, col: 0 }, { row: 2, col: 0 }], true],  // Di chuyển quân tốt
        [[{ row: 0, col: 1 }, { row: 2, col: 2 }], true],  // Di chuyển quân mã

        // Nước đi không hợp lệ
        [[{ row: 0, col: 0 }, { row: 0, col: 0 }], false], // Không di chuyển
        [[{ row: 7, col: 7 }, { row: 8, col: 8 }], false], // Ra ngoài bàn cờ
        [[{ row: 0, col: 0 }, { row: 0, col: 1 }], false], // Di chuyển không hợp lệ cho quân xe

        // Di chuyển đến ô đã có quân cờ cùng màu
        [[{ row: 0, col: 0 }, { row: 0, col: 1 }], false], // Giả sử có quân cờ cùng màu ở đích

        // Di chuyển đến ô có quân cờ đối phương
        [[{ row: 1, col: 0 }, { row: 6, col: 0 }], true],  // Ăn quân cờ đối phương

        // Di chuyển quân vua vào vị trí bị chiếu
        [[{ row: 4, col: 0 }, { row: 4, col: 1 }], false], // Di chuyển vào vị trí bị chiếu

        // Di chuyển quân cờ không tồn tại
        [[{ row: 8, col: 8 }, { row: 9, col: 9 }], false], // Vị trí không tồn tại

        // Đầu vào không hợp lệ
        [null, false],
        [undefined, false],
        ["invalid", false],
        [{}, false],
    ];

    for (let testCase of tests) {
        let result = game.makeMove(testCase[0]);
        if (result === testCase[1]) {
            console.log("Oke in case " + JSON.stringify(testCase[0]));
        } else {
            console.log("Wrong in case " + JSON.stringify(testCase[0]));
        }
    }
    return "Complete Test Make Move";
}

// Giả sử bạn đã khởi tạo game và các đối tượng cần thiết
testMakeMove();