function countZeroes(arr, leftIdx=0, rightIdx=arr.length-1) {
    if(leftIdx >= rightIdx) return 0
  let midIdx = Math.floor((leftIdx + rightIdx) / 2 )
  
  if(arr[midIdx] === 0 && arr[midIdx - 1] === 1 || arr[midIdx-1] === undefined){
    return  arr.length  - midIdx
  }else if (arr[midIdx] === 1){
    return countZeroes(arr, midIdx + 1, rightIdx )
  }else {
    return countZeroes(arr, leftIdx, midIdx )
  }
  return 0
}

module.exports = countZeroes