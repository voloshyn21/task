function getFirstMissingNumber(numbers) {
  const uniqueNumbers = new Set(numbers);
  let missingNumber;

  for (missingNumber = 1; uniqueNumbers.has(missingNumber); ++missingNumber) ;

  return missingNumber;
}

const arr = [-4, -2, 0, 1, 4, 2]; // 3

console.log(getFirstMissingNumber(arr)); // 3
