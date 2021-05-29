/**
 * @param {number} n
 * @return {boolean}
 * 
 * 2的冪, 代表為二進制最高的值為1
 * ex: 
 * 2^0 = 0001
 * 2^1 = 0010
 * 2^2 = 0100
 * 
 * 所以使用 n & n-1 後若不等於0 則代表還有其他二進位為1
 * 
 * 參考: https://leetcode-cn.com/problems/power-of-two/solution/power-of-two-er-jin-zhi-ji-jian-by-jyd/
 */
 var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n-1)) === 0
};