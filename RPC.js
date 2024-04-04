let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let board=document.querySelector(".board");
let usrcount=document.querySelector(".U-count");
let compcount=document.querySelector(".C-count");   
comp=["rock","paper","scissor"];

var computer = comp[Math.floor(Math.random()*comp.length)];
console.log(computer);


let user="blank";
let uc=0;
let cc=0;

const result=()=>{

    rock.addEventListener("click",()=>{
        user="rock";
        if(user==computer){
            board.innerText="Game Tie";
            
        }
        else if(user=="rock" && computer=="scissor"){
            board.innerText="User Wins";
            uc++;
            usrcount.innerText=uc;
        }else{
            board.innerText="Computer Wins";
            cc++;
            compcount.innerText=cc;
        }
        computer = comp[Math.floor(Math.random()*comp.length)];
        console.log(computer);
    })
    
    paper.addEventListener("click",()=>{
        user="paper";
        if(user==computer){
            board.innerText="Game Tie";
        }
        else if(user=="paper" && computer=="rock"){
            board.innerText="User wins";
            uc++;
            usrcount.innerText=uc;
        }else{
            board.innerText="Computer Wins";
            cc++;
            compcount.innerText=cc;
        }
        computer = comp[Math.floor(Math.random()*comp.length)];
        console.log(computer);
    })
    
    scissor.addEventListener("click",()=>{
        user="scissor";
        if(user==computer){
            board.innerText="Game Tie";
        }
        else if(user=="scissor" && computer=="paper"){
            board.innerText="User wins";
            uc++;
            usrcount.innerText=uc;
        }else{
            board.innerText="Computer Wins";
            cc++;
            compcount.innerText=cc;
        }
        computer = comp[Math.floor(Math.random()*comp.length)];
        console.log(computer);
    })

}

result();


