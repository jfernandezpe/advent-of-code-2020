import { sum } from '../utils/array.js';

export const resolvePart2 = (answerGroups) => {
  const numAnswersYes = answerGroups
    .map(getDuplicateAnswers);

  return sum(numAnswersYes);
};

export const getDuplicateAnswers = (group) => {
  const individualAnswers = group.split(' ');

  const duplibateAnswers = individualAnswers.reduce((acc, item) => {
    const answers = item.split('');
    return answers.filter((answer) => acc.includes(answer));
  }, individualAnswers[0]);

  return duplibateAnswers.length;
};
