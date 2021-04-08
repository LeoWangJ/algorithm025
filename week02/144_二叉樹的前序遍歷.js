/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 1. 遞迴法 O(n)
 */
var preorderTraversal = function(root) {
  let result = []
  let preorder = root =>{
    if(root === null){
      return 
    }
    result.push(root.val)
    preorder(root.left)
    preorder(root.right)
  }  
  preorder(root)
  return result
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 1. 迭代法 O(n)
 */
 var preorderTraversal = function(root) {
  let result = []
  let stack = []
  while(root || stack.length){
    while(root){
      result.push(root.val)
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
  return result
};