import { isPermutation, normalizeString, sort } from './01-02';

describe('Utility to decide if one string is a permutation of another', () => {
  it('should return false if strings are different lengths', () => {
    const string1 = 'abc';
    const string2 = 'abcd';

    const result = isPermutation(string1, string2);

    expect(result).toBe(false);
  });

  it('should return false if one string is not a permutation of the other', () => {
    const string1 = 'abc';
    const string2 = 'abd';

    const result = isPermutation(string1, string2);

    expect(result).toBe(false);
  });

  it('should return false if one string contains whitespaces but is not a permutation of the other', () => {
    const string1 = 'a.b c';
    const string2 = 'abcd';

    const result = isPermutation(string1, string2);

    expect(result).toBe(false);
  });

  it('should return false if one string contains uppercase characters but is not a permutation of the other', () => {
    const string1 = 'aB';
    const string2 = 'abcd';

    const result = isPermutation(string1, string2);

    expect(result).toBe(false);
  });

  it('should return true if strings are the same length and are permutations', () => {
    const string1 = 'abc';
    const string2 = 'bac';

    const result = isPermutation(string1, string2);

    expect(result).toBe(true);
  });

  it('should return true if strings are the same length, contain uppercase letters and are permutations', () => {
    const string1 = 'aBC';
    const string2 = 'bac';

    const result = isPermutation(string1, string2);

    expect(result).toBe(true);
  });

  it('should return true if strings are the same length, contain whitespaces and are permutations', () => {
    const string1 = 'a bc..';
    const string2 = 'bac';

    const result = isPermutation(string1, string2);

    expect(result).toBe(true);
  });
});

describe('Utility to normalize strings', () => {
  it('should remove whitespace from the string', () => {
    const result = normalizeString(' dD4.\\Y');

    expect(result).toEqual('dd4y');
  });

  it('should convert to lowercase', () => {
    const result = normalizeString('DddDDbBB');

    expect(result).toEqual('dddddbbb');
  });
});

describe('Utility to sort chars in a string', () => {
  it('should return ["a", "b", "c", "d"] for string "bcda"', () => {
    const result = sort('bcda');

    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should return ["a", "b", "b", "c", "d"] for string "bcdab"', () => {
    const result = sort('bcdab');

    expect(result).toEqual(['a', 'b', 'b', 'c', 'd']);
  });
});
