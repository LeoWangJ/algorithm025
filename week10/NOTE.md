学习笔记

- 字符串匹配算法
  - 暴力法 (brute force)
    - 對兩個字符串一一比較，直到有符合的字符串，時間複雜度為 O(mn)
  - Rabin-Karp 算法
    - 使用哈希值來判斷，假如子串的哈希值與要比較的字符串相同，再進行逐一比較，若不相同則代表字符子串不符合
  - KMP 算法
    - 當子串與目標字串不匹配時，已經知道前面匹配成功的那一部分字符(包括子串與目標字符串)
    - [KMP 字符串匹配算法 視頻](https://www.bilibili.com/video/av11866460?from=search&seid=17425875345653862171)
    - [字符串匹配的 KMP 算法](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)
- 技巧
  - clarification 明確題目意思、邊界、數據規模
  - possible solutions 窮盡所有可能的解法
    - compare time / space
    - optimal solution
  - coding 代碼簡潔、高性能、美感
  - test cases
