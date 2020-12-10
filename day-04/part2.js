// eslint-disable-next-line import/prefer-default-export
export const resolvePart2 = (passports) => {
  const validPassports = passports.filter(validatePassport);

  return validPassports.length;
};
const validatePassport = (passport) => {
  const fields = [
    /byr:(19[2-9][0-9]|200[0-2])(\s|$)/g,
    /iyr:(201[0-9]|2020)(\s|$)/g,
    /eyr:(202[0-9]|2030)(\s|$)/g,
    /hgt:((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)(\s|$)/g,
    /hcl:#(?:[0-9a-fA-F]{6})(\s|$)/g,
    /ecl:(amb|blu|brn|gry|grn|hzl|oth)(\s|$)/g,
    /pid:[0-9]{9}(\s|$)/g,

  ];

  return fields.every((field) => !!passport.match(field));
};
