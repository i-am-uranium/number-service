
const generateRandomNumber = (length) => Math.floor((10 ** (length - 1))
  + Math.random() * 9 * (10 ** (length - 1)));

const findDigitSquareSum = (num) => {
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
    slowNumber = findDigitSquareSum(slowNumber);
    fastNumber = findDigitSquareSum(findDigitSquareSum(fastNumber));
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

/**
 * If a number is divisible by the sum of its digits then it will be known as a Harshad Number.
 * ***/

const isHarshadNumber = (number) => {
  if (number <= 0) {
    return false;
  }
  if (number < 10) {
    return true;
  }
  let digitSum = 0;
  let localNum = number;
  while (localNum > 0) {
    const digit = localNum % 10;
    digitSum += digit;
    localNum = Math.floor(localNum / 10);
  }
  return (number % digitSum === 0);
};

module.exports = {
  generateHappyNumber,
  isHappyNumber,
  isHarshadNumber,
};
