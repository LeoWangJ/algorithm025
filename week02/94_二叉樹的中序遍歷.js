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
 * 
 * 1. 遞迴法 O(n)
 * 
 * 參考: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
 */
var inorderTraversal = function(root) {
  let result = []
  let inorder = root =>{
    if(root === null){
      return 
    }
    inorder(root.left)
    result.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return result
}

/**
 * 
 * @param {*} root 
 * @returns 
 * 
 * 2. 迭代法 O(n)
 * 
 * 解題過程:
 * 1. 使用 stack 儲存遍歷過的元素, 但不先處理
 * 2. 找到二叉樹最左邊的節點, 存進結果中, 在處理右子樹
 */
 var inorderTraversal1 = function(root) {
  let result = []
  let stack = []
  while(root || stack.length){
      while(root){
        stack.push(root)
        root = root.left
      }
      root = stack.pop()
      result.push(root.val)
      root = root.right
  }
  return result
};