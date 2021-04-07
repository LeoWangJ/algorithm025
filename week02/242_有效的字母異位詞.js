/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 1. 暴力法 O(nlogn)
 * 2. hash O(n)
 * 
 * 解題過程:
 * 1. s 長度不等於 t , 則不為異位詞
 * 2. 使用一個陣列儲存26個單字各數量
 * 3. 遍歷 s 字串, s 字串的字母 +1, t 字串的字母 -1 
 * 4. 遍歷 hash , 有值不為零則代表不為異位詞
 * 
 * 參考: https://leetcode-cn.com/problems/valid-anagram/solution/hua-jie-suan-fa-242-you-xiao-de-zi-mu-yi-wei-ci-by/
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) {
    return false
  }
  let hash = new Array(26).fill(0)
  let aCode = 'a'.charCodeAt(0)
  for(let i = 0;i<s.length;i++){
    hash[s.charCodeAt(i) - aCode] ++
    hash[t.charCodeAt(i) - aCode] --
  }
  for(let item of hash){
    if(item !== 0){
      return false
    }
  }
  return true
};