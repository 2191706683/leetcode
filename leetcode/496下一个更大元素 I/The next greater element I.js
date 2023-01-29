/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let index = 0
    let temp = []
    for (let i = 0; i < len1; i++) {
        index = nums2.indexOf(nums1[i])
        for (let j = index; j <= len2; j++)                        
            {
                 if (j === len2) {
                     temp.push(-1)
                 }
                 if (nums1[i] < nums2[j]) {
                     temp.push(nums2[j])
                     j = len2
                 } 
                 
            }
    }
    return temp
    
};
