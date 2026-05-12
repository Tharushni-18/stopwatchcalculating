let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay(){

    let h =
        hours < 10 ? "0" + hours : hours;

    let m =
        minutes < 10 ? "0" + minutes : minutes;

    let s =
        seconds < 10 ? "0" + seconds : seconds;

    let ms =
        milliseconds < 10
        ? "0" + milliseconds
        : milliseconds;

    document.getElementById("display").innerText =
        h + ":" + m + ":" + s + ":" + ms;
}

function stopwatch(){

    milliseconds++;

    if(milliseconds == 100){
        milliseconds = 0;
        seconds++;
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startWatch(){

    if(timer !== null){
        return;
    }

    timer = setInterval(stopwatch,10);
}

function pauseWatch(){

    clearInterval(timer);
    timer = null;
}

function resetWatch(){

    clearInterval(timer);

    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function lapWatch(){

    if(hours == 0 &&
       minutes == 0 &&
       seconds == 0 &&
       milliseconds == 0){
        return;
    }

    let li =
        document.createElement("li");

    li.innerText =
        document.getElementById("display").innerText;

    document.getElementById("laps").appendChild(li);
}