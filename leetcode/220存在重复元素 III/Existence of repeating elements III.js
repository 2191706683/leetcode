/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let state = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t) {
                return true
            } else {
                state = false
            }
        }
    }
    return state
};
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))