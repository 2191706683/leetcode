/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let len = nums.length
    let index, maxLen, number
    let arr = []
    let temp = []
    let count = 0
    let x = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len;) {
            if (nums[i] != nums[j]) {
                index = j
                temp = nums.splice(j)
                arr[count] = nums
                nums = temp
                temp = []
                count++
            } else {
                j++
            }
        }
    }
    if (arr.length != 0) {
        maxLen = arr[0].length
        for (let m = 1; m < arr.length; m++) {
            if (maxLen < arr[m].length) {
                maxLen = arr[m].length
                x = m
            }
            number = arr[x][0]
        }
        return number 
    } else {
        return nums[0]
    }
};
majorityElement([3,2,3])
