export const getNumberOfValidPasswords = (passwords) => passwords.filter(isValidPassword).length;

export const isValidPassword = (password) => {
  const passwordToCheck = getPasswordToCheck(password);
  const validationChar = getValidationChar(password);
  const minimunAndMaximun = getMinimunAndMaximun(password);

  return validatePasswordRules(passwordToCheck, validationChar, minimunAndMaximun);
};
const getPasswordToCheck = (password) => password.split(' ')[2];
const getValidationChar = (password) => password.split(' ')[1].replace(':', '');
const getMinimunAndMaximun = (password) => password.split(' ')[0].split('-').map((number) => parseInt(number, 10));

const validatePasswordRules = (passwordToCheck, validationChar, minimunAndMaximun) => {
  const regex = new RegExp(validationChar, 'igm');
  const matches = passwordToCheck.match(regex);

  const ocurrencesOfChar = matches ? matches.length : 0;

  return ocurrencesOfChar >= minimunAndMaximun[0] && ocurrencesOfChar <= minimunAndMaximun[1];
};
