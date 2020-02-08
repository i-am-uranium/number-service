
const generateRandomNumber = (length) => Math.floor((10 ** (length - 1))
  + Math.random() * 9 * (10 ** (length - 1)));

const findDigitSqaureSum = (num) => {
  let localNum = num;
  let sum = 0;
  while (localNum > 0) {
    const digit = localNum % 10;
    sum += digit * digit;
    localNum = Math.floor(localNum / 10);
  }
  return sum;
};

const isHappyNumber = (number) => {
  let slowNumber = number;
  let fastNumber = number;
  do {
    slowNumber = findDigitSqaureSum(slowNumber);
    fastNumber = findDigitSqaureSum(findDigitSqaureSum(fastNumber));
  } while (slowNumber !== fastNumber);
  return slowNumber === 1;
};

/**
 * Any number will be called a happy number if, after repeatedly
 * replacing it with a number equal to the sum of the square of all of its digits,
 * leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’.
 * Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
 * */
const generateHappyNumber = (length) => {
  while (true) {
    const happyNumber = generateRandomNumber(length);
    if (isHappyNumber(happyNumber)) {
      return happyNumber;
    }
  }
};

module.exports = {
  generateHappyNumber,
  isHappyNumber,
};
