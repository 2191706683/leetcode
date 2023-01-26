/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let len
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length;) {
            if (nums[i] == nums[j]) {
                nums.splice(i, 1)
            } else {
                j++
            }
        }
    }
    len = nums.length
    nums.sort((a, b) => a-b)
    if (len < 3) {
        return nums[len - 1]
    } else {
        return nums[len - 3]
    }
};
console.log(thirdMax([1,2,2,5,3,5]))