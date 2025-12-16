const boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newBtn = document.querySelector('#newGame');
const message = document.querySelector('#message');
const win = document.querySelector(".win");
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    message.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO)  {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#171721"
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const disableBoxes = () => {
     for (let box of boxes) {
         box.disabled = true;  
    }
};
const enableBoxes = () => {
     for (let box of boxes) {
         box.disabled = false;  
         box.innerText = "";
    }
};

const showWinner = (winner) => {
    win.innerText = `Player ${winner} Wins!`;
    message.classList.remove("hide");
    disableBoxes();
};

const checkWin = () => {
    for (let pattern of winPattern) {
        let patVal1 = boxes[pattern[0]].innerText;
        let patVal2 = boxes[pattern[1]].innerText;
        let patVal3 = boxes[pattern[2]].innerText;

        if (patVal1 !== "" && patVal2 !== "" && patVal3 !== "" ) {
            if (patVal1 === patVal2 && patVal2 === patVal3) {
              showWinner(patVal1);
            }
        } 
    }
};

newBtn.addEventListener("click",  resetGame);
resetBtn.addEventListener("click", resetGame);
