var scores = document.querySelector("#scores")
var timer = document.querySelector("#timer")
var instructions = document.querySelector(".instructions")
var startButton = document.querySelector(".start-button")
var index = 0;
var questions = [
    {
        question: 'Commonly used Data Types do not include:',
        A: 'Strings',
        B: 'Booleans',
        C: 'Alers',
        D: 'Numbers',
        Answer: "C"
    },
    {
        question: 'The condition in an if/else statement is enclosed within _______.',
        A: 'Quotes',
        B: 'Curly Brackets',
        C: 'Parenthesis',
        D: 'Square Brackets',
        Answer: 'C'
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        A: 'Numbers and Strings',
        B: 'Other Arrays',
        C: 'Booleans',
        D: 'All the above',
        Answer: 'D'
    },
    {
        question: 'String values must be enclosed within _______',
        A: 'Commas',
        B: 'Curly Brackets',
        C: 'Quotes',
        D: 'Parenthesis',
        Answer: 'C'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        A: 'Javascript',
        B: 'Terminal/bash',
        C: 'For loops',
        D: 'Console.log',
        Answer: 'D'
        
    },
    
]

// GIVEN I am taking a code quiz
// WHEN I click the start button
// start the timer
function runGame() {
    
    // call the function that displays the question 
    document.querySelector(".start-button").style.visibility = "hidden";

    displayQuestion(index);
    console.log('displayQuestion:', displayQuestion)

}

function displayQuestion(questionIndex)
{
    var title = document.createElement("h1")
    title.textContent = questions[questionIndex].question

    var A = document.createElement("button");
    A.classList.add("options");
    A.textContent = questions[questionIndex].A;

    var B = document.createElement("button");
    B.classList.add("options");
    B.textContent =questions[questionIndex].B;

    var C = document.createElement("button");
    C.classList.add("options");
    C.textContent = questions[questionIndex].C

    var D = document.createElement("button");
    D.classList.add("options");
    D.textContent = questions[questionIndex].D

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
       displayQuestion(index)
        })
    }
 
    
    
}




startButton.addEventListener("click", runGame);
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


// Slide 7
// All done!
// Your final score is ___.
// Enter initials: _____             Submit Button
// Slide 8
 
// Highscores list
// Go back button                 Clear Highscores button