/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * 1. 動態規劃 O(m * n)
 * 
 * 解題過程
 * 1. 找出最佳子問題 -> 除了起點與邊界點、其餘位置為 上加左 次數
 * 2. 遇到邊界時 將值設為 1
 * 
 * 參考: https://leetcode-cn.com/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/
 */
var uniquePaths = function(m, n) {
  let d = new Array(m).fill(0).map(()=> new Array(n).fill(0))
  for(let i = 0; m > i;i++){
    for(let j = 0;n> j;j++){
      if(i === 0 || j===0){
        d[i][j] = 1
      }else{
        d[i][j] = d[i][j - 1] + d[i -1][j]
      }
    }
  }  
  return  d[m -1][n -1]
};