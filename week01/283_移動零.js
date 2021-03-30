/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 1. 透過雙指針來判斷, 若當前值不為0, 且 i > j (避免第1,2個非零值交換) 則進行交換
 * 
 * 參考: https://leetcode-cn.com/problems/move-zeroes/solution/dong-hua-yan-shi-283yi-dong-ling-by-wang_ni_ma/
 */
var moveZeroes = function(nums) {
  if(nums.length === 0) return 
  let j = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0) {
      if(i > j){
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
  }
  return nums
};