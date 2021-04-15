/**
 * @param {string} digits
 * @return {string[]}
 * 
 * 1. DFS 回溯
 * 
 * 參考: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/shou-hua-tu-jie-liang-chong-jie-fa-dfshui-su-bfsya/
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    let map  = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const result = []
    const dfs = (curStr,i) =>{
        if(i === digits.length){
            result.push(curStr)
            return
        }
        let letters = map[digits[i]]
        for(let letter of letters){
            dfs(curStr+letter,i+1)
        }
    }

    dfs('',0)
    return result
};