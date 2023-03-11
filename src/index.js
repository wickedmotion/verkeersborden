import * as THREE from 'three';
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

function loadQuestions() {
	const questions = [];
  
	// loop through all images in the static folder
	for (let i = 0; i < trafficSigns.length; i++) {
	  const imageName = trafficSigns[i].split('.')[0]; // extract the image name without the extension
	  const question = {
		question: `Wat betekent dit verkeersbord?`,
		imageUrl: `static/${trafficSigns[i]}`, // use the image name to generate the URL
		choices: [
		  { text: trafficSignsNL[imageName][0], correct: true },
		  { text: trafficSignsNL[imageName][1], correct: false },
		  { text: trafficSignsNL[imageName][2], correct: false },
		],
	  };
  
	  questions.push(question);
	}
  
	return questions;
  }
