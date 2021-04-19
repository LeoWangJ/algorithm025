学习笔记

- 廣度和深度優先搜索
  - 搜索代表每個節點都要訪問一次且僅訪問一次
  - 深度優先搜索 (DFS)
    - 根節點開始一直往下層搜索(通常由左子樹開始往下遍歷)
    ```javascript
      const visited = new Set()
      const dfs = node =>{
        if(visited.has(node)) return 
        visited.add(node)
        dfs(node.left)
        dfs(node.right)
      }
    ```
  - 廣度優先搜索 (BFS)
    - 由根節點開始向下層節點遍歷，一層一層往下遍歷，使用隊列來維護。
    ```javascript
    const bfs = root =>{
        let result = [], queue = [root]
        if (!root) {
            return result;
        }
        while(queue.length > 0){
            let level = [], n = queue.length
            for(let i = 0; i<n; i++){
                let node = queue.pop()
                level.push(node.val)
                if(node.left) queue.unshift(node.left)
                if(node.right) queue.unshift(node.right)
            }
            result.push(level)
        }
        return result
    }
    ```