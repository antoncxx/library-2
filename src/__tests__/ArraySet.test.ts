import { ArraySet } from '../ArraySet';

describe('ArraySet', () => {
  let set: ArraySet<number>;

  beforeEach(() => {
    set = new ArraySet<number>();
  });

  describe('add', () => {
    test('should add a new unique item', () => {
      expect(set.add(1)).toBe(true);
      expect(set.size()).toBe(1);
      expect(set.has(1)).toBe(true);
    });

    test('should not add a duplicate item', () => {
      set.add(1);
      expect(set.add(1)).toBe(false);
      expect(set.size()).toBe(1);
    });
  });

  describe('first', () => {
    test('should retrieve the first item', () => {
      set.add(1);
      set.add(2);
      expect(set.first()).toBe(1);
    });

    test('should return undefined when the set is empty', () => {
      expect(set.first()).toBeUndefined();
    });
  });

  describe('shift', () => {
    test('should remove and return the first item', () => {
      set.add(1);
      set.add(2);
      expect(set.shift()).toBe(1);
      expect(set.size()).toBe(1);
      expect(set.has(1)).toBe(false);
      expect(set.has(2)).toBe(true);
    });

    test('should return undefined when the set is empty', () => {
      expect(set.shift()).toBeUndefined();
    });
  });

  describe('empty', () => {
    test('should be empty when initialized', () => {
      expect(set.empty()).toBe(true);
    });

    test('should not be empty after adding items', () => {
      set.add(1);
      expect(set.empty()).toBe(false);
    });

    test('should be empty after removing all items', () => {
      set.add(1);
      set.shift();
      expect(set.empty()).toBe(true);
    });
  });

  describe('delete', () => {
    test('should delete an existing item', () => {
      set.add(1);
      expect(set.delete(1)).toBe(true);
      expect(set.size()).toBe(0);
      expect(set.has(1)).toBe(false);
    });

    test('should not delete a non-existing item', () => {
      expect(set.delete(1)).toBe(false);
    });
  });

  describe('has', () => {
    test('should return true if the set contains the item', () => {
      set.add(1);
      expect(set.has(1)).toBe(true);
    });

    test('should return false if the set does not contain the item', () => {
      expect(set.has(1)).toBe(false);
    });
  });

  describe('clear', () => {
    test('should clear all items from the set', () => {
      set.add(1);
      set.add(2);
      set.clear();
      expect(set.size()).toBe(0);
      expect(set.empty()).toBe(true);
    });
  });

  describe('size', () => {
    test('should return the size of the set', () => {
      expect(set.size()).toBe(0);
      set.add(1);
      set.add(2);
      expect(set.size()).toBe(2);
    });
  });

  describe('values', () => {
    test('should return all values in the set', () => {
      set.add(1);
      set.add(2);
      expect(set.values()).toEqual([1, 2]);
    });

    test('should return an empty array when the set is empty', () => {
      expect(set.values()).toEqual([]);
    });
  });
});
