function sortedFrequency(arr, target){
    const firstIdx = findFirstNumIdx(arr, target)
    if(firstIdx === - 1) return firstIdx
    let lastIdx = findLastNumIdx(arr, target)
  
    return lastIdx - firstIdx + 1
  }
  
  function findFirstNumIdx(arr, target, left=0, right=arr.length -1){
  
    if(left > right) return - 1;
    let midIdx = Math.floor((left + right) / 2)
    if(arr[midIdx] === target && arr[midIdx -1] !== target || arr[midIdx - 1] === undefined){
      return midIdx
    }else if ( arr[midIdx] < target){
      return findFirstNumIdx(arr, target, midIdx + 1, right)
    }else {
      return findFirstNumIdx(arr, target, left, right - 1)
    }
  }
  
  function findLastNumIdx(arr, target, left=0, right=arr.length -1){
  
    if(left > right) return - 1;
    let midIdx = Math.floor((left + right) / 2)
    if(arr[midIdx] === target && (arr[midIdx +1] > target || midIdx === arr.length - 1)){
      return midIdx
    }else if ( arr[midIdx] > target){
      return findLastNumIdx(arr, target, left , midIdx - 1)
    }else {
      return findLastNumIdx(arr, target, midIdx + 1, right)
    }

  }

module.exports = sortedFrequency