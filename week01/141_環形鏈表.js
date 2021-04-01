/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 1. 使用快慢指針 O(n)
 * 2. 鏈作記號法 O(n) -> 速度基本上優於快慢指針, 因為若有環形的話一定會在第一個鏈上就發現
 * 
 * 快慢指針 解題過程
 * 1. 使用兩個指針, 快的指針每次前進兩步、慢的指針每次每進一步, 若有循環 則快慢指針將會相等
 * 2. 當 fast 不存在 則跳出迴圈
 * 
 * 參考: https://leetcode-cn.com/problems/linked-list-cycle/solution/yuan-lai-hui-luo-ji-qing-xi-jian-dan-yi-7o8tx/
 */
var hasCycle = function(head) {
    if(head === null || head.next === null) return false
    let fast = head, slow = head
    while(fast){
      if(fast.next === null) return false
      fast = fast.next.next
      slow = slow.next
      if(fast === slow){
        return true
      }
    }
    return false
};

/*
 * 
 * 鏈作記號法 解題過程
 * 1. 每次在跑過的鏈上添加val值, 若有環形 則重新再跑一次鏈時 將會遇到val有值 
 * 
 * 參考: https://leetcode.com/problems/linked-list-cycle/discuss/519538/JS-simple-solution-94-faster
 */
var hasCycle2 = function(head) {
  if(!head) return false 
  while(head){
    if(head.val === 'chunked') return true
    head.val = 'chunked'
    head = head.next
  }
  return false
};