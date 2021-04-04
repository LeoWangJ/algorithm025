/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * 1. 暴力法 O(n^2)
 * 2. deque O(n)
 * 
 * 解題過程
 * 1. 遍歷 nums, 使用 deque 由大到小排序獲取到的值
 * 2. 若deque 最大值不存在 k範圍內, 則移除
 * 3. 若當前值大於 deque 棧頂值 則將其 pop 出去
 * 
 * 參考: https://leetcode-cn.com/problems/sliding-window-maximum/solution/239dan-diao-dui-lie-qiu-jie-hua-dong-chuang-kou-de/
 */

var maxSlidingWindow = function(nums, k) {
  let result = []
  let deque = []
  for(let i = 0;i<nums.length;i++){
    if(i - deque[0] >= k) deque.shift()
    while(nums[deque[deque.length - 1]] <= nums[i]){
      deque.pop()
    }
    deque.push(i)
    if(i >= k - 1){
      result.push(nums[deque[0]])
    }
  }
  return result
};