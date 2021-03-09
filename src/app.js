module.exports = findFirstMissingNaturalNumber = (numbers) => {
  const sortedNaturalNumbers = numbers.filter(element => element > 0).sort();

  for (let i = 0; i < sortedNaturalNumbers.length - 1; i++) {
    if (sortedNaturalNumbers[i + 1] - sortedNaturalNumbers[i] !== 1) {
      return sortedNaturalNumbers[i] + 1;
    }
  }
}
