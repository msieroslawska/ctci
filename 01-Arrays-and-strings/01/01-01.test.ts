import {
  ARBITRARY_SIZE_OF_ASCII_TABLE, createASCIIString, hasUniqueChars, hasUniqueCharsWithSet,
} from './01-01';

describe('Utility to detect unique characters in a given string', () => {
  describe('using set', () => {
    it('throws an error if no string has been provided', () => {
      expect(() => hasUniqueCharsWithSet(undefined as unknown as string)).toThrow();
    });

    it('returns false if string is empty', () => {
      const result = hasUniqueCharsWithSet('');

      expect(result).toBe(false);
    });

    it(`returns false if string is longer than ${ARBITRARY_SIZE_OF_ASCII_TABLE} (all possible chars)`, () => {
      const testString = `${createASCIIString()}xyz`;
      const result = hasUniqueCharsWithSet(testString);

      expect(result).toBe(false);
    });

    it(`returns true if string is exactly ${ARBITRARY_SIZE_OF_ASCII_TABLE} (all possible chars)`, () => {
      const testString = createASCIIString();
      const result = hasUniqueCharsWithSet(testString);

      expect(result).toBe(true);
    });

    it('returns true if string has one character', () => {
      const result = hasUniqueCharsWithSet('a');

      expect(result).toBe(true);
    });

    it('returns true if string has all unique chars', () => {
      const result = hasUniqueCharsWithSet('abcde12A');

      expect(result).toBe(true);
    });

    it('returns false if string does not have all unique chars', () => {
      const result = hasUniqueCharsWithSet('abcde12AA');

      expect(result).toBe(false);
    });
  });

  describe('not using set', () => {
    it('throws an error if no string has been provided', () => {
      expect(() => hasUniqueChars(undefined as unknown as string)).toThrow();
    });

    it('returns false if string is empty', () => {
      const result = hasUniqueChars('');

      expect(result).toBe(false);
    });

    it(`returns false if string is longer than ${ARBITRARY_SIZE_OF_ASCII_TABLE} (all possible chars)`, () => {
      const testString = `${createASCIIString()}xyz`;
      const result = hasUniqueChars(testString);

      expect(result).toBe(false);
    });

    it(`returns true if string is exactly ${ARBITRARY_SIZE_OF_ASCII_TABLE} (all possible chars)`, () => {
      const testString = createASCIIString();
      const result = hasUniqueChars(testString);

      expect(result).toBe(true);
    });

    it('returns true if string has one character', () => {
      const result = hasUniqueChars('a');

      expect(result).toBe(true);
    });

    it('returns true if string has all unique chars', () => {
      const result = hasUniqueChars('abcde12A');

      expect(result).toBe(true);
    });

    it('returns false if string does not have all unique chars', () => {
      const result = hasUniqueChars('abcde12AA');

      expect(result).toBe(false);
    });
  });
});

describe('Utility to create all ASCII characters', () => {
  it('correctly returns an array of all characters', () => {
    const result = createASCIIString();

    expect(result.length).toEqual(ARBITRARY_SIZE_OF_ASCII_TABLE);
  });
});
