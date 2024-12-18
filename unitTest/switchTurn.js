function testSwitchTurn() {
    let tests = [
        ['white', 'black'], // Switch from white to black
        ['black', 'white'], // Switch from black to white
    ];

    for (let testCase of tests) {
        game.currentTurn = testCase[0];
        game.switchTurn();
        let result = game.currentTurn;
        if (result === testCase[1]) {
            console.log("Oke in case " + testCase[0]);
        } else {
            console.log("Wrong in case " + testCase[0]);
        }
    }
    return "Complete Test SwitchTurn";
}

// Assume game is initialized
testSwitchTurn();