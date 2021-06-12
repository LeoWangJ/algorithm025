/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 
 * 1. 使用哈希紀錄異位詞字母數量與雙指針製造滑動窗口
 * 
 * 參考: https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/897729/O(n)-JS-Solution-(Sliding-Window)
 */
 var findAnagrams = function(s, p) {
     let start = 0, end = 0;
     let hash = new Map();
     for (let letter of p) hash.set(letter, hash.get(letter)+1 || 1);
     let counter = hash.size, res = [];
     while (end < s.length) {
         let letter = s[end];
         if (hash.has(letter)) hash.set(letter, hash.get(letter)-1);
         if (hash.get(letter) == 0) counter--;
         
         while (counter == 0) {
             if (end - start +1 == p.length) res.push(start);
             if (hash.has(s[start])) hash.set(s[start],hash.get(s[start])+1);
             if (hash.get(s[start]) > 0) counter++;
             start++;
         }
         end++;
     }
     return res;
 };