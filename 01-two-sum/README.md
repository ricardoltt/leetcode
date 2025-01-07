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

## Solution
The solution implements an algorithm that:

1. Iterates through the array looking for pairs of numbers that sum to target
2. Returns the indices of the two numbers when found
3. Handles various edge cases including:
   - Negative numbers
   - Arrays containing zeros
   - Multiple possible solutions (returns the first valid solution)

### Time Complexity: O(n²)
### Space Complexity: O(1)

## Implementation
The core logic:
- Uses nested loops to check all possible pairs
- Avoids using the same element twice
- Returns indices in any order
- Guarantees to find a solution as per problem constraints

## Tests
The implementation is thoroughly tested using Jest with the following test cases:

1. **Basic Functionality**
   - Tests basic cases with positive integers
   - Verifies solutions can be returned in any order

2. **Edge Cases**
   - Arrays with negative numbers
   - Arrays containing zeros
   - Arrays with multiple possible solutions

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
While the current implementation works correctly, it could be optimized further using a hash map approach to achieve O(n) time complexity. The current solution prioritizes space complexity over time complexity. 