let start = document.querySelector("#start");
let next = document.querySelector("#next");
let submit = document.querySelector("#submit");
let exit = document.querySelector("#exit");
let timer = document.querySelector("#timer");
document.getElementById("start").style.zIndex = 14;
document.getElementById("next").style.zIndex = 13;
document.getElementById("c1").style.zIndex = 12;

let slideDeck = ["c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12"];
let index = 0;
let card = '';
let timerStart = false;

function startQuiz () {
    document.getElementById("start").style.zIndex = 0;
    document.getElementById("c1").style.zIndex = 0;
    document.getElementById("c2").style.zIndex = 12;
}

function nextQuestion () {
    card = slideDeck[index];
    card = document.getElementById(card).style.zIndex = 12;
    index++;

    if (timerStart === false) {
        timerStart = true;
        countDown();
    }

    if (index == 10) {
      document.getElementById("exit").style.zIndex = 14;
    }
    else{
      document.getElementById("submit").style.zIndex = 14;
    }
}

function submitAns () {
    document.getElementById("submit").style.zIndex = 0;
    let radios = document.querySelectorAll('input[name="answer"]');
    let selectedVal;
        for (let radio of radios) {
            if (radio.checked) {
                selectedVal = radio.value;
            }
        }
        if (selectedVal == "correct") {
          document.getElementById("rightAns").style.zIndex = 14;
        }
        else{
          document.getElementById("wrongAns").style.zIndex = 14;
        }    
        console.log(selectedVal);
}

function countDown() {
    var timeLeft = 300;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timer.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

start.addEventListener("click", function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    startQuiz();
    
});

next.addEventListener("click", function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    nextQuestion();
  
});

submit.addEventListener("click", function(event) {
    event.stopPropagation();
    event.preventDefault();

    submitAns();

});

exit.addEventListener("click", function(event) {
  event.stopPropagation();
  event.preventDefault();
  window.location.reload();

});
