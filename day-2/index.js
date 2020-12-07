import { toArrayOfText } from '../utils/inputReader.js';
import { getNumberOfValidPasswords } from './part1.js';
import { getNumberOfValidPasswords as getResultPart2 } from './part2.js';

const passwords = toArrayOfText('./day-2/inputs/quest.txt');
const part1 = getNumberOfValidPasswords(passwords);
const part2 = getResultPart2(passwords);

// eslint-disable-next-line no-console
console.log(`Day 2, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 2, part 2: ${part2}`);
