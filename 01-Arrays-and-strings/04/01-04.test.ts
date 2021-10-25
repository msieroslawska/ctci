import { palindromePermutation } from './01-04';

describe('Utility to determine if a string is a permutation of a palindrome', () => {
  it('returns true for "Tact Coa"', () => {
    const result = palindromePermutation('Tact Coa');

    expect(result).toBe(true);
  });

  it('returns true for "Tact Ca"', () => {
    const result = palindromePermutation('Tact Ca');

    expect(result).toBe(true);
  });

  it('returns true for "Tact Caa"', () => {
    const result = palindromePermutation('Tact Caa');

    expect(result).toBe(true);
  });

  it('returns false for "Tact Caax"', () => {
    const result = palindromePermutation('Tact Caax');

    expect(result).toBe(false);
  });
});
