const { searchNumbersOfSum, searchNumbersOfSumOptimized } = require('./index');

const containsSameElements = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every(element => arr2.includes(element)) && 
           arr2.every(element => arr1.includes(element));
};

describe('Two Sum - Original Solution', () => {
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

describe('Two Sum - Optimized Solution', () => {
    test('should find two numbers that add up to target', () => {
        expect(containsSameElements(searchNumbersOfSumOptimized([2, 7, 11, 15], 9), [0, 1])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSumOptimized([3, 2, 4], 6), [1, 2])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSumOptimized([3, 3], 6), [0, 1])).toBeTruthy();
    });

    test('should handle arrays with negative numbers', () => {
        expect(containsSameElements(searchNumbersOfSumOptimized([-1, -2, -3, -4, -5], -8), [2, 4])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSumOptimized([5, -9, 8, -2, 7], -1), [1, 2])).toBeTruthy();
    });

    test('should handle arrays with zeros', () => {
        expect(containsSameElements(searchNumbersOfSumOptimized([0, 4, 3, 0], 0), [0, 3])).toBeTruthy();
        expect(containsSameElements(searchNumbersOfSumOptimized([-1, 0, 1], 1), [1, 2])).toBeTruthy();
    });

    test('performance comparison', () => {
        // Create a large array for performance testing
        const largeArray = Array.from({length: 10000}, (_, i) => i);
        const target = 19998; // Sum of 9999 + 9999

        const startTime1 = performance.now();
        searchNumbersOfSum(largeArray, target);
        const endTime1 = performance.now();
        const originalTime = endTime1 - startTime1;

        const startTime2 = performance.now();
        searchNumbersOfSumOptimized(largeArray, target);
        const endTime2 = performance.now();
        const optimizedTime = endTime2 - startTime2;

        console.log(`Original solution time: ${originalTime}ms`);
        console.log(`Optimized solution time: ${optimizedTime}ms`);

        // The optimized version should be significantly faster
        expect(optimizedTime).toBeLessThan(originalTime);
    });
}); 