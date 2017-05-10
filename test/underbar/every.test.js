const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      let arr = [1,2,3,4,5];
      expect(_.every(arr)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      let arr = [1,3,5,7];
      expect(_.every(arr, (item) => item % 2 !== 0)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      let arr = [1,2,5,7];
      expect(_.every(arr, (item) => item % 2 !== 0)).toBe(false);
    });

  });
});