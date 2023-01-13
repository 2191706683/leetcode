/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var list = 0
    var arr = s.split('')
    for(var i=0; i<arr.length; i++){
        if(arr[i]=='I' && arr[i+1]=='V'){
            list += 4
            i++
            continue;
        }
        if(arr[i]=='I' && arr[i+1]=='X'){
            list += 9
            i++
            continue;
        }
        if(arr[i]=='X' && arr[i+1]=='L'){
            list += 40
            i++
            continue;
        }
        if(arr[i]=='X' && arr[i+1]=='C'){
            list += 90
            i++
            continue;
        }
        if(arr[i]=='C' && arr[i+1]=='D'){
            list += 400
            i++
            continue;
        }
        if(arr[i]=='C' && arr[i+1]=='M'){
            list += 900
            i++
            continue;
        }
        switch(arr[i]){
            case 'I':
                list += 1;
                break;
            case 'V':
                list += 5;
                break;
            case 'X':
                list += 10;
                break;
            case 'L':
                list += 50;
                break;
            case 'C':
                list += 100;
                break;
            case 'D':
                list += 500;
                break;
            case 'M':
                list += 1000;
                break;
        }
    }
    return list
}