/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let temp = []
    let result = []
    let index = []
    let index2 = [0]
    let x, y, min, step
    const len1 = list1.length
    const len2 = list2.length
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (list1[i] === list2[j]) {
                temp.push(list1[i])
            }
        }
    }
    if (temp.length === 1) {
        return temp
    } else {
        min = list1.indexOf(temp[0]) + list2.indexOf(temp[0])
        step = min
        for(let m = 1; m < temp.length; m++) {
            x = list1.indexOf(temp[m])
            y = list2.indexOf(temp[m])
            if (min > x + y) {
                min = x + y
                index.push(m)
            }
            if (min === x + y) {
                index2.push(m)
            }
        }
        if (index.length === 0) {
            for(let r = 0; r < index2.length; r++) {
                result.push(temp[index2[r]])
            }
        } else {
            for (let c = 0; c < index.length; c++) {
                result.push(temp[index[c]])
            }
        }
        return result
    }
};
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))
