/**
 * initialize your data structure here.
 * 難度在於題目要求需要常數時間檢索到棧最小值
 * 1. 使用輔助棧來完成O(1) 搜索最小棧
 * 
 * 解題過程
 * 1. 使用輔助棧來判斷每次 push, pop 後, 棧中的最小值
 * 
 * 參考: https://leetcode-cn.com/problems/min-stack/solution/fu-zhu-zhan-zui-xiao-zhan-by-demigodliu-wnpk/
 */
var MinStack = function() {
  this.stack = []
  this.minStack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */