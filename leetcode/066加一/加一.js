/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var sum
    sum =  BigInt(digits.join(''))
    sum++
    sum = sum.toString().split('')
    return sum
};
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])