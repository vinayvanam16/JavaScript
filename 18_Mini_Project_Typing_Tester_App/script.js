var textAreaBorder = document.querySelector("#text-area");
var textArea = document.querySelector("#text-area");
var originalText = document.querySelector(".text-section-div p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");
var report  = document.getElementById('#message');

var timer = 0;
var minutes=0;
var seconds=0;
var milliSeconds=0;
var currentTime="";
var interval;
var timerRunning = false;


// Add leading zero to numbers 9 or below:
function leadingZero(time) {
    var actualTime = "";
    if (time<= 9){
        actualTime = "0"+time;
    }
    else{
        actualTime = time;
    }
    return actualTime;
}


// Run a standard minute/second/hundredths timer:
//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));
    minutes=leadingZero(minutes);
    seconds=leadingZero(seconds);
    milliSeconds=leadingZero(milliSeconds);
    currentTime = minutes + ":"+ seconds+":"+milliSeconds;
    theTimer.innerHTML= currentTime;
    timer++;

}


// Match the text entered with the provided text on the page:
function spellCheck() {
    var userText = textArea.value;
    //console.log(userText);
    var userTextMatch = originalText.substring(0,userText.length);
    if(userText == originalText){
        textAreaBorder.style.borderColor = "green";
        clearInterval(interval);// clears the timer
        var report = ("Sucessfully Completed..");
        console.log(report);
        document.getElementById('message').innerHTML=report;
        confirm("sucessfully completed ");
    }
    else{
        if(userText == userTextMatch){
            textAreaBorder.style.borderColor="lightBlue";
        }
        else{
            textAreaBorder.style.borderColor="red";
        }

    }
}


// Start the timer:
function start() {
    var userTextLength= textArea.value.length;
    //console.log(userTextLength);
    if (userTextLength === 0 && !timerRunning){
        timerRunning=true;
        interval= setInterval(startTimer,10)  // starts the timer
    }
}



// Reset everything:
function reset() {
    //console.log("You Clicked Me:");
    textAreaBorder.style.borderColor="gray";
    textArea.value ="";
    clearInterval(interval);
    minutes=0;
    seconds=0;
    milliSeconds=0;
    timer=0;
    theTimer.innerHTML="00:00:00";
    timerRunning=false;
    message.innerHTML = "";
}



// Event listeners for keyboard input and the reset button:
textArea.addEventListener('keypress',start);
textArea.addEventListener('keyup',spellCheck);
resetButton.addEventListener('click',reset);