/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 
 * 1. 暴力法(遍歷乘n) O(n)
 * 
 * 2. 分治法 (遞歸) O(logn)
 * 
 * 解題過程
 * 1. 當n < 0 時,將n變成正數後,則等同於 1 / x^n
 * 2. 將 x^n 拆解為 x^n/2 * x^n/2, 若n 為奇數, 則多乘一次x (避免少乘一次)
 * 
 * 參考: https://leetcode-cn.com/problems/powx-n/solution/50-powx-n-by-alexer-660/
 */
var myPow = function(x, n) {
  if(n<0){
      n = -n
      x = 1 / x
  }
  const pow = (x,n) =>{
      if(n === 0) return 1
      const half = pow(x,parseInt(n/2))
      return half * half * (n % 2 == 1? x: 1)
  }
  return pow(x,n)
};