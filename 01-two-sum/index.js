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

function searchNumbersOfSumOptimized(nums, target) {
    // Create a hash map to store complements
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in our map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // Store the current number and its index
        numMap.set(nums[i], i);
    }
    
    // If no solution is found
    return [];
}

module.exports = { searchNumbersOfSum, searchNumbersOfSumOptimized }
