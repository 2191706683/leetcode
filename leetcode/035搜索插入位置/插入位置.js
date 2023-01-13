var searchInsert = function(nums, target) {
    var index = nums.indexOf(target)
    if(index != -1) {
        return index
    } else {
        nums.push(target)
        nums.sort((a, b) => a - b)
        index = nums.indexOf(target)
        return index
    }
    
};

searchInsert([3,5,7,9,10], 8)