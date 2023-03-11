import { Quiz } from "./Quiz.js";
import * as THREE from 'three';

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

const trafficSignsContainer = document.getElementById("traffic-signs-container");

// Loop through the images folder and create img elements with src set to the file names
const imagesFolder = "/static/";
const fileExtension = ".png";
fetch(imagesFolder)
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const html = parser.parseFromString(text, "text/html");
    const links = html.querySelectorAll("a");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href.endsWith(fileExtension)) {
        const img = document.createElement("img");
        img.src = imagesFolder + href;
        img.alt = "Verkeersbord";
        img.classList.add("traffic-sign");
        img.id = href.slice(0, -fileExtension.length); // Set the id to the file name without the extension
        trafficSignsContainer.appendChild(img);
      }
    });
  });

const quizContainer = document.getElementById("quiz-container");
const quiz = new Quiz(quizData, quizContainer);
quiz.render();