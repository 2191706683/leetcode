/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let temp = []
    let a = 0, b = 0, c = 0
    const str1 = 'qwertyuiop'
    const str2 = 'asdfghjkl'
    const str3 = 'zxcvbnm'
    for (let i = 0; i < words.length; i++) {
        let arr = words[i].toLowerCase().split('')
        let len = arr.length
        for (let j = 0; j < arr.length; j++) {
            if (str1.indexOf(arr[j]) !== -1) {
                a++
            }
            if (str2.indexOf(arr[j]) !== -1) {
                b++
            }
            if (str3.indexOf(arr[j]) !== -1) {
                c++
            }
        }
        if (a === len) {
            a = 1
        }
        if (a === 0) {
            a = 0
        }
        if (b === len) {
            b = 1
        }
        if (b === 0) {
            b = 0
        }
        if (c === len) {
            c = 1
        }
        if (c === 0) {
            c = 0
        }
        if (a === 1 && b === 0 && c === 0 ||
            a === 0 && b === 1 && c === 0 || 
            a === 0 && b === 0 && c === 1) {
            temp.push(words[i])
        }
        a = 0
        b = 0
        c = 0
    }
    return temp
};
console.log(findWords(["adsdf","sfd"]))