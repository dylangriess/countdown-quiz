var secondsLeft = 60;
var timerInterval = "";
var timeEl = document.querySelector("#timer");
var count;
var element = document.querySelector(".secondsLeft");
var secLeft = " seconds left.";
var nextPage = document.querySelector(".timerStart");
var index = 0;
var initials = "";
var score = secondsLeft;
var userName = 0;
var users = [];

var leaderboardList = document.getElementById("leaderboard");
var leaderBoard = [];

var startButton = document.getElementById("start-button");
var questionInfo = document.getElementById("question-info");

//Buttons
var answerButtons = document.getElementById("answer-buttons");
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
  { title: "Quiz Complete!" },
];

//How Do I Click Start Button to Activate Question 1?
answerButtons.setAttribute("style", "display: none");
startButton.addEventListener("click", startGame);

function startGame(event) {
  console.log("Started");
  console.log(questions[0].title);
  //console logs question from array, need to present in buttons
  startButton.setAttribute("style", "display: none");
  answerButtons.setAttribute("style", "display: grid");
  setTime();
  displayQuestions();
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    timeEl.textContent = secondsLeft + " seconds left.";
    secondsLeft--;
    if (secondsLeft <= -1 || questions[index].title == "Quiz Complete!") {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endGame();
    }
  }, 1000);
}

function displayQuestions() {
  //write if statement that checks to see questions[index].title === undefined, call end function
  if (questions[index].title == "Quiz Complete!") {
    console.log("done");
    clearInterval(timerInterval);
    endGame();
  } else {
    questionInfo.textContent = questions[index].title;

    option1.textContent = questions[index].choices[0];
    option2.textContent = questions[index].choices[1];
    option3.textContent = questions[index].choices[2];
    option4.textContent = questions[index].choices[3];
  }
}

option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);

function checkAnswer(event) {
  if (event.target.textContent === questions[index].correctAnswer) {
    console.log("correct");
    index++;
    displayQuestions();
  } else {
    secondsLeft -= 5;
    console.log("wrong");
  }
}

function endGame() {
  answerButtons.setAttribute("style", "display: none");
  questionInfo.textContent =
    "Congrats on completing this quiz! Enter your initials to be posted on the leaderboard!";
  enterScore();
}

function enterScore() {
  var userName = window.prompt(
    "Please enter your initals to record your score"
  );
  var userScore = secondsLeft + 1;

  users.push([userName + ": your score is " + userScore]);

  localStorage.setItem("Users", JSON.stringify(users));
  showLeaderboard();
}

function showLeaderboard() {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    var li = document.createElement("li");
    li.textContent = user;
    leaderboardList.appendChild(li);
  }
}

//Questions credited to: "https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm; https://www.javatpoint.com/javascript-mcq"
