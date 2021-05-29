/**
 * @param {number} n
 * @return {string[][]}
 * 
 * 使用DFS
 * 解題過程:
 * 1. 先將二維陣列棋盤印出來
 * 2. 使用set紀錄 行撇捺是否有存在皇后
 * 3. 攥寫DFS , 並傳入列
 * 4. DFS 終止條件 => 當row = n 時將棋盤存進result 中
 * 5. 對cols做遍歷, 若列撇捺的set沒擁有皇后的話, 才進入下層循環
 * 
 *  
 * 參考: https://leetcode-cn.com/problems/n-queens/solution/shou-hua-tu-jie-cong-jing-dian-de-nhuang-hou-wen-t/
 */
 var solveNQueens = function(n) {
  let result = []
  let board = new Array(n).fill('.').map(()=> new Array(n).fill('.'))

  let cols = new Set()
  let pie = new Set()
  let na = new Set()
  let dfs = function(row){
    if(row === n){
      let stringBoard = board.slice()
      for(let i = 0;i<n;i++){
        stringBoard[i] = stringBoard[i].join('')
      }
      result.push(stringBoard)
      return 
    }

    for(let col = 0;col<n;col++){
      if(!cols.has(col) && !pie.has(row + col) && !na.has(row-col)){
        board[row][col] = 'Q'
        cols.add(col)
        pie.add(row + col)
        na.add(row - col)
        dfs(row +1)
        board[row][col] = '.'
        cols.delete(col)
        pie.delete(row + col)
        na.delete(row - col)
      }
    }
  }

  dfs(0)
  return result
};