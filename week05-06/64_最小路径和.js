/**
 * @param {number[][]} grid
 * @return {number}
 * 1. 動態規劃
 * 
 * 解決方法:
 * 1. 最佳子結構 -> 當前項總和 = min(上層項總和 + 左層總和) + 當前項路徑數字
 * 2. 動態轉移方程 -> dp[m][n] = min(dp[m-1][n],dp[m][n-1]) + grid[m][n]
 * 3. 此地方不多開一個 dp 陣列來節省空間複雜度(但在工程上應該避免在原陣列操作)
 * 
 * 參考: https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-dong-tai-gui-hua-gui-fan-liu-c/
 * 
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for(let i=1;i<m;i++){
        grid[i][0] += grid[i-1][0]
    }
     for(let j=1;j<n;j++){
        grid[0][j] += grid[0][j-1]
    }
    for(let i = 1;i<m;i++){
        for(let j =1;j<n;j++){
            grid[i][j] += Math.min(grid[i-1][j],grid[i][j-1])
        }
    }    
    return grid[m-1][n-1]
};






