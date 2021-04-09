/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 
 * 1. 排序法 O(nlogn)
 * 2. 最大堆 Maxheap O(n logk)
 * 
 * 參考: https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/chao-quan-3chong-jie-fa-zhi-jie-pai-xu-zui-da-dui-/
 */
var getLeastNumbers = function(arr, k) {
    return arr.sort((a,b) => a-b).slice(0,k)
};
function swap (arr, i ,j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}

class MaxHeap{
    constructor(arr=[]){
        this.container = []
        if(Array.isArray(arr)){
            arr.forEach(this.insert.bind(this))
        }
    }

    insert(data){
        const {container} = this
        container.push(data)
        let index = container.length - 1
        while(index){
            let parent = Math.floor((index - 1) / 2)
            if(container[index] <= container[parent]){
                break
            }
            swap(container,index, parent)
            index = parent
        }
    }

    extract(){
        const {container} = this
        if(!container.length){
            return null
        }
        swap(container,0, container.length -1)
        let result = container.pop()
        let len = container.length
        let index = 0, exchange = index * 2 + 1
        while(exchange < len){
            let right = index * 2 + 2
            if(right < len && container[right] > container[exchange]){
                exchange = right
            }
            if(container[exchange] <= container[index]){
                break
            }
            swap(container, exchange, index)
            index = exchange
            exchange = index * 2 + 1
        }
        return result
    }

    top(){
        if(this.container.length) return this.container[0]
        return null
    }
}

var getLeastNumbersHeap = function(arr, k) {
    let len = arr.length
    if( k >= len){
        return arr
    }
    const heap = new MaxHeap(arr.slice(0,k))
    for(let i = k; i< len;i++){
        if(heap.top() > arr[i]){
            heap.extract()
            heap.insert(arr[i])
        }
    }
    return heap.container
}