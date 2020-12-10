// eslint-disable-next-line import/prefer-default-export
export const resolvePart1 = (passports) => {
  const validPassports = passports.filter(passportContainsField);

  return validPassports.length;
};

export const passportContainsField = (passport) => {
  const expectedFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  return expectedFields.every((field) => passport.includes(field));
};
