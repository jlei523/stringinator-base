const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    let arr = [1,2,3,4,5,6];
    let count = 0;
    _.each(arr, (element, index, array) => {
    	expect(element).toEqual(array[index]);
    	count += 1;
    	});
    expect(count).toEqual(6);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    let obj = {
    	length: 3,
    	a: '1',
    	b: '3',
    	c: '4'
    };

   	let count = 0;
   	_.each(obj, (element, index, array) => {
   		expect(element).toEqual(array[index]);
   		count++;
   	});

   	expect(count).toBe(3);

  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    let obj = {
    	a: '1',
    	b: '3',
    	c: '4'
    }

    let count = 0;
    _.each(obj, (element, index, array) => {
    	expect(element).toEqual(array[index]);
    	count++
    })
    expect(count).toBe(3);
  });
});

