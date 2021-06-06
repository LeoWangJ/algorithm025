/**
 * 冒泡排序
 */
function bubbleSort(arr){
  let len = arr.length
  for(let i = 0;i< len - 1 ;i++){
    for(let j = 0;j< len - 1 -i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

/**
 * 選擇排序
 */
function selectionSort(arr){
  let len = arr.length
  let minIndex 
  for(let i =0;i < len -1 ;i++){
    minIndex = i
    for(let j = i+1;j<len;j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

/**
 * 插入排序
 */
function insertionSort(arr){
  let len = arr.length
  let preIndex,current
  for(let i = 1;i< len;i++){
    preIndex = i -1
    current = arr[i]
    while(preIndex >=0 && arr[preIndex] > current){
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex +1] = current
  }
  return current
}

/**
 * 合併排序
 */
function mergeSort(arr){
  let len = arr.length
  if(len < 2){
    return arr
  }
  let middle = Math.floor(len /2),
  left = arr.slice(0,middle),
  right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let result = []
  while(left.length > 0 && right.length > 0){
    if(left[0] <= right[0]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }

  while(left.length){
    result.push(left.shift())
  }
  while(right.length){
    result.push(right.shift())
  }

  return result
}

/**
 * 快速排序
 */
function quickSort(arr, left, right){
  let len = arr.length, partitionIndex;
  left = typeof left !== 'number' ? 0: left
  right = typeof right !== 'number' ? len -1 : right;

  if(left < right){
    partitionIndex = partition(arr,left,right)
    quickSort(arr,left,partitionIndex -1)
    quickSort(arr,partitionIndex + 1, right)
  }
  return arr
}

function partition(arr,left,right){
    let pivot = left,
        index = pivot +1
    
    for(let i = index;i<=right;i++){
      if(arr[i] < arr[pivot]){
        [arr[i],arr[index]] = [arr[index],arr[i]]
        index++
      }
    }
    [arr[pivot],arr[index-1]] = [arr[index-1],arr[pivot]]
    return index -1
}

/**
 * 堆排序
 */
function heapSort(arr){
  if(arr.length === 0) return 
  let len = arr.length

  for(let i = Math.floor(len / 2) -1;i>=0;i--){
    heapify(arr,len,i)
  }
  for(let i = len - 1;i>=0;i--){
    [arr[0],arr[i]] = [arr[i],arr[0]]
    heapify(arr,i,0)
  }
  return arr
}

function heapify(arr,len,i){
  let left = 2 * i + 1
  let right = 2 * i + 2
  let largest = i

  if(left < len && arr[left] > arr[largest]){
    largest = left
  }
  
  if(right < len && arr[right] > arr[largest]){
    largest = right
  }

  if(largest !== i){
    [arr[i],arr[largest]] = [arr[largest],arr[i]]
    heapify(arr,len,largest)
  }
}