/**
 * Initialize your data structure here.
 * 
 * 參考: https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/shi-xian-trie-qian-zhui-shu-by-leetcode-ti500/
 */
var Trie = function() {
  this.children = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.children
  for(const ch of word){
    if(!node[ch]){
      node[ch] = {}
    }
    node = node[ch]
  }
  node.isEnd = true
};

Trie.prototype.searchPrefix = function(prefix){
  let node = this.children
  for(const ch of prefix){
    if(!node[ch]){
      return false
    }
    node = node[ch]
  }
  return node
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.searchPrefix(word)
  return node !== undefined && node.isEnd !== undefined
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.searchPrefix(prefix)
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */