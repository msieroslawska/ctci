import { compressString } from './01-06';

describe('An utility to compress string', () => {
  it('should return "abcd" for input string "abcd"', () => {
    const result = compressString('abcd');

    expect(result).toEqual('abcd');
  });

  it('should return "a" for input string "a"', () => {
    const result = compressString('a');

    expect(result).toEqual('a');
  });

  it('should return an empty string for input also being an empty string', () => {
    const result = compressString('');

    expect(result).toEqual('');
  });

  it('should return "a2b1" for input string "aab"', () => {
    const result = compressString('aab');

    expect(result).toEqual('a2b1');
  });

  it('should return "a2b1a2B1" for input string "aabaaB"', () => {
    const result = compressString('aabaaB');

    expect(result).toEqual('a2b1a2B1');
  });
});
