
var timer = 60;
document.querySelector('#timer').textContent = timer;


var score = 0;
var val = 0;
var temp;

function increaseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent=score;

}


function getNewHit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector('#hitValue').textContent = rn;
    temp = rn;

}

function makeBubble(){
var clutter ="";

for(let i=1; i<=184; i++)
    {
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble"> ${rn} </div>`
    }
document.querySelector('.pbtn').innerHTML = clutter;

};

function runTimer(){
    const timerInt =setInterval(function (){
        if(timer> 0)
        {
        timer--;
        document.querySelector('#timer').textContent = timer;
        }
        else{
            document.querySelector('.pbtn').innerHTML=`<h1>Game Over</h1>`;
            document.querySelector('#hitValue').textContent = '0';

            clearInterval(timerInt);
            
        }
    }, 1000)
}




document.querySelector('.pbtn').addEventListener('click',(e)=>{
    let clickedNum = (Number(e.target.textContent));
    if(temp === clickedNum){
        increaseScore();
        makeBubble();
        getNewHit();
    }    
    else{
        
    }

});
makeBubble();
runTimer();
getNewHit();
// increaseScore();