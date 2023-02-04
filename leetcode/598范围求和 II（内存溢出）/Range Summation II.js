/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let M = Array(m).fill(0).map(() => Array(n).fill(0))
    let a,d
    let c = 0
    let result = 0
    for (let i = 0; i < ops.length; i++) {
        a = ops[i][0]
        d = ops[i][1]
        for (let b = 0; b < a;) {
            if(c < d) {
                M[b][c]++
                c++
            } else {
                c = 0
                b++
            }
        }
    }
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (M[0][0] === M[x][y]) {
                result++
            }
        }
    }
    return result
};
console.log(maxCount(3, 3, []))