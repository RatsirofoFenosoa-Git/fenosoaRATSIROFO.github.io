var board = document.querySelector(".game-container");
var button = document.querySelector('.button');
var winMessage = document.querySelector('.winner');
var turn = "x";
function listenBord() {
    board.addEventListener('click', runGame);
}
function main() {
    createBoard();
    listenBord();
}
function runGame(e) {
    var boxId = e.target.id;
    //console.log(boxId);
    if (boxId === null)
        return;
    var box = document.querySelector("#".concat(boxId));
    if (box === null || box.textContent != "")
        return;
    box.textContent = turn;
    var winner = checkWinner();
    if (!winner)
        switchPlayer();
    else {
        endGame();
    }
}
function endGame() {
    board.removeEventListener('click', runGame);
    button.addEventListener('click', resetGame);
    if (winMessage === null)
        return;
    winMessage.textContent = "le(la) gagnant(e) est \"".concat(turn, "\"");
    winMessage.setAttribute('display', 'block');
    button.style.visibility = "visible";
}
function resetGame() {
    turn = 'x';
    resetBoxes();
    button.style.visibility = 'hidden';
    winMessage.textContent = '';
    board.addEventListener('click', runGame);
}
function resetBoxes() {
    for (var i = 0; i <= 8; i++) {
        var box = document.querySelector("#box-".concat(i));
        box.textContent = "";
        //animation
    }
}
function checkWinner() {
    var boxes = getBoxes();
    return (
    // (boxes[0] === boxes[1]&& boxes[1]===boxes[2]&&boxes[0]!='')||
    // (boxes[3] === boxes[4]&& boxes[4]===boxes[5]&&boxes[3]!='')||
    // (boxes[6] === boxes[7]&& boxes[7]===boxes[8]&&boxes[6]!='')||
    // (boxes[0] === boxes[4]&& boxes[4]===boxes[8]&&boxes[0]!='')||
    // (boxes[2] === boxes[4]&& boxes[4]===boxes[6]&&boxes[2]!='')||
    // (boxes[1] === boxes[4]&& boxes[4]===boxes[7]&&boxes[1]!='')||
    // (boxes[0] === boxes[3]&& boxes[3]===boxes[6]&&boxes[0]!='')||
    // (boxes[2] === boxes[5]&& boxes[5]===boxes[8]&&boxes[2]!='')
    (((boxes[0] == "x") && (boxes[1] == "x") && (boxes[2] == "x")) || ((boxes[0] == "o") && (boxes[1] == "o") && (boxes[2] == "o"))) ||
        (((boxes[3] == "x") && (boxes[4] == "x") && (boxes[5] == "x")) || ((boxes[3] == "o") && (boxes[4] == "o") && (boxes[5] == "o"))) ||
        (((boxes[6] == "x") && (boxes[7] == "x") && (boxes[8] == "x")) || ((boxes[6] == "o") && (boxes[7] == "o") && (boxes[8] == "o"))) ||
        (((boxes[0] == "x") && (boxes[3] == "x") && (boxes[6] == "x")) || ((boxes[0] == "o") && (boxes[3] == "o") && (boxes[6] == "o"))) ||
        (((boxes[1] == "x") && (boxes[4] == "x") && (boxes[7] == "x")) || ((boxes[1] == "o") && (boxes[4] == "o") && (boxes[7] == "o"))) ||
        (((boxes[2] == "x") && (boxes[5] == "x") && (boxes[8] == "x")) || ((boxes[2] == "o") && (boxes[5] == "o") && (boxes[8] == "o"))) ||
        (((boxes[0] == "x") && (boxes[4] == "x") && (boxes[8] == "x")) || ((boxes[0] == "o") && (boxes[4] == "o") && (boxes[8] == "o"))) ||
        (((boxes[2] == "x") && (boxes[4] == "x") && (boxes[6] == "x")) || ((boxes[2] == "o") && (boxes[4] == "o") && (boxes[6] == "o"))));
}
function getBoxes() {
    var boxesContent = [];
    for (var i = 1; i <= 8; i++) {
        var box = document.querySelector("#box-".concat(i));
        var boxContent = box === null || box === void 0 ? void 0 : box.textContent;
        if (boxContent === null)
            boxesContent.push("");
        else {
            boxesContent.push(boxContent);
        }
    }
    return boxesContent;
}
function switchPlayer() {
    if (turn === 'x') {
        turn = 'o';
    }
    else {
        turn = "x";
    }
}
function createBoard() {
    for (var i = 0; i < 9; i++)
        makebox(i);
}
function makebox(i) {
    var box = document.createElement('div');
    box.className = 'box';
    box.id = "box-".concat(i);
    box.textContent = '';
    board.appendChild(box);
}
main();
