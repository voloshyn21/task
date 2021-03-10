function getAllNaturalNumbers(numbers) {
  return numbers.filter(number => number > 0);
}

function getMinimalNaturalNumber(numbers) {
  return Math.min(...numbers);
}

function findFirstMissingNaturalNumber(numbers, naturalNumberIterator = 1) {
  const isNaturalNumberExists = numbers.includes(naturalNumberIterator);

  if (isNaturalNumberExists) {
    return findFirstMissingNaturalNumber(numbers, naturalNumberIterator + 1);
  } else {
    const isNextNaturalNumberExists = numbers.includes(naturalNumberIterator + 1);

    if (isNextNaturalNumberExists) {
      return naturalNumberIterator;
    } else {
      const isNextNumbersExists = numbers.find(number => number > naturalNumberIterator);

      if (isNextNumbersExists) {
        return naturalNumberIterator;
      }
    }
  }
}

function getMissingNaturalNumber(numbers) {
  const allNaturalNumbers = getAllNaturalNumbers(numbers);
  const minimalNaturalNumber = getMinimalNaturalNumber(allNaturalNumbers);

  return findFirstMissingNaturalNumber(allNaturalNumbers, minimalNaturalNumber);
}

const arr1 = []; // undefined
const arr2 = [-4, -3, -2]; // undefined
const arr3 = [1, 2, 3]; // undefined
const arr4 = [0, 0, 0]; // undefined
const arr5 = [10, 20, 30]; // 11
const arr6 = [100, 101, 103]; // 102
const arr7 = [-4, -2, 0, 1, 4, 2]; // 3
const arr8 = [1]; // undefined
const arr9 = [1, 2]; // undefined
const arr10 = [1, 3]; // 2

console.log(getMissingNaturalNumber(arr1)); // undefined
console.log(getMissingNaturalNumber(arr2)); // undefined
console.log(getMissingNaturalNumber(arr3)); // undefined
console.log(getMissingNaturalNumber(arr4)); // undefined
console.log(getMissingNaturalNumber(arr5)); // 11
console.log(getMissingNaturalNumber(arr6)); // 102
console.log(getMissingNaturalNumber(arr7)); // 3
console.log(getMissingNaturalNumber(arr8)); // undefined
console.log(getMissingNaturalNumber(arr9)); // undefined
console.log(getMissingNaturalNumber(arr10)); // 2
