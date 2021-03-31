/**
 * @param {number} n
 * @return {number}
 * 
 * 1. 費波那契 f(n) = f(n - 1) + f(n - 2)
 * 2. 動態規劃 (還沒學, 學完後記得補)
 * 
 * 參考: https://leetcode-cn.com/problems/climbing-stairs/solution/wo-shi-yi-zhi-xiao-qing-wa-by-belinda/
 */
var climbStairs = function(n) {
  if(n <= 2) return n
  let temp , prev = 1, current = 2
  for(let i = 3;i<=n;i++){
    temp = current
    current = current + prev
    prev = temp
  }
  return current
};