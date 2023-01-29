/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let len = timeSeries.length
    let sum = 0
     for (let i = 0; i < len; i++)  {
         if ((timeSeries[i] + duration - 1) < timeSeries[i+1] || i == len - 1)                                    
         {
            sum += duration   
         } else {
            sum += timeSeries[i+1] - timeSeries[i] 
         }
     }
     return sum
};