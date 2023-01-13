/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x == 0){
        return true;
    };
    if(x < 0 || x%10 == 0){
        return false;
    };

    var temp = x;
    var y = 0;
    var rem;
    while(temp){
        rem = temp % 10;
        temp = parseInt(temp / 10);
        y = y*10 + rem 
    }
    if(y==x){
        return true;
    }else{
        return false;
    }
};