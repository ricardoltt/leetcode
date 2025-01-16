/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchIndexByLinearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }

    return nums.length;
}

function searchIndexByBinarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            if (mid === 0 || nums[mid - 1] < target) {
                return mid;
            }
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

module.exports = { searchIndexByLinearSearch, searchIndexByBinarySearch };
