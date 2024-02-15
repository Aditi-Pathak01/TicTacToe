let boxes = document.querySelectorAll(".box"); //all div with class box are saved as nodelist(array) in boxes!
let heading1 = document.querySelector(".heading-1");
let winMsg = document.querySelector(".winmsg")
let msg = document.querySelector(".msg")
let resetBtn = document.querySelector("#reset-btn")
let playAgainBtn =document.querySelector("#playagain");


let count = 0;
let turn0 = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      turn0 = false;
      box.disabled = true;
      box.innerText = "O";
      box.style.backgroundColor ="#8D99AE";
    } else {
      turn0 = "true";
      box.disabled = true;
      box.innerText = "X";
      box.style.backgroundColor ="#2B2D42";
    }
    let isWinner = checkWinner();
    count++;
    if (count === 9 && !isWinner) {
      draw();
    }
  });
});

let winningPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        return true;//for last count winner check! VIP
      }
    }
  }
}
const showWinner=(winner)=>{
  winMsg.classList.remove("hide");
  msg.innerText =`Congratulations \n Player ${winner} Won This Match!`
  heading1.classList.add("hide")
  disableBox();
}
const draw = () => {
  winMsg.classList.remove("hide");
  msg.innerText =`0ops! :( \n This Match Is Draw!`
  heading1.classList.add("hide")
  disableBox();
};
const disableBox =()=>{
  for (let box of boxes){
    box.disabled = true;
  }
}
const enableBox =()=>{
  for (let box of boxes){
    box.disabled = false;
  }
}
const reset=()=>{
  for(let box of boxes){
    box.innerText="";
    box.style.backgroundColor="indianred";
    count = 0;
    enableBox();
  }
}
resetBtn.addEventListener("click",reset);
playAgainBtn.addEventListener("click",reset);



