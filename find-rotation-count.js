function findRotationCount(arr, start=0, end=arr.length - 1) {
    if(start > end)return 0;
    if(end === start) return start;
  
    let mid = Math.floor((start + end ) / 2)
    if(arr[mid] > arr[mid + 1] ){
      return mid + 1
    } 
  
    if(arr[mid] < arr[mid - 1]){
      return mid
    }
    
    if(arr[start] < arr[mid] ){
      return findRotationCount(arr, mid + 1, end)
    }else
    {
      return findRotationCount(arr, start, mid - 1 )
    }
  }

module.exports = findRotationCount