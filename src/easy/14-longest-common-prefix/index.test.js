const { longestCommonPrefix, longestCommonPrefixOptimized } = require('./index');

[longestCommonPrefix, longestCommonPrefixOptimized].forEach((implementation) => {
    const functionName = implementation.name;

    describe(`${functionName}`, () => {
        test('should find common prefix in basic cases', () => {
            expect(implementation(["flower","flow","flight"])).toBe("fl");
            expect(implementation(["dog","racecar","car"])).toBe("");
            expect(implementation(["interspecies","interstellar","interstate"])).toBe("inters");
        });

        test('should handle empty array and single element', () => {
            expect(implementation([])).toBe("");
            expect(implementation(["single"])).toBe("single");
        });

        test('should handle arrays with empty strings', () => {
            expect(implementation(["", "b"])).toBe("");
            expect(implementation(["a", ""])).toBe("");
            expect(implementation(["", ""])).toBe("");
        });

        test('should handle strings of different lengths', () => {
            expect(implementation(["aa","a"])).toBe("a");
            expect(implementation(["abc","abcd","abcde"])).toBe("abc");
        });

        if (functionName === 'longestCommonPrefixOptimized') {
            test('performance comparison', () => {
                const generateStrings = (count, length) => {
                    return Array.from({ length: count }, () => 
                        'prefix' + Array(length).fill('a').join('')
                    );
                };

                const largeInput = generateStrings(1000, 1000);

                const startTime1 = performance.now();
                longestCommonPrefix(largeInput);
                const endTime1 = performance.now();
                const originalTime = endTime1 - startTime1;

                const startTime2 = performance.now();
                longestCommonPrefixOptimized(largeInput);
                const endTime2 = performance.now();
                const optimizedTime = endTime2 - startTime2;

                console.log(`Original solution time: ${originalTime}ms`);
                console.log(`Optimized solution time: ${optimizedTime}ms`);

                expect(optimizedTime).toBeLessThan(originalTime);
            });
        }
    });
}); 