const searchInsert = require('./index');

describe('searchInsert', () => {
    test('should return correct index when target is found in array', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
        expect(searchInsert([1, 3, 5, 6], 1)).toBe(0);
        expect(searchInsert([1, 3, 5, 6], 6)).toBe(3);
    });

    test('should return correct insertion index when target is not found', () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
        expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
        expect(searchInsert([1, 3, 5, 6], 4)).toBe(2);
    });

    test('should handle edge cases', () => {
        expect(searchInsert([], 1)).toBe(0);
        expect(searchInsert([1], 1)).toBe(0);
        expect(searchInsert([1], 0)).toBe(0);
        expect(searchInsert([1], 2)).toBe(1);
    });

    test('should handle arrays with duplicate values', () => {
        expect(searchInsert([1, 3, 3, 3, 5], 3)).toBe(1);
        expect(searchInsert([1, 1, 1, 3, 3], 2)).toBe(3);
    });
}); 