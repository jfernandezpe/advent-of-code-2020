import fs from 'fs';
import { replaceAll } from './string.js';

export const toArrayOfNumbers = (filepath) => toArrayOfText(filepath)
  .map((number) => parseInt(number, 10));

export const toKeyValueInt = (filepath, separator) => toKeyValue(filepath, separator)
  .map(({ key, value }) => ({
    key,
    value: parseInt(value, 10),
  }));

export const toKeyValue = (filepath, separator) => toArrayOfText(filepath)
  .map((item) => {
    const [key, value] = item.split(separator);

    return {
      key,
      value,
    };
  });

export const toArrayOfText = (filepath) => {
  const content = toText(filepath);
  return content.split('\n')
    .map((item) => item.trim())
    .filter((item) => !!item);
};

export const toText = (filepath) => fs.readFileSync(filepath, 'utf8');

export const toFieldBooleans = (filepath, trueChar) => {
  const files = toArrayOfText(filepath);
  const field = files.map((row) => row.split(''));

  return field.map((row) => row.map((cell) => cell === trueChar));
};

export const toFieldValues = (filepath, values) => {
  const files = toArrayOfText(filepath);
  const field = files.map((row) => row.split(''));

  return field.map((row) => row.map((cell) => values.find((value) => value.key === cell).value));
};

export const separatedByBlankLines = (filepath) => {
  const result = toText(filepath).split('\n\r');

  return result.map((line) => replaceAll(line, '\r\n', ' ').trim());
};
