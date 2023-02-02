/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const m = mat.length
    const n = mat[0].length
    let temp = []
    if (m * n !== r * c) {
        return mat
    } else {
        let arr = new Array(r)
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                temp.push(mat[i][j])
            }
        }
        for (let t = 0; t < r; t++) {
            arr[t] = new Array(c)
            for (let l = 0; l < c; l++) {
                arr[t][l] = temp[t * c + l]
            }
        }
        return arr
    }
};
console.log(matrixReshape([[1,2,3,4]], 2, 2))