/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    const len = flowerbed.length
    let count = 0
    if (n === 0) {
        return true
    }
    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 0 &&
            (i === 0 && flowerbed[i + 1] === 0 ||
                flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 ||
                flowerbed[i - 1] === 0 && i === len - 1 ||
                len === 1
            )
        ) {
            flowerbed[i] = 1
            count++
            if (count === n) {
                return true
            }
        }
    }
    return count === n
};
console.log(canPlaceFlowers([0,0,0,0,0,1,0,0], 0))
