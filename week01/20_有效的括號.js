/**
 * @param {string} s
 * @return {boolean}
 * 使用 stack 解法 O(n)
 * 
 * 解題過程
 * 1. 當字串為 { [ ( 則存入 stack 中
 * 2. 當字串為 } ] ) 時 則判斷 stack 中最上層的值是否為對應的括號 
 * 3. 最後返回 stack 長度 若有值則代表有括號未匹配到
 * 
 * 參考:  https://leetcode-cn.com/problems/valid-parentheses/solution/guan-fang-tui-jian-ti-jie-you-xiao-de-gu-zyzg/
 */
var isValid = function(s) {
  let stack = []
  for(let i = 0;i< s.length; i ++){
    let item = s[i]
    if(item === '(' || item === '{' || item === '['){
      stack.push(item)
    }else{
      if(
        item === ')' && stack[stack.length - 1] === '(' ||
        item === '}' && stack[stack.length - 1] === '{' ||
        item === ']' && stack[stack.length - 1] === '['
      ) {
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length === 0
};