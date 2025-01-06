const { searchIndexByLinearSearch, searchIndexByBinarySearch } = require('./index');

describe('search by linear search', () => {
    test('should return correct index when target is found in array', () => {
        expect(searchIndexByLinearSearch([1, 3, 5, 6], 5)).toBe(2);
        expect(searchIndexByLinearSearch([1, 3, 5, 6], 1)).toBe(0);
        expect(searchIndexByLinearSearch([1, 3, 5, 6], 6)).toBe(3);
    });

    test('should return correct insertion index when target is not found', () => {
        expect(searchIndexByLinearSearch([1, 3, 5, 6], 2)).toBe(1);
        expect(searchIndexByLinearSearch([1, 3, 5, 6], 7)).toBe(4);
        expect(searchIndexByLinearSearch([1, 3, 5, 6], 0)).toBe(0);
        expect(searchIndexByLinearSearch([1, 3, 5, 6], 4)).toBe(2);
    });

    test('should handle edge cases', () => {
        expect(searchIndexByLinearSearch([], 1)).toBe(0);
        expect(searchIndexByLinearSearch([1], 1)).toBe(0);
        expect(searchIndexByLinearSearch([1], 0)).toBe(0);
        expect(searchIndexByLinearSearch([1], 2)).toBe(1);
    });

    test('should handle arrays with duplicate values', () => {
        expect(searchIndexByLinearSearch([1, 3, 3, 3, 5], 3)).toBe(1);
        expect(searchIndexByLinearSearch([1, 1, 1, 3, 3], 2)).toBe(3);
    });
}); 

describe('search by binary search', () => {
    test('should return correct index when target is found in array', () => {
        expect(searchIndexByBinarySearch([1, 3, 5, 6], 5)).toBe(2);
        expect(searchIndexByBinarySearch([1, 3, 5, 6], 1)).toBe(0);
        expect(searchIndexByBinarySearch([1, 3, 5, 6], 6)).toBe(3);
    });

    test('should return correct insertion index when target is not found', () => {
        expect(searchIndexByBinarySearch([1, 3, 5, 6], 2)).toBe(1);
        expect(searchIndexByBinarySearch([1, 3, 5, 6], 7)).toBe(4);
        expect(searchIndexByBinarySearch([1, 3, 5, 6], 0)).toBe(0);
        expect(searchIndexByBinarySearch([1, 3, 5, 6], 4)).toBe(2);
    });

    test('should handle edge cases', () => {
        expect(searchIndexByBinarySearch([], 1)).toBe(0);
        expect(searchIndexByBinarySearch([1], 1)).toBe(0);
        expect(searchIndexByBinarySearch([1], 0)).toBe(0);
        expect(searchIndexByBinarySearch([1], 2)).toBe(1);
    });

    test('should handle arrays with duplicate values', () => {
        expect(searchIndexByBinarySearch([1, 3, 3, 3, 5], 3)).toBe(1);
        expect(searchIndexByBinarySearch([1, 1, 1, 3, 3], 2)).toBe(3);
    });
}); 

describe('performance comparison with large arrays', () => {
    // Generate large sorted array
    const generateLargeArray = (size) => {
        const arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(i * 2); // Creates sorted array with even numbers
        }
        return arr;
    };

    test('search time for binary search', () => {
        const largeArray = generateLargeArray(100000);
        const veryLargeArray = generateLargeArray(100000000);
        
        searchIndexByBinarySearch(largeArray, 199998);
        searchIndexByBinarySearch(largeArray, 100000);
        searchIndexByBinarySearch(largeArray, 99999);

        searchIndexByBinarySearch(veryLargeArray, 1999998);
        searchIndexByBinarySearch(veryLargeArray, 1000000);
    });

    test('search time for linear search', () => {
        const largeArray = generateLargeArray(100000);
        const veryLargeArray = generateLargeArray(100000000);
        
        searchIndexByLinearSearch(veryLargeArray, 1999998);
        searchIndexByLinearSearch(veryLargeArray, 1000000);

        searchIndexByLinearSearch(largeArray, 199998);
        searchIndexByLinearSearch(largeArray, 100000);
        searchIndexByLinearSearch(largeArray, 99999);
    });
}); 