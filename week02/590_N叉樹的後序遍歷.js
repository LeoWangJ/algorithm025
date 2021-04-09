/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * 
 * 1. 遞迴法 O(n)
 * 
 * 參考: https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/solution/hou-xu-di-gui-he-ceng-xu-si-xiang-die-dai-by-cchro/
 */
var postorder = function(root) {
    let result = []
    let travelPostOrder = (root) =>{
        if(root === null){
            return
        }
        root.children.forEach(child=>{
            travelPostOrder(child)
        })
        result.push(root.val)

    }
    travelPostOrder(root)
    return result
};

/**
 * @param {Node} root
 * @return {number[]}
 * 
 * 2. 迭代法 O(n)
 */

 var postorder1 = function(root) {
    if(root === null){
        return []
    }
    let result = []
    let stack = [root]
    while(stack.length){
        let node = stack.pop()
        if(node.children.length > 0){
            stack = stack.concat(node.children)
        }
        result.unshift(node.val)
    }

    return result
 }