/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 1. 暴力法 O(n^2)
 * 2. hash O(n)
 * 
 * 解題過程
 * 1. 遍歷 nums 且在遍歷時,將 nums[i]: i 存進hash map 中
 * 2. 若targe - nums[i] 的值在 hash 能夠搜尋到, 即為答案
 * 
 * 參考: https://leetcode-cn.com/problems/two-sum/solution/jie-suan-fa-1-liang-shu-zhi-he-by-guanpengchn/
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0;i<nums.length;i++){
    if(map.has(target-nums[i])){
      return [map.get(target-nums[i]), i]
    }else{
      map.set(nums[i],i)
    }
  }
  return []
};