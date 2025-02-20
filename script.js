var timer = 60;
var score = 0;
var hitrn = 0;
function increseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit() {
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){    
const pbtm = document.querySelector("#pbtm");
clutter = '';
for (let i = 0; i <= 159; i++) {
    var rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`   
}

pbtm.innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(() => {
        if (timer>0) {
            timer--;
            document.querySelector("#timerval").textContent = timer
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
}

document.querySelector('#pbtm').addEventListener('click', (e) =>{
    var clickedNum = Number(e.target.textContent);
    if (clickedNum === hitrn){
        increseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
// increseScore();
