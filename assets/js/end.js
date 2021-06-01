var username = document.querySelector('#username');
var saveScoreeBtn = document.querySelector('#saveScoreBtn');
var finalScore = document.querySelector('#finalScore');
// get the recent score from local storage
var getMostRecentScore = localStorage.getItem('mostRecentScore');
// store high scores into local storage or first time create an empty array
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = getMostRecentScore;

// enable save button when user enter a name
username.addEventListener('keyup', () => {
	saveScoreBtn.disabled = !username.value;
});

function saveHighScore(event) {
	event.preventDefault();

	var score = {
		score: getMostRecentScore,
		name: username.value,
	};
	// check to see if score gets create
	// console.log(score);
	highScores.push(score);
	// check to see if highScores gets pushed
	// console.log(highScores);

	//sorts highScore from highest to lowerst
	highScores.sort((a, b) => {
		return b.score - a.score;
	});

	// stringify high score
	localStorage.setItem('highScores', JSON.stringify(highScores));
}
