/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * 1. 動態規劃
 * 
 * 參考: https://leetcode-cn.com/problems/coin-change/solution/js-xiang-jie-dong-tai-gui-hua-de-si-xiang-yi-bu-da/
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount +1).fill(Infinity)
    dp[0] = 0
    for(let i = 1;i<=amount;i++){
        for(let coin of coins){
            if(i - coin >=0){
                dp[i] = Math.min(dp[i] , dp[i-coin] +1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};