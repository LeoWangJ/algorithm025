/**
 * @param {number[]} height
 * @return {number}
 * 
 * 1. 暴力法 O(n^2), 遍歷 i 與 j 的各種組合 取面積最大值
 * 2. 雙指針 O(n), 使用兩個指針、i 指向陣列第一項, j 指向陣列最後一項 慢慢往中間收斂
 * 
 * 參考: https://leetcode-cn.com/problems/container-with-most-water/solution/on-shuang-zhi-zhen-jie-fa-li-jie-zheng-que-xing-tu/
 */
 var maxArea = function(height) {
  let max = 0
  for(let i = 0,j = height.length - 1; i < j;){
    let area = Math.min(height[i],height[j]) * (j - i)
    if(max < area){
      max = area
    }

    if(height[i] > height[j]){
      j--
    }else{
      i++
    }
  }
  return max
};