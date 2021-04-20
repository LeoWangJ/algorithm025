/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * 1.深度優先搜索
 * 
 * 解題過程:
 * 1. 若找到1(陸地) 則將島嶼數量增加1, 並且將相鄰的1都改為0
 * 2. 如何找相鄰的元素? 透過深度優先搜索往下找
 * 
 * 參考: https://leetcode-cn.com/problems/number-of-islands/solution/number-of-islands-shen-du-you-xian-bian-li-dfs-or-/
 */
var numIslands = function(grid) {
    let count = 0
    for(let i = 0;i< grid.length;i++){
        for(let j = 0;j< grid[i].length;j++){
            if(grid[i][j] === '1'){
                dfsSearch(grid,i,j)
                count++
            }
        }
    }
    return count

};

let dfsSearch = (grid,i,j) =>{
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return
    grid[i][j] = '0'
    dfsSearch(grid,i - 1,j)
    dfsSearch(grid,i + 1,j)
    dfsSearch(grid,i,j-1)
    dfsSearch(grid,i,j+1)
}