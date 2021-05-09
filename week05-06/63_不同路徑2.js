/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 
 * 1. 動態規劃 O(m * n)
 * 
 * 解題過程:
 * 1. 
 * 
 * 參考: 老師課程
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = new Array(n + 1).fill(0)
  dp[1] = 1
  for(let i=0;i<m;i++){
    for(let j = 1;j<=n;j++){
      if(obstacleGrid[i][j-1] == 1){
        dp[j] = 0
      }else{
        dp[j] += dp[j-1]
      }
    }
  }
  return dp[n]
};