/**
 * 
 * 解題過程:
 * 1. 使用虛擬頭尾節點輔助
 * 2. 想清楚雙向鏈表的指向即可
 * 
 * 參考:
 * 1. 思路 https://leetcode-cn.com/problems/lru-cache/solution/lru-ce-lue-xiang-jie-he-shi-xian-by-labuladong/
 * 2. 代碼 https://leetcode-cn.com/problems/lru-cache/solution/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/
 */

class ListNode {
  constructor(key,value){
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity){
    this.capacity = capacity // 緩存容量
    this.hash = {}
    this.count = 0 // 緩存數目
    // 設置虛擬頭尾節點主要是要讓真實頭尾節點與其他節點一致，方便快速訪問節點
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    // 實作雙向鏈表
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead 
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key){
    let node = this.hash[key]
    if(node == null) return -1
    this.moveToHead(node)
    return node.value
  }

  moveToHead(node){
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeFromList(node){
    let tempPrev = node.prev
    let tempNext = node.next
    tempPrev.next = tempNext
    tempNext.prev = tempPrev
  }

  addToHead(node){
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key,value){
    let node = this.hash[key]
    if(node == null){
      if(this.count === this.capacity){
        this.removeLRUItem()
      }
      let newNode = new ListNode(key,value)
      this.hash[key] = newNode
      this.addToHead(newNode)
      this.count++
    }else{
      node.value = value
      this.moveToHead(node)
    }
  }

  removeLRUItem(){
    let tail = this.popTail()
    delete this.hash[tail.key]
    this.count--
  }
  popTail(){
    let tail = this.dummyTail.prev
    this.removeFromList(tail)
    return tail
  }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */