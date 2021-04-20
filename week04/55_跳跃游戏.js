/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 1. Greedy O(n)
 * 
 * 解題過程:
 * 1. 從後開始遍歷到前, 來找尋是否有方法能夠到達最後一項
 * 2. 判斷方法為最後一項的索引 若小於等於 num[i] + i (能跳耀的值 + 當前索引), 則代表有方法能夠到最後一項, 則將i變成最後一項的值再繼續往前判斷
 * 3. 當endReachable值為0 則代表有方法從第一項走到最後一項
 * 
 * 參考: 老師解題法, https://leetcode.com/problems/jump-game/discuss/903388/Easy-O(n)-JS-Solution
 */
var canJump = function(nums) {
    if(nums.length === 0){
        return false
    }
    let endReachable = nums.length -1
    for(let i = nums.length -1; i>= 0;i--){
        if(nums[i] + i >=endReachable){
            endReachable = i
        }
    }
    return endReachable === 0
};