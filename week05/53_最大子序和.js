/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 1. 動態規劃 O(n)
 * 
 * 解題過程:
 * 1. 找出最佳子問題 -> dp[i] = max(dp[i-1] + nums[i] , nums[i])
 * 2. 當前項加上 dp前一項與 當前項取最大值 
 *  
 * 參考: https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/
 */
var maxSubArray = function(nums) {
    let dp = nums.slice()
    let max = nums[0]
    for(let i = 1;i < nums.length;i++){
        dp[i] = Math.max(dp[i -1] + nums[i], nums[i])
        if(max < dp[i]){
            max = dp[i]
        }
    }
    return max
};