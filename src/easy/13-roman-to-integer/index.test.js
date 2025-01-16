const { romanToInteger, romanToIntegerOptimized } = require('./index');

[romanToInteger, romanToIntegerOptimized].forEach((implementation) => {
    const functionName = implementation.name;

    describe(`${functionName}`, () => {
        test('should convert basic roman numerals correctly', () => {
            expect(implementation('I')).toBe(1);
            expect(implementation('V')).toBe(5);
            expect(implementation('X')).toBe(10);
            expect(implementation('L')).toBe(50);
            expect(implementation('C')).toBe(100);
            expect(implementation('D')).toBe(500);
            expect(implementation('M')).toBe(1000);
        });

        test('should handle subtractive combinations correctly', () => {
            expect(implementation('IV')).toBe(4);
            expect(implementation('IX')).toBe(9);
            expect(implementation('XL')).toBe(40);
            expect(implementation('XC')).toBe(90);
            expect(implementation('CD')).toBe(400);
            expect(implementation('CM')).toBe(900);
        });

        test('should convert complex roman numerals correctly', () => {
            expect(implementation('III')).toBe(3);
            expect(implementation('LVIII')).toBe(58);
            expect(implementation('MCMXCIV')).toBe(1994);
            expect(implementation('MMXXIII')).toBe(2023);
        });

        test('should handle repeated numerals correctly', () => {
            expect(implementation('II')).toBe(2);
            expect(implementation('XX')).toBe(20);
            expect(implementation('CC')).toBe(200);
            expect(implementation('MMM')).toBe(3000);
            });
        });
});