import fs from 'fs';

const txtToArray = (filepath) => {
  const content = fs.readFileSync(filepath, 'utf8');

  return content.split('\n')
    .map((number) => parseInt(number, 10))
    .filter((number) => !!number);
};

export default txtToArray;
