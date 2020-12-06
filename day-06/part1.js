import { replaceAll } from '../utils/string.js';
import { removeDuplicates, sum } from '../utils/array.js';

export const resolvePart1 = (answerGroups) => {
  const numAnswersYes = answerGroups
    .map(getUniqueAnswers);

  return sum(numAnswersYes);
};

export const getUniqueAnswers = (group) => {
  const trimed = replaceAll(group, ' ', '').trim();
  const uniqueAnswers = removeDuplicates(trimed.split(''));
  return uniqueAnswers.length;
};
