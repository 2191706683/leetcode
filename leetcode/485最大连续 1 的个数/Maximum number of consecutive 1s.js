/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let min = 0
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        if (nums[i] === 1) {
            count++
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] !== 1 || nums[i] !== 1) {
                break;
            }
            if (nums[i] === 1 && nums[i] === nums[j]) {
                count++
            }
        }
        if (min < count) {
            min = count
        }
    }
    return min
};
findMaxConsecutiveOnes([0,1])