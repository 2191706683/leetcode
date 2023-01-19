/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length
    if (nums[0] === 1) {
        return 0
    }
    nums.sort((a, b) => a-b)
    for (let i = 0; i < len; i++) {
        if (nums[i] + 1 !== nums[i+1]) {
            return nums[i] + 1
        }
    }
};
console.log(missingNumber([1,2]))