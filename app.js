const buttons=document.querySelectorAll(".icon")
const score=document.querySelector(".scoreCount")
const gameBoard=document.querySelector(".game-board")
const winnerBoard=document.querySelector(".winner-details")
const user=document.querySelector('#user')
const computer=document.querySelector('#computer')
const result=document.querySelector("#text")
const playAgainBtn=document.querySelector(".play-again-btn")


let userChoice;
let userScore=0;

buttons.forEach((button)=>button.addEventListener('click',(e)=>{
console.log(e.target.id)
userChoice=e.target.alt;
user.appendChild(document.getElementById(userChoice).cloneNode(true))

showResult()

setTimeout(()=>{
    computersTurn()
    checkResult()
},200)

}))

const computersTurn=()=>{
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber===1){
        computerChoice="rock";
    }
    if(randomNumber===2){
        computerChoice="paper";

    }
    if(randomNumber===3){
        computerChoice="scissor";

    }
}

const checkResult=()=>{
    if(userChoice==="rock" && computerChoice==="scissor" || userChoice==="scissor" && computerChoice==="paper" ||userChoice==="paper" && computerChoice==="rock"){
        userScore++;
        score.innerText=userScore
        computer.appendChild(document.getElementById(computerChoice).cloneNode(true)) 
        result.innerHTML+='<p>You Win</p>'
        document.querySelector(".play-again-btn").style.color="black"

    }
   
    if(computerChoice==="rock" && userChoice ==="scissor" || computerChoice==="scissor" && userChoice==="paper" || computerChoice==="paper" && userChoice==="rock"){
        if(userScore>0){
            userScore--;
            score.innerText=userScore
        }  
        computer.appendChild(document.getElementById(computerChoice).cloneNode(true)) 
        result.innerHTML+='<p>You Lose</p>'
        document.querySelector(".play-again-btn").style.color="red"

    }

    if(computerChoice==="rock" && userChoice==="rock" || computerChoice==="paper" && userChoice==="paper" || computerChoice==="scissor" && userChoice==="scissor"){
        computer.appendChild(document.getElementById(computerChoice).cloneNode(true)) 
        result.innerHTML+="<p>It's a Draw</p>"
        document.querySelector(".play-again-btn").style.color="black"
    }
}

const showResult=()=>{
    gameBoard.classList.add('hide')
    winnerBoard.classList.remove('hide')
    const playAgainBtn=document.querySelector(".play-again-btn")
    playAgainBtn.addEventListener("click",playAgain)

}

const playAgain=()=>{
    gameBoard.classList.remove('hide')
    winnerBoard.classList.add('hide')
    user.innerHTML=null;
    computer.innerHTML=null;
    result.innerHTML=null;
}
