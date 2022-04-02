// Returns a list of numbers ranging between two numbers 
// example: fillWithNumbers(1, 3) returns [1, 2, 3]
export default function fillWithNumbers(min: number, max: number) {
  const arr = [];

  for (let i = min; i < max; i++) {
    arr.push(Math.floor(i));
  }

  arr.push(max);

  return arr;
}