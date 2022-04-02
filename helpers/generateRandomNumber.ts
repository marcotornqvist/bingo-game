export default function generateRandomNumber(
  numbers: number[],
  skip: number[]
) {
  // filter out items from array that already exist
  numbers = numbers.filter((item) => !skip.some((el) => item == el));
  // choose a random item from the array
  const rndInt = numbers[Math.floor(Math.random() * numbers.length)];
  return rndInt;
}
