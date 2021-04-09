/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * 
 * 1. 遞迴 O(n)
 * 2. 迭代 O(n)
 * 
 * 參考: https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen--3/
 */
var preorder = function(root) {
    let result = []
    let travelPreOrder = root =>{
        if(root === null){
            return null
        }
        result.push(root.val)
        root.children.forEach(child =>{
            travelPreOrder(child)
        })
    }
    travelPreOrder(root)
    return result 
};