var timeLeft = 60;
var element = document.querySelector(".timeLeft");
var secLeft = " seconds left.";
var nextPage = document.querySelector(".timerStart");
var index = 0;

var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var questionContainerElement = document.getElementById("question-container");

//Buttons
var option1 = document.getElementById("button1");
var option2 = document.getElementById("button2");
var option3 = document.getElementById("button3");
var option4 = document.getElementById("button4");

var questions = [
  {
    title:
      "Which of the following functions of an Array object joins all elements of an array into a string?",
    correctAnswer: "concat()",
    choices: ["concat()", "join()", "pop()", "map()"],
  },
  {
    title: "The function and var are known as:",
    correctAnswer: "Declaration Statements",
    choices: ["Keywords", "Data Types", "Prototypes", "Declaration Statements"],
  },
  {
    title:
      "Which of the following variables takes precedence over the others if the names are the same?",
    correctAnswer: "Local Element",
    choices: [
      "Global Variable",
      "Local Element",
      "Both Of The Above",
      "None Of The Above",
    ],
  },
  {
    title: "In JavaScript the x===y statement implies that:",
    correctAnswer: "Both are equal in the value and data type.",
    choices: [
      "Both x and y are equal in value, type and reference address as well.",
      "Both are x and y are equal in value only.",
      "Both are not the same at all.",
      "Both are equal in the value and data type.",
    ],
  },
  {
    title:
      "Which one of the following symbol is used for creating comments in the javascript:",
    correctAnswer: "//",
    choices: ["&&", "**", "//", "||"],
  },
  {
    title:
      "A collection of elements of the same data type which may either in order or not, is called _____.",
    correctAnswer: "Array",
    choices: ["Array", "String", "Serialized Object", "Parameter"],
  },
];

var question6 = {
  question:
    "A collection of elements of the same data type which may either in order or not, is called _____.",
  answers1: "Array",
  answers2: "String",
  answers3: "Serialized Object",
  answers4: "Parameter",

  correct: "Array",
};
console.log(questions[0].title);

//How Do I Click Start Button to Activate Question 1?
var pEl = document.getElementById("q2");
console.log(pEl);

function startGame(event) {
  console.log("Started");
  //console logs question from array, need to present in buttons
  pEl.textContent = questions[0].title;
  startButton.setAttribute("style", "display: none");

  var pEl = document.getElementById("q2");
}

startButton.addEventListener("click", startGame);

//create buttons for choices

//compare value of button to right/wrong answers
//if else conditional statements - if it is the correct answer, use index,
//event.target
//for loops
//timer interval
//local storage

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

//selected button is correct, set it to "correct" --> +1 to score in localStorage?
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
}

function nextQuestion() {}

//Questions credited to: "https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm; https://www.javatpoint.com/javascript-mcq"
