# Two Sum

## Problem Description
Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

### Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Explanation: Because nums[1] + nums[2] == 6, we return [1, 2]

### Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 6, we return [0, 1]

## Solutions

### 1. Original Solution (Brute Force)
- Uses nested loops to check all possible pairs
- Time Complexity: O(n²)
- Space Complexity: O(1)
- Suitable for small arrays or when memory is a constraint

### 2. Optimized Solution (Hash Map)
- Uses a hash map to store complements
- Time Complexity: O(n)
- Space Complexity: O(n)
- Significantly faster for large arrays
- Trades space for time efficiency

## Implementation
The repository includes both implementations:
- `searchNumbersOfSum`: Original brute force solution
- `searchNumbersOfSumOptimized`: Hash map-based optimized solution

## Performance Comparison
The test suite includes a performance comparison test that:
- Creates a large array (10,000 elements)
- Measures execution time for both solutions
- Demonstrates the significant performance advantage of the optimized solution

## Tests
The implementation is thoroughly tested using Jest with the following test cases:

1. **Basic Functionality**
   - Tests basic cases with positive integers
   - Verifies solutions can be returned in any order

2. **Edge Cases**
   - Arrays with negative numbers
   - Arrays containing zeros
   - Arrays with multiple possible solutions

3. **Performance Testing**
   - Compares execution time of both solutions
   - Verifies the optimization benefits

### Running Tests

To run the tests, use the following command:

```bash
npm install
npm test
```

## Constraints
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists

## Note
The repository provides both implementations to demonstrate the trade-off between time and space complexity. Choose the appropriate solution based on your specific requirements:
- Use the original solution when memory is constrained
- Use the optimized solution when performance is critical 