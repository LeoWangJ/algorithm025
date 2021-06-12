/**
 * @param {string} s
 * @return {string}
 * 
 * 解題過程:
 * 1. 去除字串頭尾空白字符
 * 2. 只分割字串(因為有可能單字與單字之間有不只一個空格)
 * 3. 反轉陣列在將其合併
 * 
 */
 var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};