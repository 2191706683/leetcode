/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let tLen = strs.length
    let len = strs[0].length
    let s = ''
    for(let i=1; i<strs.length; i++){
        if(len > strs[i].length){
            len = strs[i].length
        }
    }
    for(let m=0; m<len; m++){
        for(let n=1; n<tLen; n++){
            if(strs[0].charAt(m) != strs[n].charAt(m)){
               return s 
            }
        }
        s = s + strs[0].charAt(m)
    }
    return s
};