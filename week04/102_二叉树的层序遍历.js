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
 * @return {number[][]}
 * 
 * 1. 廣度優先搜索 (BFS) , 使用隊列來維護。 時間複雜度 O(n)
 * 
 * 參考: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
 */
var levelOrder = function(root) {
   let result = [], queue = [root]
   if(!root){
       return result
   }
   while(queue.length > 0){
       let level = [], n = queue.length
       for(let i = 0;i< n;i++){
        let node = queue.pop()
        if(node.left) queue.unshift(node.left)
        if(node.right) queue.unshift(node.right)
        level.push(node.val)
       }
       result.push(level)
   }
   return result 
};