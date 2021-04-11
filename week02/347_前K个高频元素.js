/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * 要求 O(nlogn) 以下
 * 最小堆解法 O(nlogk)
 */
 var topKFrequent = function(nums, k) {
  let hash = new Map()
  for(let i= 0;i<nums.length; i++){
     hash.set(nums[i],hash.has(nums[i]) ? hash.get(nums[i]) + 1 : 1) 
  }
  let array = Array.from(hash.keys())
  let heap = new MinHeap(array.slice(0,k),hash)
  for(let i = k;i<array.length;i++){
    if(heap.top() < hash.get(array[i])){
      heap.extract()
      heap.insert(array[i])
    }
  }
   
  return heap.container.reverse()
};

function swap (arr,i,j){
  [arr[i],arr[j]] = [arr[j], arr[i]]
}

class MinHeap {
 constructor(arr = [],hash) {
    this.container = []
    this.hash = hash
    if(Array.isArray(arr)){
      arr.forEach(this.insert.bind(this))
    }
 }
 
 top(){
  if(this.container.length) return this.hash.get(this.container[0])
  return null
 }
 
 insert (data){
  let {container} = this
  container.push(data)
  let index = container.length - 1
  while(index){
    let parent = Math.floor((index - 1) / 2)
    if(this.hash.get(container[index]) >= this.hash.get(container[parent])){
      break
    }
    swap(container, index,parent)
    index = parent
  }
 }

 extract(){
  let {container} = this
  if(!container.length){
    return null
  }
  swap(container,0,container.length - 1)
  let res = container.pop()
  let index = 0,exchange = index * 2 + 1, length = container.length
  while(exchange < length){
    let right = index * 2 + 2
    if(right < length && this.hash.get(container[right]) < this.hash.get(container[exchange])){
      exchange = right
    }
    if(this.hash.get(container[index]) <= this.hash.get(container[exchange])){
      break
    }
    swap(container, index, exchange)
    index = exchange
    exchange = index * 2 + 1
  }
  return res
 }
}

