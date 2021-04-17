学习笔记

- 遞迴
  - 找出終止點
  - 處理當前邏輯
  - 將參數向下處理

```js
const recursion = (level, params) => {
  // recursion terminator
  if (level > MAX_LEVEL) {
    process_result
    return
  }
  // process current level
  process(level, params)
  // drill down
  recusion(level + 1, params)
  // clean current level status if needed
}
```

- 分治與回溯
  - 本質為遞歸、找重複性、是一種編程的思想
  - 分治為將問題拆分為多個子問題，最後再將其合併。
  - 回溯為將結果遍歷，若不符合則返回上一層繼續尋找
