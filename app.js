//@ts-check

import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { Ui } from "./models/Ui.js";

/**
 *
 * @param {Quiz} quiz the main quiz Object
 * @param {Ui} ui  ui Objetc
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScore(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
  }
  ui.showProgress(quiz.questionsIndex + 1, quiz.questions.length);
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new Ui();
  renderPage(quiz, ui);
}

main();
