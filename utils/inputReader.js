import fs from 'fs';
import { replaceAll } from './string.js';

export const toArrayOfNumbers = (filepath) => toArrayOfText(filepath)
  .map((number) => parseInt(number, 10));

export const toArrayOfText = (filepath) => {
  const content = toText(filepath);
  return content.split('\n')
    .map((item) => item.trim())
    .filter((item) => !!item);
};

const toText = (filepath) => fs.readFileSync(filepath, 'utf8');

export const toFieldBooleans = (filepath, trueChar) => {
  const files = toArrayOfText(filepath);
  const field = files.map((row) => row.split(''));

  return field.map((row) => row.map((cell) => cell === trueChar));
};

export const separatedByBlankLines = (filepath) => {
  const result = toText(filepath).split('\n\r');

  return result.map((line) => replaceAll(line, '\r\n', ' ').trim());
};
