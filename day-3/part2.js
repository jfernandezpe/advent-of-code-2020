import {
  calculateTreesWithMovementsX,
} from './part1.js';

import {
  multiplicate,
} from '../utils/array.js';

export const resolvePart2 = (field) => {
  const cases = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];

  const results = cases.map((movement) => calculateTreesWithMovements(field, movement));

  return multiplicate(results);
};

export const calculateTreesWithMovements = (field, movements) => {
  const compactField = removeRows(field, movements.y);
  return calculateTreesWithMovementsX(compactField, movements.x);
};

export const removeRows = (field, numMovInY) => field.filter((item, index) => isMultipleOf(numMovInY, index));

const isMultipleOf = (numMovInY, index) => index % numMovInY === 0;
