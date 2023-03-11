$(document).ready(function() {

	const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};

	// Set quiz data
	var quizData = [
		{
			question: "Wat betekent dit verkeersbord?",
			imageUrl: "https://www.verkeersborden.com/assets/preview/borden-waarschuwing-gevaarlijke-bocht-links_1.png",
			choices: [
				{ text: "Gevaarlijke bocht naar links", correct: true },
				{ text: "Gevaarlijke bocht naar rechts", correct: false },
				{ text: "Voorrangsweg", correct: false },
				{ text: "Voetgangersoversteekplaats", correct: false }
			]
		},
		{
			question: "Wat betekent dit verkeersbord?",
			imageUrl: "https://www.verkeersborden.com/assets/preview/borden-waarschuwing-gevaarlijke-drempels_1.png",
			choices: [
				{ text: "Gevaarlijke bocht naar links", correct: false },
				{ text: "Gevaarlijke drempels in de weg", correct: true },
				{ text: "Voorrangsweg", correct: false },
				{ text: "Voetgangersoversteekplaats", correct: false }
			]
		}
	];

	// Set quiz options
	var quizOptions = {
		questions: quizData,
		shuffleQuestions: true,
		shuffleChoices: true,
		allowIncorrect: false,
		correctAnswerBonus: 10,
		timerDuration: 30,
		showInstantFeedback: true,
		showFinalScore: true
	};

	// Start the quiz
	$("#quiz").quiz(quizOptions);
});
