import { Arrays } from '../Arrays';

describe('Arrays', () => {
  describe('equal', () => {
    test('should return true for equal arrays', () => {
      expect(Arrays.equal([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('should return false for different arrays', () => {
      expect(Arrays.equal([1, 2, 3], [4, 5, 6])).toBe(false);
    });

    test('should return false if one array is null', () => {
      expect(Arrays.equal(null, [1, 2, 3])).toBe(false);
    });

    test('should return true if both arrays are empty', () => {
      expect(Arrays.equal([], [])).toBe(true);
    });

    test('should return true if when comparing an array to itself', () => {
      const array = [1, 2, 3];
      expect(Arrays.equal(array, array)).toBe(true);
    });

    test('should return false if lengths are different', () => {
      expect(Arrays.equal([1, 2], [2, 3, 4])).toBe(false);
    });
  });

  describe('uniq', () => {
    it('should remove duplicate elements from the array', () => {
      expect(Arrays.uniq([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return the same array if all elements are unique', () => {
      expect(Arrays.uniq([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if input is empty', () => {
      expect(Arrays.uniq([])).toEqual([]);
    });
  });

  describe('chunk', () => {
    it('should divide array into chunks of given size', () => {
      expect(Arrays.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should return the same array if chunk size is 1', () => {
      expect(Arrays.chunk([1, 2, 3, 4, 5], 1)).toEqual([
        [1],
        [2],
        [3],
        [4],
        [5],
      ]);
    });

    it('should return the array as a single chunk if chunk size is greater than array length', () => {
      expect(Arrays.chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    it('should return an empty array if input is empty', () => {
      expect(Arrays.chunk([], 2)).toEqual([]);
    });
  });

  describe('variableChunk', () => {
    test('should divide array into chunks of varying sizes', () => {
      expect(Arrays.variableChunk([1, 2, 3, 4, 5], [1, 2, 3])).toEqual([
        [1],
        [2, 3],
        [4, 5],
      ]);
    });

    test('should use remaining chunk size if there are more elements than chunk sizes', () => {
      expect(Arrays.variableChunk([1, 2, 3, 4, 5], [1, 2])).toEqual([
        [1],
        [2, 3],
        [4, 5],
      ]);
    });

    test('should ignore extra chunk sizes if there are more chunk sizes than elements', () => {
      expect(Arrays.variableChunk([1, 2], [1, 2, 3])).toEqual([[1], [2]]);
    });

    test('should return an empty array if input is empty', () => {
      expect(Arrays.variableChunk([], [1, 2, 3])).toEqual([]);
    });
  });
});
