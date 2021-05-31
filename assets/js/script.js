// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var correctAnswer = 10;
var maxQuestion = 5;

function startQuiz() {
  questionCounter = 0;
  score = 0;
  // copy the questions array to availableQustions array
  availableQuestions = [...questions];
  // make sure the array gets copied
  //console.log(availableQuestions);
  getNewQuestion();
}

startQuiz();

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter > maxQuestion) {
    // go to the scores page
    return window.location.assign('scores.html');
  }
  questionCounter++;
  // get a random question from the availableQuestions array
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  // add the choices to the question
  choices.forEach((choice) => {
    var number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });
  // take out the qustion from the array after it has been used
  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener('click', (event) => {
    if (!acceptingAnswers) {
      return;
    }
    acceptingAnswers = false;
    var selectedChoice = event.target;
    // check to see if its choice is being clicked
    // console.log(selectedChoice);
    var selectedAnswer = selectedChoice.dataset['number'];
    // check to see if its choice answer is being clicked
    // console.log(selectedAnswer);
    getNewQuestion();
  });
});
