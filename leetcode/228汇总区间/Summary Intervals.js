/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let arr = []
    let temp = []
    let i = 0
    let str = ''
    while (nums.length != 0) {
        if (nums[i] + 1 !== nums[i+1]) {
            temp = nums.splice(i + 1)
            newArr = nums
            nums = temp
            temp = []
            arr.push(newArr)
            i =  0
        } else {
            i++
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length == 1) {
            str = arr[j][0].toString()
        } else {
            str = arr[j][0] + '->' + arr[j][arr[j].length-1]
        }
        nums.push(str)
        str = ''
    }
    return nums
};
console.log(summaryRanges([0,2,3,4,6,8,9]))