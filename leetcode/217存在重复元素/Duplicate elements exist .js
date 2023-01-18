/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let state = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true
            } else {
                state = false
            }
        }
    }
    return state
};
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
