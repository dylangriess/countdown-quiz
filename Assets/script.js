var startButton = document.getElementById("start-button");
var questionContainerElement = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  {
    console.log(next);
  }
}

function nextQuestion() {}

function selectAnswer() {}

var questions = [
  {
    question:
      "1) Which of the following functions of an Array object joins all elements of an array into a string?",
    answers: [
      { text: "concat()", correct: false },
      { text: "join()", correct: true },
      { text: "pop()", correct: false },
      { text: "map()", correct: false },
    ],
  },
  {
    question: "2)The function and var are known as:",
    answers: [
      { text: "Keywords", correct: false },
      { text: "Data Types", correct: false },
      { text: "Prototypes", correct: false },
      { text: "Declaration Statements", correct: true },
    ],
  },
  {
    question:
      "3) Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      { text: "Global Variable", correct: false },
      { text: "Local Element", correct: true },
      { text: "Both Of The Above", correct: false },
      { text: "None Of The Above", correct: false },
    ],
  },
  {
    question: "4) In JavaScript the x===y statement implies that:",
    answers: [
      {
        text: "Both x and y are equal in value, type and reference address as well.",
        correct: false,
      },
      { text: "Both are x and y are equal in value only.", correct: false },
      { text: "Both are not the same at all.", correct: false },
      { text: "Both are equal in the value and data type.", correct: true },
    ],
  },
  {
    question:
      "5) Which one of the following symbol is used for creating comments in the javascript:",
    answers: [
      { text: "\\", correct: false },
      { text: "**", correct: false },
      { text: "//", correct: true },
      { text: "/", correct: false },
    ],
  },
  {
    question:
      "6) A collection of elements of the same data type which may either in order or not, is called _____.",
    answers: [
      { text: "Array", correct: true },
      { text: "String", correct: false },
      { text: "Serialized Object", correct: false },
      { text: "Parameter", correct: false },
    ],
  },
];

//Questions credited to: "https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm; https://www.javatpoint.com/javascript-mcq"
