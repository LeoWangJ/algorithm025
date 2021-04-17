/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 1. 回溯法
 * 
 * 參考: https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
 */
var permute = function(nums) {
  let result = []
  let used = {}
  let dfs = (path) =>{
    if(path.length === nums.length){
      result.push(path.slice())
      return
    }
    for(let num of nums){
      if(used[num]) continue
      path.push(num)
      used[num] = true
      dfs(path)
      used[num] = false
      path.pop()
    }
  }
  dfs([])
  return result

};