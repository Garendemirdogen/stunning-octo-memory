// Variables for interacting with the quiz
var startButton = document.getElementById("start-button");
var startContainer = document.getElementById("start-container");
var testContainer = document.getElementById("test-container");
var finishContainer = document.getElementById("finish-container");
// Variables for questions
var questionMain = document.querySelector("#test-container .questions");
var selection1 = document.querySelector("#test-container #selection1");
var selection2 = document.querySelector("#test-container #selection2");
var selection3 = document.querySelector("#test-container #selection3");
var selection4 = document.querySelector("#test-container #selection4");
// Variables for timer
var timer;
var time = 75;
var score = 0;
var index = 0;
// Variables to set the questions
var questions = {
    question: "Arrays in JavaScript can be used to store?",
    selections: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
    answer: "All of the above"
};

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

startButton.addEventListener("click", startQuiz);