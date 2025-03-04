学习笔记

- 布隆過濾器( Bloom Filter )

  - 判斷一個元素是否存在一個集合中
  - 空間效率 (使用二進制向量儲存) 與查詢時間遠高於其他算法
  - 缺點為有一定的誤識別率和刪除困難
  - 原理：
    使用一個超大 Array 和幾個哈希函數來實現布隆過濾器。  
    先將 Array 值設為 0，並且要儲存的元素需要經過 k 個哈希函數後，將各個哈希值映射到 Array 上的 對應位子，然後將對應值標記為 1，代表有儲存元素。  
    若要判斷的值所映射到的 Array 值為 0，則代表一定不存在， 若皆為 1 則代表可能存在，由於 Array 中的位子可能其他元素也使用相同位子，所以無法保證搜尋的元素一定存在，這就是誤識別率的原因。
  - 用例：
    布隆過濾器可以使用在大量資料量時場景下要過濾不存在的資料，例如： 垃圾郵件過濾功能
  - 參考：
    [布隆过滤器的原理和实现](https://www.cnblogs.com/cpselvis/p/6265825.html)
    [使用布隆过滤器解决缓存击穿、垃圾邮件识别、集合判重](https://blog.csdn.net/tianyaleixiaowu/article/details/74721877)

- LRU 緩存機制 ( Least Recently Used )
  通常使用哈希與雙向鏈表實現原因是可達到查詢、新增、刪除皆為 O(1)，它的原理是採最近使用原則。  
  要存的資料會照順序存入鏈表中，若鏈表滿時且存進來的資料沒被緩存則會將最早存進的資料清除，若存進來的資料有緩存的會則會將該緩存更新到鏈表頭。

- 排序算法
  - 比較類排序 - 透過元素間的大小來排序，其時間複雜度不能突破 O(nlogn) , 因此也稱為非線性時間比較類排序
  - 非比較類排序 - 不通過比較元素來進行排序，可以突破基於比較排序的時間下界，也稱為線性時間非比較類排序 ex: 計數、桶、基數排序
  - 初級排序 O(n^2)
    - 選擇排序 (selection sort)
      - 每次找最小值，然後放到帶排序陣列的起始位置
    - 冒泡排序 (Bubble sort)
      - 嵌套循環，每次查看相鄰的元素如果逆序，則交換
    - 插入排序 (insertion sort)
      - 通過建造有序序列(預設第一項為已排序)，對未排序數據，在已排序序列中從後向前掃瞄，找到相應位置並插入
  - 高級排序 O(nlogn)
    - 快速排序 (quick sort)
      - 採用分治思想，陣列取標竿 pivot，將小於 pivot 放左側，大於 pivot 放右側，然後依次對左邊和右邊的子陣列繼續快排，以達到整個序列有序
    - 堆排序 (heap sort)
      1. 陣列元素依次建立小頂堆
      2. 依次取堆頂元素，並刪除
    - 合併排序 (merge sort)
      1. 把長度為 n 的輸入序列分成兩個長度為 n/2 的子序列
      2. 對這兩個子序列分別採用合併排序
      3. 將兩個排序好的子序列合併成一個最終的排序序列
  - 特殊排序 O(n)
    - 計數排序
      - 必須為有確定範圍的整數並且值不能太大，因為額外開的數組是依照值來開空間
      - 將元素值依次存進對應 key 的陣列( 額外開的陣列空間)，存一次 +1，接著將該陣列次數對應 key 依序取出來即為已排序
    - 桶排序
      - 計數排序的升級版
      - 設置一個定量的陣列當作空桶
      - 遍歷輸入數據，並且將數據一個一個放到對應的桶裡
      - 對每個不是空的桶進行排序
      - 把排好序的數據接起來
    - 基數排序
      - 額外開一個 0-9 的陣列，然後將數值由低位數先排序放到對應的陣列中，再排序高位數，最後依序將取出來進行排序即可
      - 只能排整數
  - 參考:
    [十大經典排序算法](https://www.cnblogs.com/onepixel/p/7674659.html)
