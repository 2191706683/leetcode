/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, n)
    for (var i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }
    nums1.sort((a,b) => a-b)
    return nums1
};
console.log(merge([-10, -1, 0, 0, 0, 0], 4, [-1, 0], 2))
