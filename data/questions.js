import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(
  ({ choises, answer, question }) => new Question(question, choises, answer)
);
