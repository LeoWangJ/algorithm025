/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * 
 * 使用前綴樹 + DFS
 * 
 * 解題過程:
 * 1. 先將單字存進前綴樹中、方便後續搜索 
 * 2. 接著開始遍歷 board 並且使用 DFS搜索上下左右的單字是否符合、若有搜索過的則要標記
 * 3. 離開DFS時記得將標記的值恢復
 * 
 * 參考: https://leetcode-cn.com/problems/word-search-ii/solution/212-dan-ci-sou-suo-ii-by-alexer-660/
 */
var findWords = function(board, words) {
  let m = board.length
  let n = board[0].length
  let trie = new Trie()
  for(let word of words){
    trie.insert(word)
  }
  let boardDFS = function (i,j,curStr,currNode){
    if(currNode.isEnd){
      result.push(curStr);  
      currNode.isEnd = false;          
    }
    if(i <0 || j <0 || i == m || j == n){
      return;
    }
    const restore = board[i][j];
    if(restore == '#' || !currNode[restore]){
      return;
    }

    board[i][j] = '#';
    curStr += restore; 
    boardDFS(i-1,j,curStr,currNode[restore]);                           
    boardDFS(i+1,j,curStr,currNode[restore]); 
    boardDFS(i,j-1,curStr,currNode[restore]);                           
    boardDFS(i,j+1,curStr,currNode[restore]); 
    board[i][j] = restore;
  }
  let result = [];
  for(let i = 0;i < m;i++){
      for(let j = 0;j < n;j++){
          boardDFS(i,j,'',trie.children); 
      }
  }
  return result;
};

class Trie {
  constructor(){
    this.children = {}
    this.isEnd = false
  }

  insert (word){
    let node = this.children
    for(const ch of word){
      if(!node[ch]){
        node[ch] = {}
      }
      node = node[ch]
    }
    node.isEnd = true
  }
  
  searchPrefix(prefix){
    let node = this.children
    for(let ch of prefix){
      if(!node[ch]){
        return false
      }
      node = node[ch]
    }
    return node
  }
  
  search(word){
    let node = this.searchPrefix(word)
    return node !== undefined && node.isEnd !== undefined
  }

  startsWith(prefix){
    return this.searchPrefix(prefix)
  }
} 