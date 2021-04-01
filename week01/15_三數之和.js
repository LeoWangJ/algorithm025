/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 1. 暴力法 O(n^3)
 * 2. 雙指針 O(n^2)
 * 
 * 雙指針解法分析
 * 1. 先排序, 由小到大
 * 2. 使用迴圈來遍歷, 當 nums[k] > 0 時 則結束 (j > i > k, k 一定不為正數)
 * 3. 假如迴圈上一個值與此次相同, 則跳過該次循環 (題目要求不能有重複值)
 * 4. i,j 起始值 i = k + 1 , j = nums.length - 1 , 開始往中間移動, 且 i < j 
 * 5. nums[k] + nums[i] + nums[j] > 0 代表nums[j] 值太大, 必須往左移動, 反之則nums[i] 太小, i 往右移動, 
 *    等於0為答案, 此時i 與 j 同時往中間移動
 * 
 * 參考: https://leetcode-cn.com/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/
 */
var threeSum = function(nums) {
  if (nums.length < 2) return []
  nums.sort((a,b) => a - b)
  let result = []
  for(let k = 0;k <= nums.length - 2; k++){
    if( nums[k] > 0) break
    if( k > 0 && nums[k] === nums[k-1]) continue
    let i = k + 1, j = nums.length - 1
    while(i < j) {
      let sum = nums[k] + nums[i] + nums[j]
      if(sum > 0) {
        while(i < j && nums[j] === nums[--j]){}
      }else if (sum < 0) {
        while(i < j && nums[i] === nums[++i]){}
      }else{
        result.push([nums[k], nums[i],nums[j]])
        while(i < j && nums[i] === nums[++i]){}
        while(i < j && nums[j] === nums[--j]){}
      }
    }
  }
  return result
};