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
 * @return {boolean}
 * 1. 中序遍歷 遞歸 
 * 2. 中序遍歷 棧
 */
var isValidBST = function(root) {
    let prev = -Infinity,result = true
    let inorder = (root) =>{
        if(!root){
            return
        }
        inorder(root.left)
        if(root.val <= prev){
            result = false
            return
        }
        prev = root.val
        inorder(root.right)
    }
    inorder(root)
    return result
};