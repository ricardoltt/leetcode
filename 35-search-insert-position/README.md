# Search Insert Position

## Problem Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

The algorithm should run in O(log n) time complexity.

### Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

### Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

### Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

## Solution
The solution implements a modified binary search algorithm that:

1. Finds the exact position of the target if it exists in the array
2. Determines the correct insertion position if the target is not found
3. Handles duplicate values by returning the leftmost position
4. Works with empty arrays and single-element arrays

### Time Complexity: O(log n)
### Space Complexity: O(1)

## Implementation
The core logic uses binary search with special handling for:
- Finding exact matches
- Determining insertion positions
- Managing duplicate values
- Edge cases


## Tests
The implementation is thoroughly tested using Jest with the following test cases:

1. **Target Found in Array**
   - Tests exact matches at various positions
   - Verifies correct index is returned

2. **Target Not Found (Insertion Position)**
   - Tests insertion at beginning
   - Tests insertion in middle
   - Tests insertion at end

3. **Edge Cases**
   - Empty array
   - Single-element array
   - Target smaller than all elements
   - Target larger than all elements

4. **Duplicate Values**
   - Tests finding leftmost position of duplicate values
   - Tests insertion between duplicate values

### Running Tests

To run the tests, use the following command:

```bash
npm install
npm test
```
