class Quiz {
    constructor(questions, container) {
      this.questions = questions;
      this.container = container;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    render() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      const choicesHtml = currentQuestion.choices
        .map((choice, index) => {
          return `
            <li>
              <label>
                <input type="radio" name="choice" value="${index}" />
                ${choice.text}
              </label>
            </li>
          `;
        })
        .join("");
  
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