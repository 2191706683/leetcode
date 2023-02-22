/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const len = nums.length
    let temp = []
    let sum = 0
    let result
    for (let i = 0; i < len - k + 1; i++) {
        for (let j = i; j < k + i; j++) {
            sum += nums[j]
        }
        temp.push(sum)
        sum = 0
    }
    temp.sort((a, b) => b - a)
    result = temp[0] / k
    return result
    // console.log(result)
};
findMaxAverage([5], 1)