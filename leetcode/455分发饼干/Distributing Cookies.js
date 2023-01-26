/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < g.length;) {
            if (s[i] >= g[j]) {
                s.splice(i, 1)
                g.splice(j, 1)
                count++
            } else {
                j++
            }
        }
    }
    return count
};
findContentChildren([1,2], [1,2,3])