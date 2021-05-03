/**
 * @param {number[][]} triangle
 * @return {number}
 * 
 * 1. 動態規劃 O(n^2)
 * 
 * 解題過程:
 * 1. 找出子問題 -> problem(i,j) = min(sub(i+1,j), sub(i+1, j+1)) + a(i,j)
 * 2. 自底向上, 從倒數第二層開始往上找最小路徑(這樣才有辦法與下一層相加 dp[i+1 ] )
 * 3. 最後 dp[0][0] 為最佳解
 * 
 * 參考: https://leetcode-cn.com/problems/triangle/solution/shou-hua-tu-jie-dp-si-lu-120-san-jiao-xing-zui-xia/
 */
var minimumTotal = function(triangle) {
    let dp = triangle.slice()
    for(let i = triangle.length - 2;i>=0;i--){
        for(let j = 0;j<=i;j++){
            dp[i][j] = Math.min(dp[i+1][j],dp[i+1][j+1]) + triangle[i][j]
        }
    }
    return dp[0][0]
};