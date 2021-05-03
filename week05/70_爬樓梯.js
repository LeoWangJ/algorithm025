/**
 * @param {number} n
 * @return {number}
 * 1. 遞推
 * 
 * 解題過程:
 * 1. 費波那契 f(n) = f(n - 1) + f(n - 2)
 * 2. 優化, 改成從頭累加 
 * 
 */
var climbStairs = function(n) {
    if(n <= 3) return n
    let temp = 1, a = 2,b =  3
    for(let i = 4;i<= n;i++){
        temp = a
        a = b
        b = temp + b
    }
    return b
};

/**
 * 2. 動態規劃
 * 
 * 解題過程:
 * 1. 找出最佳子問題 當前階 = 前一階與前兩階的總和
 * 
 * 參考: https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/
 */

var climbStairs = function(n) {
    var dp = []
    dp[1] = 1
    dp[2] = 2
    for(let i = 3;i<=n;i++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};