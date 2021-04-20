/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 1. greedy O(n)
 * 
 * 解題過程:
 * 1. 當後一天價格減掉前一天為正, 代表有獲利, 將價格累加到下一次
 * 
 * 參考: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/best-time-to-buy-and-sell-stock-ii-zhuan-hua-fa-ji/
 */
var maxProfit = function(prices) {
    let max = 0
    for(let i = 0;i< prices.length;i++){
        let diff = prices[i] - prices[i - 1]
        if(diff > 0){
            max += diff
        }
    }
    return max
};