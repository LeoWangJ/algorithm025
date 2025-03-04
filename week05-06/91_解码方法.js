/**
 * @param {string} s
 * @return {number}
 * 
 * 1. 動態規劃 
 * 
 * 解決過程:
 * 1. 與爬樓梯相似, 但必須設條件來判斷是否要累加前一層的數
 * 2. 當前項的前一項字串不為零, 則可以累加前一項值 dp[i] += dp[i -1] 
 * 3. 當前項的前前一項字串不為零 且 前一項與前前一項數字相加 符合 <= 26 dp[i] += dp[i-2]
 * 
 * 參考: https://leetcode-cn.com/problems/decode-ways/solution/shu-ju-jie-gou-he-suan-fa-di-gui-he-dong-pnyf/
 */
var numDecodings = function(s) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n]
};

/**
 * 動態規劃空間複雜度優化
 * 可使用變量來記錄累加值
 */

var numDecodings1 = function(s) {
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