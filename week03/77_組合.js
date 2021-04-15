/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 1. 回溯法
 * 
 * 解題過程:
 * 1. 先找出邊界
 * 2. 找出終結點
 * 3. 處理當前邏輯
 * 
 * 參考: https://leetcode-cn.com/problems/combinations/solution/shou-hua-tu-jie-jian-zhi-he-hui-su-by-xiao_ben_zhu/
 */
var combine = function(n, k) {
    if(n < k) return []
    let result = []
    let dfs = (start,path) =>{
        if(path.length == k){
            result.push(path.slice())
            return
        }
        for(let i = start;i<=n;i++){
            path.push(i)
            dfs(i+1,path)
            path.pop()
        }
    }
    dfs(1,[])
    return result
};