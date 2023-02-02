/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let len = score.length
    let temp = []
    let num = Array.from(new Array(len + 1).keys()).slice(4).map(String)
    let grade = ["Gold Medal","Silver Medal","Bronze Medal"].concat(num)
    let result = new Array(len)
    let max, index
    score.forEach(item => temp.push(item))
    temp.sort((a, b) => b-a)
    for (let i = 0; i < len; i++) {
        max = score[i]
        index = temp.indexOf(max)
        result[i] = grade[index]
    }
    return result
};
// console.log(findRelativeRanks([10,3,8,9,4]))
findRelativeRanks([10,3,8,9,4])
// console.log(3 > -Infinity)
