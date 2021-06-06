/**
 * @param {string} s
 * @return {number}
 * 
 * 1. 動態規劃 
 * 
 * 參考: https://leetcode-cn.com/problems/decode-ways/solution/shu-ju-jie-gou-he-suan-fa-di-gui-he-dong-pnyf/
 */
 var numDecodings = function(s) {
  const n = s.length;
  let secondLast = 0
  let last = 1
  for (let i = 1; i <= n; ++i) {
      let current = 0
      if (s[i - 1] !== '0') {
          current = last
      }
      if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
          current +=secondLast
      }
      secondLast = last
      last = current 
  }
  return last
};