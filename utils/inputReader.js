import fs from 'fs';

export const toArrayOfNumbers = (filepath) => toArrayOfText(filepath)
  .map((number) => parseInt(number, 10));

export const toArrayOfText = (filepath) => {
  const content = fs.readFileSync(filepath, 'utf8');

  return content.split('\n')
    .map((item) => item.trim())
    .filter((item) => !!item);
};

export const toFieldBooleans = (filepath, trueChar) => {
  const files = toArrayOfText(filepath);
  const field = files.map((row) => row.split(''));

  return field.map((row) => row.map((cell) => cell === trueChar));
};
