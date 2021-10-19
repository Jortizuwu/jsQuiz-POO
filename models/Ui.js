export class Ui {
  constructor() {}

  /**
   *
   * @param {string} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }

  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerText = "";
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));
      choicesContainer.append(button);
    }
  }

  /**
   *
   * @param {number} score the total score
   */

  showScore(score) {
    const quizEndHTML = `
        <h1>Results</h1>
        <h2>Your Score: ${score}</h2>
    `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }

  /**
   *
   * @param {numbre} currentIndex the current index of the quiz
   * @param {numbre} total the total questions
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
