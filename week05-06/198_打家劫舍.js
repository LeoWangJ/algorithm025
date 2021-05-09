/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 1. 動態規劃
 * 
 * 解決方法:
 * 1. 找出最佳子結構 -> 當前最好結果 => max(偷上家 , 不偷上家(偷上上家 + 偷到金額)) 
 * 2. 動態轉移方程 -> dp[n] = Math.max(dp[n-1], dp[n-2]+nums[n - 1])
 * 
 * 參考: https://leetcode-cn.com/problems/house-robber/solution/hua-jie-suan-fa-198-da-jia-jie-she-by-guanpengchn/
 */
var rob = function(nums) {
    let dp = []
    let len = nums.length
    dp[0] = 0
    dp[1] = nums[0]
    for(let i = 2;i<= len;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2] + nums[i-1])
    }
    return dp[len]
};