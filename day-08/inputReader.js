import { toKeyValueInt } from '../utils/inputReader.js';

export default (filepath) => {
  const separator = ' ';
  return toKeyValueInt(filepath, separator);
};
