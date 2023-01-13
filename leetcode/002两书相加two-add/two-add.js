/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var arr1 = []
    var arr2 = []
    var arr3 = []
    var temp = []
    var nodes = []
    var a = 0
    var b = 0
    for(var i=l1.length-1; i>=0; i--){
        arr1[a] = l1[i]
        a++
    }
    for(var j=l2.length-1; j>=0; j--){
        arr2[b] = l2[j]
        b++
    }
    arr1 = Number(arr1.join(''))
    arr2 = Number(arr2.join(''))
    temp = arr1 + arr2
    while(temp){
        arr3.push(temp%10)
        temp = parseInt(temp/10)
    }
    
    for(var i = 0; i < arr3.length; i++) {
        var node = {}
        node.value = arr3[i]
        node.next = null
        nodes.push(node)
    }

    return nodes
};