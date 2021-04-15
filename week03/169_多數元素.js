/**
 * @param {number[]} nums
 * @return {number}
 * 進階要求 時間複雜度 O(n) 空間複雜度 O(1)
 * 
 * 1. hash 時間複雜度 O(n) 空間複雜度 O(n) -> 不符合 
 */
var majorityElement = function(nums) {
    let hash = new Map()
    for(let i = 0;i< nums.length;i++){
        hash.set(nums[i],hash.has(nums[i])? hash.get(nums[i]) + 1: 1) 
        if(hash.get(nums[i]) > nums.length / 2){
            return nums[i]
        }
    }
};

/**
 * 
 * @param {*} nums
 *  投票算法 時間複雜度 O(n) 空間複雜度 O(1) -> 符合
 *  先以第一個值為投票基準, 若遍歷後值有重複則 +1 否則 -1 當 計數為0時, 則替換值
 *  
 *  參考: https://leetcode-cn.com/problems/majority-element/solution/169-duo-shu-yuan-su-tou-piao-suan-fa-python-js-by-/
 */
var majorityElement1 = function(nums){
    let count = 1
    let majority = nums[0]
    for(let i = 1;i<nums.length;i++){
        if(count === 0){
            majority = nums[i]
        }
        if(majority === nums[i]){
            count++
        }else{
            count--
        }
    }
    return majority
}