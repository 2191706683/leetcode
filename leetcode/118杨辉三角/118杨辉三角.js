/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var arr = []
    if (numRows == 1) {
        arr[0] = [1]
        return arr
    }
    if (numRows == 2) {
        arr[0] = [1]
        arr[1] = [1, 1]
        return arr
    }
    if (numRows > 2) {
        arr[0] = [1]
        arr[1] = [1, 1]
        for (var i = 2; i <= numRows-1; i++) {
            arr[i] = []
            arr[i][0] = 1
            arr[i][i] = 1
            for (var j = 1; j < i; j++) {
                for (var m = 0; m < j; m++) {
                    arr[i][j] = arr[i - 1][m] + arr[i - 1][m + 1]
                }
            }
        }
        return arr
    }
};
console.log(generate(1))
