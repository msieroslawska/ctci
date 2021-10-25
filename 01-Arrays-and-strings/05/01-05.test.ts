import { oneAway } from './01-05';

const testCases = [
  { strings: ['pale', 'ple'], expected: true },
  { strings: ['pales', 'pale'], expected: true },
  { strings: ['pale', 'bale'], expected: true },
  { strings: ['pale', 'bae'], expected: false },
];

describe('An utility defining if two strings are one edit away from each other', () => {
  testCases.forEach(({ strings, expected }) => {
    it(`should return true for "${strings[0]}" and "${strings[1]}"`, () => {
      const result = oneAway(strings[0], strings[1]);

      expect(result).toBe(expected);
    });
  });
});
