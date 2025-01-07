function searchNumbersOfSum(nums, target) {
    let counter = 0;
    for (i = 1; counter <= nums.length; i++) {
        if(nums[counter] + nums[i] === target) {
            return [i, counter]
        }

        if(i === nums.length) {
            i = 0
            counter++
        }
    }
};

module.exports = { searchNumbersOfSum }
