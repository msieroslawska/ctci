import { rotateImage } from './01-07';

describe('An utility to rotate an image by 90 degrees', () => {
  it('should return [[1,1,1],[2,2,2],[3,3,3]] for input [[1,2,3],[1,2,3],[1,2,3]]', () => {
    const result = rotateImage([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);

    expect(result.length).toEqual(3);
    expect(result[0]).toEqual([1, 1, 1]);
    expect(result[1]).toEqual([2, 2, 2]);
    expect(result[2]).toEqual([3, 3, 3]);
  });
});
