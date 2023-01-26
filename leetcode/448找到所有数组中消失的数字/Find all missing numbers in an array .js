/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const len = nums.length
    const arr = Array.from(
        {length: len}, (ele, index) => index + 1
    )
    let temp = []
    for (let i = 0; i < len; i++) {
        if (nums.indexOf(arr[i]) === -1) {
            temp.push(arr[i])
        }
    }
    return temp
};
findDisappearedNumbers([1,1])
