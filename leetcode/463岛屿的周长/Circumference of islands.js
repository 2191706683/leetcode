/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let count = 4
    let sum = 0
    var empty = new Array(grid[0].length + 2).fill(0);
    grid.unshift(empty)
    grid.push(empty)
    grid[1].push(0)
    grid[1].unshift(0)
    for (let i = 1; i < grid.length - 1; i++) {
        grid[i + 1].push(0)
        grid[i + 1].unshift(0)
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] == 1) {
                if (grid[i - 1][j] === 1) count--
                if (grid[i + 1][j] === 1) count--
                if (grid[i][j - 1] === 1) count--
                if (grid[i][j + 1] === 1) count--
                sum += count
                count = 4
            }
        }
    }
    console.log(sum)
};

islandPerimeter([[1, 0]])