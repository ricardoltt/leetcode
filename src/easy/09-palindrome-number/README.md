# Palindrome Number

## Problem Description
Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

A number is a palindrome when it reads the same backward as forward.

### Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

### Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it reads 121-. Therefore it is not a palindrome.

### Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

## Solutions

### Solution 1: String Conversion Approach
This solution converts the number to a string and checks if it reads the same forwards and backwards:
1. Convert the number to a string
2. Create a reversed version of the string
3. Compare the original and reversed strings

#### Time Complexity: O(log n)
#### Space Complexity: O(log n)

### Solution 2: Mathematical Approach (Optimized)
This solution works directly with the number without string conversion:
1. Handle edge cases (negative numbers and numbers ending with 0)
2. Reverse only half of the number
3. Compare the original half with the reversed half

#### Time Complexity: O(log n)
#### Space Complexity: O(1)

## Implementation
The solution provides two approaches:
1. Using JavaScript's built-in string methods (split, reverse, join)
2. Using mathematical operations (division and modulo) for better space efficiency

## Tests
The implementation is thoroughly tested using Jest with various test cases including:
- Positive palindrome numbers
- Negative numbers
- Single digits
- Numbers ending in zero
- Large numbers

Both implementations are tested with the same test cases to ensure consistent behavior.

### Running Tests
```bash
npm install
npm test
``` 