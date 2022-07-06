// Variables for interacting with the quiz
var startButton = document.getElementById("start-button");
var startContainer = document.getElementById("start-container");
var testContainer = document.getElementById("test-container");
var finishContainer = document.getElementById("finish-container");
// Variables for questions
var questionMain = document.querySelector("#test-container .questions");
var selection1 = document.querySelector("#test-container #selection-1");
var selection2 = document.querySelector("#test-container #selection-2");
var selection3 = document.querySelector("#test-container #selection-3");
var selection4 = document.querySelector("#test-container #selection-4");
// Variables for timer
var timer;
var time = 75;
var score = 0;
var index = 0;
// Variables to set the questions
var questions = [
    {
    question: "Arrays in JavaScript can be used to store?",
    selections: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
    answer: "All of the above"
},
{
    question: "Arrays in JavaScript can be used to store?",
    selections: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
    answer: "All of the above"
},
{
    question: "Arrays in JavaScript can be used to store?",
    selections: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
    answer: "All of the above"
},
{
    question: "Arrays in JavaScript can be used to store?",
    selections: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
    answer: "All of the above"
},
]

function startQuiz() {
    // Hide the start button at the start of the quiz
    startContainer.classList.add("hide");
    // Show the questions
    testContainer.classList.remove("hide");
    // Timer start
    timer = setInterval(function () {
        // Decrease timer
        time--;
        // Show timer counting down
        document.querySelector(".timer").textContent = time;
        // If timer hits 0 then end the quiz
        if (time <=0) {
            document.querySelector("#finsih-container").textContent = "Time's up! Lets see how you did!";
            endQuiz();
        }
    }, 1000);

    promptQuestion()
};

function promptQuestion () {
    questionMain.textContent = questions[index].question;
    // Make a selection
    selection1.textContent = questions[index].selections[0];
    selection2.textContent = questions[index].selections[1];
    selection3.textContent = questions[index].selections[2];
    selection4.textContent = questions[index].selections[3];
};

function endQuiz() {
    testContainer.classList.add("hide");
    finishContainer.classList.remove("hide")
    document.querySelector("#results").textContent = score;
    clearInterval(timer);
};

startButton.addEventListener("click", startQuiz);

var selectionArray = document.querySelectorAll("#test-container .answer-selection");
    for ( i = 0; i < selectionArray.length; i++) {
        selectionArray[i].addEventListener("click", function(event) {
            checkAnswers(event);
        });
    }

function checkAnswers(event) {
    setTimeout(function() {
    if (document.querySelector("#correct").classList.contains("hide") === false) {
        document.querySelector("#correct").classList.add("hide");
    }
    else if (document.querySelector("#wrong").classList.contains("hide") === false) {
        document.querySelector("#wrong").classList.add("hide");
    };
    if (index === questions.length) {
        endQuiz();
        return
    }
    promptQuestion();
    
}, 500);

if (event.target.textContent === questions[index].answer) {
    score = score + 30;
    document.querySelector("#correct").classList.remove("hide");
}
else { 
    time = time - 10;
    document.querySelector("#wrong").classList.remove("hide");
};
index++;

};
