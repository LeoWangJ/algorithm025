/**
 * @param {number[]} digits
 * @return {number[]}
 * 
 * 題解過程
 * 1. 最後一個值加一, 可能會有二位數, 需要對此情況做處理
 * 2. 可能 999 -> 1000 所以要處理多一位的情況
 * 
 * 參考: https://leetcode-cn.com/problems/plus-one/solution/hua-jie-suan-fa-66-jia-yi-by-guanpengchn/
 */
 var plusOne = function(digits) {
    for(let i = digits.length -1; i >= 0;i--){
      digits[i]++
      digits[i] = digits[i] % 10
      if(digits[i] !== 0){
        return digits
      }
    }
    digits.unshift(1)
    return digits
};