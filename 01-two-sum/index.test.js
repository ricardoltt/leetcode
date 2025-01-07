const { searchNumbersOfSum } = require('./index');

const containsSameElements = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every(element => arr2.includes(element)) && 
           arr2.every(element => arr1.includes(element));
};

describe('Two Sum', () => {
    test('should find two numbers that add up to target', () => {
        expect(containsSameElements(searchNumbersOfSum([2, 7, 11, 15], 9), [0, 1])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSum([3, 2, 4], 6), [1, 2])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSum([3, 3], 6), [0, 1])).toBeTruthy();
    });

    test('should handle arrays with negative numbers', () => {
        expect(containsSameElements(searchNumbersOfSum([-1, -2, -3, -4, -5], -8), [2, 4])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSum([5, -9, 8, -2, 7], -1), [1, 2])).toBeTruthy();
    });

    test('should handle arrays with zeros', () => {
        expect(containsSameElements(searchNumbersOfSum([0, 4, 3, 0], 0), [0, 3])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSum([-1, 0, 1], 1), [1, 2])).toBeTruthy();
    });
}); 