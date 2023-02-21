/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let sum, a, b
    let len = nums.length
    nums.sort((a, b) => a - b) 
    a = nums[0] * nums[1] * nums[len - 1]
    b = nums[len - 3] * nums[len - 2] * nums[len - 1]
    if (a > b) {
        sum = a
    } else {
        sum = b
    }
    console.log(sum)
};
maximumProduct([1,2,3,4])