/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a-b)
    for (var i = 0; i < nums.length; ) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i, 1)
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    console.log(nums[0])
};
singleNumber([4,1,2,1,2])