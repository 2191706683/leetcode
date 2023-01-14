/**
* @param {number[]} prices
* @return {number}
*/
var maxProfit = function (prices) {
    var arr = []
    var len = prices.length
    var min = prices[0]
    var index = 0
    var max 
    var number
    var minArr = [min]

    for (let item of prices) {
        arr.push(item)
    }

    arr.sort((a, b) => b - a)
    if (arr.toString() === prices.toString()) {
        number = 0
    } else {
        for (var i = 0; i < len; i++) {
            if (min > prices[i + 1]) {
                min = prices[i + 1]
                index = i + 1
                minArr.push(min)
            }
        }
        console.log(minArr)
        max = prices[index + 1]
        if (max) {
            for (var j = index + 1; j < len; j++) {
                if (max < prices[j + 1]) {
                    max = prices[j + 1]
                }
            }
            console.log('1111')
        } else {
            max = prices[1]
            for (var m = 0; m < len; m++) {
                if (max < prices[m + 1]) {
                    max = prices[m + 1]
                }
            }
            min = minArr[minArr.length-2]
        }
        number = max - min
    }
    console.log(number)
};
maxProfit([3,2,6,5,0,3])