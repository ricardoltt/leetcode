# Roman to Integer

## Problem Description
Convert a roman numeral to an integer. Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

| Symbol | Value |
|--------|--------|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals are usually written largest to smallest from left to right. However, there are six instances where subtraction is used:
- `IV` = 4 (5 - 1)
- `IX` = 9 (10 - 1)
- `XL` = 40 (50 - 10)
- `XC` = 90 (100 - 10)
- `CD` = 400 (500 - 100)
- `CM` = 900 (1000 - 100)

### Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3

### Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3

### Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, IV = 4

## Solution
Two implementations are provided:

### 1. Original Implementation (romanToInteger)
- Processes the string from right to left
- Converts string to array using split()
- Uses array indexing for comparisons

### 2. Optimized Implementation (romanToIntegerOptimized)
- Processes the string from left to right (more intuitive)
- Works directly with string characters (no array conversion)
- Uses a fallback value for boundary checking (`|| 0`)
- More memory efficient due to avoiding array creation

Both implementations share these characteristics:
- Time Complexity: O(n) where n is the length of the input string
- Space Complexity: O(1) as the hash map size is constant
- Use a hash map for quick value lookups
- Handle subtractive combinations automatically

## Implementation
The core logic for both solutions:
```javascript
const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
```

Key differences:
1. **Direction of Processing**
   - Original: Right to left
   - Optimized: Left to right

2. **String Handling**
   - Original: Converts to array first
   - Optimized: Direct string character access

3. **Memory Usage**
   - Original: Creates additional array
   - Optimized: Works with original string

## Tests
The implementation is thoroughly tested using Jest with the following test cases for both implementations:

1. **Basic Roman Numerals**
   - Tests individual symbols (I, V, X, L, C, D, M)
   - Verifies correct integer conversion

2. **Subtractive Combinations**
   - Tests all six subtractive cases (IV, IX, XL, XC, CD, CM)
   - Ensures correct handling of these special cases

3. **Complex Roman Numerals**
   - Tests longer combinations like "MCMXCIV" (1994)
   - Verifies handling of mixed cases

4. **Repeated Numerals**
   - Tests cases with repeated symbols (II, XX, CC, MMM)
   - Ensures correct addition of repeated values

### Running Tests

```bash
npm install
npm test
```

## Constraints
- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')
- It is guaranteed that s is a valid roman numeral in the range [1, 3999] 