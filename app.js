let userseq=[];
let gameseq=[];
let color=["yellow","red","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
    
    levelUp();}
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomval=Math.floor(Math.random()*4);
    let randomcolour=color[randomval];
    let randombtn=document.querySelector(`.${randomcolour}`);
    gameseq.push(randomcolour);
    console.log(gameseq);
    btnFlash(randombtn);
}
function checkAns(idx){
    if (userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

