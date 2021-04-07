/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * 1. hash O(n klogk)
 * 
 * 解題過程:
 * 1. 遍歷strs, 將 str 字串進行排序
 * 2. 使用 Map 紀錄相同字串
 * 3. 若有hash Map 有 key 則將 str 儲存進該Map
 * 
 * 參考: https://leetcode-cn.com/problems/group-anagrams/solution/zi-mu-yi-wei-ci-fen-zu-by-leetcode-solut-gyoc/
 */
var groupAnagrams = function(strs) {
  let hash = new Map()
  for(let str of strs){
    let strArr = Array.from(str)
    strArr.sort()
    let key = strArr.toString()
    let list = hash.has(key) ? hash.get(key) : []
    list.push(str)
    hash.set(key,list)
  }
  return Array.from(hash.values())
};