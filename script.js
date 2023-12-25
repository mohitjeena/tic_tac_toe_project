let boxes = document.querySelectorAll(".box");

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let plyX = true;
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let audio = new Audio("./sounds/green.mp3");
    audio.play();
    if (plyX) {
      box.innerHTML = "X";
      plyX = false;
      count++;
    } else {
      box.innerHTML = "O";
      plyX = true;
      count++;
    }
    box.disabled = true;
    checkWinner();
  });
});

function checkWinner() {
  for (let patternArr of winPattern) {
    // console.log(,patternArr[1],patternArr[2]);
    btn1 = boxes[patternArr[0]].innerHTML;
    btn2 = boxes[patternArr[1]].innerHTML;
    btn3 = boxes[patternArr[2]].innerHTML;
    if (btn1 !== "" && btn2 !== "" && btn3 !== "") {
      if (btn1 == btn2 && btn2 == btn3) {
        getWinner(btn1);
        break;
      } else if (count == 9 && btn1 !== btn2 && btn2 !== btn3) {
        getWinner();
      }
    }
  }
}

function getWinner(winner) {
  let audio = new Audio("./sounds/over.mp3");
  audio.play();
  boxes.forEach((box) => {
    box.disabled = true;
  });
  document.querySelector(".winner-section").style.display = "block";
  if (winner == "X" || winner == "O") {
    document.querySelector(
      ".winner-section"
    ).children[0].innerHTML = `Congratulations, Winner is ${winner}`;
  } else {
    document.querySelector(
      ".winner-section"
    ).children[0].innerHTML = `Game is Draw.`;
  }
}
resetBtn = document.querySelector("#reset-btn");
newGame = document.querySelector("#new-game");
resetBtn.addEventListener("click", () => {
  resetGame();
});
newGame.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  document.querySelector(".winner-section").style.display = "none";
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
    count = 0;
  });
}

