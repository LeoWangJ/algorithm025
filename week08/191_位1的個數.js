/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * 使用位運算
 * x = x & (x-1) 會消除二進位制中最後一個出現的1
 * 
 * 參考: https://leetcode-cn.com/problems/number-of-1-bits/solution/fu-xue-ming-zhu-xiang-jie-wei-yun-suan-f-ci7i/
 */
var hammingWeight = function(n) {
  let count = 0
  while(n){
    count++
    n &= (n-1)
  }    
  return count 
};