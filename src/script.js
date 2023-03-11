import { Quiz } from "./Quiz.js";

const quizData = [
  {
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://www.verkeersborden.com/assets/preview/borden-waarschuwing-gevaarlijke-bocht-links_1.png",
    choices: [
      { text: "Gevaarlijke bocht naar links", correct: true },
      { text: "Gevaarlijke bocht naar rechts", correct: false },
      { text: "Voorrangsweg", correct: false },
      { text: "Voetgangersoversteekplaats", correct: false },
    ],
  },
  {
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://www.verkeersborden.com/assets/preview/borden-waarschuwing-gevaarlijke-drempels_1.png",
    choices: [
      { text: "Gevaarlijke bocht naar links", correct: false },
      { text: "Gevaarlijke drempels in de weg", correct: true },
      { text: "Voorrangsweg", correct: false },
      { text: "Voetgangersoversteekplaats", correct: false },
    ],
  },
];

const quizContainer = document.getElementById("quiz-container");
const quiz = new Quiz(quizData, quizContainer);
quiz.render();