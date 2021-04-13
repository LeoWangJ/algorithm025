/**
 * @param {number} n
 * @return {string[]}
 * 
 * 1. 遞迴法
 * 
 * 解題過程:
 * 1. 找出終結點 -> 當目前字串為2n時(因為n組括號有左與右括號)
 * 2. 處理當前邏輯
 * 3, drill down
 * 
 * 參考: https://leetcode-cn.com/problems/generate-parentheses/solution/jsda-gai-shi-zui-jian-ji-de-jie-fa-by-shem/
 */
var generateParenthesis = function(n) {
    let result = []
    const help = (string, left, right) =>{
        if(string.length === 2*n ) {
            result.push(string)
            return
        }

        if(left < n){
            help(string + '(', left + 1, right)    
        }

        if(right < left){
            help(string + ')',left, right + 1)
        }
    }
    help('',0,0)
    return result
};