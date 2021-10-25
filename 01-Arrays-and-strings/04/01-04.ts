export const palindromePermutation = (palindrome: string): boolean => {
  const charFrequency: { [key: string]: number } = {};

  palindrome.split('').forEach((char) => {
    if (char === ' ') {
      return;
    }

    const normalizedChar = char.toLowerCase();

    charFrequency[normalizedChar] = !charFrequency[normalizedChar]
      ? 1
      : charFrequency[normalizedChar] += 1;
  });

  const countOfOddValues = Object.values(charFrequency).filter((val) => val % 2 !== 0).length;

  return (countOfOddValues === 0 || countOfOddValues === 1);
};
