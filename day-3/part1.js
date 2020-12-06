import { toFieldBooleans } from '../utils/inputReader.js';
import { fillArray } from '../utils/array.js';

export const getFieldOfTrees = (filepath) => toFieldBooleans(filepath, '#');

export const getNumberOfTreesOnPath = (field) => {
  const numMovInX = 3;
  return calculateTreesWithMovementsX(field, numMovInX);
};

export const calculateTreesWithMovementsX = (field, numMovInX) => {
  const expandedField = expandField(field, numMovInX);

  const path = calcPath(expandedField, numMovInX);
  return countTreesInPath(path);
};

const expandField = (field, numMovInX) => field.map((row) => expandRow(row, field.length, numMovInX));

export const expandRow = (inputRow, numOfRows, numMovInX) => {
  const requiredColumns = calcRequiredColumns(numOfRows, numMovInX);

  return fillArray(requiredColumns, inputRow);
};

export const calcRequiredColumns = (numOfRows, numMovInX) => 1 + (numOfRows - 1) * numMovInX;

const calcPath = (field, numMovInX) => field.map((row, index) => row[getXForY(index, numMovInX)]);

export const getXForY = (y, numMovInX) => y * numMovInX;

const countTreesInPath = (path) => path.reduce((acc, step) => {
  if (step) {
    return acc + 1;
  }
  return acc;
}, 0);
