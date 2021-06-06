/**
 * @param {number[]} nums
 * @return {number}
 * 
 *  1. DP O(n^2)
 * 
 *  參考: https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/
 */
var lengthOfLIS = function(nums) {
  if(nums.length === 0) return 0
  let dp = new Array(nums.length).fill(1)
  let result = 0
  for(let i = 0 ;i<nums.length;i++){
    for(let j =0;j<i;j++){
      if(nums[j] < nums[i]){
        dp[i] = Math.max(dp[i],dp[j] +1)
      }
    }
    result = Math.max(result,dp[i])
  }
  return result
};

/**
 * @param {*} nums
 * 
 * 1. DP + 二分查找 O(nlogn)
 *  
 */
var lengthOfLIS = function(nums){
  let tails = []
  let res = 0
  for(let num of nums){
    let i = 0, j = res
    while(i<j){
      let m = Math.floor((i + j) / 2)
      if(tails[m] < num) {
        i = m + 1 
      }else{
        j = m
      }
     
    }
    tails[i] = num
    if(res === j) res++
  }
  return res
}