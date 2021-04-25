var scores = document.querySelector("#scores")
var timerEl = document.querySelector("#timer")
var instructions = document.querySelector(".instructions")
var data = document.querySelector('#data')
var quiz = document.querySelector('.class')
var startButton = document.querySelector(".start-button")
var results = document.querySelector('.results')
var index = 0;
var userAnswers = [];
var correctAnswers = ["C", "C", "D", "C", "D"];
var questions = [
    {
        question: 'Commonly used Data Types do not include:',
        A: 'Strings',
        B: 'Booleans',
        C: 'Alerts',
        D: 'Numbers',
        Answer: 'Alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within _______.',
        A: 'Quotes',
        B: 'Curly Brackets',
        C: 'Parenthesis',
        D: 'Square Brackets',
        Answer: 'Parenthesis'
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        A: 'Numbers and Strings',
        B: 'Other Arrays',
        C: 'Booleans',
        D: 'All the above',
        Answer: 'All the above'
    },
    {
        question: 'String values must be enclosed within _______',
        A: 'Commas',
        B: 'Curly Brackets',
        C: 'Quotes',
        D: 'Parenthesis',
        Answer: 'Quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        A: 'Javascript',
        B: 'Terminal/bash',
        C: 'For loops',
        D: 'Console.log',
        Answer: 'Console.log'
        
    }
    
]
 
function runGame() {
    document.querySelector(".start-button").style.visibility = "hidden";
    
    displayQuestion(index);
    
}
startButton.addEventListener("click", runGame);

function startTimer() {
    var countDown = 75;
    var timeInterval =  setInterval(function() {
        if (countDown > 1) {
            timerEl.textContent = countDown + ' seconds remaining';
            countDown--;
        } else if (countDown === 1) {
          
          timerEl.textContent = countDown + ' second remaining';
          timeLeft--;
        } else {
         
          timerEl.textContent = '';
         
          clearInterval(timeInterval);
          
        }
      }, 1000);
}
startButton.addEventListener("click", startTimer);      
            
           


function displayQuestion(questionIndex)
{
    var title = document.createElement("h3")
    title.textContent = questions[questionIndex].question

    var A = document.createElement("button");
    A.classList.add("options");
    A.textContent = questions[questionIndex].A;
    A.onclick = function() {userAnswers[questionIndex] = "A"};
        
    var B = document.createElement("button");
    B.classList.add("options");
    B.textContent = questions[questionIndex].B;
    B.onclick = function() {userAnswers[questionIndex] = "B"};

    var C = document.createElement("button");
    C.classList.add("options");
    C.textContent = questions[questionIndex].C
    C.onclick = function() {userAnswers[questionIndex] = "C"};

    var D = document.createElement("button");
    D.classList.add("options");
    D.textContent = questions[questionIndex].D
    D.onclick = function() {userAnswers[questionIndex] = "D"};

    document.getElementById("data").append(title)
    document.getElementById("data").append(A)
    document.getElementById("data").append(B)
    document.getElementById("data").append(C)
    document.getElementById("data").append(D)
    index++

    var allButtons = document.getElementsByClassName("options");

    for(var i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', function(){
            document.getElementById("data").textContent = ""
            if(index < 5 ) {
               displayQuestion(index)
        }
        })
    }
    
}

function checkAnswers() {
    for (var i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            correct++;
        }
    }
}

checkAnswers();

// function renderResults() {
//     var userAnswers = localStorage.SetItem(new Array(5));
    
  
//     if (userAnswers === correctAnswers) {
//       return;
//     }
  
//     results.textContent = userAnswers;
    
//   }

  



// function displayAnswers() {
//     document.querySelector(".results").style.visibility = "visible";
// }
// displayAnswers();



// Slide 7
// All done!
// Your final score is ___.
// Enter initials: _____             Submit Button
// Slide 8
 
// Highscores list
// Go back button                 Clear Highscores button