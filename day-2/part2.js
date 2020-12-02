export const getNumberOfValidPasswords = (passwords) => passwords.filter(isValidPassword).length;

export const isValidPassword = (password) => {
  const passwordToCheck = getPasswordToCheck(password);
  const validationChar = getValidationChar(password);
  const positions = getPositions(password);

  return validatePasswordRules(passwordToCheck, validationChar, positions);
};
const getPasswordToCheck = (password) => password.split(' ')[2];
const getValidationChar = (password) => password.split(' ')[1].replace(':', '');
const getPositions = (password) => password.split(' ')[0].split('-').map((number) => parseInt(number, 10));

export const validatePasswordRules = (passwordToCheck, validationChar, positions) => {
  const charsInPosition = positions.map((position) => passwordToCheck.charAt(position - 1));
  const matches = charsInPosition.filter((position) => position === validationChar);

  return onePositionContainsTheChar(matches);
};

const onePositionContainsTheChar = (matches) => matches.length === 1;
