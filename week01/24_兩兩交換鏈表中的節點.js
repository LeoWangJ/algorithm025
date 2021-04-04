/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 
 * 解題過程
 * 1. 使用虛擬節點當做第一項(prev), 這樣能確保虛擬節點指針指向第一項, 然後對 head 進行處理
 * 
 * 參考: https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/shou-hua-tu-jie-24-liang-liang-jiao-huan-lian-biao/
 */
var swapPairs = function(head) {
  let dimmy = new ListNode()
  dimmy.next = head
  let prev = dimmy
  while(head && head.next){
    let next = head.next
    head.next = next.next
    next.next = head
    prev.next = next

    prev = head
    head = head.next
  }
  return dimmy.next
};