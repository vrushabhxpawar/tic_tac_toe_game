let btns = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let p = document.querySelector(".newMsg")
let msg = document.querySelector("#msg");
let turnX = true;
const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnX) {
      btn.innerHTML = `<p style = "color : #2D336B">X</P`;
      turnX = false;
    } else {
      btn.innerHTML = `<p style = "color : #DCD7C9">O</P`;
      turnX = true;
    }
    btn.disabled = true;
    check();
  })
})

function check() {
  for (pattern of winPattern) {
    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        for (btn of btns) {
          btn.disabled = true;
        }
        showWinner(pos1);
      }
    }
  }

}

function showWinner(winner) {
  p.innerText = `Congratulations, Winner is ${winner} `
  msg.classList.remove("hide");
  reset.classList.add("hide");
}

reset.addEventListener("click", () => {
  turnX = true;
  p.innerText = "";
  msg.classList.add("hide");
  for (btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
})

newGame.addEventListener("click", () => {
  turnX = true;
  p.innerText = "";
  msg.classList.add("hide");
  reset.classList.remove("hide");
  for (btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
})

function draw (){
  p.innerText = ` Game draw !!.`
}