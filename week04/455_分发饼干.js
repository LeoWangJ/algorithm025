/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 
 * 1. 排序 + 貪心算法 
 * 
 * 解題過程:
 * 1. 先將小孩與餅乾都按小到大排序 
 * 2. 使用child 與 cookie 變數當作索引值
 * 3. 當child 小於 小孩總數 且 cookie 小於餅乾總數時才進行遍歷
 * 4. 當前餅乾滿足度大於等於小孩胃口值時則換下一個小孩(child + 1)
 * 5. 餅乾持續 + 1 (因為滿足胃口值,則當前餅乾已經無法使用, 不滿足則代表當前的餅乾也不滿足下一個小孩的胃口值(由小到大排序))
 * 
 * 參考: https://leetcode-cn.com/problems/assign-cookies/solution/fen-fa-bing-gan-by-leetcode-solution-50se/
 */
var findContentChildren = function(g, s) {
    let child = 0
    let cookie = 0
    s.sort((a,b) => a - b)
    g.sort((a,b) => a - b)

    while(child < g.length && cookie < s.length){
        if(g[child] <= s[cookie]){
            child++
        }
        cookie++
    }
    return child
};