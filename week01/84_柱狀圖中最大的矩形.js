/**
 * @param {number[]} heights
 * @return {number}
 * 
 * 1. 暴力法 O(n^2)
 * 2. stack O(n)
 * 
 * 解題過程
 * 1. 使用 stack 來保存遍歷過的值 (stack 值將由小到大排序)
 * 2. 若當前值小於棧頂高度, 則代表找到右邊界, 此時可以計算該棧頂的寬度
 * 
 * 參考: https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/wo-yong-qiao-miao-de-bi-yu-jiang-dan-diao-zhan-jie/
 * 參考2: 第1周 第四課 實戰題目解析
 */
const largestRectangleArea = (heights) => {
  let stack = []
  let maxArea = 0
  heights = [0,...heights, 0]
  for(let i= 0;i<heights.length;i++){
    while(heights[i] < heights[stack[stack.length -1]]){
      let stackTopIndex = stack.pop()
      maxArea = Math.max(maxArea, heights[stackTopIndex] * (i - stack[stack.length - 1] -1))
    }
    stack.push(i)
  }

  return maxArea
}