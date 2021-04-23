学习笔记

- 廣度和深度優先搜索
  - 搜索代表每個節點都要訪問一次且僅訪問一次
  - 深度優先搜索 (DFS)
    - 根節點開始一直往下層搜索(通常由左子樹開始往下遍歷)
    ```javascript
    const visited = new Set()
    const dfs = (node) => {
      if (visited.has(node)) return
      visited.add(node)
      dfs(node.left)
      dfs(node.right)
    }
    ```
  - 廣度優先搜索 (BFS)
    - 由根節點開始向下層節點遍歷，一層一層往下遍歷，使用隊列來維護。
    ```javascript
    const bfs = (root) => {
      let result = [],
        queue = [root]
      if (!root) {
        return result
      }
      while (queue.length > 0) {
        let level = [],
          n = queue.length
        for (let i = 0; i < n; i++) {
          let node = queue.pop()
          level.push(node.val)
          if (node.left) queue.unshift(node.left)
          if (node.right) queue.unshift(node.right)
        }
        result.push(level)
      }
      return result
    }
    ```
- 貪心算法 (Greedy)
  - 即在每一步的選擇中都挑選最優的選擇 (可能造成鼠目寸光)
  - 與動態規劃的不同在於，貪心算法無法回溯
- 二分查找
  - 目標函數單調性 (遞增或遞減)
  - 存在上下界
  - 能夠通過索引訪問

```javascript
let left = 0,
  right = len(array) - 1
while (left <= right) {
  let mid = (left + right) >> 1
  if (array[mid] === target) {
    /*find the target*/ return
  } else if (array[mid] < target) left = mid + 1
  else right = mid - 1
}
```

學習心得:

這週比較忙題目刷得比較少，並且二分查找的部分僅僅只有觀看老師視頻，沒有時間去解題。  
下週必須補回來。
