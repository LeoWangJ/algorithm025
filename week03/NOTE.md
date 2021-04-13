学习笔记

- 遞迴
  - 找出終止點
  - 處理當前邏輯
  - 將參數向下處理
```js
const recursion = (level, params) =>{
    // recursion terminator
    if(level > MAX_LEVEL){
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
