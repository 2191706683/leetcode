/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let state = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i-j) <= k) {
                return true
            } else {
                state = false
            }
        }
    }
    return state
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))