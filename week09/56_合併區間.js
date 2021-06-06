/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * 1. 排序 O(nlogn) 
 * 
 * 參考: https://leetcode-cn.com/problems/merge-intervals/solution/shou-hua-tu-jie-56he-bing-qu-jian-by-xiao_ben_zhu/
 */
 var merge = function(intervals) {
  intervals.sort((a,b)=> a[0] - b[0])
  let result = []
  let prev = intervals[0]
  for(let i = 1; i < intervals.length; i++){
    let cur = intervals[i]
    if(prev[1] >= cur[0]){
      prev[1] = Math.max(prev[1],cur[1])
    }else{
      result.push(prev)
      prev = cur
    }
  }
  result.push(prev)
  return result
};