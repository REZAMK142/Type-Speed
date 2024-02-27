//button
var BTN = document.querySelector(".btn-p");
//input top
var originText = document.querySelector(".body-form p").innerHTML;
//timer speed controll
var timerRunning = false;
//textarea
var textArea = document.querySelector(".input-text textarea");
//button new
var button = document.querySelector("#button");





var timer = [0,0,0,0];
var interval ;


function leadingZero(time){
    if(time<=9){
        time = "0" + time;
    }

    return time;
}
function runTimer(){
    var currentTime = leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
    BTN.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]* 6000))
}

function spellCheck(){
    let textEntered = textArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);
    if(originText==textEntered){        
        textArea.style.borderColor = "green";
       
    }else{
        if(originTextMatch==textEntered){
          textArea.style.borderColor = "yellow";
            clearInterval(interval);


        }else{
            textArea.style.borderColor = "red";

        }
    }
}

textArea.addEventListener("keypress",start());

function start(){
    var inside = textArea.value.length;
    if (inside===0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(runTimer,10);
    }
}

function restart(){
    textArea.value = "";
    clearInterval(interval);
    interval = null;
    textArea.style.borderColor = "black";
    timer = [0,0,0,0];
    timerRunning = false;
    BTN.innerHTML="00:00:00"
}


textArea.addEventListener("keypress",start);
textArea.addEventListener("keyup",spellCheck);
button.addEventListener("click",restart);