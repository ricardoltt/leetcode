const { isPalindrome, isPalindromeOptimized } = require('./index');

// Test both implementations with the same test cases
[isPalindrome, isPalindromeOptimized].forEach((implementation) => {
    const functionName = implementation.name;
    
    describe(`${functionName}`, () => {
        test('should identify palindrome numbers correctly', () => {
            expect(implementation(121)).toBeTruthy();
            expect(implementation(12321)).toBeTruthy();
            expect(implementation(1)).toBeTruthy();
            expect(implementation(99999)).toBeTruthy();
        });

        test('should identify non-palindrome numbers correctly', () => {
            expect(implementation(123)).toBeFalsy();
            expect(implementation(10)).toBeFalsy();
            expect(implementation(12345)).toBeFalsy();
        });

        test('should handle negative numbers', () => {
            expect(implementation(-121)).toBeFalsy();
            expect(implementation(-1)).toBeFalsy();
            expect(implementation(-12321)).toBeFalsy();
        });

        test('should handle single digit numbers', () => {
            expect(implementation(0)).toBeTruthy();
            expect(implementation(5)).toBeTruthy();
            expect(implementation(9)).toBeTruthy();
        });

        test('should handle numbers ending with zero', () => {
            expect(implementation(10)).toBeFalsy();
            expect(implementation(100)).toBeFalsy();
            expect(implementation(1000)).toBeFalsy();
        });

        test('should handle large palindrome numbers', () => {
            expect(implementation(1234321)).toBeTruthy();
            expect(implementation(123454321)).toBeTruthy();
            expect(implementation(1234567654321)).toBeTruthy();
        });
    });
}); 