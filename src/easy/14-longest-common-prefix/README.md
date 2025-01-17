# Longest Common Prefix

## Problem Description
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

### Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

## Solution
Two implementations are provided:

### 1. Original Implementation (longestCommonPrefix)
- Uses string.startsWith() method
- Iterates through all strings for each prefix length
- Time Complexity: O(S * n) where S is the sum of all characters in all strings, n is the number of strings

### 2. Optimized Implementation (longestCommonPrefixOptimized)
- Sorts the array first (lexicographically)
- Only compares first and last string
- Time Complexity: O(n * log n) for sorting + O(m) for comparison, where m is the length of the shortest string
- More efficient for large datasets as it reduces the number of comparisons needed

## Implementation Details
The optimized solution works by:
1. Sorting the array (lexicographically)
2. After sorting, we only need to compare the first and last strings
3. The common prefix of these two strings will be the common prefix of all strings

Key advantages:
- Reduces number of comparisons needed
- No need to check every string in the array
- More efficient for large datasets
- Simpler code structure

## Tests
The implementation is thoroughly tested using Jest with the following test cases:

1. **Basic Cases**
   - Tests common scenarios with known prefixes
   - Verifies cases with no common prefix

2. **Edge Cases**
   - Empty array
   - Single element array
   - Arrays with empty strings

3. **Length Variations**
   - Strings of different lengths
   - Very long strings
   - Large arrays of strings

4. **Performance Testing**
   - Compares execution time of both implementations
   - Verifies optimization benefits

### Running Tests
```bash
npm test
```

## Constraints
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters 