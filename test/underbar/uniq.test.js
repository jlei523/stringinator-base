const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    let arr = [1,2,2,4,4,6,7,2];
    expect(_.uniq(arr)).toEqual([1,2,4,6,7]);
  });
});