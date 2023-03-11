import * as THREE from 'three';

class Quiz {
    constructor(questions, container) {
      this.questions = questions;
      this.container = container;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
    
    shuffle() {
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
      }
    }
  
    render() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      const choicesHtml = currentQuestion.choices.map((choice, index) => {
        return `
          <li>
            <label>
              <input type="radio" name="choice" value="${index}" />
              ${choice.text}
            </label>
          </li>
        `;
      }).join("");
  
      this.timer = setInterval(() => {
        this.timeLeft -= 1;
        this.renderTimer();
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          this.renderFinalScore();
        }
      }, 1000);
  
      this.progressInterval = setInterval(() => {
        this.progress += 1;
        this.renderProgressBar();
        if (this.progress >= 100) {
          clearInterval(this.progressInterval);
          this.renderFinalScore();
        }
      }, this.timePerQuestion * 10);
  
      const html = `
        <div class="quiz">
          <h2>${currentQuestion.question}</h2>
          <img src="${currentQuestion.imageUrl}" alt="verkeersbord" />
          <ul>
            ${choicesHtml}
          </ul>
          <button id="submit">Volgende</button>
        </div>
      `;
  
      this.container.innerHTML = html;
      this.addSubmitListener();
    }
  
    renderTimer() {
      const timerEl = this.container.querySelector("#timer");
      timerEl.textContent = `Time remaining: ${this.timeLeft} seconds`;
    }
  
    addSubmitListener() {
      const submitButton = this.container.querySelector("#submit");
      submitButton.addEventListener("click", () => {
        this.handleAnswerSubmission();
      });
    }
  
    handleAnswerSubmission() {
      const selectedChoiceIndex = parseInt(
        this.container.querySelector('input[name="choice"]:checked').value
      );
  
      const currentQuestion = this.questions[this.currentQuestionIndex];
  
      if (currentQuestion.choices[selectedChoiceIndex].correct) {
        this.score += 1;
      }
  
      this.currentQuestionIndex += 1;
  
      if (this.currentQuestionIndex === this.questions.length) {
        this.renderFinalScore();
      } else {
        this.render();
      }
    }
  
    renderFinalScore() {
      const html = `
        <div class="quiz">
          <h2>Je score is ${this.score} van de ${this.questions.length} vragen</h2>
        </div>
      `;
  
      this.container.innerHTML = html;
    }
  }

  quiz.shuffle();