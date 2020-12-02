import fs from 'fs';

export const toArrayOfNumbers = (filepath) => toArrayOfText(filepath)
  .map((number) => parseInt(number, 10));

export const toArrayOfText = (filepath) => {
  const content = fs.readFileSync(filepath, 'utf8');

  return content.split('\n')
    .map((item) => item.trim())
    .filter((item) => !!item);
};
