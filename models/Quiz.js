//@ts-check
import { Question } from "./Question.js";

export class Quiz {
  questionsIndex = 0;
  score = 0;

  /**
   *
   * @param {Question[]} questions
   */

  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionsIndex];
  }

  isEnded() {
    return this.questions.length === this.questionsIndex;
  }

  /**
   *
   * @param {string} answer some text
   */

  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionsIndex++;
  }
}
