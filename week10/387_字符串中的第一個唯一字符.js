/**
 * @param {string} s
 * @return {number}
 * 
 * 1. 使用 hash 紀錄字符串中的重複情況
 */
 var firstUniqChar = function(s) {
  let hash = new Map()
  for(let i =0 ;i< s.length;i++){
      let ch = s[i]
      if(hash.has(ch)){
          hash.set(ch, 0)
      }else{
          hash.set(ch,1)
      }
  }

   for(let i =0 ;i< s.length;i++){
      let ch = s[i]
      if(hash.get(ch) === 1){
          return i
      }
   }
   return -1
};