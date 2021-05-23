/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * 這題沒有算法知識, 主要是要了解如何檢查數獨格式
 * 
 * 解題過程:
 * 1. 使用rows 來檢查列的值, columns 檢查行的值, boxes 檢查數獨盒子的值
 * 2. 遍歷整個數獨表, 並且檢查行、列、盒子的值是否有重複
 * 3. 這題難點在於要如何判斷盒子的值是否有重複  Math.floor(i/3) * 3 + Math.floor(j/3)
 * 
 * 參考: https://leetcode-cn.com/problems/valid-sudoku/solution/javascript-san-ge-bu-zou-qing-xi-jie-ti-by-jsliang/
 */
var isValidSudoku = function(board) {
 const rows= [],columns = [], boxes = []
 for(let i=0;i<9;i++){
   rows[i] = []
   columns[i] = []
   boxes[i] = []
 }
 for(let i=0;i<9;i++){
   for(let j =0;j<9;j++){
     const value = board[i][j]
     if(value !== '.'){
       // check rows
       if(!rows[i].includes(value)){
        rows[i].push(value)
       }else{
         return false
       }

       // check columns
       if(!columns[j].includes(value)){
        columns[j].push(value)
       }else{
         return false
       }
      
       // check boxes
       const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)
       if(!boxes[boxIndex].includes(value)){
         boxes[boxIndex].push(value)
       }else{
         return false
       }
     }
   }
 }
 return true
};