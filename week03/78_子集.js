/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 1. 回溯法
 * 
 * 解題過程
 * 1. 找出終結點 -> 索引等於nums長度 代表到最後一項了
 * 2. 處理當前邏輯 -> list存入下一個值, 並處理子問題
 * 3. 接著回溯(彈出剛剛存入的值), 在處理子問題
 * 
 * 參考:  https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
 */
var subsets = function(nums) {
    let result = []
    let dfs = (index,list) =>{
        if(index === nums.length){
            result.push(list.slice())
            return
        }
        list.push(nums[index])
        dfs(index+ 1, list)
        list.pop()
        dfs(index + 1, list)
    }
    dfs(0,[])
    return result
};